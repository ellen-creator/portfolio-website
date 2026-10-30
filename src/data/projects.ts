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

  // Research methods used in this case
  methods?: string[]

  // User flows, redrawn during the redesign (horizontal steps)
  flows?: Array<{ title: string; caption: string; steps: Array<{ title: string; note?: string; decision?: boolean }> }>

  // Research to mock-up: one row per stage, with the method and what it produced
  process?: Array<{ stage: string; method: string; output: string }>

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

  // Synthesis: each finding, the rule written from it, and where it shows up
  rules?: Array<{ found: string; rule: string; onScreen: string }>
  // The hypothesis, stated so it can be tested
  hypothesis?: { ifWe: string; then: string; measuredBy: string }

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
      captions?: string[]
      caption?: string
      image?: string
      phone?: boolean
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
    id: "lumi-redesign",
    title: "LUMI - Energy Companion App for iPhone + Apple Watch",
    navLabel: "App + Watch design",
    subtitle: "Turning drained days into information, not failure",
    thumbnail: "/images/projects/lumi2/final-light.jpg",
    tags: ["App + Watch design", "Accessible Design", "Health Tech", "iOS & watchOS"],
    scope: "0 → 1 · Beta",
    result: "One app that answers four questions about your energy: Today is now, Journal is what happened, Analysis is why, Energizer is what helps.",
    before: "v0: five tabs, a 0–10 stress score, streak points and a character called Echo. 8–9 colours on one screen.",
    after: "Four tabs, one question each. A 1–10 Body Battery, growth from logged days, four Lumis to choose from, and two hues plus neutrals.",
    role: "All UI/UX design, end to end",
    team: "CPO of the team",
    outcome: "In beta with 25 potential users, testing data accuracy and usability",
    methods: ["40 interviews", "Two user groups defined", "User flows (v0 → one day)", "Wireframe versions side by side", "Character benchmark", "Sensory-overload literature review", "Palette testing (5 palettes)", "Information architecture", "PubMed evidence review (29 studies)"],
    process: [
      { stage: "Users & flows", method: "Two users who burn out for opposite reasons; the v0 flow rebuilt around one day", output: "5 tabs → 4, stress score → Body Battery" },
      { stage: "Wireframes", method: "Each tab wireframed in versions, then compared side by side", output: "Energizer: star jar and Weekly Report" },
      { stage: "Characters", method: "Four styles explored, a benchmark, a strategy and a lore", output: "One character became four Lumis" },
      { stage: "Brand", method: "Sensory-overload research, then palettes from 8–9 colours down", output: "Sage + the Lumi you chose" },
      { stage: "IA & build", method: "Mapping how data moves, refining by subtracting, SwiftUI with 588 automated tests", output: "Four tabs in light and dark; beta" },
    ],
    overview: "ADHD and autistic young adults notice too late that their energy is gone, and most trackers add numbers and streaks to break. LUMI is an iPhone and Apple Watch app with four tabs, one question each, designed end to end: users and flows, wireframes, characters, brand, and the final app now in beta.",
    insights: [
      {
        source: "40 interviews · User A · ADHD · 18–34",
        finding: "Notices too late that the energy is gone. Too many tasks and they can't start; too many choices and they freeze. A broken streak and the app gets deleted.",
        implication: "One thing to do now, a button to start it, and rewards where a missed day is never a penalty.",
      },
      {
        source: "User B · Autistic · 18–34",
        finding: "Spends energy on noise, light, crowds and masking. Sudden changes and screens full of rules are a load.",
        implication: "Calm colours, predictable screens, plain words over numbers, and warnings ahead of time.",
      },
      {
        source: "Competitive review · wearable and wellness apps",
        finding: "“What does 6/10 mean?” Readiness and stress scores are black boxes, so people stop trusting them.",
        implication: "Words over numbers, with the detail one tap away.",
      },
      {
        source: "v0 audit · our own first build",
        finding: "Five tabs, a stress score and streaks. People forgot to sync, and one bad week broke the streak.",
        implication: "Fewer tabs, and growth that never resets.",
      },
      {
        source: "Onboarding asks",
        finding: "What fits me (ADHD, autistic, anxiety…), what drains me (classes, masking, last-minute changes, noise…), and their person to reach out to on hard days.",
        implication: "Tips and heads-ups are personal from day one, with 988 always there in a crisis.",
      },
    ],
    decisions: [
      {
        question: "What should the main number measure?",
        options: ["Stress score 0–10", "Body Battery 1–10"],
        chose: "Body Battery 1–10",
        why: "Show the energy left today instead of grading stress. “Steady. Pace yourself.” comes before “6 / 10”.",
      },
      {
        question: "How do we reward logging?",
        options: ["Streaks & points", "Growth from logged days"],
        chose: "Growth from logged days",
        why: "A missed day is never a penalty, so nobody quits after one bad week.",
      },
      {
        question: "How many tabs?",
        options: ["5 tabs", "4 tabs, one question each"],
        chose: "4 tabs, one question each",
        why: "Today · Journal · Analysis · Energizer. Each tab answers one question, and each card asks for one action.",
      },
      {
        question: "What happens to Lumi at the end of the story?",
        options: ["Flies home to space", "Settles in on Earth"],
        chose: "Settles in on Earth",
        why: "In the first draft, success meant a goodbye. Now each small log helps Lumi put down roots, and you are its kind neighbour.",
      },
      {
        question: "How many colours on one screen?",
        options: ["8–9 colours", "2 hues + neutrals"],
        chose: "2 hues + neutrals",
        why: "Sensory research pointed to soft, consistent colour with one highlight. Meaning comes from words, icons and fill level, never colour alone.",
      },
    ],
    rules: [
      { found: "40 interviews: new users kept asking “what am I looking at?”", rule: "One job per screen; explain first", onScreen: "Each tab answers one question" },
      { found: "Competitive review: too many numbers confused people, and a score gave no reason", rule: "Words, not scores", onScreen: "“Running low”; the number sits behind ⓘ" },
      { found: "v0 test: one bad week broke the streak, and people stopped logging", rule: "A missed day costs nothing", onScreen: "Lumi grows from days logged; no streak counter" },
      { found: "Field work in school settings: busy, many-colour screens were too much to take in", rule: "Two calm hues; never colour alone", onScreen: "Sage + your Lumi's colour, with a label on every state" },
      { found: "29 PubMed studies on what restores energy", rule: "Advice must be evidence-based", onScreen: "55 recharge tips, picked by battery, place and recent days" },
    ],
    hypothesis: {
      ifWe: "show one Body Battery in words, one next action, and a character that grows only when you log",
      then: "people notice low energy earlier, and keep logging after a bad week",
      measuredBy: "a beta with 25 potential users: does the battery match how they feel, can they use it without help, do they come back",
    },
    hypothesisCheck: "Being tested now: 25 potential users are in the beta, checking data accuracy (does the battery match how they feel?) and usability (can they use it without help?).",
    situation: {
      title: "Situation",
      description: "Most energy trackers add numbers and streaks.",
      context: "ADHD and autistic young adults notice too late that their energy is gone.\n\nMost trackers add numbers and streaks to break.",
      keywords: ["Drained Too Late", "Numbers & Streaks", "Sensory Load"],
    },
    problem: {
      title: "Problem",
      description: "What the two user groups need:",
      painPoints: ["Too many tasks and choices: they can't start, or they freeze", "A broken streak, and the app gets deleted", "Noise, light, crowds and masking drain energy before anyone notices", "Sudden changes and screens full of rules add load"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we help ADHD and autistic young adults notice their energy before it runs out, without adding numbers, streaks or noise?",
      description: "Four rules every screen had to pass. One job per screen: each tab answers one question, and each card asks for one action. Words over numbers: detail sits behind a small ⓘ. Rewards without failure: Lumi grows on days you log, and nothing resets when you miss one. Calm and ahead of time: few colours, predictable layouts, and a heads-up before the hard part of the day.",
      approach: "About 40 interviews (ABA and IEP clinicians, U-M Medical School faculty, and people who burn out) set the order of the work. Every tip is tied to one of 29 PubMed studies: 55 tips chosen by battery, place and recent days. The first flow measured stress, so it was rebuilt around energy and around one day: a morning battery, a heads-up before class, a Watch tap in class, a one-tap Journal in the evening, and a weekly discovery that becomes next week's heads-up.",
      tools: ["Figma", "Information architecture", "UX writing", "Character design", "WCAG AA", "SwiftUI", "watchOS", "HealthKit"],
    },
    flows: [
      {
        title: "One day with LUMI",
        caption: "The new flow follows one day, then loops into next week. The loop is the product.",
        steps: [
          { title: "Morning · Today", note: "Body Battery says “Steady. Pace yourself.” Lumi's face matches." },
          { title: "Before class · Heads-up", note: "“In 50 min · hard 3 of the last 4 weeks” with a 3-min reset" },
          { title: "In class · Watch tap", note: "Heart rate rises while sitting still: a gentle “let's take a moment”" },
          { title: "Evening · Journal", note: "One tap for how you feel. The log feeds Lumi." },
          { title: "A week later · Analysis", note: "“You tend to tense up during Statistics lecture.”" },
          { title: "Next week?", note: "The discovery becomes a heads-up an hour before class", decision: true },
        ],
      },
    ],
    implementation: {
      title: "Implementation & Changes",
      description: "From users and flows to characters, brand and the final app, in the order it was designed.",
      changes: [
        {
          title: "User flows · from stress to energy",
          description: "The v0 flow had five tabs, a 0–10 stress score, streak points and a character called Echo. Stress became a 1–10 Body Battery, streaks became growth from logged days, and five tabs became four.",
          image: "/images/projects/lumi2/flow-v0.jpg",
          wide: true,
        },
        {
          title: "User flows · after: new and existing users",
          description: "The redrawn flows: a new user goes from install through a four-step setup and a practice tour to the first morning Body Battery and a day-14 survey. An existing user comes in from the app, a Watch quick log or a body-signal alert, and every path ends in one Feed card and Lumi's reaction. Red boxes mark the gaps found while drawing them.",
          image: "/images/projects/lumi2/flows-after.jpg",
          wide: true,
        },
        {
          title: "Wireframes · versions side by side",
          description: "Each tab was wireframed in versions, then chosen side by side. The Energizer tab went through three directions (one thing now, Lumi's week, a toolbox) before a star jar and Weekly Report stuck, with the toolbox one tap away.",
          image: "/images/projects/lumi2/wireframes.jpg",
          wide: true,
        },
        {
          title: "Characters · why a companion",
          description: "To make logging feel like care, it began with a character for burnout-prone students: a safe base that brings people back without becoming a chore. A nurturing loop that never makes you feel guilty. Tiny tasks are Lumi's snacks; missing one gets “I was waiting for you”, never a scolding. Lumi names feelings that are hard to name (“You seem a little tired. Rest together?”), and simply keeps you company, like body doubling. Lumi is a pacemaker, not a manager.\n\nThe lore was rewritten so success never means goodbye. In the first draft, Lumis ate your logs to fly back to space. In the final, they chose your phone as a new home on Earth. When logs stop, Lumi never leaves or gets sick: it dims and waits, and on return says “Energy's filling up!” The gap is never mentioned.",
        },
        {
          title: "Four Lumis · first drawn flat, four personalities",
          description: "The first cast was drawn flat. Spark (vibrant) dances when you meet a deadline. Nubi (peaceful) glows slow and calm when you feel anxious. Lumo (expectant) sparkles at tiny wins. Mallo (amicable) blooms when you talk to it. All four share the same dot eyes (eye contact without busy pupils), each has its own silhouette, and ears and short limbs make them read as characters, not blobs.",
          image: "/images/projects/lumi2/four-lumis.jpg",
          wide: true,
        },
        {
          title: "Benchmark · a character people want to hold",
          description: "Collectable plush (round, simple faces, a set you want to complete), touchable texture (soft fur, dot eyes, low stimulus) and cosy companion apps. A shape board of cloud and plush mascots pointed the flat cast toward something softer and more touchable.",
          image: "/images/projects/lumi2/benchmark.jpg",
          wide: true,
        },
        {
          title: "Redrawn in 3D · a glowing, touchable body",
          description: "After the benchmark, the four were redrawn in 3D. Styles were explored (paper-cut, forest, iridescent cloud, galaxy jelly). What stayed: a soft, glowing body with stars inside and a calm smile.",
          image: "/images/projects/lumi2/explorations.jpg",
        },
        {
          title: "Character development · model sheets to five growth stages",
          description: "Turnarounds, fixed proportions and simplified sizes for app, widget, Watch and tab icon. In the app, five stages are tied to logging days, and the first level-up lands on day 3.",
          image: "/images/projects/lumi2/model-stages.jpg",
          wide: true,
        },
        {
          title: "Brand research · sensory overload first",
          description: "Before picking colours:\n• Sensory sensitivity is common in ADHD, not only autism (meta-analysis of 30 studies, 5,374 people; Jurek et al. 2025; Bijlenga et al. 2017).\n• Highly sensitive people prefer soft colours; yellow can be overloading (Liu 2025; Grandgeorge & Masataka 2016).\n• Consistency matters as much as count: new colour cues distracted adults with ADHD, repeated ones did not (Sasi et al. 2026).\n• Colouring only the target reduced visual crowding (Ifrah-Tsruya et al. 2026).\n• 28 web guidelines for autistic users point to low visual load and predictable screens (Britto & Pizzolato 2016; Liu et al. 2021).",
        },
        {
          title: "Brand · the calmest option",
          description: "Five palettes were tested (Proposal A, Palette F, R1 pastel sage, A2 two hues, Dark B), from 8–9 colours on one screen down to two hues plus neutrals. Neutrals ~80%, sage ~15% for what you tap, and your Lumi ~5% for warmth: many people with ADHD are sensory seekers, so the one warm colour is one you chose. Dark B is a near-black green, softer than pure black at night. ",
          image: "/images/projects/lumi2/palette.jpg",
        },
        {
          title: "Typography · many candidates, one rounded family",
          description: "The first build gave LUMI its own type: Nunito (rounded) for titles and buttons, Nunito Sans for reading and numbers, and Patrick Hand for Lumi's speech bubble.\n\nFor the beta the team then compared system fonts: SF Pro, SF Pro Rounded, New York, Avenir Next, Helvetica Neue, Baskerville, Times New Roman, and Apple SD Gothic Neo for Korean. Playful faces (Chalkboard, Marker Felt) were ruled out for a companion you lean on. Avenir Next came close, but the comparison stayed abstract until fonts were seen on real screens, so the decision was parked with Nunito as the baseline.\n\nThen a build bug settled it: Xcode builds silently fell back to the system font while TestFlight showed Nunito, so screens looked different from build to build. The fix put Nunito everywhere, with bold tab titles: one rounded, friendly family that reads as calm and never changes under you.",
        },
        {
          title: "Information architecture · how data moves",
          image: "/images/projects/lumi2/ia.jpg",
          description: "Data comes from the Watch (heart rate & motion), Health (sleep), Calendar (classes & events) and you (feelings, meds, meals). LUMI works out the Body Battery, tips and heads-ups, live alerts on the Watch, patterns over weeks, and stars and growth, then shows them in Today, Journal, Analysis, Energizer and on the Watch. Mapping the IA exposed seven places where the Watch, the phone and the screens could disagree. Fixing them became its own workstream.",
        },
        {
          title: "Iteration 1 · advice sits where you act on it",
          description: "Refining by subtracting. The reason line and paper title were removed; the tip's first sentence is bold and the source sits behind ⓘ. What helps now moved from Today to Energizer, next to ▶ Try, and Try next merged into Browse as a For you | All toggle.",
          image: "/images/projects/lumi2/helps-before-after.jpg",
          wide: true,
        },
        {
          title: "Iteration 2 · a paragraph of numbers became two bars",
          description: "Body tension before vs during, feelings as one bar, a line of empathy, and the small print behind ⓘ. All six kinds of discovery use one template, readable in light and dark.",
          images: ["/images/projects/lumi2/analysis-before-after.jpg", "/images/projects/lumi2/six-kinds.jpg"],
          captions: ["Before and after: one Analysis card.", "All six kinds of discovery, one template."],
        },
        {
          title: "Iteration 3 · every setting gets one predictable home",
          description: "How the app behaves lives in Settings; you and your data (profile, privacy, export) live in Account. The Watch tap is a choice (Steady knock, Heartbeat or Gentle rise, each with Try), because a tap that feels wrong is a sensory problem, not a preference. Nunito everywhere, so no screen suddenly looks different.",
          image: "/images/projects/lumi2/settings.jpg",
        },
        {
          title: "Data that agrees",
          description: "Fixing the places where the Watch and phone disagreed:\n• No alerts while asleep (sleep inferred from a still wrist and a dipped heart rate).\n• No lag between tabs: Analysis recomputes only when its own inputs change.\n• Stars follow the account, and a new account gets a new jar on the Watch too.\n• The tour is practice: following along saves no log, star or growth.\n• How a move felt reaches Analysis, even on days the app wasn't opened.",
        },
        {
          title: "Final design · four tabs, one question each",
          description: "Today: battery, Lumi, a heads-up and one-tap feelings. Journal: heart rate and battery across the day's events. Analysis: one discovery at a time, drawn as bars. Energizer: star jar, Weekly Report and what helps now.",
          images: ["/images/projects/lumi2/final-light.jpg", "/images/projects/lumi2/final-dark.jpg"],
          captions: ["Light", "Dark B"],
        },
        {
          title: "Rare moments, designed to be calm and reversible",
          description: "The tour is practice: try feeding your Lumi for real, but nothing is saved, and Skip or Later is there any time. A gentle alert says “Let's take a moment”, explains why, offers a small reset, and “I'm okay” is always there. Honest about limits: off by default, with a preview, and clear that it is not a medical monitor.",
          image: "/images/projects/lumi2/moments.jpg",
          wide: true,
        },
      ],
    },
  usability: [
    { area: "Battery", before: "4 band colours", after: "One sage bar and a word (“Low for you”)" },
    { area: "Energizer types", before: "4 pastel fills", after: "Neutral chips with icon + word" },
    { area: "Rewards", before: "Gold spark", after: "Your Lumi's colour" },
    { area: "Charts", before: "Many series colours", after: "Sage for you, grey for usual" },
    { area: "Alerts", before: "Warm red / coral", after: "Calm words, Lumi's face and a haptic" },
    { area: "Tips", before: "A long What helps now card on Today", after: "In Energizer next to ▶ Try; source behind ⓘ" },
    { area: "Analysis", before: "A paragraph of numbers", after: "Two bars and a line of empathy, one template for all six discoveries" },
    { area: "Type", before: "Three fonts, and some builds fell back to the system font", after: "Nunito everywhere, with bold tab titles" },
    { area: "Settings", before: "Mixed into Account", after: "Settings for how the app behaves, Account for you and your data" },
  ],
    impact: {
      title: "Outcome & Next Steps",
      description: "UI/UX designed end to end, now in beta with 25 potential users, testing data accuracy and usability. Next: per-account logs, growth from synced logs, and matching Today and Journal numbers. Supported by a Korean government start-up grant and NSF I-Corps Regional funding.",
      metrics: [
        { label: "potential users in beta", value: "25" },
        { label: "tabs, one question per tab", value: "5 → 4" },
        { label: "colours on one screen, plus neutrals", value: "8–9 → 2" },
        { label: "Korean government grant", value: "20M", unit: "KRW (모두의 창업, about USD 16K)" },
        { label: "NSF I-Corps", value: "Regional", unit: "funding" },
        { label: "interviews before design", value: "40" },
        { label: "Body Battery, not a stress score", value: "1–10" },
      ],
    },
    learnings: ["Subtract first: most wins came from removing a line, a tab or a number, not adding a feature.", "Design for the bad day: no streaks to lose, no alerts while asleep, “I'm okay” always one tap away.", "Consistent data is UX: when the Watch and phone disagree, people stop trusting every screen."],
    year: 2026,
    timeline: "Fall 2026 · Beta",
  },

  {
    id: "vori",
    title: "Vori - Neuro-Interventional Smart Eyewear",
    navLabel: "AR UI design",
    subtitle: "Smart eyewear that detects sensory overload in neurodivergent children",
    thumbnail: "/images/projects/vori_mockup.png",
    tags: ["Product Strategy", "Neurotechnology", "Accessible Design", "Usability Testing"],
    scope: "0 → 1 · Solo founder",
    result: "Concept validated with 121 children in usability testing. 87% early-detection accuracy in EEG data.",
    before: "No product. Teachers and parents see a meltdown only after it starts.",
    after: "Everyday-looking glasses that cue calm 30–60 seconds before escalation.",
    role: "Founder · research, interaction and UI design",
    team: "Solo, with 50+ clinicians, educators and parents as advisors",
    outcome: "121 children in usability testing (60 neurotypical vs 61 neurodivergent); 87% early-detection accuracy",
    methods: ["Stakeholder interviews (50+)", "Form and cue comparisons", "EEG signal analysis (121 children)", "Usability testing (in progress)"],
    process: [
      { stage: "Research", method: "Interviews with 50+ clinicians, educators, parents and students", output: "Kids avoid anything \"medical\"; distress hides until a meltdown" },
      { stage: "Form", method: "Compared heavy headsets, bio-signal sensors and everyday glasses", output: "Everyday glasses at about 90g" },
      { stage: "Cue", method: "Compared sound or vibration, center of vision and peripheral field", output: "Peripheral cue only, 30–60s before escalation" },
      { stage: "Signal", method: "EEG data from 121 children (61 ADHD/ASD, 60 controls)", output: "87% early-detection accuracy" },
      { stage: "Usability test", method: "Classroom testing with Pearson Elementary, pending permission", output: "In progress" },
    ],
    overview: "Lightweight smart eyewear that detects early signs of sensory overload in ADHD and ASD children and responds with calm peripheral cues.",
    insights: [
      {
        source: "Students",
        finding: "Kids feared being seen in anything \"medical\" and felt uncomfortable with heavy gadgets.",
        implication: "The device must look like everyday glasses and weigh far less than conventional headsets.",
      },
      {
        source: "Educators & parents",
        finding: "Distress is masked until a visible meltdown. Teachers want some hint from children who are not expressive.",
        implication: "Detection must happen before behavior changes.",
      },
      {
        source: "Clinicians",
        finding: "Diagnosis relies on subjective reports, or on how often a child visits the special education room.",
        implication: "The same signals should give clinicians a comprehensive, objective understanding of each child.",
      },
    ],
    decisions: [
      {
        question: "What form should it take?",
        options: ["Sensors for brain-power analysis (alpha, beta, theta)", "Sensors for bio-signal analysis", "Everyday glasses"],
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
      keywords: ["Reactive than Proactive", "Hidden Distress", "Late Detection", "Stigma"],
    },
    problem: {
      title: "Problem",
      description: "Research with students, parents, educators and clinicians surfaced four needs:",
      painPoints: ["Students having a hard time sitting still in class", "Teachers struggle to catch the biological signs when a child does not say anything", "Parents see the build-up too late", "Clinicians lack objective data"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we build an invisible, clinically grounded tool that prevents a crisis instead of managing it?",
      description: "Very light glasses with temple-mounted EEG sensors and eye tracking. Peripheral cues appear only when early overload signs are detected, so central vision stays clear.",
      tools: ["EEG algorithm design", "AWS + React", "Unity", "Python ML", "Clinical research"],
    },
    implementation: {
      title: "Approach",
      description: "Research first, hardware last.",
      changes: [
        {
          title: "1 · Research",
          description: "Interviews with 50+ clinicians, educators, parents and community leaders. Many of my hypotheses were challenged in real life, from the user's perspective.",
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
          description: "In progress, pending permission: a collaboration with Pearson Elementary School in Michigan.",
          images: ["/images/projects/vori_report1.png", "/images/projects/vori_report2.png"],
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "Validated concept, now in usability testing. Funded by a University of Michigan DARE to Dream Grant.",
      metrics: [
        {
          label: "Children's brain waves tested for detecting overstimulation",
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
    timeline: "Ongoing · Research started in 2025, founded Feb 2026",
  },

  {
    id: "arklink-lead-generation",
    title: "Arklink Lead Generation Optimization",
    navLabel: "Professional website",
    subtitle: "Persona-driven landing page and chatbot redesign",
    thumbnail: "/images/projects/arklink_thumnail.png",
    tags: ["Focusing 2 types of persona", "User flow map", "Lead Generation", "Chatbot Design"],
    scope: "Redesign · Client project",
    year: 2025,
    timeline: "2 months",
    result: "Lead quality +42%, CTA click-through +55%, and 68% of chatbot conversations completed.",
    before: "Under 1% conversion. A generic chatbot and a technology-first landing page.",
    after: "Two persona flows: reassurance for people in crisis, proof of expertise for researchers.",
    role: "UX strategy, persona research and conversation design",
    team: "Multiple meetings with the CEO and the marketing team lead",
    outcome: "Lead quality +42%; CTA click-through +55%",
    methods: ["GA4 funnel analysis", "User interviews", "Page audit", "Persona and journey mapping", "Chatbot conversation design"],
    overview: "I redesigned 200+ clients' web and app landing pages for better-performing ads, by analyzing each client's primary target persona and ad performance, and by deciding which actions to track against business goals. This is one of the websites I redesigned: a legal platform for intimate image crimes that needed conversions. Traffic was fine; the conversation was failing.",
    insights: [
      {
        source: "Funnel analysis",
        finding: "5–10% of visitors opened the chatbot, but almost none converted inside it, based on GA4.",
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
          captions: ["Persona 1's journey: becoming a victim, searching, choosing a private service, requesting help and paying. The landing page answers each worry on this path.", "Chatbot reply for urgent users: \"Don't blame yourself. Time matters, so let us help now.\" Confidentiality is stated before any question is asked."],
        },
        {
          title: "Persona 2 · Technical research",
          description: "Offer technical documentation and methodology up front. Lead quality improved as customers understood what Arklink provided first.",
          images: ["/images/projects/arklink_persona2_cj.png", "/images/projects/arklink_chatbot2.png"],
          captions: ["Persona 2's journey: comparing police and private services, reading reviews and checking credibility, then submitting a request and paying securely.", "Chatbot reply for researchers: the company introduction PDF is offered right away, so they can check credibility before deciding."],
        },
        {
          title: "Direct inquiry bar",
          description: "Without a chatbot, it was hard for users to find where to talk, and how to connect with the service right away. Based on my experience with legal website redesigns, when people look for urgent help, the icon must be big and vivid so people can leave a request. I applied that to the Arklink landing page, and it raised the number of leads.",
          image: "/images/projects/arklink_inquirybar.png",
          caption: "A \"Quick Inquiry\" bar at the bottom of the homepage: name, contact and incident type, submitted in one step.",
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
    title: "Home-Shopping App: UI Customized by Customer Data",
    navLabel: "E-commerce application audit",
    subtitle: "Customers moved from TV to mobile, and the app pushed them away",
    thumbnail: "/images/projects/ec2.png",
    tags: ["E-Commerce", "Data Analysis", "UI Customization", "Accessibility"],
    scope: "Redesign · Client project (NDA)",
    year: 2022,
    timeline: "Feb 2022 · 5 months",
    result: "Google Play rating 2.8 → 4.8 after the renewal. Conversion +45%, repurchase +38%, average order value +45%.",
    before: "2.8 stars and falling mobile revenue. One app for everyone; hard to buy from, especially for customers over 50.",
    after: "4.8 stars. Each purchase stage and each customer segment sees the evidence it needs, in a clearer, larger UI.",
    role: "Business Analyst · segmentation, UX audit and UI proposals",
    team: "Kearney team with the client's designers and developers",
    outcome: "Google Play 2.8 → 4.8; conversion +45%",
    methods: ["50 employee interviews", "Customer data segmentation", "App store review analysis", "Heuristic walkthrough", "Live-stream comment analysis", "Competitor benchmark", "Accessibility audit"],
    process: [
      { stage: "Discover", method: "Customer data, 50 employee interviews, app store reviews and a walkthrough", output: "No segments, wrong tags: coupons went to loyal buyers" },
      { stage: "Segment", method: "Purchase and behaviour data, cross-analysed", output: "Customers by stage; 50–60s drive the most sales" },
      { stage: "Frame", method: "A targeting framework for awareness, consider and purchase", output: "Every screen knows its customer and stage" },
      { stage: "Propose", method: "Sample UI for each stage and segment, with the rationale", output: "Eight UI proposals" },
      { stage: "Iterate", method: "10+ rounds on appeal and feasibility with the client's designers and developers", output: "Renewal shipped; 2.8 → 4.8" },
    ],
    overview: "A major TV home-shopping company sold both on air and in an app. As buyers moved from TV to mobile, the app became the bottleneck: a 2.8-star rating and falling mobile revenue. It started from customer data and interviews with 50 of the client's employees. The work then answered three questions in order: who the customers are, where in the purchase they drop, and what each of them needs to see on screen.",
    insights: [
      {
        source: "App store reviews",
        finding: "\"After so many updates the app just stopped, and push marketing comes out even though I did not agree.\"",
        implication: "Trust and stability came before any new feature.",
      },
      {
        source: "Customer data",
        finding: "Customers in their 50s and 60s drove the most sales, yet the app had low contrast, small targets and long flows.",
        implication: "Design for this segment first.",
      },
      {
        source: "50 employee interviews",
        finding: "Customers were never segmented, and customer data was tagged wrongly, so coupons went to people who kept buying without them.",
        implication: "Re-tag and segment the data first, then target each stage and segment.",
      },
      {
        source: "Live-stream comments",
        finding: "Price-minded buyers in their 40s responded to words like \"large amount\" and \"family\", and kept comparing sites until payment.",
        implication: "Show each stage the evidence that answers its doubt.",
      },
    ],
    decisions: [
      {
        question: "Who should get offers?",
        options: ["Keep the current tags", "Re-tag and segment the data"],
        chose: "Re-tag and segment the data",
        why: "Coupons were going to loyal buyers who would have bought anyway.",
      },
      {
        question: "One UI for everyone, or by segment and stage?",
        options: ["Refresh one UI for all", "Customize by segment and purchase stage"],
        chose: "Customize by segment and purchase stage",
        why: "Active buyers needed cross-selling and social proof; customers in their 50s and 60s needed contrast, memory aids and bigger targets.",
      },
      {
        question: "How do we keep hesitant buyers moving?",
        options: ["More discounts", "Repeated exposure to other buyers' reviews"],
        chose: "Repeated exposure to other buyers' reviews",
        why: "Customers reconsider until payment. Reviews reassure at each step; offers support, not lead.",
      },
      {
        question: "How do we convince the client to invest?",
        options: ["Our own projections", "A competitor's measured result"],
        chose: "A competitor's measured result",
        why: "A competitor's personalised recommendations had raised repurchase from 40% to 60%: a concrete reason to fund the work.",
      },
    ],
    hypothesis: {
      ifWe: "re-tag and segment customers, then show each purchase stage the evidence that answers its doubt",
      then: "offers stop going to people who buy anyway, and hesitant buyers keep moving to payment",
      measuredBy: "Google Play rating, conversion, repurchase and average order value",
    },
    hypothesisCheck: "Supported: the rating rose from 2.8 to 4.8, and reviews moved from \"the app just stopped\" to \"the page itself got really clean, fast and easy to log in\".",
    situation: {
      title: "Situation",
      description: "The client sold through TV and an app. As customers moved to mobile, app revenue fell.",
      context: "Buyers moved from TV to mobile, and the app pushed them away.\n\nEven experienced users struggled to buy.",
      keywords: ["TV → Mobile", "2.8 Stars", "One App for All"],
    },
    problem: {
      title: "Problem",
      description: "What stopped purchases:",
      painPoints: ["Customers were never segmented, and mis-tagged data sent coupons to buyers who would buy anyway", "Every customer saw the same app, whatever they needed", "Poor contrast and small targets for customers over 50", "Doubts about price went unanswered until people left", "Push marketing without consent, and an unstable app"],
    },
    solution: {
      title: "Solution",
      howMightWe: "How might we show each customer, at each stage of the purchase, the screen that moves them to buy, and stop spending offers on people who buy anyway?",
      description: "Segment customers from data, map them onto a targeting framework for each purchase stage, then propose a UI for each stage and each key segment, with the rationale behind every change.",
      approach: "Three steps: analyse (segment customers from purchase and behaviour data), propose (sample UI per segment, with the rationale), validate (appeal and feasibility with the client's designers and developers).",
      tools: ["Customer data analytics", "Segmentation", "UX audit", "Accessibility audit", "Competitor benchmark", "UI proposals"],
    },
    implementation: {
      title: "Implementation & Changes",
      description: "From the plan, to one customer's journey, to the segment that mattered most, to the proof that convinced the client.",
      changes: [
        {
          image: "/images/projects/ec2.png",
          title: "The plan · four moves for a customer-customized app",
          description: "Up- and cross-selling by purchase behaviour, a UI for active silver customers, gamified live commerce for mobile users, and easy price comparison by unit.",
          wide: true,
        },
        {
          image: "/images/projects/ec1.png",
          title: "A targeting framework for every purchase stage",
          description: "Three stages: awareness (has a need), consider (comparing competitors), purchase (about to buy). At each, three moves: a first landing page, redefine who didn't convert, then a second campaign aimed at them, measured as people reached × conversion. It connects marketing, retargeting and the base UI.",
          wide: true,
        },
        {
          title: "More than 10 rounds with the people who would build it",
          description: "1 · Propose: sample UI for each segment and stage, each with its data point and rationale.\n2 · Review: would it sell, and could it be built? Checked with the client's designers and developers.\n3 · Revise: what failed either test was reworked against the framework, not dropped.\n\nThe cards below are what came out of that loop.",
        },
        {
          image: "/images/projects/ec3.png",
          title: "One customer · 1. Awareness",
          description: "Live-stream comments showed which words sell to a price-minded buyer in her 40s: \"large amount\", \"family\". The landing page leads with them.",
          wide: true,
        },
        {
          image: "/images/projects/ec4.png",
          title: "One customer · 2. Consider",
          description: "She is comparing sites, so reviews about price move to the top of the product page: the doubt she has is the first thing answered.",
          wide: true,
        },
        {
          image: "/images/projects/ec5.png",
          title: "One customer · 3. Purchase",
          description: "In the cart: \"1,400 of 1,500 buyers said it was cheap\", plus what similar buyers added, at a 30-minute price. Social proof and a related item, right before paying.",
          wide: true,
        },
        {
          image: "/images/projects/ec6.png",
          title: "Key segment · active silver customers, 50–60",
          description: "They drove the most sales, so the UI adapted to them. Eyesight: a high-contrast mode and larger text. Memory: price and buyer counts repeated from cart to order to payment. Touch: fewer taps, space between cancel and save, and voice search.",
          wide: true,
        },
        {
          image: "/images/projects/ec7.png",
          title: "Engagement · games in live commerce",
          description: "Quizzes and reward points keep app users in the stream longer, and every answer feeds the customer database. Session time rose 30%.",
          wide: true,
        },
        {
          image: "/images/projects/ec8.png",
          title: "Proof for the client · a competitor benchmark",
          description: "A competitor's integrated customer profiling and personalised recommendations raised repurchase from 40% to 60%. That made the case for repurchase rate as the goal, and for investing in the renewal.",
          wide: true,
        },
      ],
    },
    impact: {
      title: "Outcome",
      description: "After the renewal the app went from 2.8 to 4.8 stars on Google Play. Reviews moved from \"I am not going to use this application\" to \"I really love that they changed the whole UI. It got much better.\"",
      metrics: [
        { label: "Google Play rating", value: "4.8", unit: "from 2.8" },
        { label: "Conversion rate lift", value: "45", unit: "%" },
        { label: "Repurchase growth", value: "38", unit: "%" },
        { label: "Average order value", value: "↑45", unit: "%" },
      ],
    },
    learnings: ["Data earns the argument; a competitor's measured result earned the budget.", "Show each purchase stage the evidence that answers its doubt.", "Age-appropriate design is a revenue driver, not an edge case.", "The hardest part was aligning the client's designers and developers, who had long misunderstood each other."],
  },

  {
    id: "internal-ops-dashboard",
    title: "Internal Operations Dashboard",
    navLabel: "Data architecture and dashboard",
    subtitle: "One dashboard that unites Salesforce, ERP, BOM and factory inventory by SKU, with each source's update timing shown",
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
    methods: ["Team interviews", "Cost data review", "Data architecture", "Time-series analysis"],
    overview: "Each group company's production team kept its BOM in Excel, factory inventory was counted once a week, and ERP changed far more often than Salesforce. Each team read a different system, so no one saw the same picture.",
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
      description: "Matched BOM, factory inventory, Salesforce and ERP by SKU, and showed each source's update timing on the dashboard. We started with the top 20% of SKUs, which accounted for 98% of revenue, as quick wins to match across sources first.",
      approach: "SKU-level data architecture across four sources, role-based dashboard views, plain labels and large type, and time-series cost analysis.",
      tools: ["Salesforce", "ERP", "BOM (Excel)", "Factory inventory", "SKU matching", "Dashboard design", "Time-series analysis"],
    },
    implementation: {
      title: "Implementation",
      description: "The real screens are confidential under NDA, so these are mock-ups with placeholder figures.",
      changes: [
        {
          title: "Match every source by SKU",
          description: "BOM, factory inventory, Salesforce and ERP joined on SKU. Each source's update timing is shown, so teams can tell how fresh each number is.",
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
  }
];

// Side notes: short write-ups, not full case studies
export interface SideNote {
  id: string
  title: string
  kind: string
  year: number
  summary: string
  points: string[]
  // A note can carry the slides it was presented with, each with its text for screen readers and small screens
  slides?: Array<{ image: string; eyebrow: string; title: string; text: string[] }>
  pdf?: string
  // Kept for roles that ask for it, but not shown on the site
  hidden?: boolean
}

export const sideNotes: SideNote[] = [
  {
    id: "doordash-teardown",
    title: "DoorDash ordering: a human-factors teardown",
    kind: "Design critique · concept",
    year: 2026,
    summary: "I ordered from the same restaurant on DoorDash and Uber Eats and read each step through five cognitive concepts. Each fix comes with the commercial reason DoorDash may have for the current design, and a guardrail. Concept work, not affiliated with DoorDash.",
    points: [
      "Gestalt similarity · the same “+” added fries but opened a modal for French toast → “Options +” says what it will do",
      "SEEV attention · switching to Pickup took four steps → a one-tap Delivery | Pickup toggle",
      "Recognition over recall · past orders were a text list → a “Reorder your favourites” row of dish photos",
      "Situation awareness · the ETA moved with no reason → a delay banner with a cause and a new time",
      "Gulfs of execution & evaluation · the cart showed a count, never the total → a sticky bar with the running total",
    ],
    pdf: "/files/doordash-teardown.pdf",
    slides: [
      {
        "image": "/images/notes/doordash/s-02.jpg",
        "eyebrow": "Overview",
        "title": "Ordering on DoorDash, through a human-factors lens",
        "text": [
          "I ordered from the same restaurant on DoorDash and Uber Eats, audited each step against 10 cognitive concepts, sketched fixes by hand, and redrew them as before/after wireframes.",
          "Scope",
          "Menu, cart, tracking",
          "Method",
          "Comparative audit, sketching",
          "Type",
          "Concept work, not affiliated"
        ]
      },
      {
        "image": "/images/notes/doordash/s-03.jpg",
        "eyebrow": "01 · DoorDash · Where it breaks",
        "title": "Five friction points along one order",
        "text": [
          "1 · HOME",
          "Reorder means recall",
          "Past orders are buried in a text list under the profile.",
          "Recognition vs recall",
          "2 · MODE",
          "Pickup is hidden",
          "Switching takes a drawer, a tab and a confirm.",
          "SEEV: effort",
          "3 · MENU",
          "One “+”, two outcomes",
          "Sometimes it adds; sometimes it opens options.",
          "Gestalt similarity",
          "4 · CART",
          "No running total",
          "The bar shows item count, not price.",
          "Gulf of execution",
          "5 · TRACKING",
          "Silent delays",
          "ETA slips with no reason given.",
          "Situation awareness",
          "Each fix follows one path: the concept → what DoorDash does today → sketch → wireframe → user trade-off and commercial pitfall."
        ]
      },
      {
        "image": "/images/notes/doordash/s-04.jpg",
        "eyebrow": "01 · DoorDash · Concept 1 of 5 · Perception",
        "title": "Gestalt similarity",
        "text": [
          "Things that look the same should work the same.",
          "THE CONCEPT",
          "People group elements that share a shape, colour or icon style, and expect them to do the same job. When identical controls lead to different outcomes, the interface becomes unpredictable.",
          "Johnson 2021; Norman 2013",
          "WHY IT MATTERS WHEN ORDERING",
          "Menus are browsed fast, thumb on screen. A surprise modal breaks the rhythm and makes people hesitate on the next tap.",
          "IN DOORDASH TODAY",
          "At one restaurant, the same “+” added regular fries straight to the cart but opened an options modal for French toast sticks.",
          "WE READ LOOKS AS GROUPS",
          "Two looks are read as two kinds of thing, before any label is read.",
          "DOORDASH: ONE LOOK, TWO RESULTS",
          "Fries · added to cart",
          "French toast sticks · opens options",
          "Same look, different result = surprise"
        ]
      },
      {
        "image": "/images/notes/doordash/s-05.jpg",
        "eyebrow": "01 · DoorDash · Menu · Gestalt similarity",
        "title": "A button should tell you what it will do",
        "text": [
          "CHANGE",
          "Solid “+” for a direct add; an outlined “Options +” pill when a choice is required.",
          "USER TRADE-OFF · INFORMATION SCENT",
          "The wider pill can cut a dish description from 3 lines to 2.",
          "COMMERCIAL PITFALL",
          "Why it may be deliberate. One quiet “+” keeps the photos in charge, and the modal is where size-ups and add-ons sell. “Options” can read as extra work.",
          "Guardrail. Keep the upsell inside the modal; track add-to-cart for option items, not only fewer surprise modals.",
          "Options +"
        ]
      },
      {
        "image": "/images/notes/doordash/s-06.jpg",
        "eyebrow": "01 · DoorDash · Concept 2 of 5 · Attention",
        "title": "Selective attention: the SEEV model",
        "text": [
          "People look where it is easy, expected and worth it.",
          "THE CONCEPT",
          "Attention goes to what is Salient, Expected and Valuable, and away from what takes Effort. Salience and effort come from the screen; expectancy and value come from the person.",
          "Wickens et al. 2014; Lee et al. 2017",
          "WHY IT MATTERS WHEN ORDERING",
          "If an option costs effort to reach, people stop checking it, even when it would save them money or time.",
          "IN DOORDASH TODAY",
          "Switching to Pickup takes four steps through a full-screen drawer. Uber Eats puts the same switch at the top of the feed: one tap.",
          "SEEV MODEL",
          "P(A) = S − E + Ex + V",
          "Salience · Effort · Expectancy · Value. Effort is the one design can cut fastest.",
          "SWITCH TO PICKUP TODAY · 4 STEPS",
          "Address bar",
          "Drawer",
          "Pickup tab",
          "Confirm",
          "REDESIGN · 1 STEP",
          "Delivery | Pickup"
        ]
      },
      {
        "image": "/images/notes/doordash/s-07.jpg",
        "eyebrow": "01 · DoorDash · Home · SEEV attention",
        "title": "Pickup in one tap, not four",
        "text": [
          "CHANGE",
          "A “Delivery | Pickup” toggle right under the address. One tap switches mode and filters stores.",
          "USER TRADE-OFF · INFORMATION SCENT",
          "The bar pushes the first deals below the fold.",
          "COMMERCIAL PITFALL",
          "Why it may be deliberate. Pickup earns no delivery fee and a smaller cut per order, so a hidden switch protects delivery revenue.",
          "Guardrail. Before rollout, measure whether pickup orders are new (won from rivals or the restaurant’s own app) or just cannibalised deliveries.",
          "Deliver",
          "Pickup"
        ]
      },
      {
        "image": "/images/notes/doordash/s-08.jpg",
        "eyebrow": "01 · DoorDash · Concept 3 of 5 · Memory",
        "title": "Recognition over recall",
        "text": [
          "Seeing is easier than remembering.",
          "THE CONCEPT",
          "Recognition means identifying something when a cue is in front of you; recall means retrieving it from memory with no cue. Recognition takes far less effort.",
          "Norman 2013; Johnson 2021",
          "WHY IT MATTERS WHEN ORDERING",
          "Many food orders are repeats. The faster a past meal is recognised, the shorter the path from opening the app to checkout.",
          "IN DOORDASH TODAY",
          "Past orders sit behind Profile → Orders, as a text list of restaurants. The dish and the options you chose have to be remembered.",
          "RECALL · HARD",
          "Boba shop · Sep 28",
          "Thai place · Oct 2",
          "Burger bar · Oct 9",
          "“What did I get there? Which toppings?”",
          "RECOGNITION · EASY",
          "Reorder",
          "“That one.”",
          "A photo of the dish does the remembering for you."
        ]
      },
      {
        "image": "/images/notes/doordash/s-09.jpg",
        "eyebrow": "01 · DoorDash · Home · Recognition vs recall",
        "title": "Reorder the dish, not just the restaurant",
        "text": [
          "CHANGE",
          "A “Reorder your favourites” row of dish photos, with your options saved and a one-tap Reorder.",
          "USER TRADE-OFF · FAMILIAR VS NEW PATHS",
          "Faster repeats, but less discovery of new merchants.",
          "COMMERCIAL PITFALL",
          "Why it may be deliberate. The top of the home feed is prime space for new stores and sponsored listings. A repeat row there sells less discovery.",
          "Guardrail. Show it only to people with a repeat pattern, at their usual mealtimes, below the first sponsored slot.",
          "Reorder favs"
        ]
      },
      {
        "image": "/images/notes/doordash/s-10.jpg",
        "eyebrow": "01 · DoorDash · Concept 4 of 5 · Thinking",
        "title": "Situation awareness",
        "text": [
          "Not just where my food is, but when it will really arrive.",
          "THE CONCEPT",
          "Three levels: Perception (seeing the cues), Comprehension (understanding what they mean) and Projection (predicting what happens next).",
          "Endsley 1995; Lee et al. 2017",
          "WHY IT MATTERS WHEN ORDERING",
          "Waiting for food is planning: when to leave a meeting, when to set the table. People need level 3, and level 3 needs level 2.",
          "IN DOORDASH TODAY",
          "The live map and countdown work well. But when the Dasher had reached the store and the food wasn’t ready, only the ETA moved, with no reason, even after I paid for faster delivery.",
          "THREE LEVELS, DURING A DELAY",
          "Level 1 · Perception",
          "Live map: the Dasher is at the store",
          "Level 2 · Comprehension",
          "MISSING",
          "Why is it late? Kitchen, Dasher, traffic?",
          "Level 3 · Projection",
          "SILENT",
          "The ETA moves, with no reason given",
          "Without level 2, people can’t trust level 3."
        ]
      },
      {
        "image": "/images/notes/doordash/s-11.jpg",
        "eyebrow": "01 · DoorDash · Tracking · Situation awareness",
        "title": "When the order is late, say why and say when",
        "text": [
          "CHANGE",
          "A banner: “Kitchen is busier than usual (+8 min). Revised arrival 6:42 PM.” Merchants share a prep estimate.",
          "USER TRADE-OFF · EXPECTANCY",
          "Repeated updates can erode trust in the ETA itself.",
          "COMMERCIAL PITFALL",
          "Why it may be deliberate. Naming a cause can blame a merchant partner, and an honest “+8 min” can trigger cancellations and refund requests.",
          "Guardrail. Neutral wording, shown only past a delay threshold; track cancellations and support contacts against today.",
          "Kitchen is busy",
          "+8 min",
          "ETA 6:42 PM"
        ]
      },
      {
        "image": "/images/notes/doordash/s-12.jpg",
        "eyebrow": "01 · DoorDash · Concept 5 of 5 · Action",
        "title": "Gulfs of execution and evaluation",
        "text": [
          "Every tap should answer “what just happened?”",
          "THE CONCEPT",
          "Execution is the gap between a goal and the actions it takes (“How do I do this?”). Evaluation is the gap between a system change and understanding it (“What happened?”).",
          "Norman 2013",
          "WHY IT MATTERS WHEN ORDERING",
          "In a cart, the question behind every tap is “what am I spending?” If the screen doesn’t answer, people answer it at checkout, sometimes by leaving.",
          "IN DOORDASH TODAY",
          "The cart bar shows the item count and “Add $10.20 to get $6 off”, but never the current total.",
          "NORMAN’S TWO GULFS",
          "Add a topping, stay in budget",
          "Execution → “How do I add it?”",
          "← Evaluation “What’s my total?”",
          "THE APP",
          "Cart: 2 items",
          "A $2 topping goes in. The bar still says “2 items”. The answer comes back only at checkout.",
          "The gulf of evaluation stays open"
        ]
      },
      {
        "image": "/images/notes/doordash/s-13.jpg",
        "eyebrow": "01 · DoorDash · Cart · Gulfs of execution & evaluation",
        "title": "Show the running total before people tap",
        "text": [
          "CHANGE",
          "A full-width sticky bar, “2 items · $18.50”, that updates the moment an option is added.",
          "USER BONUS · FITTS’S LAW",
          "A full-width target at the thumb’s edge is fast to hit.",
          "COMMERCIAL PITFALL",
          "Why it may be deliberate. Hiding the running total keeps attention on food, not cost, and “Add $10.20 to get $6 off” grows the basket. A live total can make people trim it.",
          "Guardrail. Pair the total with the deal, “$18.50 · $1.50 to $6 off”, so transparency still sells the upsell. Track basket size and checkout drop-off.",
          "View cart · 2",
          "2 · $18.50"
        ]
      },
      {
        "image": "/images/notes/doordash/s-14.jpg",
        "eyebrow": "01 · DoorDash · Users and the business",
        "title": "Each fix is weighed for the user and for the business",
        "text": [
          "Change",
          "Concept",
          "User trade-off",
          "Commercial pitfall",
          "Metric to test",
          "Options + pill",
          "Gestalt similarity",
          "Shorter descriptions",
          "Fewer opens of add-on items",
          "Surprise modals, option-item adds",
          "Delivery | Pickup",
          "SEEV: effort",
          "Deals below the fold",
          "Lower fee per order",
          "Pickup share, new vs cannibalised orders",
          "Reorder favourites",
          "Recognition vs recall",
          "Less discovery",
          "Less space for new and sponsored stores",
          "Time to checkout, new-store orders",
          "Delay banner",
          "Situation awareness",
          "Trust in the ETA",
          "Cancellations, merchant blame",
          "Cancellations, support contacts",
          "Running total",
          "Gulfs of evaluation",
          "None (Fitts’s Law helps)",
          "Smaller baskets",
          "Basket size, checkout drop-off",
          "Next step: a clickable prototype of the five changes, then a quick test with five frequent DoorDash users."
        ]
      }
    ],
  },
  {
    id: "accessibility-audit",
    title: "Accessibility audit of an online shop",
    kind: "Course project · group of 5",
    hidden: true,
    year: 2026,
    summary: "WAVE, aXe, a screen reader, keyboard-only navigation and 400% zoom on three pages of a shop, with one recommendation per barrier.",
    points: [
      "249 WAVE contrast errors, 291 alerts and 120 aXe issues across three pages",
      "Text contrast as low as 1.03:1 → raise contrast to WCAG AA",
      "No skip-to-content link → add one, and make header and footer keyboard-friendly",
      "Content cut off at 400% zoom → size images in percentages",
    ],
  },
]
