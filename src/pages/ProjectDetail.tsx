import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { projects, type CaseStudy } from '@data/projects'

interface ProjectDetailProps {
  projectId: string
  onBack: () => void
}

type VisualItem = { image?: string; video?: string; label?: string; note?: string }
type Section = { title: string; rationale: string; layout?: "sticky" | "grid"; items: VisualItem[]; pair?: { before: VisualItem; after: VisualItem } }

// Every case page uses the same five blocks: Situation, Problem, What I did, Impact, What I learned.
// Company sits above them as the header facts.
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-earth-300 dark:border-earth-600 pt-6 mb-14">
      <h2 className="font-sans font-bold uppercase text-base tracking-widest text-accent mb-4">{label}</h2>
      <div className="space-y-5 text-xl leading-relaxed text-earth-900 dark:text-earth-100">{children}</div>
    </section>
  )
}

// Split text on line breaks so each sentence or line can sit on its own
function Lines({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`space-y-3 ${className ?? ''}`}>
      {text.split('\n').filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
    </div>
  )
}

// Image that opens full size on click (Esc or a click on the backdrop closes it)
function ZoomableFigure({ item, alt, sticky, wide }: { item: VisualItem; alt: string; sticky?: boolean; wide?: boolean }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return (
    <>
      <figure className={`space-y-3 ${sticky || wide ? '' : 'max-w-lg mx-auto'}`}>
        {item.label && <figcaption className="text-base uppercase tracking-wide text-earth-600 dark:text-earth-300">{item.label}</figcaption>}
        <button type="button" onClick={() => setOpen(true)} aria-label={`Enlarge: ${alt}`} className="block w-full cursor-zoom-in">
          <img
            src={item.image}
            alt={alt}
            loading="lazy"
            className={`w-full h-auto rounded-xl border border-earth-300/40 dark:border-earth-600/40 bg-earth-50 ${sticky ? 'md:max-h-[60vh] md:w-auto md:max-w-full md:mx-auto md:object-contain' : ''}`}
          />
        </button>
        {item.note && <p className="text-lg text-earth-600 dark:text-earth-300">{item.note}</p>}
      </figure>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img src={item.image} alt={alt} className="max-w-full max-h-[92vh] w-auto h-auto object-contain rounded-lg" />
        </div>
      )}
    </>
  )
}

// One visual: an image, or a dashed placeholder when the screen is still to come
function VisualBox({ item, alt, sticky, wide }: { item: VisualItem; alt: string; sticky?: boolean; wide?: boolean }) {
  if (item.video) {
    return (
      <figure className="space-y-3 max-w-2xl mx-auto">
        {item.label && <figcaption className="text-base uppercase tracking-wide text-earth-600 dark:text-earth-300">{item.label}</figcaption>}
        <video
          src={item.video}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto rounded-xl border border-earth-300/40 dark:border-earth-600/40 bg-earth-50"
        />
        {item.note && <p className="text-lg text-earth-600 dark:text-earth-300">{item.note}</p>}
      </figure>
    )
  }
  if (!item.image) {
    if (!item.label && !item.note) return null
    return (
      <div className="w-full rounded-xl border border-earth-300 dark:border-earth-600 bg-earth-50/60 dark:bg-earth-800/60 p-6 text-lg text-earth-700 dark:text-earth-200">
        {item.label && <p className="uppercase tracking-wide text-sm text-earth-600 dark:text-earth-300 mb-2">{item.label}</p>}
        {item.note && <p>{item.note}</p>}
      </div>
    )
  }
  return <ZoomableFigure item={item} alt={alt} sticky={sticky} wide={wide} />
}

