import { motion } from 'framer-motion'
import { projects } from '@data/projects'

interface HomeProps {
  onSelectProject: (id: string) => void
}

const skills = [
  { title: 'Research', body: 'Interviews, audits and behavioral data, turned into the few insights that change a design.' },
  { title: 'Accessible design', body: 'Contrast, touch targets, plain language and calm defaults for neurodivergent users.' },
  { title: 'Journeys & conversion', body: 'Lead-generation and checkout flows, from first inquiry to completion.' },
  { title: 'Content & conversation', body: 'UX writing and chatbot flows that reassure people before they are asked for anything.' },
]

export default function Home({ onSelectProject }: HomeProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      {/* Portfolio */}
      <section>
        <h2 className="border-t-2 border-earth-900 pt-3 font-sans font-bold uppercase text-sm tracking-widest mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((p) => (
            <article key={p.id}>
              <button onClick={() => onSelectProject(p.id)} className="block w-full overflow-hidden mb-5">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 hover:scale-[1.02] transition duration-700 ease-in-out"
                />
              </button>
              <p className="uppercase text-sm tracking-wide mb-2 text-earth-600">
                {p.tags[0]} · {p.year}
              </p>
              <button onClick={() => onSelectProject(p.id)} className="text-left">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight hover:underline decoration-1 underline-offset-4">
                  {p.title}
                </h3>
              </button>
              <p className="text-earth-700 mt-2 leading-snug">{p.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-24 scroll-mt-6">
        <h2 className="border-t-2 border-earth-900 pt-3 font-sans font-bold uppercase text-sm tracking-widest mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {skills.map((s) => (
            <div key={s.title} className="border-t border-earth-300 pt-4">
              <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
              <p className="text-earth-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
