import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { projects } from '@data/projects'
import { useScrollAnimation } from '@utils/useScrollAnimation'

interface HomeProps {
  onSelectProject: (id: string) => void
}

export default function Home({ onSelectProject }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleNavigate((currentIndex - 1 + projects.length) % projects.length)
      } else if (e.key === 'ArrowRight') {
        handleNavigate((currentIndex + 1) % projects.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNavigate((currentIndex + 1) % projects.length)
      } else {
        handleNavigate((currentIndex - 1 + projects.length) % projects.length)
      }
    }
  }

  const getCurrentProject = (offset: number) => {
    return projects[(currentIndex + offset + projects.length) % projects.length]
  }

  const handleNavigate = (index: number) => {
    setCurrentIndex(index)
  }

  const currentProject = getCurrentProject(0)
  const nextProject = getCurrentProject(1)
  const prevProject = getCurrentProject(-1)

  return (
    <div className="w-full bg-earth-50 dark:bg-navy-900 min-h-screen flex flex-col">
      {/* Main Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-20 lg:py-12"
      >
        {/* Gallery Container */}
        <div
          ref={galleryRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full max-w-7xl"
        >
          {/* Main Image with Side Previews */}
          <div className="flex items-center justify-between gap-4 md:gap-8 mb-16">
            {/* Left Preview - Previous Project */}
            <motion.div
              key={`prev-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleNavigate((currentIndex - 1 + projects.length) % projects.length)}
              whileHover={{ scale: 1.05, opacity: 0.6 }}
              className="hidden md:block flex-shrink-0 w-28 h-40 bg-gradient-to-br from-earth-200 to-earth-100 dark:from-earth-600 dark:to-earth-900 cursor-pointer transition-all duration-500 group shadow-sm hover:shadow-md rounded-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center opacity-50">
                  <div className="text-5xl font-light font-serif text-earth-600 dark:text-earth-200">
                    {prevProject.title.split(' ')[0].charAt(0)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center - Main Image */}
            <motion.div
              key={`main-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => onSelectProject(currentProject.id)}
              className="flex-1 max-w-2xl cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-earth-200 to-earth-100 dark:from-earth-600 dark:to-earth-900 overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Project Thumbnail Image */}
                {currentProject.thumbnail && (
                  <motion.img
                    src={currentProject.thumbnail}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Fallback Content */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-9xl font-light font-serif text-earth-600 dark:text-earth-200 opacity-50"
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentProject.title.split(' ')[0].charAt(0)}
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/50 dark:bg-earth-900/0 dark:group-hover:bg-earth-900/40 transition-all duration-300 flex items-center justify-center">
                  <motion.span
                    className="text-earth-50/0 group-hover:text-earth-50 dark:text-earth-900/0 dark:group-hover:text-earth-900 font-light tracking-widest text-sm transition-all"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    VIEW PROJECT
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Right Preview - Next Project */}
            <motion.div
              key={`next-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleNavigate((currentIndex + 1) % projects.length)}
              whileHover={{ scale: 1.05, opacity: 0.6 }}
              className="hidden md:block flex-shrink-0 w-28 h-40 bg-gradient-to-br from-earth-200 to-earth-100 dark:from-earth-600 dark:to-earth-900 cursor-pointer transition-all duration-500 shadow-sm hover:shadow-md rounded-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center opacity-50">
                  <div className="text-5xl font-light font-serif text-earth-600 dark:text-earth-200">
                    {nextProject.title.split(' ')[0].charAt(0)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light font-serif text-earth-900 dark:text-earth-50 mb-6">
              {currentProject.title}
            </h2>
            <p className="text-xl text-earth-900 dark:text-earth-100 font-light leading-relaxed mb-4">
              {currentProject.subtitle}
            </p>
            <p className="text-sm text-earth-600 dark:text-earth-200 font-light tracking-widest uppercase">
              {currentProject.timeline}
            </p>
          </motion.div>

          {/* Page Number Buttons - Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(index)}
                className={`px-4 py-2 text-sm font-light tracking-widest transition-all duration-300 border rounded-sm ${
                  currentIndex === index
                    ? 'bg-earth-900 dark:bg-earth-200 text-earth-50 dark:text-earth-900 border-earth-900 dark:border-earth-200 shadow-md'
                    : 'border-earth-600/50 dark:border-earth-200/50 text-earth-900 dark:text-earth-100 hover:border-earth-900 dark:hover:border-earth-200 hover:bg-earth-900 dark:hover:bg-earth-200 hover:text-earth-50 dark:hover:text-earth-900'
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Design Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="px-8 py-20 border-t border-earth-600/15 dark:border-earth-50/10 max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl font-light font-serif text-earth-900 dark:text-earth-50 mb-4">
          Design and Research Ability
        </h2>
        <p className="text-lg text-earth-900 dark:text-earth-100 font-light leading-relaxed mb-16 max-w-2xl">
          From observation to impact. Exploring user-centered design through systematic research and iterative solutions.
        </p>

        {/* Design Abilities Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="p-8 bg-earth-200/70 dark:bg-earth-600/40 border border-earth-200/60 dark:border-earth-600/50 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <h3 className="text-xl font-serif font-light text-earth-900 dark:text-earth-50 mb-4">
              Research & Analysis
            </h3>
            <p className="text-earth-900 dark:text-earth-100 font-light leading-relaxed">
              Competitive audits for e-commerce platforms. Identifying UX patterns, pain points, and market opportunities through systematic analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="p-8 bg-earth-200/70 dark:bg-earth-600/40 border border-earth-200/60 dark:border-earth-600/50 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <h3 className="text-xl font-serif font-light text-earth-900 dark:text-earth-50 mb-4">
              Conversion Optimization
            </h3>
            <p className="text-earth-900 dark:text-earth-100 font-light leading-relaxed">
              Lead generation web design with progressive disclosure forms. Optimizing user journeys from inquiry to conversion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="p-8 bg-earth-200/70 dark:bg-earth-600/40 border border-earth-200/60 dark:border-earth-600/50 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <h3 className="text-xl font-serif font-light text-earth-900 dark:text-earth-50 mb-4">
              Conversational Design
            </h3>
            <p className="text-earth-900 dark:text-earth-100 font-light leading-relaxed">
              Chatbot messaging flows and conversation design. Creating seamless human-AI interactions with transparency and personality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="p-8 bg-earth-200/70 dark:bg-earth-600/40 border border-earth-200/60 dark:border-earth-600/50 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <h3 className="text-xl font-serif font-light text-earth-900 dark:text-earth-50 mb-4">
              Design Systems
            </h3>
            <p className="text-earth-900 dark:text-earth-100 font-light leading-relaxed">
              Scalable UI infrastructure and component libraries. Building design systems for cross-platform consistency and team efficiency.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="px-8 py-20 border-t border-earth-600/15 dark:border-earth-50/10 max-w-4xl mx-auto w-full"
      >
        <h2 className="text-4xl font-light font-serif text-earth-900 dark:text-earth-50 mb-10">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-earth-900 dark:text-earth-100 font-light leading-relaxed text-lg">
            <p>
              I'm a designer who solves user problems through UX/UI design and research.
              I believe in starting from observation, identifying problems, conceptualizing solutions,
              and evaluating results.
            </p>
            <p>
              I began in business and technology consulting, but grew increasingly interested in deeper
              user experience considerations. This passion ultimately led me to design.
            </p>
          </div>
          <div className="space-y-6 text-earth-900 dark:text-earth-100 font-light leading-relaxed text-lg">
            <p>
              Recently, I entered graduate school to systematically study design and research.
              I'm particularly interested in AI, automation, and human-centered design.
            </p>
            <p>
              This portfolio showcases my process: observing reality, discovering problems,
              ideating solutions, implementing changes, and measuring impact.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="px-8 py-20 border-t border-earth-600/15 dark:border-earth-50/10 text-center w-full"
      >
        <h2 className="text-3xl font-light font-serif text-earth-900 dark:text-earth-50 mb-10">
          Get in Touch
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-light tracking-widest uppercase">
          <motion.a
            whileHover={{ y: -2, textDecoration: 'underline' }}
            whileTap={{ scale: 0.98 }}
            href="mailto:elllllllenlim@gmail.com"
            className="text-earth-900 dark:text-earth-100 transition-all duration-300 border-b-2 border-earth-900/30 dark:border-earth-100/30 hover:border-earth-900 dark:hover:border-earth-100 pb-2"
          >
            Email
          </motion.a>
          <span className="hidden sm:inline text-earth-600 dark:text-earth-400">|</span>
          <motion.a
            whileHover={{ y: -2, textDecoration: 'underline' }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            download="Suhyun_Lim_Resume_UX.pdf"
            className="text-earth-900 dark:text-earth-100 transition-all duration-300 border-b-2 border-earth-900/30 dark:border-earth-100/30 hover:border-earth-900 dark:hover:border-earth-100 pb-2"
          >
            Resume
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}