// "What I did" sections. LUMI declares its own; other cases derive them from their
// implementation steps so that every image they have is shown.
function sectionsFor(project: CaseStudy): Section[] {
  if (project.sections) return project.sections
  return project.implementation.changes.map((c, i) => {
    const rationale = c.explanation ?? c.description ?? ''
    const title = c.title ?? `Step ${i + 1}`
    const items: VisualItem[] = []
    if (c.image) items.push({ image: c.image, label: c.caption })
    if (c.images) c.images.forEach((img, idx) => items.push({ image: img, label: c.captions?.[idx] }))
    if (c.video) items.push({ video: c.video, label: 'Visual mockup: the cue at the edge of vision' })
    if (c.quote) items.push({ note: `“${c.quote}”${c.interviewee ? ` — ${c.interviewee}` : ''}` })
    if (c.before) items.push({ note: `Before: ${c.before}` })
    if (c.after) items.push({ note: `After: ${c.after}` })
    if (c.beforeImage && c.afterImage) {
      return {
        title,
        rationale,
        items,
        pair: {
          before: { image: c.beforeImage, label: 'Before', note: c.before },
          after: { image: c.afterImage, label: 'After', note: c.after },
        },
      }
    }
    if (c.beforeImage) items.push({ image: c.beforeImage, label: 'Before', note: c.before })
    if (c.afterImage) items.push({ image: c.afterImage, label: 'After', note: c.after })
    return { title, rationale, items }
  })
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack])

  if (!project) {
    return <div className="text-center py-20 text-earth-900 dark:text-earth-100">Project not found</div>
  }

  const sections = sectionsFor(project)
  // Every case opens with a key image: its own hero if set, otherwise its main-page image
  const heroImg = project.hero ?? project.thumbnail
  const companyRows = [
    ['Role', project.role],
    ['Scope', project.scope],
    ['Team', project.team],
    ['Timeline', project.timeline],
  ].filter(([, v]) => v)

  const impactBlock = (
    <Block label="Impact">
      <p>{project.impact.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {project.impact.metrics.map(metric => (
          <div key={metric.label} className="p-4 border border-earth-300/40 dark:border-earth-600/40 rounded-lg text-center">
            <p className="text-3xl font-serif">{metric.value}</p>
            {metric.unit && <p className="text-base text-earth-600 dark:text-earth-300 mt-1">{metric.unit}</p>}
            <p className="text-base text-earth-600 dark:text-earth-300 mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </Block>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-5 md:px-6 py-8 text-earth-900 dark:text-earth-50 overflow-x-clip"
    >
      <button
        onClick={onBack}
        className="mb-6 text-earth-600 dark:text-earth-300 hover:text-earth-900 dark:hover:text-earth-50 transition-all duration-300 flex items-center gap-2 text-base tracking-widest uppercase"
      >
        ← Back to Work
      </button>

      <div className={`relative overflow-hidden mb-14 py-14 md:py-24 left-1/2 -translate-x-1/2 w-screen px-5 md:px-6`}>
        {heroImg && (
          <>
            <img
              src={heroImg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-[center_48%] opacity-100 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-earth-50/80 via-earth-50/45 to-earth-50/10 dark:from-earth-900/85 dark:to-earth-900/30 pointer-events-none" />
          </>
        )}
        <div className="relative max-w-6xl mx-auto">
          <p className="uppercase tracking-wide text-base mb-2 text-earth-600 dark:text-earth-300">
            {project.tags[0]} · {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">{project.title}</h1>
          <p className="font-serif text-2xl md:text-3xl leading-snug max-w-3xl">{project.overview}</p>
        </div>
      </div>

      {project.outcomeFirst && impactBlock}

      <section className="border-t border-earth-300 dark:border-earth-600 pt-6 mb-14">
        <h2 className="font-sans font-bold uppercase text-base tracking-widest text-accent mb-4">Company</h2>
        <dl className="space-y-2 text-lg">
          {companyRows.map(([k, v]) => (
            <div key={k}>
              <dt className="uppercase text-sm tracking-widest text-earth-600 dark:text-earth-300">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Block label="Situation">
        <p>{project.situation.description}</p>
        <p className="text-earth-700 dark:text-earth-200">{project.situation.context}</p>
      </Block>

      <Block label="Problem">
        <p>{project.problem.description}</p>
        <ul className="space-y-2">
          {project.problem.painPoints.map((point, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-earth-400 dark:text-earth-500 flex-shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Block>

      <section className="border-t border-earth-300 dark:border-earth-600 pt-6 mb-14">
        <h2 className="font-sans font-bold uppercase text-base tracking-widest text-accent mb-4">What I did</h2>
        {project.result && <p className="font-serif text-2xl md:text-3xl leading-snug mb-6">{project.result}</p>}
        <p className="text-xl leading-relaxed text-earth-700 dark:text-earth-200 mb-14">{project.solution.description}</p>

        {sections.map((section, sIdx) => {
          const [lead, ...rest] = section.items
          const all: VisualItem[] = section.pair ? [section.pair.before, section.pair.after, ...section.items] : section.items
          if (!project.sections) {
            // Other cases: editorial layout, one step at a time, with room around each image
            return (
              <div key={`${section.title}-${sIdx}`} className="mb-28 space-y-10">
                <div className="space-y-3 max-w-2xl">
                  <p className="font-sans font-bold text-accent text-lg tabular-nums">{String(sIdx + 1).padStart(2, '0')}</p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight">{section.title}</h3>
                  {section.rationale && <Lines text={section.rationale} className="text-xl text-earth-600 dark:text-earth-300 leading-relaxed" />}
                </div>
                {all.map((item, idx) => (
                  <VisualBox key={`${item.image ?? item.note ?? ''}-${idx}`} item={item} alt={`${project.title}: ${item.label ?? section.title}`} />
                ))}
              </div>
            )
          }
          if (section.layout === 'grid') {
            // Full-width first image, then the rest in an even two-column grid
            const [first, ...others] = section.items
            return (
              <div key={`${section.title}-${sIdx}`} className="mb-24 max-w-6xl mx-auto">
                <div className="space-y-2 max-w-3xl mb-10">
                  <p className="font-sans font-bold text-accent text-lg tabular-nums">{String(sIdx + 1).padStart(2, '0')}</p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight">{section.title}</h3>
                  {section.rationale && <Lines text={section.rationale} className="text-lg text-earth-600 dark:text-earth-300 leading-relaxed" />}
                </div>
                {first && (
                  <div className="mb-12">
                    <VisualBox item={first} alt={`${project.title}: ${first.label ?? section.title}`} wide />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
                  {others.map((item, idx) => (
                    <div key={`${item.image ?? item.note ?? ''}-${idx}`}>
                      <VisualBox item={item} alt={`${project.title}: ${item.label ?? section.title}`} />
                    </div>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <div key={`${section.title}-${sIdx}`} className="mb-20 md:grid md:grid-cols-2 md:gap-12">
              <div className="md:sticky md:top-24 md:self-start mb-10 md:mb-0">
                {lead && <VisualBox item={lead} alt={`${project.title}: ${lead.label ?? section.title}`} sticky />}
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="font-sans font-bold text-accent text-lg tabular-nums">{String(sIdx + 1).padStart(2, '0')}</p>
                  <h3 className="font-serif text-3xl leading-tight">{section.title}</h3>
                  {section.rationale && <Lines text={section.rationale} className="text-lg text-earth-600 dark:text-earth-300 leading-relaxed" />}
                </div>
                {rest.map((item, idx) => (
                  <VisualBox key={`${item.image ?? item.note ?? ''}-${idx}`} item={item} alt={`${project.title}: ${item.label ?? section.title}`} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {!project.outcomeFirst && impactBlock}

      <Block label="What I learned">
        <ul className="space-y-3">
          {project.learnings.slice(0, 3).map((learning, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-earth-400 dark:text-earth-500 flex-shrink-0">▸</span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </Block>
    </motion.div>
  )
}
