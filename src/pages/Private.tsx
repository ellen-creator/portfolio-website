import { motion } from 'framer-motion'

export default function Private() {
  const workExperience = [
    {
      date: 'Apr 2025 - Aug 2026',
      role: 'Account Strategist',
      company: 'Google, Inc (Google for Startup Accelerator)',
      location: 'Seoul, Korea',
      description: 'Led UI/UX optimization for 200+ partner websites by analyzing user behavior patterns and redesigning end-to-end customer journeys to increase visual engagement. Leveraged Generative AI tools to craft interactive visual ad assets. Delivered UX redesign and marketing strategies for early-stage AI startups within the accelerator program.',
      highlights: ['UI/UX Optimization', 'Generative AI', 'Customer Journey', 'Analytics'],
    },
    {
      date: 'Jun 2022 - Jul 2024',
      role: 'Senior Associate Consultant',
      company: 'Boston Consulting Group (BCG)',
      location: 'Seoul, Korea',
      description: 'Recommended revised Supply Chain Management strategy for leading EV battery manufacturer. Formulated optimized 20-year logistics and hub distribution maps. Optimized supplier and SKU numbers to improve procurement processes and enhance cost efficiency by 40%.',
      highlights: ['Supply Chain Strategy', 'Procurement Optimization', 'Cost Efficiency', 'Business Strategy'],
    },
    {
      date: 'May 2021 - Jun 2022',
      role: 'Business Analyst',
      company: 'Kearney',
      location: 'Seoul, Korea',
      description: 'Developed rebranding strategy for food manufacturing company by redesigning e-commerce application UI/UX, raising Google AppStore rating from 2.8 to 4.8. Conducted UI audits and competitive analysis. Performed commercial due diligence for IPO support for Korean leading food e-commerce conglomerate.',
      highlights: ['E-Commerce UI/UX', 'Rebranding Strategy', 'User Testing', 'Competitive Analysis'],
    },
    {
      date: 'Oct 2023 - Dec 2024',
      role: 'Research Assistant',
      company: 'Developmental Cognitive Neuroscience Laboratory, Seoul National University',
      location: 'Seoul, Korea',
      description: 'Recruited and guided child participants through episodic memory task process. Analyzed behavioral data from memory tasks of children and adults. Contributed to research on developmental cognitive processes.',
      highlights: ['Research Methodology', 'Data Analysis', 'User Studies', 'Cognitive Science'],
    },
  ]

  const personalEntries = [
    {
      date: '2026-09-23',
      title: 'Transition to Graduate School',
      content: 'Started my Master of Science at University of Michigan, focusing on UX design and research methodology. After working at Google and BCG, I wanted deeper, more rigorous learning in design thinking and research. Currently specializing in UX research methodologies and information architecture.',
    },
    {
      date: '2026-09-15',
      title: 'Vori Project Begins',
      content: 'Starting work on AI-powered design system automation as part of UMSI coursework. The goal is to reduce repetitive design work and increase team efficiency through intelligent tooling. Building on my experience bridging design and development at Google.',
    },
    {
      date: '2026-08-31',
      title: 'Completed Google Accelerator Program',
      content: 'Wrapped up my role as Account Strategist at Google for Startup Accelerator. Delivered UX redesigns for early-stage AI startups and received company-wide Learning Sharing Award for my work on algorithmic engagement study.',
    },
    {
      date: '2024-07-31',
      title: 'Transitioned from BCG to Google',
      content: 'Left Boston Consulting Group after 2 years to join Google, focusing more deeply on UX/UI strategy. The consulting work gave me strong analytical skills, but I wanted to apply them more directly to user experience and product design.',
    },
  ]

  // Design abilities (for future use)
  // const designAbilities = [
  //   {
  //     category: 'Research & Analysis',
  //     description: 'Conducted competitive audits for e-commerce platforms (home shopping apps), identifying UX patterns, pain points, and market opportunities.',
  //   },
  //   ...
  // ]

  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      {/* Header with Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h1 className="text-6xl font-light font-serif mb-8 tracking-tight text-earth-900 dark:text-earth-50">
          About Me
        </h1>
        <div className="text-xl text-earth-900 dark:text-earth-100 font-light leading-relaxed space-y-6 max-w-3xl">
          <p>
            I have always been driven by a relentless curiosity about how people experience the world.
            This question led me to decode customer journeys and optimize digital marketing at BCG, Kearney, and Google.
            But wanting to actually build those digital experiences pushed me to the University of Michigan's MSI program.
          </p>
          <p>
            Today, I am designing inclusive, accessible web experiences and doing on-the-ground user discovery for my startup, Vori.
            I believe the best technology leaves no one behind.
          </p>
          <p>
            When I'm not untangling complex UX problems, you'll likely find me finding new perspectives on a mountain
            or diving into books on neuroscience and assistive technology.
          </p>
        </div>
      </motion.div>

      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-32 border-t border-earth-600/15 dark:border-earth-50/10 pt-20"
      >
        <h2 className="text-4xl font-light font-serif mb-12 text-earth-900 dark:text-earth-50">
          Work Experience
        </h2>
        <div className="space-y-16">
          {workExperience.map((experience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * idx, duration: 0.6 }}
              className="border-l-2 border-earth-600 dark:border-earth-300 pl-8 py-4"
            >
              <div className="mb-3">
                <time className="text-xs text-earth-600 dark:text-earth-200 font-light tracking-widest uppercase">
                  {experience.date}
                </time>
                <h3 className="text-2xl font-serif font-light text-earth-900 dark:text-earth-50 mt-2">
                  {experience.role}
                </h3>
                <p className="text-lg text-earth-600 dark:text-earth-200 font-light">
                  {experience.company}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-300 font-light">
                  {experience.location}
                </p>
              </div>
              <p className="text-earth-900 dark:text-earth-100 font-light leading-relaxed mb-4">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs px-3 py-1 border border-earth-600/50 dark:border-earth-300/50 text-earth-900 dark:text-earth-100 font-light rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Personal Stories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-32 border-t border-earth-600/15 dark:border-earth-50/10 pt-20"
      >
        <h2 className="text-4xl font-light font-serif mb-12 text-earth-900 dark:text-earth-50">
          Recent Reflections
        </h2>
        <div className="space-y-16">
          {personalEntries.map((entry, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 0.1 * idx, duration: 0.6 }}
              className="border-l-2 border-earth-600 dark:border-earth-300 pl-8 py-4"
            >
              <time className="text-xs text-earth-600 dark:text-earth-200 font-light tracking-widest uppercase">
                {entry.date}
              </time>
              <h3 className="text-2xl font-light font-serif mt-3 mb-4 text-earth-900 dark:text-earth-50">
                {entry.title}
              </h3>
              <p className="text-earth-900 dark:text-earth-100 leading-relaxed font-light text-lg">
                {entry.content}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="border-t border-earth-600/15 dark:border-earth-50/10 pt-20"
      >
        <h2 className="text-4xl font-light font-serif mb-8 text-earth-900 dark:text-earth-50">
          Design Philosophy
        </h2>
        <div className="space-y-6 text-earth-900 dark:text-earth-100 font-light leading-relaxed text-lg">
          <p>
            I believe in starting from observation. Before designing, I listen. I watch how people actually use products,
            identify friction points, and understand the real problems beneath what they initially ask for.
          </p>
          <p>
            Good design is not about making things beautiful—it's about making them useful. Every design decision
            should be informed by research and measured by its impact on user behavior and business outcomes.
          </p>
          <p>
            I'm particularly interested in the intersection of AI, automation, and human-centered design.
            How can intelligent systems enhance human capability rather than replace human judgment?
          </p>
        </div>
      </motion.section>
    </div>
  )
}
