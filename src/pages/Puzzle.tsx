import { useEffect, useMemo, useRef, useState } from 'react'

// "The Mini": a small crossword built only from facts already on the site
// (case studies, Story page) plus common UX vocabulary.
// Layout: [answer, row, col, direction]. Verified: crossings agree and no stray words.
const SIZE = 8
const ENTRIES: Array<[string, number, number, 'across' | 'down']> = [
  ['MICHIGAN', 0, 0, 'across'],
  ['MAPS', 0, 0, 'down'],
  ['CONTRAST', 0, 2, 'down'],
  ['GOOGLE', 0, 5, 'down'],
  ['ABLE', 5, 2, 'across'],
  ['TEXT', 7, 2, 'across'],
]

const CLUES: Record<string, string> = {
  'across-1': 'Where I am studying for my M.S. (8)',
  'across-4': 'What accessible design should make everything (4)',
  'across-5': 'What UX writers shape, in one word (4)',
  'down-1': 'Customer journey ___ (4)',
  'down-2': 'What low-vision readers need from text on a page (8)',
  'down-3': 'Where I optimized UI/UX for 200+ partner sites (6)',
}

type Cell = { solution: string; across?: string; down?: string; number?: number }
type Dir = 'across' | 'down'

function buildGrid(): (Cell | null)[][] {
  const grid: (Cell | null)[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(null))
  for (const [word, r, c, dir] of ENTRIES) {
    for (let i = 0; i < word.length; i++) {
      const rr = dir === 'down' ? r + i : r
      const cc = dir === 'across' ? c + i : c
      const cell = grid[rr][cc] ?? { solution: word[i] }
      cell[dir] = word
      grid[rr][cc] = cell
    }
  }
  // Numbering: scan top-left to bottom-right; a cell that starts an across or down word gets a number
  let n = 0
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const cell = grid[r][c]
      if (!cell) continue
      const startsAcross = cell.across && (c === 0 || !grid[r][c - 1]?.across)
      const startsDown = cell.down && (r === 0 || !grid[r - 1][c]?.down)
      if (startsAcross || startsDown) cell.number = ++n
    }
  }
  return grid
}

