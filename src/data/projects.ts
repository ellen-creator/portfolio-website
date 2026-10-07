// Portfolio Projects - UX Case Studies
// Structure: Situation → Problem → Solution → Implementation → Impact

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  tags: string[]

  // Hero summary
  role?: string
  team?: string
  outcome?: string

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
    id: 'vori',
    title: 'Vori - Neuro-Interventional Smart Eyewear',
    subtitle: 'Founder: Gentle & Non-Invasive Assistive Technology for Neurodivergent Children',
    thumbnail: '/images/projects/vori_mockup.png',
    tags: ['Product Strategy', 'Neurotechnology', 'Accessible Design', 'User Research'],

    role: "Solo founder · research, product & interaction design",
    team: "Solo, with 50+ clinicians, educators, parents & community advisors",
    outcome: "Validated concept now in usability testing with 121 children; U-M DARE to Dream Grant",

    overview: 'Solo founder and technology leader who conceived, validated, and is building Vori: ultra-lightweight smart eyewear that detects early biometric signs of sensory overload in ADHD & ASD children and intervenes with calming visual cues. Currently scaling from research validation to clinical-grade software and usability testing with real children. Awarded University of Michigan DARE to Dream Grant and pursuing additional funding.',

    insights: [
      { source: "Students", finding: "Kids feared being teased for wearing anything that looked \"medical\", and disliked heavy headsets (>200g).", implication: "The device has to look like everyday glasses and weigh far less than a headset." },
      { source: "Educators & parents", finding: "Distress is usually masked until a visible meltdown. Adults only see the crisis, never the build-up.", implication: "Detection has to happen before behavior changes, not after." },
      { source: "Clinicians", finding: "Diagnosis and treatment rely on subjective parent/teacher reports, with no objective data.", implication: "The same signals that trigger a cue should also give clinicians a usable record." },
    ],
    decisions: [
      { question: "What form should it take?", options: ["EEG headset", "Wristband", "Everyday glasses"], chose: "Everyday glasses", why: "Headsets failed on weight and stigma. Glasses can carry temple-mounted EEG and eye tracking under 90g and look like nothing special." },
      { question: "Where should the calming cue appear?", options: ["Sound or vibration alert", "Center of vision", "Peripheral field only"], chose: "Peripheral field only", why: "The child must still see the teacher and board clearly, and peers should never notice. Peripheral cues keep central vision 100% clear." },
      { question: "When should it intervene?", options: ["After a meltdown (reactive)", "On a fixed schedule", "30–60s before escalation (predictive)"], chose: "30–60s before escalation (predictive)", why: "By the time behavior is visible, it is too late to help. Early neural markers give a window to prevent the crisis instead of managing it." },
    ],
    hypothesisCheck: "Partly answered: early EEG testing (61 ADHD/ASD participants vs 60 controls) shows distinct neural signatures with 87% early-detection accuracy. Still open: whether peripheral cues actually calm children in a real classroom. That is what the current usability phase tests.",

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
    id: 'lumi-redesign',
    title: 'LUMI - Body Battery App UI/UX Redesign',
    subtitle: 'From a Clinical Dashboard to a Calm Daily Companion for Adults Who Burn Out Easily',
    thumbnail: '/images/projects/lumi_thumbnail.png',
    tags: ['UI/UX Redesign', 'Accessible Design', 'Health Tech', 'iOS & watchOS'],

    role: "Project lead · UX research, IA, UX writing & iOS build",
    team: "Built on the LUMI-ND team's adult app",
    outcome: "Restructured onboarding → explanation → features → main layout; beta build ready",

    overview: 'Redesigned the LUMI-ND adult app into LUMI, an iPhone + Apple Watch beta for people who burn out easily, especially those with ADHD, autism or anxiety. The original app focused only on features. After 20 expert interviews (ABA (applied behavior analysis) therapists, IEP clinicians and University of Michigan Medical School faculty) and 20 user interviews, I rebuilt the whole experience in order: onboarding → explanation → features → main screen layout. LUMI now turns what the Apple Watch already measures into one daily body battery score (1–10), explains why it is that number, and offers one small, research-backed tip for where the person is right now.',

    insights: [
      { source: "20 expert + 20 user interviews", finding: "The app had grown feature by feature, but no one had defined what a new user should understand first or what the main screen should put first.", implication: "Redesign in the order a person meets the app: onboarding, then explanation, then features, then layout." },
      { source: "Competitive review (Apple Watch, WHOOP, Oura, Headspace)", finding: "Readiness scores are black boxes (\"What does 6/10 mean?\"), built for athletes, and slow to learn a baseline.", implication: "LUMI's score must explain itself and fit people who aren't training." },
      { source: "Research synthesis", finding: "Users forget to sync manually, and generic tips feel boring and irrelevant (\"go for a run\" on an empty day).", implication: "Sync must be automatic, and tips must depend on energy and place." },
    ],
    decisions: [
      { question: "What should the main number measure?", options: ["Stress score", "Body battery 0–100", "Energy 1–10"], chose: "Energy 1–10", why: "Rising stress doesn't tell people what to do; falling energy does (\"pace yourself\"). Ten segments read at a glance, while 0–100 invites over-reading small changes." },
      { question: "How much of the score should we explain?", options: ["Nothing (like competitors)", "Full formula and weights", "Which signals help or drain you"], chose: "Which signals help or drain you", why: "A black box loses trust, but formulas add more numbers to an app that already had too many. Naming the signals gives the \"why\" without the math." },
      { question: "Should tips name the user's condition?", options: ["Label tips by condition", "Ignore conditions", "Use them privately, never show them"], chose: "Use them privately, never show them", why: "Neurotype makes tips more relevant, but labels feel stigmatizing in a daily app. A test checks that no tip ever names a condition." },
    ],
    hypothesisCheck: "Not yet answered. The beta with 10–20 adults will test whether the 1–10 score \"makes sense\" to people and whether they keep opening the app (7-day retention target: 50%).",

    situation: {
      title: 'Situation',
      description: 'LUMI-ND was built feature-first, for parents watching a child\'s signals. Adults reviewing their own health were using the same screens and they didn\'t fit: the app showed a lot of data but didn\'t explain much.',
      context: '(1) The product had grown feature by feature. There was no onboarding, no explanation of what the numbers meant, and no thought about what the main screen should put first.\n\n(2) The Today screen stacked five cards: live heart rate, a 0–100 battery strip, body tension, a long sleep card and logging. It showed many numbers but gave no clear next step.\n\n(3) Wording was written for parents and teachers ("Meltdown", IEP sharing, kid strategies), not for an adult reviewing their own day.\n\n(4) Setup asked users to tap "Connect Watch" and manage syncing themselves, and they often forgot.',
      keywords: ['Feature-First', 'Data Overload', 'Wrong Audience', 'No Next Step'],
    },

    problem: {
      title: 'Problem',
      description: '20 expert interviews and 20 user interviews, set against the existing flows, surfaced these issues:',
      painPoints: [
        'Too many numbers: live bpm and a 0–100 score could make anxious users more anxious and didn\'t explain what to do',
        'Generic advice: tips ignored energy level, place (school/work, home, out), recent patterns and how the person works',
        'Labeling: condition names and clinical terms felt stigmatizing in an app people check every day',
        'Friction: manual watch connection, no first-launch explanation and no guide to what each tab is for',
        'Reactive only: the app recorded hard moments but never warned users before the times that are usually hard for them',
      ],
    },

    solution: {
      title: 'Solution',
      howMightWe: 'How might we turn passive wearable data into one calm, understandable number and one small action that fits this person, in this place, today?',
      description: 'A restructured experience built around three questions: Why do I burn out? When does it hit me? What actually helps? Today became four blocks with one decision each. A transparent body battery explains which signals are supporting or draining you, without formulas. A tip engine filters, ranks and rotates 42 research-backed tips across 1,536 situations. A gentle growth loop ("logs are LUMI\'s food") rewards check-ins with no streaks to lose.',
      approach: 'Started from 20 expert interviews and 20 user interviews instead of the feature list, then redesigned in the order a new user meets the app: onboarding → explanation → features → main screen layout. Along the way I audited every screen and string against an adult self-review lens; mapped each recommendation to a PubMed source; designed the selection logic as a visible flow (inputs → filter → rank → rotate → show); built a tip board to find and fill content gaps before beta; and shipped it in SwiftUI with 582 automated tests, including one that checks no tip names a condition.',
      tools: ['Expert Interviews (20): ABA, IEP, U-M Medical School', 'User Interviews (20)', 'Information Architecture', 'SwiftUI', 'HealthKit', 'WatchConnectivity', 'EventKit', 'UX Writing', 'Accessibility (WCAG)', 'Evidence Review (PubMed)', 'Google Apps Script'],
    },

    implementation: {
      title: 'Implementation & Changes',
      description: 'The original app was organized around features. Guided by 20 expert and 20 user interviews, I restructured it in the order a person experiences it: onboarding → explanation → features → main screen layout. Each step below answers one of the pain points above.',
      changes: [
        {
          title: 'Step 0 · Research — 20 Experts, 20 Users Before Any Feature',
          description: 'Instead of adding more features, I went back to the people: 20 expert interviews with ABA (applied behavior analysis) therapists, IEP clinicians and University of Michigan Medical School faculty, and 20 user interviews with adults who burn out easily. What they told me (see Insights above) set the redesign order, following the path a new user takes: (1) Onboarding: what LUMI is and how to set it up. (2) Explanation: what the body battery reads and why. (3) Features: tips, Energizer, heads-ups and growth, rebuilt around those explanations. (4) Main layout: Today rearranged so the most important thing comes first.',
        },
        {
          title: 'Step 1 · Onboarding — First Launch: Explain First, Then a One-Time Setup',
          description: 'Four launch screens explain the value, what the body battery reads and why, "wear your watch, that\'s it," and "low days are information, not failure" (with the 988 crisis line). A three-step setup asks for name, age range, an optional "anything that fits you," what drains you and who\'s in your corner. Afterwards, a see-through overlay spotlights each tab and explains how to use it, and the ? button on Today replays it.',
        },
        {
          title: 'Step 2 · Explanation — A Body Battery You Can Understand',
          description: 'The score is built from signals the watch already records (sleep, heart rate variability, resting heart rate, activity and an optional calendar), each compared with the person\'s own recent days. The app shows which signals are supporting or draining you, never the weights. Steps stand in for activity until the battery learns your rhythm, so movement counts from day one. A "calm view" switch hides live heart-rate numbers for anyone anxious about them.',
        },
        {
          title: 'Step 3 · Features — Evidence-Based Tip Engine',
          description: '42 tips, each linked to one of 22 PubMed studies (autistic burnout and masking, exercise and ADHD, paced breathing, worry postponement, naps, caffeine timing and more). Tips are filtered by battery level, place, how the person works, age, last night\'s sleep and the last 7 days, then ranked so the most specific match comes first. A tip seen in the last 2 days drops to the bottom, so advice never feels repetitive. Condition names decide which tips appear but are never shown to the user.',
          image: '/images/projects/lumi_tip_flow.png',
        },
        {
          title: 'Step 3 · Features — Designing for Coverage, Not Just the Happy Path',
          description: '4 battery levels × 3 places × 8 neurotype mixes × 4 recent patterns × 2 age groups × 2 sleep states = 1,536 situations. I built an internal tip board that maps how many tips each situation has, so thin spots (charged days with no neurotype, burnout-risk days, "bouncing back") are easy to see and fill before beta.',
          image: '/images/projects/lumi_tip_coverage.png',
        },
        {
          title: 'Step 3 · Features — Energizer Tab & a Growth Loop With No Streaks',
          description: 'Strategies became Energizer: "For you" describes today\'s situation in one friendly line and shows six ranked tip cards that open to what to do and why it works. "Situations" lets users browse every case LUMI plans for. The Library holds step-by-step strategies rewritten for adults. LUMI earns 10 points per log and 5 for opening the app each day. Levels grow, but nothing is ever taken away, so a bad week never feels like a punishment.',
        },
        {
          title: 'Step 3 · Features — Heads-Ups Before Hard Times',
          description: 'If a hard moment was logged on the same weekday at a similar time in at least 2 of the last 4 weeks, or during the same calendar event twice, LUMI sends a gentle notification before the next one: "Tuesdays around 3:00 PM have been hard lately… take 5 quiet minutes now." Users choose on/off, 30/45/60 minutes ahead and frequency (no more than one a day, never between 10pm and 7am).',
        },
        {
          title: 'Step 4 · Main Layout — Today: From 5 Cards to 4 Blocks',
          description: 'Each block now answers one question: (1) Your body battery: a 1–10 score, a one-line status ("Steady — pace yourself") and a 10-segment meter. (2) What helps now: a School/work · Home · Out switch with one tip and its study. (3) LUMI: the character and a level bar. (4) Feed LUMI: one-tap check-ins (Rested / Okay / Tired / Overwhelmed). The 0–100 strip, body tension and long sleep card moved into Details, so the analysis is still there for anyone who wants it.',
          image: '/images/projects/lumi_today_before_after.png',
        },
        {
          title: 'Throughout — Zero-Tap Watch Sync, Accessibility & Adult Voice',
          description: 'There\'s no "Connect Watch" button anymore: after one Health permission, the iPhone launches the Watch app and starts recording on its own, and a pause on either device stays in sync. Accessibility: darker secondary text for stronger contrast, 52pt main buttons, status shown with an icon and text (not color alone), and reduced motion respected. Wording: "Meltdown" became "Overloaded", IEP/teacher sharing became counselor and accommodations summaries, and the Analysis tab replaced made-up percentages with an honest empty state.',
        },
      ],
    },

    impact: {
      title: 'Outcome & Next Steps',
      description: 'The redesign is shipped as a beta build with a Google Form beta application (interview first, download link after). Next: beta testing with 10–20 adults across ADHD, autism and anxiety, measuring 7-day retention, NPS and whether the body battery "makes sense." Tips will get a clinical review before a wider release.',
      metrics: [
        { label: 'Interviews', value: '20 + 20', unit: 'ABA/IEP clinicians & U-M Medical School faculty + users' },
        { label: 'Today screen', value: '5 → 4', unit: 'cards → focused blocks' },
        { label: 'Research-backed tips', value: '42', unit: 'linked to 22 PubMed studies' },
        { label: 'Situations designed for', value: '1,536', unit: '304 distinct tip pools' },
      ],
    },

    learnings: [
      'Research reorders the roadmap. Starting from 20 expert and 20 user interviews instead of the feature list changed what came first, so the redesign followed the user\'s path: onboarding → explanation → features → main layout.',
      'Fewer numbers can mean more understanding. Moving a 0–100 score, live bpm and body tension into Details made Today easier to act on without hiding anything from people who want the depth.',
      'Explain the "why" without the math. Showing which signals are supporting or draining you builds trust; showing weights and formulas invites second-guessing.',
      'Words are interface. Swapping parent/clinical language ("Meltdown", IEP) for adult self-review language changed who the product feels like it is for, without changing a single feature.',
      'Personalize without labeling. Neurotype shapes which tips appear, but it never appears on screen. Personalization and stigma can be designed apart.',
      'Design the whole matrix, not just the happy path. Mapping 1,536 situations exposed thin spots that a few sample screens would never have shown.',
      'Gamify without punishing. No streaks to lose and nothing taken away matters especially for users whose bad weeks are exactly when they need the app most.',
    ],

    year: 2026,
    timeline: 'Beta redesign · Oct 2026',
  },

  {
    id: 'arklink-lead-generation',
    title: 'Arklink Lead Generation Optimization',
    subtitle: 'Persona-Driven UX & Chatbot Redesign',
    thumbnail: '/images/projects/arklink_thumnail.png',
    tags: ['UX Design', 'Lead Generation', 'Chatbot Design'],

    role: "UX strategy, persona research & conversational design",
    team: "With Arklink executive leadership",
    outcome: "Lead quality +42%; CTA click-through +55%",

    overview: 'Optimized lead generation landing page and chatbot interaction through persona-driven design research.',

    insights: [
      { source: "Funnel analysis", finding: "Ads brought traffic and 5–10% of visitors clicked the chatbot, but almost none converted inside it. Overall conversion stayed below 1%.", implication: "The leak wasn't the ads; it was the conversation itself." },
      { source: "User interviews", finding: "People in crisis and people researching options arrive with opposite needs: one needs to feel safe right now, the other needs proof of expertise.", implication: "One generic script can't serve both." },
      { source: "Page audit", finding: "The landing page led with company information, and contact was buried several pages deep.", implication: "Put the user's next step in front, not the company's story." },
    ],
    decisions: [
      { question: "How should the chatbot open?", options: ["One generic script", "A menu of services", "Separate flows per persona"], chose: "Separate flows per persona", why: "The two personas need opposite first messages, so a single script was guaranteed to fail one of them." },
      { question: "What should a person in crisis see first?", options: ["Pricing and process", "Company credentials", "Reassurance and a personal commitment"], chose: "Reassurance and a personal commitment", why: "Panic blocks reading. \"I will personally ensure your data doesn't spread\" lowers anxiety before asking for anything." },
    ],
    hypothesisCheck: "Supported: tailoring the conversation by segment raised lead quality 42% and conversation completion to 68%.",

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
          description: 'Victims in acute crisis who need immediate reassurance and a clear action pathway.',
        },
        {
          id: 'persona-2',
          name: 'Persona 2: Technical Researcher',
          image: '/images/projects/persona2.png',
          description: 'Rational researchers validating technical credibility before choosing a platform or solution.',
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

    role: "Business Analyst · customer segmentation, UX audit & UI rationale",
    team: "Kearney team with the client's designers & developers",
    outcome: "Google Play rating 2.8 → 4.8",

    overview: 'Revitalized a struggling e-commerce mobile application by conducting data-driven customer segmentation and implementing a comprehensive UI/UX redesign. The result: Google Play rating increased from 2.8 to 4.8/5 stars, with significantly improved user satisfaction and engagement.',

    insights: [
      { source: "Heuristic walkthrough", finding: "The purchase flow was so unintuitive that even I found it hard to finish buying a product.", implication: "This was a whole-app UI problem, not a single broken screen." },
      { source: "Customer data + competitor analysis", finding: "Customers in their 50s–60s contributed the most sales, yet the UI had low contrast and small touch targets.", implication: "Designing for this segment first would move revenue the most." },
      { source: "App store reviews (verbatim analysis)", finding: "\"After so many updates, the application just stopped and push marketing comes out even though I did not agree on that.\"", implication: "Stability and respect for consent mattered as much as visual polish." },
    ],
    decisions: [
      { question: "One UI for everyone, or by segment?", options: ["Refresh one UI for all", "Segment-specific experiences"], chose: "Segment-specific experiences", why: "Active buyers needed cross-selling and social proof; 50–60s customers needed contrast, bigger targets and voice input. One design would underserve the segment that pays the most." },
      { question: "How do we keep hesitant buyers to checkout?", options: ["More discounts", "Repeated exposure to other buyers' reviews and behavior"], chose: "Repeated exposure to other buyers' reviews and behavior", why: "Customers keep reconsidering until payment. Targeted reviews and \"people also bought\" reassure them at each step, with limited-time offers as support, not the lead." },
    ],
    hypothesisCheck: "Supported: the rating rose from 2.8 to 4.8, and reviews shifted from \"it just sucks\" to \"the page itself gets really cleaned, fast and easy to log in\". Hardest part: aligning the client's designers and developers, who had a long history of misunderstanding each other.",

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

    role: "Consultant · cost-driver analysis, dashboard design & ML forecasting",
    team: "Consulting team with the client's finance, operations & procurement managers",
    outcome: "15–20% potential procurement savings identified",

    overview: 'Built a comprehensive cost optimization dashboard for a food manufacturing company to identify and manage major cost drivers impacting profitability during post-COVID supply chain disruptions.',

    insights: [
      { source: "Internal & external interviews", finding: "Cost data was piling up in SAP, but no one had grouped it into comparable cost levers.", implication: "Re-categorize costs (starting from the bill of materials) before drawing any chart." },
      { source: "Factory comparison", finding: "Factories making similar products had very different costs, driven by productivity and raw-material waste.", implication: "Side-by-side site comparison is the most useful first view." },
      { source: "Manager testing", finding: "Executives wanted a one-screen summary; operations teams needed transaction-level detail.", implication: "One flat dashboard can't serve both. The depth needs layers." },
    ],
    decisions: [
      { question: "One dashboard or layers?", options: ["One detailed dashboard", "Separate reports per team", "Tiered drill-down (LV0 → LV1 → detail)"], chose: "Tiered drill-down (LV0 → LV1 → detail)", why: "Everyone starts from the same network summary and goes only as deep as their job needs, so execs and operators share one source of truth." },
      { question: "How simple should it be?", options: ["Minimal KPIs only", "Context-aware detail where decisions happen"], chose: "Context-aware detail where decisions happen", why: "Testing with managers showed that oversimplified views hid the cost drivers they needed to act on." },
    ],
    hypothesisCheck: "Supported: despite missing data, the models (decision trees, random forests) forecast procurement price hikes and backed recommendations on recipes, suppliers, materials and buying formulas.",

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
        { label: 'Levels of drill-down', value: '4', unit: 'network summary → transaction detail' },
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
