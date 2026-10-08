import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Private from './pages/Private'
import Puzzle from './pages/Puzzle'
import Masthead from './components/Masthead'
import { useScrollProgress } from './utils/useScrollAnimation'

type Section = 'home' | 'work' | 'private' | 'puzzle'

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [section, setSection] = useState<Section>('home')
  const scrollProgress = useScrollProgress()

  // Work is the morning (light) edition, Story the night (dark) edition
  const isNight = section === 'private'

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [section, selectedProject])

  const goWork = () => {
    setSection('home')
    setSelectedProject(null)
  }
  const goStory = () => {
    setSection('private')
    setSelectedProject(null)
  }
  const goPuzzle = () => {
    setSection('puzzle')
    setSelectedProject(null)
  }
  const goSkills = () => {
    goWork()
    // Home renders on the next tick after goWork; scroll once it exists
    setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 80)
  }
  const openProject = (id: string) => {
    setSelectedProject(id)
    setSection('work')
  }

  const showingDetail = Boolean(selectedProject && section === 'work')

  return (
    <div className={isNight ? 'dark' : ''}>
      <div className="min-h-screen bg-earth-50 dark:bg-navy-950 text-earth-900 dark:text-earth-50 transition-colors duration-700">
        {/* Scroll progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />

        <Masthead
          edition={isNight ? 'story' : 'work'}
          compact={showingDetail}
          onWork={goWork}
          onSkills={goSkills}
          onStory={goStory}
          onSelectProject={openProject}
        />

        <main>
          {showingDetail && selectedProject ? (
            <ProjectDetail projectId={selectedProject} onBack={goWork} />
          ) : section === 'private' ? (
            <Private />
          ) : section === 'puzzle' ? (
            <Puzzle onBack={goWork} />
          ) : (
            <Home onSelectProject={openProject} />
          )}
        </main>

        <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pb-12">
          <div className="border-t-2 border-earth-900 dark:border-earth-50 pt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="font-display uppercase text-4xl tracking-wide">Suhyun Lim</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans font-bold uppercase text-sm tracking-wide">
              <a href="mailto:elllllllenlim@gmail.com" className="hover:opacity-60">Email</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:opacity-60">Resume</a>
              <button onClick={goPuzzle} className="hover:opacity-60 uppercase">Puzzle</button>
              <span className="text-earth-500 font-normal normal-case">© 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
