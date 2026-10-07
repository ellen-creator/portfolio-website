import { motion } from 'framer-motion'
import { projects, type CaseStudy } from '@data/projects'

interface HomeProps {
  onSelectProject: (id: string) => void
  onStory: () => void
}

// Rough reading time from every string in the case study
function readMinutes(project: CaseStudy) {
  const words = (value: unknown): number => {
    if (typeof value === 'string') return value.split(/\s+/).length
    if (Array.isArray(value)) return value.reduce((n, v) => n + words(v), 0)
    if (value && typeof value === 'object') return Object.values(value).reduce((n: number, v) => n + words(v), 0)
    return 0
  }
  return Math.max(1, Math.round(words(project) / 230))
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 16" className="w-6 h-4" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M12 3C9 1 5 1 1.5 2v12C5 13 9 13 12 15c3-2 7-2 10.5-1V2C19 1 15 1 12 3z" />
      <path d="M12 3v12" />
    </svg>
  )
}

function Meta({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <p className="flex items-center gap-2 text-earth-600 uppercase text-sm tracking-wide whitespace-nowrap">
      <BookIcon />
      <span>Case study #{String(index + 1).padStart(2, '0')}</span>
      <span className="text-earth-300">|</span>
      <span>{readMinutes(project)} min</span>
    </p>
  )
}

function Label({ project }: { project: CaseStudy }) {
  return <p className="uppercase tracking-wide text-[15px] mb-3">{project.tags[0]}</p>
}

const experience = [
  { name: 'University of Michigan', role: 'M.S. Information', note: 'UX design & research, 2026 – 2028' },
  { name: 'Google', role: 'Account Strategist', note: 'UI/UX for 200+ partner websites' },
  { name: 'BCG', role: 'Senior Associate Consultant', note: 'Supply chain & procurement' },
  { name: 'Kearney', role: 'Business Analyst', note: 'E-commerce app 2.8 → 4.8' },
]

const abilities = [
  { title: 'Research & Analysis', body: 'Competitive audits, interviews and behavioral data, turned into the few insights that actually change a design.' },
  { title: 'Conversion Optimization', body: 'Lead-generation journeys and progressive disclosure, from first inquiry to conversion.' },
  { title: 'Conversational Design', body: 'Chatbot flows that match the user’s state of mind: reassurance first, or proof first.' },
  { title: 'Accessible Design', body: 'Contrast, touch targets, plain language and calm defaults for neurodivergent users.' },
]

