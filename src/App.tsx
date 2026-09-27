import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Private from './pages/Private'
import { useScrollProgress } from './utils/useScrollAnimation'

type Section = 'home' | 'work' | 'private'

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [section, setSection] = useState<Section>('home')
  const [isDark, setIsDark] = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    if (section === 'private') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [section])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-earth-50 dark:bg-navy-900 text-earth-900 dark:text-earth-50 transition-colors duration-500">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-400 to-earth-600 dark:from-earth-300 dark:to-earth-400 z-50 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-earth-50/98 dark:bg-navy-900/98 border-b border-earth-600/15 dark:border-earth-50/10"
        >
          <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
            <motion.button
              whileHover={{ opacity: 0.7 }}
              onClick={() => {
                setSection('home')
                setSelectedProject(null)
              }}
              className="text-sm font-light font-serif tracking-widest hover:opacity-70 transition-opacity duration-500"
            >
              임수현 Suhyun Lim
            </motion.button>
            <div className="flex gap-20 items-center">
              <motion.button
                whileHover={{ opacity: 0.7 }}
                onClick={() => {
                  setSection('work')
                  setSelectedProject(null)
                }}
                className={`text-xs font-light tracking-widest uppercase transition-opacity duration-500 text-earth-900 dark:text-earth-50 ${
                  section === 'work' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                Work
              </motion.button>
              <motion.button
                whileHover={{ opacity: 0.7 }}
                onClick={() => {
                  setSection('private')
                  setSelectedProject(null)
                }}
                className={`text-xs font-light tracking-widest uppercase transition-opacity duration-500 ${
                  section === 'private' ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                Story
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="pt-32">
          {selectedProject && section === 'work' ? (
            <ProjectDetail projectId={selectedProject} onBack={() => setSelectedProject(null)} />
          ) : section === 'private' ? (
            <Private />
          ) : (
            <Home onSelectProject={(id) => {
              setSelectedProject(id)
              setSection('work')
            }} />
          )}
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-earth-600/15 dark:border-earth-50/10 py-24 mt-32"
        >
          <div className="max-w-7xl mx-auto px-8 text-center text-xs text-earth-600 dark:text-earth-100 font-light tracking-wide">
            <p>© 2026 Suhyun Lim</p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App
