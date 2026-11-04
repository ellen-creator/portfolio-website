import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { projects } from '@data/projects'

interface ProjectDetailProps {
  projectId: string
  onBack: () => void
}

// Five blocks only: Company, Situation, Problem, What I did (final result), Impact, What I learned.
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-earth-300 dark:border-earth-600 pt-6 mb-12">
      <h2 className="md:col-span-3 font-sans font-bold uppercase text-base tracking-widest text-accent">{label}</h2>
      <div className="md:col-span-9 space-y-5 text-xl leading-relaxed text-earth-900 dark:text-earth-100">{children}</div>
    </section>
  )
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

  // One final screen per case, shown first under "What I did"
  const firstChange = project.implementation.changes.find(c => c.image || (c.images && c.images.length > 0))
  const shot = firstChange ? (firstChange.image ?? firstChange.images?.[0]) : undefined

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-5 md:px-6 py-8 text-earth-900 dark:text-earth-50"
    >
      <button
        onClick={onBack}
        className="mb-6 text-earth-600 dark:text-earth-300 hover:text-earth-900 dark:hover:text-earth-50 transition-all duration-300 flex items-center gap-2 text-base tracking-widest uppercase"
      >
        ← Back to Work
      </button>

      <p className="uppercase tracking-wide text-base mb-2 text-earth-600 dark:text-earth-300">
        {project.tags[0]} · {project.year}
      </p>
      <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-10">{project.title}</h1>

      <Block label="Company">
        <dl className="space-y-3 text-lg">
          {[
            ['Role', project.role],
            ['Scope', project.scope],
            ['Team', project.team],
            ['Timeline', project.timeline],
          ].filter(([, v]) => v).map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-3">
              <dt className="uppercase text-sm tracking-widest text-earth-600 dark:text-earth-300 pt-1">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

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

      <Block label="What I did">
        {shot && (
          <img
            src={shot}
            alt={`${project.title} final screen`}
            className="w-full max-w-xl mx-auto h-auto rounded-xl border border-earth-300/40 dark:border-earth-600/40 bg-earth-50"
          />
        )}
        {project.result && <p className="font-serif text-2xl leading-snug">{project.result}</p>}
        <p className="text-earth-700 dark:text-earth-200">{project.solution.description}</p>
      </Block>

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
