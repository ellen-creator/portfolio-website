import { projects } from '@data/projects'

type Edition = 'work' | 'story'

interface MastheadProps {
  edition: Edition
  compact?: boolean
  onWork: () => void
  onStory: () => void
  onSelectProject: (id: string) => void
}

const EMAIL = 'mailto:elllllllenlim@gmail.com'

// Line illustration for the morning (Work) edition: sun rising over a desk horizon
function MorningSketch() {
  return (
    <svg viewBox="0 0 120 80" className="w-28 h-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M8 62h104" />
      <path d="M30 62a30 30 0 0 1 60 0" />
      <path d="M60 18v-10M33 29l-7-7M87 29l7-7M22 47h-10M98 47h10" />
      <path d="M20 72h32M68 72h32" strokeWidth="1.5" />
    </svg>
  )
}

// Line illustration for the night (Story) edition: crescent moon and stars
function NightSketch() {
  return (
    <svg viewBox="0 0 120 80" className="w-28 h-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M62 14a26 26 0 1 0 30 36A22 22 0 1 1 62 14z" />
      <path d="M24 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      <path d="M104 14l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" />
      <path d="M16 62h88" strokeWidth="1.5" />
    </svg>
  )
}

function EnvelopeSketch() {
  return (
    <svg viewBox="0 0 120 80" className="w-24 h-auto" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 20h76v46H22z" />
      <path d="M22 20l38 28 38-28" />
      <path d="M8 34h8M4 44h12M10 54h6" strokeLinecap="round" />
    </svg>
  )
}

export default function Masthead({ edition, compact = false, onWork, onStory, onSelectProject }: MastheadProps) {
  const isNight = edition === 'story'

  return (
    <header className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Utility bar */}
      <div className="flex items-center justify-between py-4 font-sans text-[13px] md:text-sm font-bold uppercase tracking-wide">
        <nav className="flex items-center gap-4 md:gap-6">
          <button onClick={onWork} className={'uppercase ' + (edition === 'work' ? 'underline underline-offset-4 decoration-2' : 'hover:opacity-60')}>
            Work
          </button>
          <button onClick={onStory} className={'uppercase ' + (edition === 'story' ? 'underline underline-offset-4 decoration-2' : 'hover:opacity-60')}>
            Story
          </button>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:opacity-60">
            Resume
          </a>
        </nav>
        <div className="flex items-center gap-4 md:gap-6">
          <a href={EMAIL} className="hidden sm:inline hover:opacity-60">Email</a>
          <a href={EMAIL} className="bg-accent text-accent-dark px-4 md:px-6 py-3 hover:brightness-95">
            Get in touch
          </a>
        </div>
      </div>

      {/* Masthead */}
      {compact ? (
        <div className="border-t border-earth-900 dark:border-earth-50 py-3 text-center">
          <button onClick={onWork} className="font-display text-3xl md:text-4xl tracking-wide uppercase">
            Suhyun Lim
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 pt-2 pb-6">
          <div className="hidden md:flex flex-col items-start gap-3">
            {isNight ? <NightSketch /> : <MorningSketch />}
            <p className="text-lg leading-snug">
              {isNight ? 'Night edition: the person' : 'Morning edition: the work'}
              <br />
              <span className="text-earth-600 dark:text-earth-300">Currently studying in Ann Arbor</span>
            </p>
          </div>

          <button onClick={onWork} className="font-display uppercase text-center leading-none tracking-[0.02em] text-[15vw] md:text-[7.5rem] lg:text-[9rem]">
            Suhyun Lim
          </button>

          <a href={EMAIL} className="hidden md:flex flex-col items-end gap-3 text-right group">
            <EnvelopeSketch />
            <p className="text-lg leading-snug">
              UX research &amp; design,
              <br />
              <span className="text-earth-600 dark:text-earth-300 group-hover:underline">from data to people</span>
            </p>
          </a>
        </div>
      )}

      {/* Section nav */}
      <nav className="border-y border-earth-900/80 dark:border-earth-50/60 py-4 flex flex-wrap justify-center gap-y-2 font-serif uppercase text-[15px] md:text-lg tracking-wide">
        {projects.map((p, i) => (
          <span key={p.id} className="flex items-center">
            {i > 0 && <span className="mx-3 md:mx-4 text-earth-400" aria-hidden="true">|</span>}
            <button onClick={() => onSelectProject(p.id)} className="uppercase hover:underline underline-offset-4">
              {p.navLabel ?? p.title}
            </button>
          </span>
        ))}
        <span className="mx-3 md:mx-4 text-earth-400" aria-hidden="true">|</span>
        <button onClick={onStory} className="uppercase hover:underline underline-offset-4">Story</button>
      </nav>
    </header>
  )
}
