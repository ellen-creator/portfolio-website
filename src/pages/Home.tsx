import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects, sideNotes } from '@data/projects'

interface HomeProps {
  onSelectProject: (id: string) => void
  onSelectNote: (id: string) => void
}

const softSkills = [
  {
    title: 'Team leadership',
    body: 'Got every department pulling in the same direction. In consulting, I brought designers, developers and client teams to one plan, and made the meetings fun.',
    where: 'Consulting · all departments',
  },
  {
    title: 'Communication',
    body: 'Talking with people is my research method. I got to know truck drivers at a logistics center, taught grandparents their first smartphone apps, and calmed angry customers at an air-conditioner repair center. Each conversation taught me to listen before I answer.',
    where: 'Lotte logistics center · digital education volunteer · AC repair center',
  },
  {
    title: 'Fast learning',
    body: 'Learns a new world fast. From social work to consulting, Google and UX research, I keep up, then build the thing myself: SwiftUI, React and Python.',
    where: 'Career changes · LUMI and Vori builds',
  },
]

const skills = [
  { title: 'User research', body: 'Interviews, observation and behavioral data, turned into the few insights that change a product.' },
  { title: 'Product strategy', body: 'Defining what to build first, from 0 to 1 (Vori) to a redesign of a live app (LUMI).' },
  { title: 'Data-informed decisions', body: 'Analytics, ad performance and cost data (Python, SQL, GA4), used to choose what to measure and what to change.' },
  { title: 'Accessible design', body: 'Research with neurodivergent users; contrast, touch targets and calm defaults built in from the start. Audits with WAVE, aXe, screen readers, keyboard-only and 400% zoom checks.' },
]

// A link sent with one application (?for=doordash) opens with a special-edition strip for that team
const forDoorDash = new URLSearchParams(window.location.search).get('for') === 'doordash'

export default function Home({ onSelectProject, onSelectNote }: HomeProps) {
  const [showEdition, setShowEdition] = useState(true)
  const reduceMotion = useReducedMotion()
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 md:px-8 pt-4 overflow-x-clip">
      {forDoorDash && showEdition && (
        <motion.aside
          aria-label="Special edition for DoorDash"
          initial={reduceMotion ? false : { opacity: 0, x: 120, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: -0.6 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 70, damping: 14 }}
          className="relative mb-12 bg-[#FFFDF7] text-earth-900 border border-earth-900/10 px-5 py-5 md:px-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_18px_32px_-12px_rgba(40,30,20,0.35)]"
        >
          <p className="flex-shrink-0 self-start md:self-auto bg-accent text-white font-sans font-bold uppercase text-sm tracking-widest px-3 py-1">
            Special edition
          </p>
          <div className="flex-1">
            <p className="font-serif text-xl md:text-2xl leading-snug">I order on DoorDash a lot, so I studied my own orders.</p>
            <p className="text-base md:text-lg text-earth-600 leading-snug mt-1">
              Concept work from the outside. Your team has data I don't, so each fix also notes the business reason behind today's design.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0 whitespace-nowrap">
            <button
              onClick={() => onSelectNote('doordash-teardown')}
              className="font-sans font-bold uppercase text-sm tracking-widest underline underline-offset-4 hover:opacity-80"
            >
              Read the teardown →
            </button>
            <a
              href="/files/doordash-teardown.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-sans font-bold uppercase text-sm tracking-widest underline underline-offset-4 hover:opacity-80"
            >
              PDF
            </a>
            <button
              onClick={() => setShowEdition(false)}
              aria-label="Dismiss special edition"
              className="ml-auto md:ml-2 w-9 h-9 flex items-center justify-center text-xl text-earth-500 hover:text-earth-900"
            >
              ×
            </button>
          </div>
        </motion.aside>
      )}

      {/* Portfolio */}
      <section>
        <h2 className="border-t-2 border-earth-900 pt-3 font-sans font-bold uppercase text-sm tracking-widest mb-2">Portfolio</h2>
        <p className="text-xl md:text-xl text-earth-700 mb-8">UX research and product strategy: find the real problem with people, prove it with data, then change the product.</p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((p) => (
            <article key={p.id}>
              <button onClick={() => onSelectProject(p.id)} className="block w-full overflow-hidden mb-5">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-auto block grayscale hover:grayscale-0 hover:scale-[1.02] transition duration-700 ease-in-out"
                />
              </button>
              <p className="uppercase text-lg tracking-wide mb-2 text-earth-600">
                {p.tags[0]} · {p.year}
              </p>
              <button onClick={() => onSelectProject(p.id)} className="text-left">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight hover:underline decoration-1 underline-offset-4">
                  {p.title}
                </h3>
              </button>
              <p className="text-xl md:text-2xl text-earth-700 mt-2 leading-snug">{p.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Side notes: shorter write-ups, kept apart from the case studies */}
      <section id="notes" className="mt-16 scroll-mt-6">
        <h2 className="border-t-2 border-earth-900 pt-3 font-sans font-bold uppercase text-sm tracking-widest mb-2">Side notes</h2>
        <p className="text-xl text-earth-700 mb-8">A shorter piece: a design critique of an app I use.</p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {sideNotes.filter((n) => !n.hidden).map((n) => n.slides ? (
            <article key={n.id} className="border-t border-earth-300 pt-4">
              <p className="uppercase text-lg tracking-wide mb-2 text-earth-600">{n.kind} · {n.year}</p>
              <button onClick={() => onSelectNote(n.id)} className="text-left">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight hover:underline decoration-1 underline-offset-4">
                  {n.title}
                </h3>
              </button>
              <p className="text-xl text-earth-700 mt-2 leading-snug">{n.summary}</p>
              <button
                onClick={() => onSelectNote(n.id)}
                className="mt-3 font-sans font-bold uppercase text-sm tracking-widest text-accent hover:underline underline-offset-4"
              >
                See the {n.slides.length} slides →
              </button>
            </article>
          ) : (
            <details key={n.id} className="group border-t border-earth-300 pt-4">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <p className="uppercase text-lg tracking-wide mb-2 text-earth-600">{n.kind} · {n.year}</p>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {n.title}
                </h3>
                <p className="text-xl text-earth-700 mt-2 leading-snug">{n.summary}</p>
                <span className="inline-block mt-3 font-sans font-bold uppercase text-sm tracking-widest text-accent">
                  <span className="group-open:hidden">Read the notes +</span>
                  <span className="hidden group-open:inline">Close −</span>
                </span>
              </summary>
              <ul className="mt-4 space-y-3">
                {n.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-lg text-earth-900 leading-snug">
                    <span className="text-earth-400 flex-shrink-0" aria-hidden="true">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-16 scroll-mt-6">
        <h2 className="border-t-2 border-earth-900 pt-3 font-sans font-bold uppercase text-sm tracking-widest mb-2">Skills</h2>
        <p className="font-serif text-2xl md:text-3xl mb-10">UX researcher: I find out what people really need, then prove it with data.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {skills.map((s) => (
            <div key={s.title} className="border-t border-earth-300 pt-4">
              <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
              <p className="text-xl text-earth-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <h3 className="font-sans font-bold uppercase text-lg tracking-widest mt-14 mb-8 border-t-2 border-earth-900 pt-3">Soft skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {softSkills.map((s) => (
            <div key={s.title} className="border-t border-earth-300 pt-4">
              <h4 className="font-serif text-2xl mb-2">{s.title}</h4>
              <p className="text-xl text-earth-700 leading-relaxed mb-3">{s.body}</p>
              <p className="text-lg uppercase tracking-wide text-earth-600">{s.where}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
