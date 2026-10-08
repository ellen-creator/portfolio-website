import { projects } from '@data/projects'

type Edition = 'work' | 'story'

interface MastheadProps {
  edition: Edition
  compact?: boolean
  onWork: () => void
  onSkills: () => void
  onStory: () => void
  onSelectProject: (id: string) => void
}

// Original line drawing of a sitting dog (not a copy of any brand's artwork).
// Morning: dog awake with a sun. Night: dog asleep with a moon.
function DogSketch({ night }: { night: boolean }) {
  return (
    <svg viewBox="0 0 120 110" className="w-24 md:w-28 h-auto" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* ground */}
      <path d="M14 104h92" strokeWidth="1.5" />
      {/* body and haunch */}
      <path d="M42 104c-6-14-4-30 6-36 10-4 22-4 30 2 8 6 10 20 6 34" />
      <path d="M58 70c8 2 14 10 12 22" strokeWidth="1.6" />
      {/* tail */}
      <path d="M84 98c14-2 18-14 12-22" />
      {/* front legs */}
      <path d="M50 104V92M66 104V92" />
      {/* head */}
      <path d="M46 46c0-12 8-20 17-20s17 8 17 20-6 18-17 18-17-6-17-18z" />
      {/* ears */}
      <path d="M48 34c-9-2-12 10-8 18 3 2 7 0 8-6" />
      <path d="M72 34c9-2 12 10 8 18-3 2-7 0-8-6" />
      {/* face */}
      {night ? (
        <>
          <path d="M55 46q3 3 6 0M65 46q3 3 6 0" strokeWidth="1.8" />
        </>
      ) : (
        <>
          <circle cx="58" cy="45" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="68" cy="45" r="1.8" fill="currentColor" stroke="none" />
        </>
      )}
      <path d="M62 52c-2 2-2 3 0 4 2-1 2-2 0-4z" fill="currentColor" stroke="none" />
      {night ? (
        <>
          {/* moon */}
          <path d="M104 16a9 9 0 1 0 8 13 7 7 0 1 1-8-13z" />
          <path d="M20 22l1.5 3 3 1-3 1-1.5 3-1.5-3-3-1 3-1z" strokeWidth="1.4" />
        </>
      ) : (
        <>
          {/* sun */}
          <circle cx="102" cy="22" r="8" />
          <path d="M102 6v-3M102 41v-3M86 22h-3M121 22h-3M91 11l-2-2M113 33l2 2M113 11l2-2M91 33l-2 2" strokeWidth="1.8" />
        </>
      )}
    </svg>
  )
}

export default function Masthead({ edition, compact = false, onWork, onSkills, onStory, onSelectProject }: MastheadProps) {
  const isNight = edition === 'story'
  const navBtn = 'uppercase font-sans font-bold text-[13px] tracking-wider hover:opacity-60'

  return (
    <header className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Top menu */}
      <nav className="flex items-center justify-between py-5">
        <div className="flex items-center gap-6 md:gap-8">
          <button onClick={onWork} className={`${navBtn} ${edition === 'work' ? 'underline underline-offset-4 decoration-2' : ''}`}>
            Portfolio
          </button>
          <button onClick={onSkills} className={navBtn}>Skills</button>
          <button onClick={onStory} className={`${navBtn} ${edition === 'story' ? 'underline underline-offset-4 decoration-2' : ''}`}>
            About
          </button>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-accent text-white px-4 md:px-5 py-2.5 font-sans font-bold text-[13px] uppercase tracking-wider hover:brightness-110"
        >
          Resume
        </a>
      </nav>

      {compact ? (
        <div className="border-t border-earth-900 dark:border-earth-50 py-3 text-center">
          <button onClick={onWork} className="font-display uppercase text-3xl md:text-4xl tracking-wide whitespace-nowrap">
            Suhyun Lim
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 pt-2 pb-4 border-t-[3px] border-double border-earth-900 dark:border-earth-50">
          <div className="flex justify-start text-earth-900 dark:text-earth-50 w-16 md:w-auto">
            <DogSketch night={isNight} />
          </div>
          <button onClick={onWork} className="text-center md:col-auto whitespace-nowrap">
            <span className="block font-display uppercase leading-none tracking-[0.01em] text-[clamp(1.6rem,7vw,7.5rem)]">
              Suhyun Lim
            </span>
            <span className="block font-serif text-sm md:text-lg tracking-[0.5em] mt-2 text-earth-600 dark:text-earth-300">임수현</span>
          </button>
          <div className="hidden md:flex justify-end text-right font-sans text-xs uppercase tracking-wider text-earth-600 dark:text-earth-300 leading-relaxed">
            <span>{isNight ? 'Night edition' : 'Morning edition'}<br />Ann Arbor, MI</span>
          </div>
        </div>
      )}

      {/* Case study bar */}
      <nav className="border-y border-earth-900/80 dark:border-earth-50/60 py-3 flex flex-wrap justify-center gap-y-2 font-sans font-bold uppercase text-[12px] md:text-[13px] tracking-wider">
        {projects.map((p, i) => (
          <span key={p.id} className="flex items-center">
            {i > 0 && <span className="mx-3 md:mx-4 text-earth-400 font-normal" aria-hidden="true">|</span>}
            <button onClick={() => onSelectProject(p.id)} className="hover:underline underline-offset-4">
              {p.navLabel ?? p.title}
            </button>
          </span>
        ))}
      </nav>
    </header>
  )
}