export default function Home({ onSelectProject, onStory }: HomeProps) {
  const [lead, second, third, ...rest] = projects
  const open = (id: string) => () => onSelectProject(id)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
      {/* Front page: lead story | second column | at-a-glance panel */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        {/* Lead story */}
        <article className="lg:col-span-6 lg:pr-8 lg:border-r border-earth-900">
          <Label project={lead} />
          <button onClick={open(lead.id)} className="text-left group">
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.12] mb-5 group-hover:underline decoration-1 underline-offset-4">
              {lead.title}
            </h1>
          </button>
          <p className="text-xl md:text-2xl leading-snug mb-6">{lead.subtitle}</p>
          <Meta project={lead} index={0} />
          <button onClick={open(lead.id)} className="block w-full mt-6 overflow-hidden">
            <img src={lead.thumbnail} alt={lead.title} className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-700" />
          </button>
        </article>

        {/* Second column */}
        <div className="lg:col-span-3 lg:px-6 lg:border-r border-earth-900 flex flex-col">
          <article className="pb-6 border-b border-earth-900">
            <button onClick={open(second.id)} className="block w-full overflow-hidden mb-5">
              <img src={second.thumbnail} alt={second.title} className="w-full aspect-video object-cover hover:scale-[1.02] transition-transform duration-700" />
            </button>
            <Label project={second} />
            <button onClick={open(second.id)} className="text-left">
              <h2 className="font-serif text-2xl md:text-[1.75rem] leading-tight mb-6 hover:underline decoration-1 underline-offset-4">{second.title}</h2>
            </button>
            <Meta project={second} index={1} />
          </article>
          <article className="pt-6">
            <Label project={third} />
            <button onClick={open(third.id)} className="text-left">
              <h2 className="font-serif text-2xl leading-tight mb-3 hover:underline decoration-1 underline-offset-4">{third.title}</h2>
            </button>
            <p className="text-lg leading-snug text-earth-700 mb-5">{third.subtitle}</p>
            <Meta project={third} index={2} />
          </article>
        </div>

        {/* Editor's letter */}
        <aside className="lg:col-span-3 lg:pl-6">
          <p className="font-sans font-bold uppercase text-xs tracking-widest text-accent mb-3">Editor&apos;s letter</p>
          <button onClick={onStory} className="block w-full overflow-hidden mb-4">
            <img
              src="/images/about/suhyun.jpg"
              alt="Suhyun Lim smiling on a mountain ridge, holding trekking poles"
              className="w-full aspect-[4/5] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
            />
          </button>
          <h2 className="font-serif text-2xl leading-tight mb-3">Hello, I&apos;m Suhyun (Ellen).</h2>
          <p className="text-earth-700 leading-snug mb-5">
            Social worker by training, consultant by trade, now a UX researcher at the University of Michigan.
            I design for the people data tends to leave out.
          </p>

          <ul className="border-t border-earth-900 divide-y divide-earth-200 mb-5">
            {experience.map((e) => (
              <li key={e.name} className="py-3">
                <p className="font-sans font-bold uppercase text-xs tracking-wide">{e.name}</p>
                <p className="text-sm text-earth-600 leading-snug mt-1">{e.role} · {e.note}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <button onClick={onStory} className="w-full bg-accent text-white py-3 font-sans font-bold uppercase text-sm tracking-wide hover:brightness-110">
              Read my story
            </button>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="w-full text-center border border-earth-900 py-3 font-sans font-bold uppercase text-sm tracking-wide hover:bg-earth-900 hover:text-white">
              Resume
            </a>
          </div>
        </aside>
      </section>

      {/* More case studies */}
      {rest.length > 0 && (
        <section className="mt-16">
          <h2 className="border-t-2 border-earth-900 pt-3 font-serif uppercase text-xl tracking-wide mb-8">More case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {rest.map((p, i) => (
              <article key={p.id} className={`grid grid-cols-5 gap-5 ${i % 2 === 0 ? 'md:pr-8 md:border-r border-earth-900' : 'md:pl-8'}`}>
                <button onClick={open(p.id)} className="col-span-2 overflow-hidden">
                  <img src={p.thumbnail} alt={p.title} className="w-full aspect-square object-cover hover:scale-[1.03] transition-transform duration-700" />
                </button>
                <div className="col-span-3">
                  <Label project={p} />
                  <button onClick={open(p.id)} className="text-left">
                    <h3 className="font-serif text-2xl leading-tight mb-3 hover:underline decoration-1 underline-offset-4">{p.title}</h3>
                  </button>
                  <p className="text-earth-700 leading-snug mb-4">{p.subtitle}</p>
                  <Meta project={p} index={i + 3} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* What I bring */}
      <section className="mt-16">
        <h2 className="border-t-2 border-earth-900 pt-3 font-serif uppercase text-xl tracking-wide mb-8">What I bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {abilities.map((a) => (
            <div key={a.title} className="border-t border-earth-300 pt-4">
              <h3 className="font-serif text-xl mb-2">{a.title}</h3>
              <p className="text-earth-700 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From the editor */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className="lg:col-span-3 border-t-2 border-earth-900 pt-3 font-serif uppercase text-xl tracking-wide">From the editor</h2>
        <div className="lg:col-span-9 border-t border-earth-300 pt-3 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
          <p>
            I solve user problems through UX research and design: observe first, find the real problem, then build and
            measure. I began in business and technology consulting and kept drifting toward the human side of the data.
          </p>
          <p>
            Now at the University of Michigan&apos;s School of Information, I&apos;m studying design and research
            systematically, with a focus on accessibility, AI and human-centered tools that leave no one behind.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
