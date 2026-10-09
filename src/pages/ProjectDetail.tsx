import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { projects } from '@data/projects'

interface ProjectDetailProps {
  projectId: string
  onBack: () => void
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId)
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedMedia) {
          setSelectedMedia(null)
        } else {
          onBack()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack, selectedMedia])

  if (!project) {
    return <div className="text-center py-20 text-earth-900 dark:text-earth-100">Project not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-6 py-16 text-earth-900 dark:text-earth-50"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -6 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="mb-12 text-earth-600 dark:text-earth-300 hover:text-earth-900 dark:hover:text-earth-50 transition-all duration-300 flex items-center gap-2 text-sm tracking-widest uppercase"
      >
        ← Back to Work
      </motion.button>

      {/* SECTION 1: Hero & Summary (좌: 제목 + 설명 / 우: Impact + Tools) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-earth-600/15 dark:border-earth-50/10 pb-16"
      >
        {/* Left: Title + Overview */}
        <div className="md:col-span-7">
          <p className="uppercase tracking-wide text-[15px] mb-3">{project.tags[0]}</p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-earth-900 dark:text-earth-50"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg leading-relaxed text-earth-700 dark:text-earth-200"
          >
            {project.overview}
          </motion.p>
        </div>

        {/* Right: Role/Outcome + Focus + Tools Tags */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {/* At a glance: role, team, outcome */}
          {(project.role || project.team || project.outcome) && (
            <motion.dl
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="space-y-4"
            >
              {[
                ['Role', project.role],
                ['Team', project.team],
                ['Outcome', project.outcome],
              ].filter(([, value]) => value).map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-earth-100/50 dark:border-earth-600/50 pb-3">
                  <dt className="text-xs uppercase tracking-widest text-earth-600 dark:text-earth-600 pt-1">{label}</dt>
                  <dd className="text-earth-900 dark:text-earth-100 leading-relaxed">{value}</dd>
                </div>
              ))}
            </motion.dl>
          )}

          {/* Focus Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif mb-4 border-b border-earth-300 dark:border-earth-600 pb-2 text-earth-900 dark:text-earth-50">
              Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                  className="px-3 py-1.5 text-earth-900 dark:text-earth-100 uppercase text-xs tracking-wide border border-earth-900/70 dark:border-earth-200/70"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-lg font-serif mb-4 border-b border-earth-300 dark:border-earth-600 pb-2 text-earth-900 dark:text-earth-50">
              Tools & Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.solution.tools?.map((tool, idx) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.05, duration: 0.4 }}
                  className="px-3 py-1 bg-earth-100 dark:bg-earth-800 text-earth-800 dark:text-earth-200 text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* OUTCOME FIRST: result, then before and after */}
      {project.result && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 border-y border-earth-600/20 dark:border-earth-50/15 py-12"
        >
          {project.scope && (
            <p className="uppercase tracking-wide text-sm mb-4 text-earth-600 dark:text-earth-300">{project.scope}</p>
          )}
          <p className="font-serif text-3xl md:text-4xl leading-snug mb-10 text-earth-900 dark:text-earth-50">
            {project.result}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.before && (
              <div className="border-l-2 border-earth-300 dark:border-earth-600 pl-5">
                <p className="font-sans font-bold uppercase text-xs tracking-widest mb-2 text-earth-600 dark:text-earth-300">Before</p>
                <p className="text-lg leading-relaxed">{project.before}</p>
              </div>
            )}
            {project.after && (
              <div className="border-l-2 border-accent pl-5">
                <p className="font-sans font-bold uppercase text-xs tracking-widest mb-2 text-accent">After</p>
                <p className="text-lg leading-relaxed">{project.after}</p>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* SECTION 2: Situation & Problem (Left 2/3) vs Core Challenge (Right 1/3) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:items-center"
      >
        {/* Left: Situation + Problem (2 columns out of 3) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="md:col-span-2 bg-earth-100/30 dark:bg-earth-700/15 p-8 rounded-2xl border border-earth-300/30 dark:border-earth-600/30"
        >
          {/* Situation Section */}
          {project.situation.keywords && (
            <div className="mb-8 pb-8">
              <h4 className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-widest mb-6">
                ▸ Situation
              </h4>
              {/* Keywords with hanging lines */}
              <div className="flex flex-wrap gap-3 mb-4 relative pb-6 justify-start">
                {project.situation.keywords.map((keyword, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + idx * 0.05, duration: 0.5 }}
                    className="relative"
                  >
                    <span className="text-base font-serif text-earth-700 dark:text-earth-200 italic whitespace-nowrap">
                      {keyword}
                    </span>
                    {/* Vertical dotted line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full border-l-2 border-dashed border-earth-600 dark:border-earth-300 h-6" />
                  </motion.div>
                ))}
              </div>
              {/* Horizontal solid line */}
              <div className="border-t-2 border-solid border-earth-600 dark:border-earth-300" />
            </div>
          )}

          {/* Problem Section */}
          <div>
            <h4 className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-widest mb-4">
              ▸ Problem
            </h4>
            <div className="space-y-3">
              {project.problem.painPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05, duration: 0.5 }}
                  className="bg-earth-50/70 dark:bg-earth-800/40 px-4 py-3 rounded-lg border border-earth-300/30 dark:border-earth-600/30"
                >
                  <p className="text-earth-700 dark:text-earth-300 text-sm">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Core Challenge (1 column out of 3) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="md:col-span-1 flex flex-col justify-center h-full"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl text-earth-400 dark:text-earth-500 flex-shrink-0 pt-1">▶</span>
            <div className="flex-1">
              <h3 className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-widest mb-4">
                Core Challenge
              </h3>
              <ul className="space-y-4">
                {project.situation.context.split('\n\n').map((line, idx) => (
                  line.trim() && (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + idx * 0.1, duration: 0.5 }}
                      className="text-earth-700 dark:text-earth-200 text-base leading-relaxed"
                    >
                      {line.trim()}
                    </motion.li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* SECTION 2B: How Might We (Hypothesis) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-20 text-center max-w-3xl mx-auto"
      >
        <p className="text-earth-600 dark:text-earth-400 text-lg mb-6">
          So what's the hypothesis?
        </p>
        <blockquote className="text-3xl md:text-4xl font-serif italic text-earth-900 dark:text-earth-50 leading-relaxed mb-8">
          "{project.solution.howMightWe}"
        </blockquote>
        {project.solution.approach && (
          <p className="text-earth-700 dark:text-earth-200 text-base leading-relaxed">
            {project.solution.approach}
          </p>
        )}
      </motion.section>

      {/* SECTION 2C: Thinking process — Insights → Decisions */}
      {(project.insights?.length || project.decisions?.length) ? (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          {project.insights && project.insights.length > 0 && (
            <div className="mb-16">
              <h2 className="text-4xl font-serif mb-3 text-earth-900 dark:text-earth-50">
                What I Learned
              </h2>
              <p className="text-earth-600 dark:text-earth-600 mb-8">
                Insights that shaped every decision below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.insights.map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-6 rounded-2xl border border-earth-100/40 dark:border-earth-600/40 bg-earth-100/30 dark:bg-earth-900/15"
                  >
                    <p className="text-xs uppercase tracking-widest text-earth-600 dark:text-earth-600 mb-4">
                      {insight.source}
                    </p>
                    <p className="text-earth-900 dark:text-earth-100 leading-relaxed mb-5 flex-1">
                      {insight.finding}
                    </p>
                    <p className="text-sm text-earth-900 dark:text-earth-200 leading-relaxed border-t border-earth-100/40 dark:border-earth-600/40 pt-4">
                      <span className="text-earth-600 dark:text-earth-600 mr-1">→</span>
                      {insight.implication}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.decisions && project.decisions.length > 0 && (
            <div>
              <h2 className="text-4xl font-serif mb-3 text-earth-900 dark:text-earth-50">
                Key Decisions
              </h2>
              <p className="text-earth-600 dark:text-earth-600 mb-8">
                The options I weighed, and why I chose what I did.
              </p>
              <div className="space-y-6">
                {project.decisions.map((decision, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-6 border-b border-earth-100/40 dark:border-earth-600/40"
                  >
                    <h3 className="md:col-span-4 text-xl font-serif text-earth-900 dark:text-earth-50 leading-snug">
                      {decision.question}
                    </h3>
                    <div className="md:col-span-8 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {decision.options.map((option) => {
                          const chosen = option === decision.chose
                          return (
                            <span
                              key={option}
                              className={
                                chosen
                                  ? 'px-3 py-1 rounded-full text-sm font-normal bg-earth-900 text-earth-50 dark:bg-earth-200 dark:text-earth-900'
                                  : 'px-3 py-1 rounded-full text-sm text-earth-600 dark:text-earth-600 border border-earth-600/30 dark:border-earth-600/60 line-through decoration-earth-600/50'
                              }
                            >
                              {chosen && '✓ '}{option}
                            </span>
                          )
                        })}
                      </div>
                      <p className="text-earth-900 dark:text-earth-200 leading-relaxed">
                        {decision.why}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      ) : null}

      {/* SECTION 3: Solution */}
      {project.id === 'arklink-lead-generation' ? (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-20"
      >
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-4 text-earth-900 dark:text-earth-50">
            Solution
          </h2>
          <p className="text-earth-700 dark:text-earth-200 text-lg">
            Two distinct user personas required two completely different approaches to messaging, UI flows, and immediate action pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persona 1 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex flex-col h-full p-8 rounded-2xl border border-earth-300/40 dark:border-earth-600/40 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-earth-400 dark:hover:border-earth-500"
          >
            {/* Persona Image */}
            <div className="mb-6 flex-shrink-0">
              <motion.img
                src="/images/projects/arklink_persona1.png"
                alt="Persona 1"
                className="w-full h-auto rounded-lg border border-earth-300/30 dark:border-earth-600/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-serif mb-3 text-earth-900 dark:text-earth-50">
                Persona 1: Urgent Help & Immediate Rescue
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400 mb-6 pb-6 border-b border-earth-300/30 dark:border-earth-600/30">
                <strong>Psychology:</strong> Acute panic, extreme anxiety, time pressure. Needs immediate reassurance and action pathway.
              </p>
              <h4 className="font-serif text-earth-900 dark:text-earth-50 mb-3 text-lg">Design Solution</h4>
              <p className="text-earth-700 dark:text-earth-200 leading-relaxed">
                Emotionally reassuring UX copy with time-bound action commitment. Chatbot opens with personal accountability: "I will personally ensure your data doesn't spread." Direct Inquiry Bar for instant consultation.
              </p>
            </div>
          </motion.div>

          {/* Persona 2 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="relative flex flex-col h-full p-8 rounded-2xl border border-earth-300/40 dark:border-earth-600/40 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-earth-400 dark:hover:border-earth-500"
          >
            {/* Persona Image */}
            <div className="mb-6 flex-shrink-0">
              <motion.img
                src="/images/projects/arklink_persona2.png"
                alt="Persona 2"
                className="w-full h-auto rounded-lg border border-earth-300/30 dark:border-earth-600/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-serif mb-3 text-earth-900 dark:text-earth-50">
                Persona 2: Technical & Platform Research
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400 mb-6 pb-6 border-b border-earth-300/30 dark:border-earth-600/30">
                <strong>Psychology:</strong> Rational validation, seeking technical credibility. Researching specific platforms & solutions.
              </p>
              <h4 className="font-serif text-earth-900 dark:text-earth-50 mb-3 text-lg">Design Solution</h4>
              <p className="text-earth-700 dark:text-earth-200 leading-relaxed">
                Technical credibility-first messaging with platform-specific expertise. Downloadable technical summaries and malware analysis methodologies. Direct Inquiry Bar for qualified consultation.
              </p>
            </div>
          </motion.div>
        </div>
        </motion.section>
      ) : (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-serif mb-12 text-earth-900 dark:text-earth-50">
          Solution
        </h2>

        {/* Prototype Image First - Vori specific */}
        {project.id === 'vori' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
            className="mb-16"
          >
            <motion.img
              src="/images/projects/vori_glasses.png"
              alt="Vori Smart Eyewear Prototype"
              className="w-full max-w-2xl mx-auto h-auto rounded-xl shadow-lg object-contain"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        )}

        {/* Concise Description */}
        <div className="mb-12 max-w-3xl mx-auto space-y-6">
          <div>
            <p className="text-lg text-earth-700 dark:text-earth-200 leading-relaxed">
              {project.solution.description}
            </p>
          </div>
        </div>
      </motion.section>
      )}

      {/* SECTION 4: Implementation (Vertical Flow) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-serif mb-6 text-earth-900 dark:text-earth-50">
          Implementation & Changes
        </h2>
        <p className="text-lg text-sage-700 dark:text-sage-300 leading-relaxed mb-20 max-w-3xl">
          {project.implementation.description}
        </p>

        {/* Vertical Flow Timeline */}
        <div className="relative space-y-32">
          {/* Vertical line connector */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-earth-400 to-transparent dark:from-earth-500 dark:to-transparent" />

          {project.implementation.changes.map((change, idx) => {
            const isCostOptimization = false
            const hasImage = (change as any).image
            const hasImages = (change as any).images && (change as any).images.length > 0

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                viewport={{ once: false, margin: "-100px" }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline dot */}
                {!isCostOptimization && (
                  <div className="absolute left-0 top-8 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 bg-earth-400 dark:bg-earth-500 rounded-full ring-4 ring-earth-50 dark:ring-navy-900" />
                  </div>
                )}

                {/* Content Card */}
                {(hasImage || (change as any).video) && !isCostOptimization && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-6"
                  >
                    {/* Text Content Above */}
                    <div className="max-w-3xl mx-auto space-y-4">
                      <h3 className="text-3xl font-serif text-earth-900 dark:text-earth-50">
                        {(change as any).title}
                      </h3>
                      <p className="text-lg text-earth-700 dark:text-earth-200 leading-relaxed">
                        {(change as any).description}
                      </p>
                    </div>

                    {/* Image/Video - Parallel layout if both exist */}
                    {(change as any).image && (change as any).video ? (
                      <div className="max-w-4xl mx-auto flex flex-col gap-6">
                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          viewport={{ once: false, margin: "-100px" }}
                          onClick={() => setSelectedMedia({ type: 'image', src: (change as any).image })}
                          className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <motion.img
                            src={(change as any).image}
                            alt={(change as any).title}
                            className="w-full h-auto object-contain bg-earth-100 dark:bg-earth-800"
                            whileHover={{ scale: 1.05 }}
                          />
                        </motion.div>

                        {/* Video */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25, duration: 0.6 }}
                          viewport={{ once: false, margin: "-100px" }}
                          onClick={() => setSelectedMedia({ type: 'video', src: (change as any).video })}
                          className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <motion.video
                            src={(change as any).video}
                            controls
                            className="w-full h-auto object-contain bg-earth-100 dark:bg-earth-800 cursor-pointer"
                          />
                        </motion.div>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          if ((change as any).image) setSelectedMedia({ type: 'image', src: (change as any).image })
                          else if ((change as any).video) setSelectedMedia({ type: 'video', src: (change as any).video })
                        }}
                        className={`${change.wide ? 'max-w-5xl' : 'max-w-2xl'} mx-auto cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        {(change as any).image && (
                          <motion.img
                            src={(change as any).image}
                            alt={(change as any).title}
                            className="w-full h-auto object-contain bg-earth-100 dark:bg-earth-800"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: false, margin: "-100px" }}
                            whileHover={{ scale: 1.05 }}
                          />
                        )}
                        {(change as any).video && (
                          <motion.video
                            src={(change as any).video}
                            controls
                            className="w-full h-auto object-contain bg-earth-100 dark:bg-earth-800 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: false, margin: "-100px" }}
                          />
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Multi-image layout */}
                {!isCostOptimization && hasImages && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-8"
                  >
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-3xl font-serif mb-4 text-earth-900 dark:text-earth-50">
                        {(change as any).title}
                      </h3>
                      <p className="text-lg text-earth-700 dark:text-earth-200 leading-relaxed mb-8">
                        {(change as any).description}
                      </p>
                    </div>

                    {/* Image Grid */}
                    <div className="max-w-3xl mx-auto flex flex-col gap-6">
                      {(change as any).images.map((img: string, imgIdx: number) => (
                        <motion.div
                          key={imgIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + imgIdx * 0.1, duration: 0.5 }}
                          viewport={{ once: false, margin: "-100px" }}
                          onClick={() => setSelectedMedia({ type: 'image', src: img })}
                          className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                          <motion.img
                            src={img}
                            alt={`${(change as any).title} ${imgIdx + 1}`}
                            className="w-full h-auto object-contain bg-earth-100 dark:bg-earth-800"
                            whileHover={{ scale: 1.05 }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Modal for enlarged media (image or video) */}
                    {selectedMedia && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        className="fixed inset-0 z-50 bg-earth-900/80 dark:bg-earth-900/90 flex items-center justify-center p-4 backdrop-blur-sm"
                      >
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          onClick={(e) => e.stopPropagation()}
                          className="relative w-[90vw] h-[90vh] max-w-6xl max-h-[90vh] flex items-center justify-center"
                        >
                          {selectedMedia.type === 'image' ? (
                            <motion.img
                              src={selectedMedia.src}
                              alt="Expanded view"
                              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
                            />
                          ) : (
                            <video
                              src={selectedMedia.src}
                              controls
                              autoPlay
                              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
                            />
                          )}
                          <button
                            onClick={() => setSelectedMedia(null)}
                            className="absolute top-4 right-4 bg-earth-900/80 dark:bg-earth-50/80 text-earth-50 dark:text-earth-900 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-earth-900 dark:hover:bg-earth-50 transition-colors"
                          >
                            ✕
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Text-only layout (no image/video) */}
                {!isCostOptimization && !hasImage && !hasImages && !(change as any).video && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="relative z-10 max-w-3xl mx-auto bg-earth-50 dark:bg-navy-900 border border-earth-100/40 dark:border-earth-600/40 rounded-2xl p-8 md:p-10 space-y-4"
                  >
                    <h3 className="text-3xl font-serif text-earth-900 dark:text-earth-50">
                      {(change as any).title}
                    </h3>
                    <p className="text-lg text-earth-900 dark:text-earth-200 leading-relaxed whitespace-pre-line">
                      {(change as any).description}
                    </p>
                  </motion.div>
                )}

                {/* Cost Optimization Layout */}
                {isCostOptimization && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-serif text-earth-900 dark:text-earth-50">{change.before}</h3>
                    <div className="bg-earth-100/40 dark:bg-earth-700/20 border border-earth-300/30 dark:border-earth-600/30 rounded-xl p-6 md:p-8">
                      <p className="text-lg text-earth-700 dark:text-earth-200 italic leading-relaxed">"{change.after}"</p>
                    </div>
                    <div className="bg-earth-50/50 dark:bg-earth-800/20 border border-earth-200/30 dark:border-earth-700/30 rounded-lg p-6">
                      <p className="text-earth-700 dark:text-earth-300 leading-relaxed text-base">{change.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* USABILITY: where it was, where it is now */}
      {project.usability && project.usability.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-light mb-10 text-earth-900 dark:text-earth-50">Usability Changes</h2>
          <div className="divide-y divide-earth-300/60 dark:divide-earth-600/60 border-y border-earth-300/60 dark:border-earth-600/60">
            <div className="hidden md:grid grid-cols-12 gap-6 py-3 font-sans font-bold uppercase text-xs tracking-widest text-earth-600 dark:text-earth-300">
              <span className="col-span-2">Area</span>
              <span className="col-span-4">Before</span>
              <span className="col-span-6">After</span>
            </div>
            {project.usability.map((row) => (
              <div key={row.area} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5">
                <p className="md:col-span-2 font-serif text-xl">{row.area}</p>
                <p className="md:col-span-4 text-earth-600 dark:text-earth-300 leading-relaxed">{row.before}</p>
                <p className="md:col-span-6 text-earth-900 dark:text-earth-50 leading-relaxed">{row.after}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* SECTION 5: Impact & Metrics */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mb-20 border-t border-earth-600/15 dark:border-earth-50/10 pt-16"
      >
        <h2 className="text-4xl font-serif mb-6 text-earth-900 dark:text-earth-50">
          {project.impact.title}
        </h2>
        <p className="text-lg text-earth-700 dark:text-earth-200 mb-12 leading-relaxed">
          {project.impact.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {project.impact.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + idx * 0.05, duration: 0.5 }}
              className="p-6 border border-earth-300/40 dark:border-earth-600/40 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-4xl font-serif text-earth-900 dark:text-earth-50 mb-2">
                {metric.value}
              </p>
              {metric.unit && (
                <p className="text-xs text-earth-600 dark:text-earth-400 tracking-wide mb-3">
                  {metric.unit}
                </p>
              )}
              <p className="text-sm text-earth-600 dark:text-earth-400 tracking-wide">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        {project.impact.testimonial && (
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="italic text-earth-700 dark:text-earth-200 pl-8 border-l-4 border-earth-400 dark:border-earth-500 text-lg leading-relaxed bg-earth-100/30 dark:bg-earth-700/20 p-6 rounded-lg"
          >
            "{project.impact.testimonial}"
          </motion.blockquote>
        )}

        {/* Back to the hypothesis */}
        {project.hypothesisCheck && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-widest text-earth-600 dark:text-earth-600 mb-3">
              Back to the hypothesis
            </p>
            <p className="text-lg font-serif italic text-earth-600 dark:text-earth-600 mb-4 leading-relaxed">
              "{project.solution.howMightWe}"
            </p>
            <p className="text-lg text-earth-900 dark:text-earth-100 leading-relaxed">
              {project.hypothesisCheck}
            </p>
          </motion.div>
        )}
      </motion.section>

      {/* SECTION 6: Key Learnings */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.8 }}
        className="border-t border-earth-600/15 dark:border-earth-50/10 pt-16"
      >
        <h2 className="text-4xl font-serif mb-8 text-earth-900 dark:text-earth-50">
          Key Learnings
        </h2>
        <ul className="space-y-4">
          {project.learnings.map((learning, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + idx * 0.05, duration: 0.5 }}
              className="flex gap-4 text-earth-700 dark:text-earth-200 text-lg leading-relaxed"
            >
              <span className="text-earth-400 dark:text-earth-500 mt-1 flex-shrink-0">▸</span>
              <span>{learning}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Meta Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="border-t border-earth-600/15 dark:border-earth-50/10 mt-16 pt-8 text-xs text-earth-600 dark:text-earth-400 tracking-widest uppercase flex gap-4"
      >
        <p>{project.timeline}</p>
        <span>•</span>
        <p>{project.year}</p>
      </motion.div>
    </motion.div>
  )
}
