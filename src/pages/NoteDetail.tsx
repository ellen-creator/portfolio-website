import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { sideNotes } from '@data/projects'

interface NoteDetailProps {
  noteId: string
  onBack: () => void
}

export default function NoteDetail({ noteId, onBack }: NoteDetailProps) {
  const note = sideNotes.find((n) => n.id === noteId)
  const [enlarged, setEnlarged] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (enlarged) setEnlarged(null)
      else onBack()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack, enlarged])

  if (!note) {
    return <div className="text-center py-20">Note not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-5 md:px-6 py-8 text-earth-900 dark:text-earth-50"
    >
      <button
        onClick={onBack}
        className="mb-6 text-earth-600 hover:text-earth-900 transition-colors flex items-center gap-2 text-base tracking-widest uppercase"
      >
        ← Back to Work
      </button>

      <p className="font-sans font-bold text-sm uppercase tracking-widest text-accent mb-3">Side note · {note.kind}</p>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">{note.title}</h1>
      <p className="text-xl md:text-2xl text-earth-700 leading-relaxed max-w-3xl mb-6">{note.summary}</p>
      {note.pdf && (
        <a
          href={note.pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-block border-2 border-earth-900 px-5 py-2.5 font-sans font-bold uppercase text-sm tracking-widest hover:bg-earth-900 hover:text-earth-50 transition-colors"
        >
          Open the deck (PDF)
        </a>
      )}

      <ol className="mt-14 space-y-16">
        {note.slides?.map((slide, idx) => (
          <li key={slide.image} className="border-t border-earth-300 pt-6">
            <p className="font-sans font-bold text-sm uppercase tracking-widest text-earth-600 mb-2">
              {idx + 1} · {slide.eyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl leading-snug mb-5">{slide.title}</h2>
            <button
              type="button"
              aria-label={`Enlarge slide: ${slide.title}`}
              onClick={() => setEnlarged({ src: slide.image, alt: slide.title })}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={slide.image} alt="" loading="lazy" className="w-full h-auto block" />
            </button>
            <details className="mt-4">
              <summary className="cursor-pointer font-sans font-bold uppercase text-sm tracking-widest text-earth-600">
                Read the slide text
              </summary>
              <ul className="mt-3 space-y-1.5 text-lg leading-relaxed text-earth-800">
                {slide.text.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ol>

      {enlarged && (
        <div
          onClick={() => setEnlarged(null)}
          className="fixed inset-0 z-50 bg-earth-900/85 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={enlarged.alt}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95vw] max-w-7xl max-h-[92vh] flex items-center justify-center"
          >
            <img src={enlarged.src} alt={enlarged.alt} className="max-w-full max-h-[92vh] object-contain rounded-lg" />
            <button
              type="button"
              autoFocus
              aria-label="Close enlarged slide"
              onClick={() => setEnlarged(null)}
              className="absolute top-3 right-3 bg-earth-900/80 text-earth-50 rounded-full w-10 h-10 flex items-center justify-center text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
