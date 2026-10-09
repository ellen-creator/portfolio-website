// Portfolio Projects - UX Case Studies
// Structure: Situation → Problem → Solution → Implementation → Impact

export interface CaseStudy {
  id: string
  title: string
  navLabel?: string
  subtitle: string
  thumbnail: string
  tags: string[]

  // Hero summary
  role?: string
  team?: string
  outcome?: string

  // Outcome first: scope label, result, and before/after
  scope?: string
  result?: string
  before?: string
  after?: string

  // Usability changes: where it was, where it is now
  usability?: Array<{ area: string; before: string; after: string }>

  // Case Study sections
  overview: string

  // Thinking process: what we learned → what we decided
  insights?: Array<{
    source: string
    finding: string
    implication: string
  }>
  decisions?: Array<{
    question: string
    options: string[]
    chose: string
    why: string
  }>
  hypothesisCheck?: string

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
      wide?: boolean
      images?: string[]
      image?: string
      video?: string
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
    id: "vori",
    title: "Vori - Neuro-Interventional Smart Eyewear",
    navLabel: "AR UI design",
    subtitle: "Smart eyewear that detects sensory overload in neurodivergent children",
    thumbnail: "/images/projects/vori_mockup.png",
    tags: ["Product Strategy", "Neurotechnology", "Accessible Design", "User Research"],
    scope: "0 → 1 · Solo founder",
    result: "Concept validated with 121 children in usability testing. 87% early-detection accuracy in EEG data.",
    before: "No product. Teachers and parents see a meltdown only after it starts.",
    after: "Everyday-looking glasses that cue calm 30–60 seconds before escalation.",
    role: "Founder · research, interaction and UI design",
    team: "Solo, with 50+ clinicians, educators and parents as advisors",
    outcome: "121 children in usability testing; 87% early-detection accuracy",
    overview: "Lightweight smart eyewear that detects early signs of sensory overload in ADHD and ASD children and responds with calm peripheral cues.",
    insights: [
      {
        source: "Students",
        finding: "Kids feared being seen in anything \"medical\" and rejected heavy headsets over 200g.",
        implication: "The device must look like everyday glasses and weigh under 90g.",
      },
      {
        source: "Educators & parents",
        finding: "Distress is masked until a visible meltdown.",
        implication: "Detection must happen before behavior changes.",
      },
      {
        source: "Clinicians",
        finding: "Diagnosis relies on subjective reports.",
        implication: "The same signals should give clinicians objective data.",
      },
    ],
    decisions: [
      {
        question: "What form should it take?",
        options: ["EEG headset", "Wristband", "Everyday glasses"],
        chose: "Everyday glasses",
        why: "Headsets failed on weight and stigma. Glasses carry the sensors and look ordinary.",
      },
      {
        question: "Where should the calming cue appear?",
        options: ["Sound or vibration", "Center of vision", "Peripheral field only"],
        chose: "Peripheral field only",
        why: "The child keeps a clear view of the teacher and board, and peers never notice.",
      },
      {
        question: "When should it intervene?",
        options: ["After a meltdown", "On a fixed schedule", "30–60s before escalation"],
        chose: "30–60s before escalation",
        why: "Once behavior is visible, it is too late. Early neural markers give a window to prevent the crisis.",
      },
    ],
    hypothesisCheck: "Partly answered: early EEG data (61 ADHD/ASD vs 60 controls) shows distinct signatures. Still open: whether cues calm children in real classrooms, which the current phase tests.",
    situation: {
      title: "Situation",
      description: "Children with ADHD and ASD hide distress until it becomes a visible meltdown.",
      context: "Teachers and parents only see the crisis. Existing tools are clinical, heavy or reactive.",
      keywords: ["Hidden Distress", "Late Detection", "Stigma"],
    },
    problem: {
      title: "Problem",
      description: "Research with students, parents, educators and clinicians surfaced four needs:",
      painPoints: ["Students avoid anything that looks medical", "Headsets over 200g are uncomfortable", "Adults see the build-up too late", "Clinicians lack objective data"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we build an invisible, clinically grounded tool that prevents a crisis instead of managing it?",
      description: "Glasses under 90g with temple-mounted EEG sensors and eye tracking. Peripheral cues appear only when early overload signs are detected, so central vision stays clear.",
      tools: ["EEG algorithm design", "AWS + React", "Python ML", "Clinical research"],
    },
    implementation: {
      title: "Approach",
      description: "Research first, hardware last.",
      changes: [
        {
          title: "1 · Research",
          description: "Interviews with 50+ clinicians, educators, parents and community leaders.",
          image: "/images/projects/vori_glasses.png",
        },
        {
          title: "2 · Design",
          description: "Peripheral-only cues, a 90g form, and predictions 30–60 seconds before escalation.",
          image: "/images/projects/vori_eyetracking.png",
          video: "/images/projects/vori_visual_mockup.mp4",
        },
        {
          title: "3 · Testing",
          description: "121 children (60 controls, 61 ADHD/ASD) in classrooms and at home.",
          images: ["/images/projects/vori_report1.png", "/images/projects/vori_report2.png"],
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "Validated concept, now in usability testing. Funded by a University of Michigan DARE to Dream Grant.",
      metrics: [
        {
          label: "Children tested",
          value: "121",
          unit: "60 controls + 61 ADHD/ASD",
        },
        {
          label: "Early-detection accuracy",
          value: "87",
          unit: "% in EEG data",
        },
        {
          label: "Stakeholders consulted",
          value: "50+",
          unit: "clinicians, educators, parents",
        },
      ],
    },
    learnings: ["Research with the people who live the problem shaped every technical choice.", "Clinical efficacy is not enough. If children refuse to wear it, it does not work.", "Predicting a crisis is a different product from reacting to one."],
    year: 2026,
    timeline: "Ongoing · Founded Feb 2026",
  },

  {
    id: "lumi-redesign",
    title: "LUMI - Body Battery App UI/UX Redesign",
    navLabel: "App usability redesign",
    subtitle: "From a feature-first app to a calm daily companion",
    thumbnail: "/images/projects/lumi_thumbnail.png",
    tags: ["UI/UX Redesign", "Accessible Design", "Health Tech", "iOS & watchOS"],
    scope: "0 → 1 · Beta",
    result: "Beta is live with test users, who are reviewing it now. Today went from five cards to four focused blocks.",
    before: "Feature-first. Live heart rate on top, five cards, clinical wording.",
    after: "Battery first, one tip, and LUMI grows as you log. Adult wording throughout.",
    role: "Project lead · UX research, IA, UX writing and iOS build",
    team: "Built on the LUMI-ND team's adult app",
    outcome: "Today screen 5 → 4 blocks; beta ready",
    overview: "An iPhone and Apple Watch app for adults who burn out easily. I reordered the whole experience around 40 interviews: onboarding, explanation, features, then layout.",
    insights: [
      {
        source: "40 interviews",
        finding: "Features kept growing, but nothing told a new user what to understand first.",
        implication: "Redesign in the order people meet the app.",
      },
      {
        source: "Competitive review",
        finding: "\"What does 6/10 mean?\" Readiness scores are black boxes.",
        implication: "The score must explain itself.",
      },
      {
        source: "Research synthesis",
        finding: "People forget to sync, and generic tips feel irrelevant.",
        implication: "Sync automatically and match tips to energy and place.",
      },
    ],
    decisions: [
      {
        question: "What should the main number measure?",
        options: ["Stress score", "Body battery 0–100", "Energy 1–10"],
        chose: "Energy 1–10",
        why: "Falling energy says what to do (\"pace yourself\"). Ten segments read at a glance.",
      },
      {
        question: "How much should we explain?",
        options: ["Nothing", "The full formula", "Which signals help or drain you"],
        chose: "Which signals help or drain you",
        why: "Enough \"why\" to trust the score, without more numbers.",
      },
      {
        question: "Should tips name the condition?",
        options: ["Label by condition", "Ignore it", "Use it privately"],
        chose: "Use it privately",
        why: "Tips stay relevant, and no one sees a stigmatizing label.",
      },
      {
        question: "How do we motivate logging?",
        options: ["Daily streaks", "Points that never drop"],
        chose: "Points that never drop",
        why: "A bad week should not cost progress. That is when logging matters most.",
      },
    ],
    hypothesisCheck: "Not yet answered. The beta with 10–20 adults will test whether the score makes sense and whether people come back (7-day retention target: 50%).",
    situation: {
      title: "Situation",
      description: "LUMI-ND was built feature-first, for parents watching a child.",
      context: "Today opened on live heart rate and stacked five cards. Wording came from parent and teacher contexts (\"Meltdown\", IEP).",
      keywords: ["Feature-First", "Data Overload", "Wrong Audience"],
    },
    problem: {
      title: "Problem",
      description: "What the interviews surfaced:",
      painPoints: ["Too many numbers, no clear next step", "Generic tips that ignored energy and place", "Clinical labels in an app people open daily", "Manual sync and no warning before hard times"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we turn wearable data into one calm number and one small action that fits this person, today?",
      description: "Three goals: (1) reduce overload by showing one number and one action, not a dashboard; (2) explain the why before asking for anything; (3) reward logging without guilt, so a bad week never costs progress.",
      approach: "Every tip is tied to a PubMed study. Coverage was checked across 2,304 situations. Shipped in SwiftUI with 588 automated tests.",
      tools: ["Interviews (40)", "Information architecture", "UX writing", "WCAG AA", "SwiftUI", "HealthKit", "PubMed evidence"],
    },
    implementation: {
      title: "Implementation & Changes",
      description: "Rebuilt in the order people meet the app.",
      changes: [
        {
          title: "Step 0 · Research",
          description: "40 interviews (ABA and IEP clinicians, U-M Medical School faculty, and people who burn out) set the order.",
        },
        {
          title: "Step 1 · Onboarding",
          description: "A short launch story, one-time setup and a tab walkthrough. Low days are \"information, not failure.\"",
          image: "/images/projects/lumi_onboarding.jpg",
          wide: true,
        },
        {
          title: "Step 2 · Explanation",
          description: "A 0–100 \"early estimate\" became 1–10 with a plain status. Details shows which signals help or drain you.",
          image: "/images/projects/lumi_battery.jpg",
          wide: true,
        },
        {
          title: "Step 3 · Features",
          description: "55 tips from 29 PubMed studies, picked by energy, place and recent days. Heads-ups warn before hard times.",
          image: "/images/projects/lumi_energizer.jpg",
          wide: true,
        },
        {
          title: "Step 4 · Main Layout",
          description: "Battery first, then one tip. LUMI grows only when you log: 10, 8, 6, 4, then 2 points through the day.",
          image: "/images/projects/lumi_today.jpg",
          wide: true,
        },
      ],
    },
  usability: [
    { area: "Launch", before: "Feature list, no explanation of the numbers", after: "Four launch screens: what LUMI is, what the battery reads, and why" },
    { area: "Setup", before: "A \"Connect Watch\" button and manual sync that users forgot", after: "Three-step setup; sync starts automatically after one Health permission" },
    { area: "Today", before: "Live heart rate first, five cards", after: "Battery first, one tip, then LUMI. Analysis moved into Details" },
    { area: "Logging", before: "No reward for logging", after: "One-tap check-ins with Undo. Points shrink through the day; rapid taps earn nothing" },
    { area: "Tips", before: "A static strategy library", after: "Tips chosen by battery, place and recent days. \"This helped\" and \"Not for me\" tune them" },
    { area: "Warnings", before: "No warning before hard times", after: "Heads-ups before hard times, with the user choosing timing and frequency" },
    { area: "Accessibility", before: "Light grey text, color-only status, parent-and-teacher wording", after: "WCAG AA text contrast, 52pt buttons, icon-plus-text status, large text scaling, calm view" },
  ],
    impact: {
      title: "Outcome & Next Steps",
      description: "Beta deployed to test users; reviews are coming in now. Next: measure 7-day retention and whether the score makes sense. Supported by NSF I-Corps Regional funding.",
      metrics: [
        {
          label: "Interviews",
          value: "40",
          unit: "experts, clinicians & users",
        },
        {
          label: "Today screen",
          value: "5 → 4",
          unit: "cards, battery first",
        },
        {
          label: "Research-backed tips",
          value: "55",
          unit: "from 29 PubMed studies",
        },
        {
          label: "Situations checked",
          value: "2,304",
          unit: "for coverage",
        },
      ],
    },
    learnings: ["Research reorders the roadmap: people needed onboarding and explanation before features.", "Fewer numbers, more understanding. Detail lives one tap away.", "Personalize without labeling.", "Reward without punishing: no streaks."],
    year: 2026,
    timeline: "Beta redesign · Oct 2026",
  },

  {
    id: "arklink-lead-generation",
    title: "Arklink Lead Generation Optimization",
    navLabel: "Professional website",
    subtitle: "Persona-driven landing page and chatbot redesign",
    thumbnail: "/images/projects/arklink_thumnail.png",
    tags: ["UX Design", "Lead Generation", "Chatbot Design"],
    scope: "Redesign · Client project",
    year: 2025,
    timeline: "2 months",
    result: "Lead quality +42%, CTA click-through +55%, and 68% of chatbot conversations completed.",
    before: "Under 1% conversion. A generic chatbot and a company-first landing page.",
    after: "Two persona flows: reassurance for people in crisis, proof of expertise for researchers.",
    role: "UX strategy, persona research and conversation design",
    team: "With Arklink executive leadership",
    outcome: "Lead quality +42%; CTA click-through +55%",
    overview: "A legal platform for intimate image crimes needed conversions. Traffic was fine; the conversation was failing.",
    insights: [
      {
        source: "Funnel analysis",
        finding: "5–10% of visitors opened the chatbot, but almost none converted inside it.",
        implication: "The leak was the conversation, not the ads.",
      },
      {
        source: "User interviews",
        finding: "People in crisis and researchers arrive with opposite needs.",
        implication: "One generic script cannot serve both.",
      },
      {
        source: "Page audit",
        finding: "The landing page led with company information.",
        implication: "Put the next step first.",
      },
    ],
    decisions: [
      {
        question: "How should the chatbot open?",
        options: ["One generic script", "A menu of services", "Separate flows per persona"],
        chose: "Separate flows per persona",
        why: "The two personas need opposite first messages, so one script would fail one of them.",
      },
      {
        question: "What should someone in crisis see first?",
        options: ["Pricing and process", "Company credentials", "Reassurance and a personal commitment"],
        chose: "Reassurance and a personal commitment",
        why: "Panic blocks reading. A personal commitment lowers anxiety before asking for anything.",
      },
    ],
    hypothesisCheck: "Supported: tailoring the conversation by segment raised lead quality 42% and completion to 68%.",
    situation: {
      title: "Situation",
      description: "Arklink helps victims of intimate image crimes, 24/7.",
      context: "Ad spend was high, but conversion stayed below 1%. We needed to know whether the ads or the messaging was failing.",
      keywords: ["Low Conversion", "Generic Messaging", "One-Size-Fits-All"],
    },
    problem: {
      title: "Problem",
      description: "Interviews and behavior analysis showed four issues:",
      painPoints: ["Different users needed different messages", "Chatbot answers were generic", "The landing page prioritized the company", "No journey map for different user types"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we identify which segments to serve and design a conversion-focused experience for each?",
      description: "Two personas, two messaging systems, two chatbot flows, plus a direct inquiry bar on the homepage.",
      approach: "Two personas from interviews, segment-specific copy, UI flows and journey maps.",
      tools: ["User research", "Journey mapping", "Persona design", "Copy strategy"],
    },
    implementation: {
      title: "Implementation & Changes",
      description: "Each persona got its own opening.",
      changes: [
        {
          title: "Persona 1 · Urgent help",
          description: "Lead with reassurance and personal accountability. Conversion rose among high-urgency users.",
          images: ["/images/projects/arklink_persona1_cj.png", "/images/projects/arklink_chatbot1.png"],
        },
        {
          title: "Persona 2 · Technical research",
          description: "Offer technical documentation and methodology up front. Lead quality improved.",
          images: ["/images/projects/arklink_persona2_cj.png", "/images/projects/arklink_chatbot2.png"],
        },
        {
          title: "Direct inquiry bar",
          description: "A \"Quick Inquiry\" bar on the homepage removed the multi-page search for contact details.",
          image: "/images/projects/arklink_inquirybar.png",
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "Persona-driven flows improved engagement and lead quality.",
      metrics: [
        {
          label: "Lead quality",
          value: "42",
          unit: "%",
        },
        {
          label: "Conversation completion",
          value: "68",
          unit: "%",
        },
        {
          label: "CTA click-through",
          value: "↑55",
          unit: "%",
        },
        {
          label: "Time on page",
          value: "↑3.5",
          unit: "min",
        },
      ],
    },
    learnings: ["Personas must come from real research, not assumptions.", "Segment-specific messages beat one-size-fits-all.", "Match the chatbot personality to the user's state of mind."],
  },

  {
    id: "ecommerce-ui-redesign",
    title: "E-Commerce UI/UX Redesign",
    navLabel: "E-commerce application audit",
    subtitle: "Segment-driven redesign for a shopping app that had lost its customers",
    thumbnail: "/images/projects/ec3.png",
    tags: ["E-Commerce", "UX Research", "UI Design", "Accessibility"],
    scope: "Redesign · Client project",
    year: 2021,
    timeline: "5 months",
    result: "Google Play rating 2.8 → 4.8. Conversion +45%, repurchase +38%, average order value +45%.",
    before: "2.8 stars. Hard for 50+ users to buy; reviews said the app \"just stopped\".",
    after: "4.8 stars. Clear layout, larger targets, and different paths for each customer segment.",
    role: "Business Analyst · segmentation, UI audit and UI rationale",
    team: "Kearney team with the client's designers and developers",
    outcome: "Google Play 2.8 → 4.8; conversion +45%",
    overview: "A TV-and-app shopping business was losing revenue as customers moved to mobile. The app was too hard to buy from.",
    insights: [
      {
        source: "Heuristic walkthrough",
        finding: "The purchase flow was hard to finish even for our own team.",
        implication: "This was a whole-app problem, not one screen.",
      },
      {
        source: "Customer data",
        finding: "Customers in their 50s and 60s drove the most sales, yet had low contrast and small targets.",
        implication: "Design for this segment first.",
      },
      {
        source: "App store reviews",
        finding: "\"After so many updates, the application just stopped.\"",
        implication: "Stability and consent mattered as much as polish.",
      },
    ],
    decisions: [
      {
        question: "One UI for everyone, or by segment?",
        options: ["Refresh one UI for all", "Segment-specific experiences"],
        chose: "Segment-specific experiences",
        why: "Active buyers needed cross-selling and social proof. 50–60s customers needed contrast and bigger targets.",
      },
      {
        question: "How do we keep hesitant buyers moving?",
        options: ["More discounts", "Repeated exposure to other buyers' reviews"],
        chose: "Repeated exposure to other buyers' reviews",
        why: "Customers keep reconsidering until payment. Reviews reassure at each step; offers support, not lead.",
      },
    ],
    hypothesisCheck: "Supported: the rating rose from 2.8 to 4.8, and reviews moved from \"it just sucks\" to \"fast and easy to log in\".",
    situation: {
      title: "Situation",
      description: "The client sold through TV and an app. As customers moved to mobile, app revenue fell.",
      context: "The UI was so unintuitive that even experienced users struggled to buy.",
      keywords: ["Declining Revenue", "Poor UI", "No Segmentation"],
    },
    problem: {
      title: "Problem",
      description: "Six issues prevented purchases:",
      painPoints: ["No segmentation: every user saw the same app", "Poor contrast and small targets for 50+ users", "No reasons to return or cross-sell", "A long checkout that caused abandonment"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we design segment-specific mobile experiences that turn abandonment into purchase?",
      description: "Customer segmentation drove eight UX changes: accessibility for older users, social proof, cross-selling, and light gamification.",
      approach: "Segmentation, UI audit, rationale for each change, then feasibility review with the client.",
      tools: ["Customer data analytics", "Figma", "Accessibility audit", "Behavioral analysis"],
    },
    implementation: {
      title: "Implementation & Strategic Touchpoints",
      description: "Eight changes, each tied to a data insight.",
      changes: [
        {
          image: "/images/projects/ec1.png",
          title: "Awareness strategy",
          description: "Segments by churn and purchase stage shaped the engagement plan.",
        },
        {
          image: "/images/projects/ec2.png",
          title: "Segment-focused design",
          description: "Higher contrast and active elements for silver customers.",
        },
        {
          image: "/images/projects/ec3.png",
          title: "TV-to-app integration",
          description: "Let TV viewers complete purchases in the app.",
        },
        {
          image: "/images/projects/ec4.png",
          title: "Social proof",
          description: "Review messaging to ease purchase anxiety.",
        },
        {
          image: "/images/projects/ec5.png",
          title: "Purchase confirmation",
          description: "Related products at checkout, using \"others also bought\".",
        },
        {
          image: "/images/projects/ec6.png",
          title: "Senior-friendly accessibility",
          description: "Stronger contrast, voice input and repeat exposure.",
        },
        {
          image: "/images/projects/ec7.png",
          title: "Engagement gamification",
          description: "Quizzes tied to loyalty points. Session time rose 30%.",
        },
        {
          image: "/images/projects/ec8.png",
          title: "Data-driven segmentation",
          description: "Cross-analysis of behavior and purchases to refine segments.",
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "Rating, conversion and repeat purchases all improved.",
      metrics: [
        {
          label: "Google Play rating",
          value: "4.8",
          unit: "from 2.8 (+71%)",
        },
        {
          label: "Conversion rate lift",
          value: "45",
          unit: "%",
        },
        {
          label: "Repurchase growth",
          value: "38",
          unit: "%",
        },
        {
          label: "Average order value",
          value: "↑45",
          unit: "%",
        },
      ],
    },
    learnings: ["One-size-fits-all UX leaves revenue on the table.", "Age-appropriate design is a revenue driver, not an edge case.", "Cross-functional work decides whether segment features ship."],
  },

  {
    id: "internal-ops-dashboard",
    title: "Internal Operations Dashboard",
    navLabel: "Data architecture and dashboard",
    subtitle: "One dashboard that connects Salesforce and ERP, used by every department",
    thumbnail: "/images/projects/dashboard-system-mock.png",
    tags: ["Dashboard Design", "Data Architecture", "Business Intelligence"],
    scope: "Data · Client project · NDA",
    year: 2021,
    timeline: "4 months",
    result: "Every department now works in one dashboard connected to Salesforce and ERP. Time-series cost analysis delivered a 20% cost reduction.",
    before: "Salesforce and ERP were hard for teams to use, so work moved between them by hand.",
    after: "One connected dashboard, readable for every department, with time-series cost analysis.",
    role: "Business Analyst, Kearney · data architecture, dashboard design and cost analysis",
    team: "Project team with the client's finance, operations and department leads",
    outcome: "20% cost reduction; adoption rose across departments",
    overview: "A client needed its Salesforce and ERP data in one place, usable by non-technical teams, and a way to find cost savings in the data.",
    insights: [
      {
        source: "Team interviews",
        finding: "Salesforce and ERP were hard to use, so people copied data between them by hand.",
        implication: "Connect the systems first; the interface must be readable without training.",
      },
      {
        source: "Cost data review",
        finding: "Cost data sat in separate systems, so trends across time were hard to see.",
        implication: "Analyze integrated time-series data to find where savings are possible.",
      },
      {
        source: "Department needs",
        finding: "Each department needed its own view, but the shared data had to stay consistent.",
        implication: "One data model, role-based views for every department.",
      },
    ],
    decisions: [
      {
        question: "Build a separate dashboard for each system?",
        options: ["Keep separate reports per system", "One connected dashboard"],
        chose: "One connected dashboard",
        why: "Teams work across both systems, so one view removes the manual copying.",
      },
      {
        question: "How do we find savings in the data?",
        options: ["Review monthly totals", "Time-series analysis by cost category"],
        chose: "Time-series analysis by cost category",
        why: "Trends by category show where costs rise and where cuts are possible.",
      },
    ],
    hypothesisCheck: "Supported: the integrated time-series analysis led to a 20% cost reduction, and adoption rose across departments.",
    situation: {
      title: "Situation",
      description: "The client used Salesforce and an ERP, but teams found both hard to use.",
      context: "Work moved between the two systems by hand, and cost trends were hard to see.",
      keywords: ["Hard to Use", "Manual Work", "Hidden Trends"],
    },
    problem: {
      title: "Problem",
      description: "Three problems blocked adoption and savings:",
      painPoints: ["Salesforce and ERP were hard for non-technical teams", "Data sat in two systems, unconnected", "Cost trends over time were hard to read"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we give every department one readable view of its data, and find cost savings in that data?",
      description: "Connected Salesforce and ERP into one data model, then built a readable dashboard for every department and a time-series cost analysis.",
      approach: "Data architecture across both systems, role-based dashboard views, plain labels and large type, and time-series cost analysis.",
      tools: ["Salesforce", "ERP", "Data architecture", "Dashboard design", "Time-series analysis"],
    },
    implementation: {
      title: "Implementation",
      description: "The real screens are confidential under NDA, so these are mock-ups with placeholder figures.",
      changes: [
        {
          title: "Connect both systems",
          description: "One data model for Salesforce and ERP, so each department sees the same underlying data.",
          image: "/images/projects/dashboard-system-mock.png",
        },
        {
          title: "One dashboard for every team",
          description: "Readable labels and large type, with views for each department. Adoption rose across departments.",
          image: "/images/projects/dashboard-overview-mock.png",
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "A 20% cost reduction, found through time-series analysis of the connected data.",
      metrics: [
        {
          label: "Cost reduction",
          value: "20",
          unit: "%",
        },
        {
          label: "Departments",
          value: "All",
          unit: "can use the dashboard",
        },
        {
          label: "Adoption",
          value: "↑",
          unit: "rose significantly by department",
        },
      ],
    },
    learnings: ["Connect the systems before you design the views. Teams can only use what is connected.", "Readable beats complete: non-technical users need plain labels and large type.", "Time-series analysis turns a connected dataset into specific cost actions."],
  },
];
