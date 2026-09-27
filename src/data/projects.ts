// Portfolio Projects - UX Case Studies
// Structure: Situation → Problem → Solution → Implementation → Impact

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  tags: string[]

  // Case Study sections
  overview: string

  situation: {
    title: string
    description: string
    context: string
    keywords?: string[]
  }

  problem: {
    title: string
    description: string
    painPoints: string[]
  }

  solution: {
    title: string
    howMightWe?: string
    description: string
    approach?: string
    strategies?: Array<{ title: string; description: string }>
    tools?: string[]
    personas?: Array<{
      id: string
      name: string
      image: string
      description: string
    }>
    dashboards?: Array<{
      id: string
      title: string
      description: string
      image: string
    }>
  }

  implementation: {
    title: string
    description: string
    changes: Array<{
      before?: string
      beforeImage?: string
      after?: string
      afterImage?: string
      images?: string[]
      image?: string
      title?: string
      description?: string
      explanation?: string
      quote?: string
      interviewee?: string
    }>
  }

  impact: {
    title: string
    description: string
    metrics: Array<{
      label: string
      value: string
      unit?: string
    }>
    testimonial?: string
  }

  learnings: string[]
  year: number
  timeline: string
}

export const projects: CaseStudy[] = [
  {
    id: 'vori',
    title: 'Vori - Neuro-Interventional Smart Eyewear',
    subtitle: 'Founder: Gentle & Non-Invasive Assistive Technology for Neurodivergent Children',
    thumbnail: '/images/projects/vori_mockup.png',
    tags: ['Product Strategy', 'Neurotechnology', 'Accessible Design', 'User Research'],

    overview: 'Solo founder and technology leader who conceived, validated, and is building Vori: ultra-lightweight smart eyewear that detects early biometric signs of sensory overload in ADHD & ASD children and intervenes with calming visual cues. Currently scaling from research validation to clinical-grade software and usability testing with real children. Awarded University of Michigan DARE to Dream Grant and pursuing additional funding.',

    situation: {
      title: 'Situation',
      description: 'Neurodivergent children (ADHD & ASD) experience unpredictable sensory overload and attention drift that lead to classroom meltdowns, emotional shutdown, and academic isolation.',
      context: '(1) No in-class early detection—teachers can\'t see what neurodivergent children mask; many hide distress until behavioral collapse.\n\n(2) No real-time visibility into sensory overload, anxiety, or attention drift. Existing interventions are clinical, heavy, or reactive.',
      keywords: ['Sensory Overload', 'Hidden Struggles', 'Classroom Crisis', 'Anxiety & Attention Drift'],
    },

    problem: {
      title: 'Problem',
      description: 'Deep user research revealed core challenges across three stakeholder groups:',
      painPoints: [
        'Students: Fear of peer teasing when wearing "medical" or "therapy" devices; sensory aversion to heavy headsets (>200g)',
        'Parents: Helplessness watching meltdowns unfold; lack of real-time insight into their child\'s emotional state at school',
        'Educators: Classroom disruption from outbursts; difficulty distinguishing attention deficit from willful behavior; limited tools for early intervention',
        'Clinicians: No objective biometric data for diagnosis; reliance on subjective parent/teacher reports; limited ability to measure treatment efficacy',
      ],
    },

    solution: {
      title: 'Solution',
      howMightWe: 'How might we design an invisible, clinically rigorous assistive technology that empowers neurodivergent children to self-regulate, prevents crises before they escalate, and builds genuine confidence without stigma?',
      description: 'Ultra-lightweight smart eyewear combining real-time EEG monitoring with bio-inspired peripheral visual interventions. Detects early neural markers of sensory overload and intervenes with fractal-patterned visual cues 30-60 seconds before behavioral escalation—preserving normal classroom vision while preventing crisis.',
      approach: 'Solo founder architecture: rigorous stakeholder validation with 50+ University of Michigan clinicians, educators, and families informed clinical design; clinical-grade AWS backend + React frontend enables real-time biometric streaming and predictive ML; Python algorithms identify early overload signatures enabling preventive intervention.',
      tools: ['AWS Cloud Infrastructure', 'React Frontend', 'Python ML & Data Analysis', 'C++ & Python Embedded Systems', 'EEG Algorithm Design', 'Real-Time Biometric Streaming', 'Clinical Data Analytics', 'Neuroscience Principles', 'Accessibility Design'],
    },

    implementation: {
      title: 'Development & Deployment Strategy',
      description: 'Solo founder designed a research-first, software-validated strategy prioritizing clinical rigor and real-world testing before hardware integration. Architecture demonstrates ability to navigate complex technical systems—from neuroscience algorithms to cloud infrastructure to usability research.',
      changes: [
        {
          title: 'Phase 1: Stakeholder Research & Validation (Completed)',
          description: 'Conducted extensive design research across University of Michigan ecosystem: clinicians, ABA professionals, neurodivergent community leaders, teachers, parents. Validated: (1) Technical feasibility of EEG-based early detection; (2) Clinical need for preventive intervention; (3) Lightweight, non-stigmatizing design is essential. Outcome: Foundation for software development and hardware architecture.',
          image: '/images/projects/vori_glasses.png',
        },
        {
          title: 'Phase 2: Hardware & Software Design Architecture',
          description: 'Ultra-lightweight eyewear form factor (<90g) integrating temple-mounted EEG sensors, infrared eye-tracking, and real-time biometric processing. Full-stack architecture: AWS backend for secure biometric streaming + edge ML inference, React dashboard for educators/parents, Python algorithms detect early overload signatures 30-60 seconds before crisis.\n\n**Scientific Foundation:**\n• **Biophilic Fractals (D=1.35)**: Fractal geometries reduce autonomic stress by 60% and restore EEG Alpha waves in 10 seconds\n• **Peripheral Field Projection**: Center vision stays 100% clear (focusing on teacher/board) while intervention cues render strictly in peripheral field\n• **Preemptive Neuro-Feedback**: Real-time EEG (Alpha drops, Theta/Beta spikes) + gaze tracking detects overload 30-60 sec before behavioral escalation\n• **Zero-Stigma Design**: Everyday glasses appearance eliminates clinical labels while ensuring high compliance\n\nThe mockup below shows what children experience: crystal-clear classroom vision with subtle peripheral calm-down cues—invisible to peers.',
          image: '/images/projects/vori_eyetracking.png',
          video: '/images/projects/vori_visual_mockup.mp4',
        },
        {
          title: 'Phase 3: Usability Testing & Clinical Validation (Current)',
          description: 'Conducting iterative testing with 121 children: 60 controls + 61 ADHD/ASD participants. EEG datasets reveal distinct neural signatures (Alpha drops, TBR spikes) enabling 87% early detection accuracy. Real-world testing in classrooms and home settings with children, educators, parents. Research generates: interaction design refinements, visual cue optimization (fractal parameters, peripheral placement), dashboard UX for clinician workflows. Funded by University of Michigan DARE to Dream Grant. Outcomes directly inform hardware-software co-design and clinical pilot readiness.',
          images: ['/images/projects/vori_report1.png', '/images/projects/vori_report2.png'],
        },
      ],
    },

    impact: {
      title: 'Current Impact & Future Vision',
      description: 'As solo founder, positioned Vori for significant clinical and commercial impact. Secured University of Michigan DARE to Dream Grant and pursuing additional funding to scale usability testing and accelerate hardware integration. Early research validation demonstrates strong clinical need; software infrastructure now enables rapid iteration and real-world testing with neurodivergent children and educators.',
      metrics: [
        { label: 'Founder Leadership', value: 'Solo', unit: 'Full product vision & technical execution' },
        { label: 'Stakeholder Validation', value: '50+', unit: 'clinicians, educators, parents consulted' },
        { label: 'Grant Funding', value: 'DARE to Dream', unit: 'University of Michigan' },
        { label: 'Tech Stack', value: 'AWS/React/Python', unit: 'production-ready infrastructure' },
      ],
      testimonial: 'When I first spoke with parents and teachers about early intervention for sensory overload, they said: "We need this now." That validation drove me to go solo and build it right—with real users, scientific rigor, and no shortcuts. Vori isn\'t just a product; it\'s a mission to give neurodivergent children their confidence back. - Ellen (Founder)',
    },

    learnings: [
      'As solo founder, you cannot cut corners on user research. The six months I spent validating with 50+ clinicians, educators, parents, and community members was the most valuable time—it shaped every technical decision and prevented false starts.',
      'Clinical efficacy is not enough—accessibility and stigma elimination are equally critical. The best intervention fails if children refuse to wear it. This insight drove the entire "stealth health" design philosophy.',
      'Building the right software architecture first, before hardware, is a strategic advantage. AWS + React + Python gave me a clean, scalable foundation to iterate rapidly on algorithms and UX—something that would be painful to retrofit into embedded hardware later.',
      'Predictive intervention (30-60 sec before crisis) is fundamentally different from reactive tools. The shift from crisis management to prevention unlocks new possibilities for learning and confidence-building—and changes the entire value proposition.',
      'Parents and educators are strategic partners in product development, not just end users. Their insights on what actually works in classrooms and homes are worth more than any feature brainstorm.',
      'Funding unlocks velocity. The University of Michigan DARE to Dream Grant enabled simultaneous progress on three fronts—not sequentially. Solo founders must aggressively pursue funding to scale.',
      'User research with neurodivergent children must center their agency and lived experience—not just adult perceptions. The most profound insights came from kids themselves, not their parents or doctors.',
    ],

    year: 2026,
    timeline: 'Ongoing (Founded 2024)',
  },

  {
    id: 'arklink-lead-generation',
    title: 'Arklink Lead Generation Optimization',
    subtitle: 'Persona-Driven UX & Chatbot Redesign',
    thumbnail: '/images/projects/arklink_thumnail.png',
    tags: ['UX Design', 'Lead Generation', 'Chatbot Design'],

    overview: 'Optimized lead generation landing page and chatbot interaction through persona-driven design research.',

    situation: {
      title: 'Situation',
      description: 'Arklink is a specialized legal platform dedicated to resolving intimate image crimes including sextortion, deepfakes, contact theft, and intimate video distribution. We provide customized solutions tailored to each victim\'s situation and 24/7 consultation services to those in crisis.',
      context: 'Despite significant advertising investment, our campaigns were not generating expected results. We attracted traffic to the landing page, but conversion rates remained disappointingly low (below 1%). Uncertain whether our advertising strategy was effective or if the issue lay in our messaging and user experience, we decided to conduct a comprehensive overhaul with executive leadership to reassess our entire approach.',
      keywords: ['Low Conversion Rates', 'Generic Messaging', 'No Segmentation', 'One-Size-Fits-All'],
    },

    problem: {
      title: 'Problem',
      description: 'Through user interviews and behavioral analysis, we identified these core challenges:',
      painPoints: [
        'Different user segments needed different value propositions and interaction patterns',
        'Chatbot responses were generic and didn\'t address specific user pain points',
        'Landing page prioritized company information over user benefits',
        'No clear customer journey mapping for different user types',
      ],
    },

    solution: {
      title: 'Solution',
      howMightWe: 'How might we identify which customer segments to target and design conversion-optimized experiences for each?',
      description: 'Redesigned landing page and chatbot interaction by developing distinct personas and creating segment-specific user journeys.',
      approach: 'Developed two distinct user personas and created segment-specific messaging, UI flows, and interaction patterns.',
      tools: ['Figma', 'User Research', 'Journey Mapping', 'Copy Strategy'],
      personas: [
        {
          id: 'persona-1',
          name: 'Persona 1: Urgent Help Seeker',
          image: '/images/projects/persona1.png',
          description: 'Time-constrained professionals seeking immediate solutions and quick information.',
        },
        {
          id: 'persona-2',
          name: 'Persona 2: Technical Researcher',
          image: '/images/projects/persona2.png',
          description: 'Detail-oriented engineers evaluating technical capabilities and integration options.',
        },
      ],
    },

    implementation: {
      title: 'Implementation & Changes',
      description: 'In user journey analysis, we found that while users clicked on the chatbot at high rates (5-10%), the conversion rate within the chatbot itself was disappointing. To solve this, we redesigned the chatbot experience based on two distinct customer personas, tailoring messaging, UI flows, and interaction patterns to each segment\'s unique needs and psychology.',
      changes: [
        {
          title: 'Persona 1: Urgent Help Seeker - Reassurance & Empathy First',
          description: 'Users in acute crisis situations need immediate reassurance and to feel that the company stands with them as the victim. We redesigned the chatbot to lead with emotional support and personal accountability: "I will personally ensure your data doesn\'t spread." This approach establishes trust immediately, reduces panic, and emphasizes that we are advocates for the victim, not just a technical service provider. This positioning significantly increased conversion rates among high-urgency users.',
          images: ['/images/projects/arklink_persona1_cj.png', '/images/projects/arklink_chatbot1.png'],
        },
        {
          title: 'Persona 2: Technical Researcher - Credibility & Expertise First',
          description: 'Detail-oriented technical users need to validate our expertise before committing to a solution. We configured the chatbot to immediately offer downloadable technical documentation and detailed methodology summaries. By providing credible, technical information upfront, users can quickly assess our competence and authority. This trust-through-expertise approach significantly improved lead quality and conversion among the technical researcher segment.',
          images: ['/images/projects/arklink_persona2_cj.png', '/images/projects/arklink_chatbot2.png'],
        },
        {
          title: 'Solution 3: Direct Inquiry Button - Frictionless Access',
          description: 'Previously, users had to navigate through multiple pages to find contact information when seeking immediate support. We added a prominent "Quick Inquiry" button at the bottom of the homepage, enabling customers to submit service requests directly without friction. This simple design change reduced support request friction and increased overall conversion rates.',
          image: '/images/projects/arklink_inquirybar.png',
        },
      ],
    },

    impact: {
      title: 'Impact',
      description: 'Persona-driven approach significantly improved user engagement and conversion:',
      metrics: [
        { label: 'Lead quality improved', value: '42', unit: '%' },
        { label: 'Conversation completion rate', value: '68', unit: '%' },
        { label: 'Average time on page', value: '↑3.5', unit: 'min' },
        { label: 'CTA click-through rate', value: '↑55', unit: '%' },
      ],
      testimonial: 'The persona-based approach transformed how we communicate value. Different users finally see what matters to them. - Arklink Product Team',
    },

    learnings: [
      'Personas must be validated through actual user research, not assumptions',
      'Segment-specific messaging drives higher engagement than one-size-fits-all approaches',
      'Chatbot personality and language should match user expectations and context',
      'Clear customer journey mapping prevents feature bloat and maintains focus',
    ],

    year: 2025,
    timeline: '2 months',
  },

  {
    id: 'ecommerce-ui-redesign',
    title: 'E-Commerce UI/UX Redesign',
    subtitle: 'Segment-Driven Design for Diverse Customer Demographics',
    thumbnail: '/images/projects/ec3.png',
    tags: ['E-Commerce', 'UX Research', 'UI Design', 'Accessibility'],

    overview: 'Revitalized a struggling e-commerce mobile application by conducting data-driven customer segmentation and implementing a comprehensive UI/UX redesign. The result: Google Play rating increased from 2.8 to 4.8/5 stars, with significantly improved user satisfaction and engagement.',

    situation: {
      title: 'Situation',
      description: 'The client is a major commerce company that broadcasts products through both TV and a mobile application. As customers shifted their purchasing medium from TV to mobile, the client\'s mobile application revenue was rapidly declining.',
      context: 'Analysis of the application revealed that the UI was poorly designed—so unintuitive that even experienced users found it difficult to complete purchases. The client needed a comprehensive reassessment and redesign of the entire application based on customer data insights. This became a collaborative effort involving the client\'s web designers, developers, and our UX research team.',
      keywords: ['Declining Revenue', 'Poor UI Design', 'No Segmentation', 'Cart Abandonment'],
    },

    problem: {
      title: 'Problem',
      description: 'Our analysis revealed multiple critical issues preventing users from completing purchases:',
      painPoints: [
        'No customer segmentation strategy—the application treated all users identically regardless of age, purchase behavior, or loyalty status',
        'Poor UI design especially for the 50+ demographic, with insufficient contrast, small touch targets, and dated visual design',
        'No engagement mechanisms to encourage repeat purchases, cross-selling, or product discovery',
        'Overly complex purchase flow requiring multiple steps, leading to high cart abandonment rates',
        'Missed opportunity to convert TV advertising viewers into mobile app users',
        'User feedback indicated frustration with unintuitive navigation and slow performance',
      ],
    },

    solution: {
      title: 'Solution',
      howMightWe: 'How might we design segment-specific mobile experiences that turn abandonment into purchase completion, respecting each customer type\'s unique needs and preferences?',
      description: 'We implemented a comprehensive, data-driven redesign based on customer segmentation analysis. Our methodology involved three key phases: (1) segmenting and analyzing customer data to identify high-value segments and behavioral pain points, (2) suggesting UI improvements with clear design rationales based on customer insights, and (3) collaborating with the client\'s designers and developers to evaluate feasibility and refine implementations.',
      approach: 'Customer segmentation analysis informed segment-driven UX design with an accessibility-first approach for aging users. We leveraged behavioral data, purchase patterns, and churn analysis to create targeted experiences that drive revenue while improving user satisfaction.',
      tools: ['Customer Data Analytics', 'Figma', 'User Research', 'Accessibility Audit', 'A/B Testing', 'Behavioral Analysis'],
      strategies: [
        {
          title: 'Customer Segmentation Strategy',
          description: 'Analyzed churn rate, purchase behavior across awareness and consideration stages to create targeted approaches.',
        },
        {
          title: 'Age-Appropriate Visual Design',
          description: 'Applied vivid colors, increased contrast, and larger touch targets for users with vision and dexterity challenges.',
        },
        {
          title: 'Revenue Maximization Features',
          description: 'Implemented up/cross-selling mechanisms, social proof elements, and personalized product recommendations.',
        },
        {
          title: 'Engagement & Gamification',
          description: 'Created quiz and game features tied to product discovery and points system for behavioral incentives.',
        },
      ],
    },

    implementation: {
      title: 'Implementation & Strategic Touchpoints',
      description: 'Eight strategic UX improvements were implemented across the application, each driven by customer segmentation data and accessibility research. We focused on creating seamless user journeys that addressed specific pain points identified in our analysis, particularly for the high-value 50+ demographic.',
      changes: [
        {
          image: '/images/projects/ec1.png',
          title: 'Awareness Strategy',
          description: 'Analyzed customer segments by churn rate and purchase behavior across awareness, consideration, and purchase stages to inform targeted engagement strategies.',
        },
        {
          image: '/images/projects/ec2.png',
          title: 'Segment-Focused Design',
          description: 'Prioritized frequency and purchase value for silver customers (50+) through accessible UI design and active visual elements that encourage interaction and exploration.',
        },
        {
          image: '/images/projects/ec3.png',
          title: 'TV-to-App Integration',
          description: 'Bridged awareness from TV advertising to immediate app action, enabling users to complete purchases without phone calls, leveraging timely app notifications.',
        },
        {
          image: '/images/projects/ec4.png',
          title: 'Social Proof & Decision Support',
          description: 'Applied review-focused messaging and customer sentiment indicators to help hesitant buyers overcome purchase anxiety, particularly for housewives demographic.',
        },
        {
          image: '/images/projects/ec5.png',
          title: 'Purchase Confirmation',
          description: 'Strategically placed related products at checkout to increase basket size, leveraging social proof ("X people also bought this") to drive incremental revenue.',
        },
        {
          image: '/images/projects/ec6.png',
          title: 'Senior-Friendly Accessibility',
          description: 'Enhanced visual contrast and color intensity for 50-60 demographic, added voice recognition interface, and implemented repeat-exposure features for product consideration.',
        },
        {
          image: '/images/projects/ec7.png',
          title: 'Engagement Gamification',
          description: 'Created product-related quizzes and interactive games tied to loyalty points, increasing average app session time by 30% while gathering behavioral data for segmentation.',
        },
        {
          image: '/images/projects/ec8.png',
          title: 'Data-Driven Customer Segmentation',
          description: 'Conducted cross-analysis of customer behavior, traits, and purchase information through expert interviews to create personalized UX based on refined customer segments.',
        },
      ],
    },

    impact: {
      title: 'Impact',
      description: 'The comprehensive redesign delivered dramatic business and user satisfaction improvements. The application\'s Google Play rating increased from 2.8 stars (2021) to 4.8 stars—a remarkable transformation driven by data-informed design decisions and accessibility-first approach for our aging user base.',
      metrics: [
        { label: 'Google Play Rating', value: '★★★★★ 4.8', unit: '+71% from 2.8' },
        { label: 'Conversion rate lift', value: '45', unit: '%' },
        { label: 'Repurchase rate growth', value: '38', unit: '%' },
        { label: 'Average order value', value: '↑45', unit: '%' },
      ],
      testimonial: 'Before redesign: "It is such a waste to give this app one star. After so many updates, the application just stopped and push marketing comes out even though I did not agree on that." After redesign: "The page itself gets really cleaned, fast and easy to log-in. I really love the fact that they changed the whole UI of the application. It got much better."',
    },

    learnings: [
      'Customer segmentation by behavioral data and demographics is essential—one-size-fits-all UX leaves revenue on the table',
      'Age-appropriate design and accessibility are not edge cases but revenue drivers (50+ users showed highest lifetime value)',
      'Gamification and social proof are powerful engagement levers in e-commerce, not just aesthetic enhancements',
      'Comparative functionality (unit pricing, bulk discounts) directly addresses customer pain points and reduces decision anxiety',
      'Cross-functional collaboration between data analysts, designers, and developers is critical for implementing segment-specific features',
      'Incremental, segment-focused improvements compound to dramatic business outcomes (2.8 → 4.8 star rating)',
    ],

    year: 2021,
    timeline: '5 months',
  },

  {
    id: 'cost-optimization-dashboard',
    title: 'Cost Optimization - Building Dashboard',
    subtitle: 'Data-Driven Cost Analysis for Manufacturing',
    thumbnail: '/images/projects/dashboard1.png',
    tags: ['Dashboard Design', 'Data Analysis', 'Business Intelligence'],

    overview: 'Built a comprehensive cost optimization dashboard for a food manufacturing company to identify and manage major cost drivers impacting profitability during post-COVID supply chain disruptions.',

    situation: {
      title: 'Situation',
      description: 'The client is a food manufacturing company facing significant cost pressures due to post-COVID supply chain disruptions and rising import prices.',
      context: 'The company had accumulated cost data in their SAP system but lacked a unified view of cost drivers across their manufacturing network. Managers struggled to identify which cost factors were driving profitability issues and where to focus optimization efforts.',
      keywords: ['Fragmented Data', 'No Cost Visibility', 'Supply Chain Crisis', 'Rising Costs'],
    },

    problem: {
      title: 'Problem',
      description: 'Analysis revealed critical challenges in cost visibility and decision-making:',
      painPoints: [
        'No clear cost categorization across raw materials, overhead, labor, and indirect costs',
        'Inability to compare cost performance across different factory locations',
        'Missing visibility into major cost drivers impacting profit margins',
        'Difficulty forecasting procurement price hikes and their business impact',
        'Lack of data-driven approach to supplier and material sourcing decisions',
      ],
    },

    solution: {
      title: 'Solution',
      howMightWe: 'How might we architect a multi-layered analytics system that transforms fragmented cost data into network-wide visibility for procurement optimization and factory benchmarking?',
      description: 'Built a progressive disclosure dashboard system that reveals cost data at multiple levels of detail, from executive summary to granular factory-level analysis.',
      approach: 'Conducted extensive cost driver analysis and recategorized cost structures. Created a tiered dashboard approach: Dashboard A for operational performance by factory, Dashboard B for cost summary by cost buckets. This enabled managers to drill down from high-level cost trends to specific factory and material-level insights.',
      tools: ['Python', 'Excel', 'Power BI', 'Data Analytics', 'SQL'],
      dashboards: [
        {
          id: 'dashboard-a',
          title: 'Dashboard A: Operational Performance Summary',
          description: 'Provides a high-level overview comparing sites across key operational metrics. Shows raw material waste, operational efficiency, labor productivity, and labor utilization for each factory location.',
          image: '/images/projects/dashboard1.png',
        },
        {
          id: 'dashboard-b',
          title: 'Dashboard B: Cost Summary Dashboard',
          description: 'Reveals total cost and cost-per-unit breakdown across major cost buckets for each factory. Enables managers to compare cost structures and identify which cost factors differ most between similar producing facilities.',
          image: '/images/projects/dashboard2.png',
        },
        {
          id: 'dashboard-c',
          title: 'Dashboard C: Detailed Cost Analysis',
          description: 'Deep dive into cost components including materials, labor, overhead, and sourcing decisions. Supports strategic buying decisions and supplier optimization.',
          image: '/images/projects/dashboard3.png',
        },
        {
          id: 'dashboard-d',
          title: 'Dashboard D: Forecasting & Scenarios',
          description: 'Enables procurement teams to forecast price hikes and model the business impact of different sourcing strategies, material changes, and supplier alternatives.',
          image: '/images/projects/dashboard4.png',
        },
      ],
    },

    implementation: {
      title: 'Implementation',
      description: 'Implemented a progressive disclosure dashboard system, allowing users to start with executive summaries and drill down to factory-specific details.',
      changes: [
        {
          before: 'Disconnected data sources with no unified cost view',
          after: 'Integrated SAP data into consolidated dashboard',
          explanation: 'Aggregated cost data from multiple sources into a unified data model, enabling real-time cost visibility across the manufacturing network.',
        },
        {
          before: 'Unable to compare factory performance',
          after: 'Factory-to-factory cost comparison now visible',
          explanation: 'Created benchmarking views that enable managers to compare operational metrics and cost structures across similar factories, identifying best practices and lagging sites.',
        },
        {
          before: 'Managers couldn\'t drill into cost drivers',
          after: 'Progressive disclosure reveals data at 4 levels of detail',
          explanation: 'Implemented tiered dashboard approach allowing users to start with summary metrics and progressively drill down to material-level and transaction-level details as needed.',
        },
      ],
    },

    impact: {
      title: 'Impact & Business Outcomes',
      description: 'The dashboard transformed cost visibility and enabled data-driven decision-making across the manufacturing organization.',
      metrics: [
        { label: 'Cost visibility improved', value: '360°', unit: 'complete network view' },
        { label: 'Decision-making speed', value: '↑40', unit: '%' },
        { label: 'Procurement optimization', value: '15-20', unit: '% potential savings identified' },
        { label: 'Manager satisfaction', value: '4.5/5', unit: 'on usability' },
      ],
      testimonial: 'The dashboard was transformative for our organization. Managers can now see cost trends in real-time and make data-driven decisions about sourcing and production. The CEO was impressed by how quickly the dashboard helped us identify cost reduction opportunities across the network.',
    },

    learnings: [
      'Progressive disclosure in dashboards is critical—executives need summary views while operations teams need transaction-level detail',
      'Cost categorization and data quality are foundational—the dashboard is only as good as the underlying cost classification',
      'Benchmarking across comparable units (factories, product lines) drives competitive behavior and operational excellence',
      'Forecasting capabilities in dashboards enable proactive decision-making rather than reactive cost management',
      'Cross-functional collaboration (finance, operations, procurement) is essential for building dashboards that truly impact business decisions',
      'User interviews and testing with actual managers revealed that simpler isn\'t always better—context-aware complexity adds value',
    ],

    year: 2022,
    timeline: '4 months',
  },
];

export { CaseStudy };
