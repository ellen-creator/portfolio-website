import { motion } from 'framer-motion'
import type { CaseStudy } from '@data/projects'

interface ProjectCardProps {
  project: CaseStudy
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="group"
    >
      {/* Image Container - Sharp corners, full bleed */}
      <motion.div
        className="relative w-full aspect-square bg-cream-200 dark:bg-charcoal-700 overflow-hidden mb-8"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-9xl font-light font-serif text-cream-300 dark:text-charcoal-600 mb-6">
              {project.title.split(' ')[0].charAt(0)}
            </div>
            <p className="text-xs text-charcoal-600 dark:text-cream-300 font-light tracking-widest uppercase">
              {project.year}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.slice(0, 2).map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ opacity: 0.7 }}
              className="text-xs px-4 py-2 border border-charcoal-800/20 dark:border-cream-50/20 text-charcoal-700 dark:text-cream-200 font-light tracking-wide"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-3xl font-light font-serif mb-3 tracking-tight text-charcoal-900 dark:text-cream-50 group-hover:opacity-70 transition-opacity duration-500">
          {project.title}
        </h3>
        <p className="text-sm text-charcoal-600 dark:text-cream-300 font-light mb-6 tracking-wide">
          {project.subtitle}
        </p>

        {/* Overview */}
        <p className="text-charcoal-700 dark:text-cream-200 line-clamp-3 font-light leading-relaxed mb-8">
          {project.overview}
        </p>

        {/* Meta */}
        <div className="flex justify-between items-center text-xs text-charcoal-600 dark:text-cream-300 font-light tracking-widest uppercase border-t border-charcoal-800/10 dark:border-cream-50/10 pt-6">
          <span>{project.timeline}</span>
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group-hover:opacity-100 opacity-0"
          >
            <span>View Case →</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
