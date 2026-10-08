import { motion } from 'framer-motion'

export default function Private() {
  const workExperience = [
    {
      date: 'Apr 2025 - Aug 2026',
      role: 'Account Strategist',
      company: 'Google, Inc (Google for Startup Accelerator)',
      location: 'Seoul, Korea',
      description: 'Led UI/UX optimization for 200+ partner websites by analyzing user behavior patterns and redesigning end-to-end customer journeys, consistently reaching 120%+ of quarterly targets. Led internal sessions on Generative Engine Optimization (GEO) and AI-driven search that earned the company-wide Learning Sharing Award. Restructured web architecture for early-stage AI startups in the Google for Startups Accelerator to remove friction and improve onboarding.',
      highlights: ['UI/UX Optimization', 'SEO / GEO', 'Customer Journey', 'Web Architecture', 'Analytics'],
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
      title: 'Completed the Google for Startups Accelerator',
      content: 'Worked as Account Strategist within the Google for Startups Accelerator, leading UX redesign and marketing strategy for early-stage AI startups, including restructuring web architecture to remove onboarding friction. Also led internal sessions on Generative Engine Optimization that earned the company-wide Learning Sharing Award.',
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
      {/* About: photo + bio + quick facts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="uppercase tracking-wide text-[15px] mb-3">Story</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6 text-earth-900 dark:text-earth-50">
          Hello, I&apos;m Suhyun (Ellen) Lim.
        </h1>
        <a
          href="#my-story"
          className="inline-block bg-accent text-white px-6 py-3 font-sans font-bold uppercase text-sm tracking-wider hover:brightness-110 mb-12"
        >
          Read my story
        </a>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <figure className="md:col-span-5">
            <img
              src="/images/about/suhyun.jpg"
              alt="Suhyun Lim smiling on a mountain ridge, holding trekking poles"
              className="w-full h-auto block"
            />
            <figcaption className="mt-3 text-sm text-earth-600 dark:text-earth-300 italic">
              Happiest above the treeline.
            </figcaption>
          </figure>

          <div id="my-story" className="scroll-mt-8 md:col-span-7 text-lg leading-relaxed space-y-5 text-earth-900 dark:text-earth-100">
            <p className="text-xl md:text-2xl leading-snug font-serif">
              I&apos;ve always wanted to know how people actually experience the world, and then make that experience a little kinder.
            </p>
            <p>
              <strong className="font-semibold">I started in social work.</strong> At the University of Hong Kong I double-majored in
              social work and business design &amp; innovation, and learned to begin every problem by listening to the person living it.
            </p>
            <p>
              <strong className="font-semibold">Then I learned to read the data.</strong> As a consultant at Kearney and BCG, I turned
              messy operational data into decisions: an e-commerce app redesign that lifted its rating from 2.8 to 4.8, and
              procurement models that raised cost efficiency by 40%.
            </p>
            <p>
              <strong className="font-semibold">At Google, the two came together.</strong> I optimized UI/UX for 200+ partner websites,
              restructured web architecture for AI startups in the Google for Startups Accelerator, and led sessions on Generative
              Engine Optimization that earned a company-wide Learning Sharing Award.
            </p>
            <p>
              <strong className="font-semibold">Now I&apos;m designing for the people data leaves out.</strong> I&apos;m an M.S. in
              Information student at the University of Michigan and a Mayleben Grant nominee. I&apos;m rebuilding the UMSI Career
              Development Office website for accessibility, and building Vori and LUMI for neurodivergent people. I believe the
              best technology leaves no one behind.
            </p>
            <p className="text-earth-700 dark:text-earth-300">
              Off-screen, you&apos;ll usually find me on a mountain, or reading about neuroscience and assistive technology.
            </p>
          </div>
        </div>

        {/* Quick facts */}
        <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t-2 border-earth-900 dark:border-earth-50 pt-6">
          <div>
            <dt className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Education</dt>
            <dd className="leading-snug">
              M.S. Information, University of Michigan
              <span className="block text-earth-600 dark:text-earth-300 text-sm mt-1">UX design &amp; research · 2026 – 2028</span>
              <span className="block mt-3">B.A. Social Work &amp; Business Design, The University of Hong Kong</span>
            </dd>
          </div>
          <div>
            <dt className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Recognition</dt>
            <dd className="leading-snug space-y-1">
              <span className="block">Mayleben Grant nominee</span>
              <span className="block">+Impact Studio (accelerator program)</span>
              <span className="block">Google Learning Sharing Award</span>
              <span className="block">U-M DARE to Dream Grant (Vori)</span>
            </dd>
          </div>
          <div>
            <dt className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Languages</dt>
            <dd className="leading-snug">
              English, Korean (native)
              <span className="block mt-1">Japanese (JLPT N2), Chinese (HSK 6)</span>
            </dd>
          </div>
        </dl>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-32 border-t border-earth-600/15 dark:border-earth-50/10 pt-20"
      >
        <h2 className="text-4xl font-serif mb-12 text-earth-900 dark:text-earth-50">
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
                <time className="text-xs text-earth-600 dark:text-earth-200 tracking-widest uppercase">
                  {experience.date}
                </time>
                <h3 className="text-2xl font-serif text-earth-900 dark:text-earth-50 mt-2">
                  {experience.role}
                </h3>
                <p className="text-lg text-earth-600 dark:text-earth-200">
                  {experience.company}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-300">
                  {experience.location}
                </p>
              </div>
              <p className="text-earth-900 dark:text-earth-100 leading-relaxed mb-4">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs px-3 py-1 border border-earth-600/50 dark:border-earth-300/50 text-earth-900 dark:text-earth-100 rounded"
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
        <h2 className="text-4xl font-serif mb-12 text-earth-900 dark:text-earth-50">
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
              <time className="text-xs text-earth-600 dark:text-earth-200 tracking-widest uppercase">
                {entry.date}
              </time>
              <h3 className="text-2xl font-serif mt-3 mb-4 text-earth-900 dark:text-earth-50">
                {entry.title}
              </h3>
              <p className="text-earth-900 dark:text-earth-100 leading-relaxed text-lg">
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
        <h2 className="text-4xl font-serif mb-8 text-earth-900 dark:text-earth-50">
          Design Philosophy
        </h2>
        <div className="space-y-6 text-earth-900 dark:text-earth-100 leading-relaxed text-lg">
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
