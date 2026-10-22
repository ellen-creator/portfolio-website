import { motion } from 'framer-motion'
import { projects } from '@data/projects'

interface HomeProps {
  onSelectProject: (id: string) => void
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
  { title: 'Accessible design', body: 'Research with neurodivergent users; contrast, touch targets and calm defaults built in from the start.' },
]

export default function Home({ onSelectProject }: HomeProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 md:px-8 pt-4">
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
              <p className="text-lg md:text-xl text-earth-700 mt-2 leading-snug">{p.subtitle}</p>
            </article>
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