export default function Puzzle({ onBack }: { onBack: () => void }) {
  const grid = useMemo(buildGrid, [])
  const [letters, setLetters] = useState<string[][]>(() => Array.from({ length: SIZE }, () => Array(SIZE).fill('')))
  const [sel, setSel] = useState<{ r: number; c: number; dir: Dir }>({ r: 0, c: 0, dir: 'across' })
  const [checked, setChecked] = useState(false)
  const inputs = useRef<(HTMLInputElement | null)[][]>([])

  const cellAt = (r: number, c: number) => (r >= 0 && r < SIZE && c >= 0 && c < SIZE ? grid[r][c] : null)

  const focus = (r: number, c: number) => inputs.current[r]?.[c]?.focus()

  // Move one cell in the selected direction, staying on the grid and on white squares
  const step = (r: number, c: number, dir: Dir, delta: number) => {
    const nr = dir === 'down' ? r + delta : r
    const nc = dir === 'across' ? c + delta : c
    if (!cellAt(nr, nc)) return
    setSel({ r: nr, c: nc, dir })
    focus(nr, nc)
  }

  const select = (r: number, c: number) => {
    const cell = cellAt(r, c)
    if (!cell) return
    // Tapping the active cell flips direction (if the cell has both words)
    if (sel.r === r && sel.c === c && cell.across && cell.down) {
      setSel({ r, c, dir: sel.dir === 'across' ? 'down' : 'across' })
    } else {
      setSel({ r, c, dir: cell[sel.dir] ? sel.dir : cell.across ? 'across' : 'down' })
    }
    focus(r, c)
  }

  const setLetter = (r: number, c: number, value: string) => {
    setLetters((prev) => {
      const next = prev.map((row) => [...row])
      next[r][c] = value
      return next
    })
    setChecked(false)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, r: number, c: number) => {
    const { dir } = sel
    if (e.key === 'ArrowRight') { e.preventDefault(); setSel({ r, c, dir: 'across' }); step(r, c, 'across', 1); return }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setSel({ r, c, dir: 'across' }); step(r, c, 'across', -1); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel({ r, c, dir: 'down' }); step(r, c, 'down', 1); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel({ r, c, dir: 'down' }); step(r, c, 'down', -1); return }
    if (e.key === 'Backspace') {
      e.preventDefault()
      if (letters[r][c]) { setLetter(r, c, ''); return }
      step(r, c, dir, -1)
      const p = dir === 'across' ? { r, c: c - 1 } : { r: r - 1, c }
      if (cellAt(p.r, p.c)) setLetter(p.r, p.c, '')
    }
  }

  const onInput = (r: number, c: number, raw: string) => {
    const ch = raw.slice(-1).toUpperCase()
    if (!/^[A-Z]$/.test(ch)) return
    setLetter(r, c, ch)
    step(r, c, sel.dir, 1)
  }

  const isCorrect = (r: number, c: number) => letters[r][c] === grid[r][c]?.solution
  const solved = grid.every((row, r) => row.every((cell, c) => !cell || isCorrect(r, c)))
  const activeWord = (() => {
    const cell = cellAt(sel.r, sel.c)
    return cell ? cell[sel.dir] : undefined
  })()

  useEffect(() => {
    focus(0, 0)
  }, [])

  const across = ENTRIES.filter(([, , , d]) => d === 'across')
  const down = ENTRIES.filter(([, , , d]) => d === 'down')
  const clueNumber = (word: string, dir: Dir) => {
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
      const cell = grid[r][c]
      if (cell && cell[dir] === word && cell.number) return cell.number
    }
    return 0
  }

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 pt-10 pb-20">
      <button onClick={onBack} className="uppercase text-sm tracking-wide mb-8 hover:opacity-60">← Back</button>

      <p className="uppercase tracking-wide text-[15px] mb-3">Puzzle · The Mini</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Solve a little about me.</h1>
      <p className="text-lg text-earth-700 mb-10 max-w-2xl">
        Every answer comes from this site, or from basic UX vocabulary. Tap a square to start; use the arrow keys to move.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10">
        {/* Grid */}
        <div>
          <div
            className="grid border-2 border-earth-900 dark:border-earth-50 w-full max-w-[420px]"
            style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}
            role="grid"
            aria-label="Crossword grid"
          >
            {grid.map((row, r) =>
              row.map((cell, c) => {
                if (!cell) return <div key={`${r}-${c}`} className="aspect-square bg-earth-900 dark:bg-earth-50" />
                const inWord = activeWord && (cell[sel.dir] === activeWord)
                const isSel = sel.r === r && sel.c === c
                const wrong = checked && letters[r][c] && !isCorrect(r, c)
                return (
                  <div
                    key={`${r}-${c}`}
                    className={`relative aspect-square border border-earth-300 dark:border-earth-700 ${
                      isSel ? 'bg-accent-soft dark:bg-earth-200' : inWord ? 'bg-earth-100 dark:bg-earth-800' : 'bg-white dark:bg-navy-950'
                    }`}
                  >
                    {cell.number && (
                      <span className="absolute top-0.5 left-1 text-[10px] leading-none font-sans font-bold text-earth-600 dark:text-earth-300">
                        {cell.number}
                      </span>
                    )}
                    <input
                      ref={(el) => {
                        if (!inputs.current[r]) inputs.current[r] = []
                        inputs.current[r][c] = el
                      }}
                      value={letters[r][c]}
                      onChange={(e) => onInput(r, c, e.target.value)}
                      onKeyDown={(e) => onKeyDown(e, r, c)}
                      onFocus={() => setSel((s) => (s.r === r && s.c === c ? s : { r, c, dir: cell[s.dir] ? s.dir : cell.across ? 'across' : 'down' }))}
                      onClick={() => select(r, c)}
                      maxLength={2}
                      aria-label={`Row ${r + 1}, column ${c + 1}`}
                      className={`w-full h-full bg-transparent text-center font-serif text-2xl md:text-3xl uppercase outline-none caret-transparent ${
                        wrong ? 'text-accent' : 'text-earth-900 dark:text-earth-50'
                      }`}
                    />
                  </div>
                )
              })
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={() => setChecked(true)} className="border border-earth-900 dark:border-earth-50 px-4 py-2 font-sans font-bold uppercase text-sm tracking-wide hover:bg-earth-900 hover:text-white dark:hover:bg-earth-50 dark:hover:text-earth-900">
              Check
            </button>
            <button
              onClick={() => { setLetters(Array.from({ length: SIZE }, () => Array(SIZE).fill(''))); setChecked(false) }}
              className="px-4 py-2 font-sans uppercase text-sm tracking-wide text-earth-600 dark:text-earth-300 hover:opacity-60"
            >
              Clear
            </button>
          </div>

          {solved && (
            <p className="mt-6 font-serif text-2xl text-accent">Solved. Thanks for playing. <a href="mailto:elllllllenlim@gmail.com" className="underline underline-offset-4">Send me a note.</a></p>
          )}
        </div>

        {/* Clues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg leading-snug">
          <div>
            <h2 className="font-sans font-bold uppercase text-sm tracking-widest border-b border-earth-900 dark:border-earth-50 pb-2 mb-4">Across</h2>
            <ol className="space-y-3">
              {across.map(([word]) => {
                const n = clueNumber(word, 'across')
                return (
                  <li key={word} className={activeWord === word ? 'text-accent' : ''}>
                    <span className="font-bold mr-2">{n}.</span>
                    {CLUES[`across-${n}`]}
                  </li>
                )
              })}
            </ol>
          </div>
          <div>
            <h2 className="font-sans font-bold uppercase text-sm tracking-widest border-b border-earth-900 dark:border-earth-50 pb-2 mb-4">Down</h2>
            <ol className="space-y-3">
              {down.map(([word]) => {
                const n = clueNumber(word, 'down')
                return (
                  <li key={word} className={activeWord === word ? 'text-accent' : ''}>
                    <span className="font-bold mr-2">{n}.</span>
                    {CLUES[`down-${n}`]}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
