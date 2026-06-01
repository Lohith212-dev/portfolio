import {
  DocumentLogicIcon,
  EyeRevealIcon,
  InterfaceFrameIcon,
  JourneyFlowIcon,
  ProductionShieldIcon,
  SpeedBuildIcon,
  UiOutputIcon,
  UxClarityIcon,
} from '../../icons/icons';

export const caseStudyLinks = [
  { href: '#tldr', label: 'TL;DR' },
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#flow', label: 'Product Demo' },
  { href: '#outcome', label: 'Outcome' },
];

export const metrics = [
  {
    label: 'Next-step continuation',
    value: '89%',
    startValue: 32,
    endValue: 89,
    suffix: '%',
    detail: 'up from 32%',
    tooltip: [
      'Measures how often students start the next recommended activity immediately after completing one.',
      'This improved by making the next step explicit, removing alternate paths, and keeping the user in a continuous flow instead of returning them to a menu.',
    ],
  },
  {
    label: 'Progress depth',
    value: '72%',
    startValue: 52,
    endValue: 72,
    suffix: '%',
    detail: 'up from 52%',
    tooltip: [
      'Measures how much of the system-recommended path a student completes before dropping off.',
      'This increased by structuring the course into guided, adaptive paths, ensuring students only see what they need and do not get lost in the full syllabus.',
    ],
  },
  {
    label: 'Time to first meaningful action',
    value: '45 sec',
    startValue: 112,
    endValue: 45,
    suffix: ' sec',
    detail: 'down from 1 min 52 sec',
    tooltip: [
      'Measures how long it takes for a student to start their first learning activity after opening the app.',
      'Reduced by removing setup decisions and surfacing a single, immediate next action, so users can start learning without figuring out where to begin.',
    ],
  },
];

export const outcomePollOptions = [
  {
    id: 'option-a',
    label: 'Option A: Tell me exactly what to do next',
    initialVotes: 10,
  },
  {
    id: 'option-b',
    label: "Option B: Show me the map, I'll navigate",
    initialVotes: 6,
  },
  {
    id: 'option-c',
    label: 'Option C: Let me explore and figure it out',
    initialVotes: 4,
  },
];

export const stakeholderQuotes = [
  {
    name: 'Sanchari',
    initials: 'S',
    role: 'Technical Lead, e-GMAT',
    image: '/images/testimonials/testimonial-sanchari-portrait.webp',
    linkedin: 'https://www.linkedin.com/in/shomesanchari/',
    quote: 'I had not thought about UX at this level before. The minute decisions Lohith made made the flow surprisingly easy to follow. What also stood out was how he used DesignForge to break the work into simple atomic blocks, which sped development up very quickly.',
  },
  {
    name: 'Abhishek',
    initials: 'A',
    role: 'Backend Developer, e-GMAT',
    image: '/images/testimonials/testimonial-abhishek-portrait.webp',
    linkedin: 'https://www.linkedin.com/in/abhishek25varshney/',
    quote: 'Lohith was very clear about frontend data requirements, which made the backend contracts easy to draft. Within a week, even though he is not a developer, he picked up the language and methods fast, and that made collaboration smoother with very little rework.',
  },
];

export const redditCards = [
  {
    subreddit: 'r/digitalSATs',
    title: 'Practice was not turning into learning',
    quote: "I don’t feel like I’m learning anything useful…",
    interpretation: 'Practice was happening, but it was not reliably translating into understanding or progress.',
    href: 'https://www.reddit.com/r/digitalSATs/comments/1gh5y4p',
  },
  {
    subreddit: 'r/SAT',
    title: 'Explanations answered questions, not concepts',
    quote: 'The explanations… don’t teach the concepts involved.',
    interpretation: 'Students could review answers, but not always learn the underlying concept well enough to transfer.',
    href: 'https://www.reddit.com/r/Sat/comments/14lpzv9',
  },
  {
    subreddit: 'r/SAT',
    title: 'Foundational gaps stayed hidden',
    quote: 'I fundamentally don’t know…',
    interpretation: 'Many students were not just making mistakes — they were missing buried foundations the system failed to surface.',
    href: 'https://www.reddit.com/r/Sat/comments/1sd5pgn/review_course_was_a_bust/',
  },
  {
    subreddit: 'r/satprep',
    title: 'Resources became a content dump',
    quote: 'Here’s 800 pages… weak spots get two problems.',
    interpretation: 'The market had enough material, but not enough intelligence to decide what deserved attention for each student.',
    href: 'https://www.reddit.com/r/satprep/comments/1lqvbql',
  },
];

const tutorBehaviorVideos = {
  evaluateVideo: '/videos/case-studies/sat-lms/private-tutor-evaluate.mp4',
  guideVideo: '/videos/case-studies/sat-lms/guide.mp4',
  encourageVideo: '/videos/case-studies/sat-lms/encourage.mp4',
};

export const tutorBehaviors = [
  {
    id: 'evaluate',
    title: 'EVALUATE',
    descriptionText: 'They would first understand where the student currently stands.',
    description: [
      { text: 'They would first ' },
      { text: 'understand where the student currently stands.', strong: true },
    ],
    video: tutorBehaviorVideos.evaluateVideo,
    direction: 'left',
    videoPosition: 'left',
  },
  {
    id: 'guide',
    title: 'GUIDE',
    descriptionText: 'A tutor would channel effort toward what needs to be learned next, instead of making the student learn everything.',
    description: [
      { text: 'A tutor would ' },
      { text: 'channel effort toward what needs to be learned', strong: true },
      { text: ' next, instead of making the student learn everything.' },
    ],
    video: tutorBehaviorVideos.guideVideo,
    direction: 'right',
    videoPosition: 'right',
  },
  {
    id: 'encourage',
    title: 'ENCOURAGE',
    descriptionText: 'A tutor would keep setbacks from becoming dead ends. They would give the next useful action.',
    description: [
      { text: 'A tutor would ' },
      { text: 'keep setbacks from becoming dead ends.', strong: true },
      { text: ' They would give the next useful action.' },
    ],
    video: tutorBehaviorVideos.encourageVideo,
    direction: 'left',
    videoPosition: 'left',
  },
];

const decisionVideos = {
  diagnostic: '/videos/case-studies/sat-lms/diagnostic-first.mp4',
  personalizedPath: '/videos/case-studies/sat-lms/personalized-path.mp4',
  nextAction: '/videos/case-studies/sat-lms/next-action.mp4',
  remedial: '/videos/case-studies/sat-lms/remedial.mp4',
};

export const tutorDecisions = [
  {
    number: '01',
    title: 'I made the diagnostic the first evident action.',
    aim: 'Establish the student\'s starting point before the LMS prescribes anything.',
    productDecision: [
      { text: 'Students should ' },
      { text: 'begin the course with the diagnostic', strong: true },
      { text: ', so the LMS can understand their level before shaping the path.' },
    ],
    uxSupport: [
      { text: 'I kept it prominent until it was taken through the ' },
      { text: 'hero advisory', strong: true },
      { text: ', the ' },
      { text: 'recommended first card', strong: true },
      { text: ', and ' },
      { text: 'friction that warned', strong: true },
      { text: ' against skipping ahead.' },
    ],
    visualType: 'diagnostic',
    video: decisionVideos.diagnostic,
    placeholderTitle: 'Course focus screenshot',
    placeholderLabel: 'Diagnostic-first course state',
    insetTitle: 'Diagnostic advisory modal',
    annotations: [
      'Diagnostic gets top priority',
      'Why this matters is explained',
      'Browsing stays secondary',
      'Guided before exploration',
    ],
  },
  {
    number: '02',
    title: 'I made the personalized path feel earned — not magical.',
    aim: 'Make personalization feel trustworthy by showing the logic behind the changed path.',
    productDecision: [
      { text: 'After the diagnostic, students should get a ' },
      { text: 'path shaped by what they know, what they can skip, and what still needs proof', strong: true },
      { text: '.' },
    ],
    uxSupport: [
      { text: 'I made that payoff visible through ' },
      { text: 'recommended items', strong: true },
      { text: ', ' },
      { text: 'skipped content', strong: true },
      { text: ', ' },
      { text: 'proof checkpoints', strong: true },
      { text: ', and ' },
      { text: 'time saved', strong: true },
      { text: ', so the path felt like the reward for effort.' },
    ],
    visualType: 'personalize',
    video: decisionVideos.personalizedPath,
    placeholderTitle: 'PACE-on course screenshot',
    placeholderLabel: 'Personalized path with skipped and recommended work',
    annotations: [
      'Skipped, not hidden',
      'Recommended path',
      'Time saved',
      'Proof still required',
      'Adaptive, not arbitrary',
    ],
  },
  {
    number: '03',
    title: 'I made the next action dominant and pushed exploration into the background.',
    aim: 'Keep students moving through the right next activity instead of returning them to a syllabus.',
    productDecision: [
      { text: 'Once the path is known, the course should ' },
      { text: 'keep prescribing what to do next', strong: true },
      { text: ' instead of asking students to browse the full syllabus.' },
    ],
    uxSupport: [
      { text: 'I centered the page around ' },
      { text: 'Next Up', strong: true },
      { text: ', the ' },
      { text: 'current module', strong: true },
      { text: ', and ' },
      { text: 'resume learning', strong: true },
      { text: ', while keeping broader exploration available but secondary.' },
    ],
    visualType: 'prescribe',
    video: decisionVideos.nextAction,
    placeholderTitle: 'Prescribed next-action screenshot',
    placeholderLabel: 'Next Up, current module, and resume learning focus',
    annotations: [
      'Immediate next step',
      'Current module stays visible',
      'Exploration is secondary',
      'Action over browsing',
    ],
  },
  {
    number: '04',
    title: 'I turned weak moments into guided re-entry points.',
    aim: 'Turn low-score and return moments into clear recovery instead of self-diagnosis.',
    productDecision: [
      { text: 'When students underperform or return after a break, the LMS should ' },
      { text: 'generate a recovery path', strong: true },
      { text: ' instead of leaving them to self-correct.' },
    ],
    uxSupport: [
      { text: 'The recovery state should ' },
      { text: 'show what happened', strong: true },
      { text: ' and surface a ' },
      { text: 'clear remedial or revision action', strong: true },
      { text: ', so students ' },
      { text: 'restart from motion', strong: true },
      { text: ', not confusion.' },
    ],
    visualType: 'recover',
    video: decisionVideos.remedial,
    placeholderTitle: 'Recovery-state screenshot to be added',
    placeholderLabel: 'Will show remedial / revision re-entry state',
    annotations: [],
  },
];

export const designForgeInputFiles = [
  '2-Remedials/',
  '|-- 00-README-remedials.md',
  '|-- 01-context-and-business-rules-remedials.md',
  '|-- 02-screen-inventory-remedials.md',
  '|-- 03-user-journey-map-remedials.md',
  '|-- 04-component-specification-remedials.md',
  '|-- 05-wireframes-remedials.md',
  '|-- 06-screen-flow-diagram-remedials.md',
  '|-- 07-backend-specification-remedials.md',
  '|-- 08-frontend-success-criteria-remedials.md',
  '`-- html-renders/',
];

const businessRulesCardExcerpt = `---
## 2. How Remedials Work

### The Core Flow

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   1. COMPLETE ACTIVITY     2. MISTAKES DETECTED     3. REMEDIAL CREATED │
│                                                                         │
│   ┌─────────────┐          ┌─────────────────┐      ┌─────────────────┐ │
│   │Process Skill│   ───▶   │ 3 wrong answers │ ───▶ │ 6-question      │ │
│   │  (8 Qs)     │          │ detected        │      │ remedial added  │ │
│   └─────────────┘          └─────────────────┘      └─────────────────┘ │
│                                                                         │
│   Student scores            System identifies       Modal prompts       │
│   75% (below 80%)           specific mistakes       "Start Remedial"    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘`;

const journeyMapCardExcerpt = `---
## J1: Concept File Remedial (Happy Path)

**Trigger:** Student makes any mistake in a Concept File (100% required)

┌────────────────────────────────────────────────────────────────────────┐
│ STEP 1: Complete Concept File                                          │
├────────────────────────────────────────────────────────────────────────┤
│ Student completes CF with 4/5 correct (80%)                            │
│ System detects: 1 mistake → triggers remedial                          │
└────────────────────────────────────────────────────────────────────────┘

                                │
                                ▼

┌────────────────────────────────────────────────────────────────────────┐
│ STEP 2: Activity Results Screen                                        │
├────────────────────────────────────────────────────────────────────────┤
│ Shows:                                                                 │
│ • Score: 80%`;

export const inputSpecStackCards = [
  {
    title: '01-context-and-business-rules-remedials.md',
    excerpt: businessRulesCardExcerpt,
    className: 'inputSpecOverlayCardBusiness',
    barClass: 'cardBarB',
  },
  {
    title: '03-user-journey-map-remedials.md',
    excerpt: journeyMapCardExcerpt,
    className: 'inputSpecOverlayCardJourney',
    barClass: 'cardBarC',
  },
  {
    title: '07-backend-specification-remedials.md',
    variant: 'sql',
    className: 'inputSpecOverlayCardBackend',
    barClass: 'cardBarD',
  },
];

export const sandboxFileStructureExcerpt = `---
## 8. Sandbox File Structure

\`\`\`
pages/sandbox/remedials/
├── PageHome.jsx                  # Copy, replace API with mock data
├── PageHome.css                  # Copy
├── ActivityPage.jsx              # Copy, add remedial callback handling
├── ActivityPage.css              # Copy
├── components/
│   ├── activity/                 # Activity page components
│   │   ├── ActivityPageShell.jsx
│   │   ├── ActivityPageShell.css
│   │   └── index.js
│   ├── course/                   # Course page components
│   │   ├── ActivityLineItem.jsx
│   │   ├── ActivityLineItem.css
│   │   ├── UnitBlock.jsx
│   │   ├── UnitBlock.css`;

export const sandboxIntegrationFiles = [
  'Sandbox integration/',
  '|-- Task P3.1 - R2 integration.md',
  '|-- Task P3.2 - M2 UI update.md',
  '`-- Task P3.2 - R6 integration.md',
];

export const migrationFolderTree = `src/components/remedials/
├── RemedialCreatedModal/
│   ├── RemedialCreatedModal.jsx
│   ├── RemedialCreatedModal.css
│   └── index.js
├── RemedialCompletionFeedback/
├── RemedialActivityHeader/
├── RemedialReasonTooltip/
├── RemedialResultsNotice/
└── index.js`;

export const migrationFlowchart = `┌─────────────────────────────────────────────────────────────────────────────┐
│                          OVERALL MIGRATION SEQUENCE                         │
└─────────────────────────────────────────────────────────────────────────────┘

    STEP 1                    STEP 2                    STEP 3
┌───────────────┐        ┌───────────────┐        ┌───────────────┐
│  DELETE OLD   │───────▶│  ADD NEW      │───────▶│  UPDATE       │
│  COMPONENTS   │        │  COMPONENTS   │        │  MODIFIED     │
│  (Sequential) │        │  (PARALLEL)   │        │  COMPONENTS   │
│               │        │               │        │  (Sequential) │
│ • Remove pre- │        │ ┌───────────┐ │        │               │
│   spec files  │        │ │ Agent 1   │ │        │ • UnitBlock   │
│ • Update      │        │ │ Component │ │        │ • CurrentMod- │
│   index.js    │        │ └───────────┘ │        │   uleCard     │
│ • Remove      │        │ ┌───────────┐ │        │ • Activity-   │
│   imports     │        │ │ Agent 2   │ │        │   LineItem    │
│               │        │ │ Component │ │        │ • PageHome    │
│               │        │ └───────────┘ │        │ • ActivityPage│
│               │        │ ┌───────────┐ │        │               │
│               │        │ │ Agent N   │ │        │ Full diff     │
│               │        │ │ Component │ │        │ approach      │
│               │        │ └───────────┘ │        │               │
└───────────────┘        └───────────────┘        └───────────────┘
       │                        │                        │
       ▼                        ▼                        ▼
┌───────────────────────────────────────────────────────────────────┐
│                         STEP 4: VERIFY                            │
│   Run app, test all user journeys, check responsive, verify API    │
└───────────────────────────────────────────────────────────────────┘`;

export const journeyComponentLibrary = {
  R1: {
    name: 'Remedial Created Modal',
    type: 'Modal (New)',
    purpose: 'Single-button prompt after activity with mistakes. Shows mistake count, question count, and time estimate. One button: "Start Remedial".',
    states: ['Visible', 'Dismissed'],
  },
  R2: {
    name: 'Remedial Activity Row',
    type: 'Row (New)',
    purpose: 'Indented sidebar entry under mother activity. Shows remedial name, question count, time estimate, and status.',
    states: ['Not Started', 'In Progress', 'Completed (Pass)', 'Completed (Fail)'],
  },
  R3: {
    name: 'Remedial Completion Feedback',
    type: 'Feedback (New)',
    purpose: 'Score-based messaging after remedial completion. Green checkmark for 100%, amber warning for <100%.',
    states: ['Perfect (100%)', 'With Mistakes (<100%)'],
  },
  R4: {
    name: 'Remedial Activity Header',
    type: 'Header (New)',
    purpose: 'Header during remedial quiz showing context: "REMEDIAL" badge, mother activity name, mistake count, progress.',
    states: ['Default'],
  },
  R5: {
    name: 'Remedial Reason Tooltip',
    type: 'Tooltip (New)',
    purpose: 'Hover explanation showing why remedial was created: "Created because you made X mistake(s) in [Mother Activity]".',
    states: ['Hidden', 'Visible'],
  },
  R6: {
    name: 'Results Screen Notice',
    type: 'Notice (New)',
    purpose: 'Section in activity results screen indicating remedial was created. Shows question count and time estimate.',
    states: ['Visible (remedial created)', 'Hidden (no remedial)'],
  },
  M1: {
    name: 'Activity Results Screen',
    type: 'Modified',
    purpose: 'Add space for R6 notice. Continue button triggers R1 modal if remedial created.',
    states: ['Results Only', 'Results + Remedial Notice'],
  },
  M2: {
    name: 'Course Sidebar',
    type: 'Modified',
    purpose: 'Support indented remedial rows (R2). Remedials insert below mother activity with visual hierarchy.',
    states: ['Default', 'With Remedials'],
  },
  M3: {
    name: 'Next Up Section',
    type: 'Modified',
    purpose: 'Include remedials in queue. Priority: oldest pending remedial first (FIFO), then regular activities.',
    states: ['No Remedials', 'With Pending Remedials'],
  },
  M4: {
    name: 'Course Progress Display',
    type: 'Modified',
    purpose: 'Account for remedials: total = base - pace_shaded + remedials_created. Completed includes remedials.',
    states: ['Default'],
  },
  M6: {
    name: 'Course Time Estimate',
    type: 'Modified',
    purpose: 'Include pending remedial time in remaining estimate. Updates when remedial created.',
    states: ['Default'],
  },
};

export const journeyComponentRows = [
  {
    id: 'J1',
    name: 'CF Remedial (Happy Path)',
    desc: 'Primary flow — Concept File with any mistake',
    frequency: 'high',
    trigger: 'Any mistake in Concept File (100% required)',
    flows: [
      { label: 'Activity Complete', tags: [{ id: 'M1' }, { id: 'R6' }, { id: 'R1' }] },
      { label: 'Remedial Quiz', tags: [{ id: 'R4' }, { id: 'R3' }] },
      { label: 'Course Home', tags: [{ id: 'M2' }, { id: 'M3' }, { id: 'M4' }, { id: 'M6' }] },
    ],
  },
  {
    id: 'J2',
    name: 'Process Skill Remedial',
    desc: 'PrS with <80% accuracy',
    frequency: 'medium',
    trigger: 'Score below 80% in Process Skill',
    flows: [{ note: 'Same as J1 (different trigger threshold: <80% instead of any mistake)' }],
  },
  {
    id: 'J6',
    name: 'Remedial Skipped',
    desc: 'Student dismisses modal',
    frequency: 'medium',
    trigger: 'User dismisses R1 modal',
    flows: [
      { tags: [{ id: 'R1', state: 'dismissed' }, { id: 'M2', state: 'pending' }] },
      { label: 'Result', note: 'Remedial stays in sidebar (not_started), appears in Next Up. NOT blocking.' },
    ],
  },
];

export const designForgeSteps = [
  {
    id: 'input-spec',
    number: '00',
    title: 'Talk it through before walking it',
    artifact: 'Input specification package',
    body: [
      { text: 'Before build, I wrote down ' },
      { text: 'all', strong: true },
      { text: ' the business rules, screens, journeys, component behavior, wireframes, screen flow, backend contracts, and success criteria, so the feature had one source of truth.' },
    ],
    prevented: 'AI inventing product logic mid-build.',
    previewType: 'inputTree',
  },
  {
    id: 'map-behavior',
    number: '01',
    title: 'Map the behavior',
    artifact: 'Journey component map',
    body: [
      { text: 'Once the specification — what we are trying to build — was written into an ironclad input, I converted that into a ' },
      { text: 'student journey and a component dependency map', strong: true },
      { text: ', so the feature could be judged as a flow instead of isolated screens.' },
    ],
    prevented: 'Screens that looked right alone but failed in sequence.',
    previewType: 'journeyMap',
  },
  {
    id: 'safe-build-space',
    number: '02',
    title: 'Create a safe build space',
    artifact: 'Sandbox requirement doc',
    body: [
      { text: 'With the journey and component map in hand, I set up a ' },
      { text: 'sandbox', strong: true },
      { text: ' where those components could be assembled, tested, broken, and improved away from production pressure.' },
    ],
    prevented: 'Production constraints deciding the UX too early.',
    previewType: 'sandboxDoc',
  },
  {
    id: 'rough-experience',
    number: '03',
    title: 'Make the experience work before making it beautiful',
    artifact: 'Rough working build + gap docs',
    body: [
      { text: 'Inside the sandbox, I used a ' },
      { text: 'rough working build', strong: true },
      { text: ' to find missing states, unclear next actions, weak hierarchy, and backend gaps before any visual polish.' },
    ],
    prevented: 'Polishing while core data contracts were still unclear.',
    previewType: 'roughBuildGaps',
  },
  {
    id: 'forge-interface',
    number: '04',
    title: 'Forge the interface',
    artifact: 'Component renders + design specification',
    body: [
      { text: 'Once the rough build had exposed the real UX behavior, I moved into interface design — ' },
      { text: 'only then', strong: true },
      { text: ' documenting hierarchy, states, and treatment.' },
    ],
    prevented: 'Pretty UI detached from behavior.',
    previewType: 'componentOptions',
  },
  {
    id: 'assemble-experience',
    number: '05',
    title: 'Assemble the experience',
    artifact: 'Integrated sandbox',
    body: [
      { text: 'I dropped the polished components back into the sandbox and tested them as ' },
      { text: 'one complete flow', strong: true },
      { text: ', so the polish had to survive the journey end to end.' },
    ],
    prevented: 'Polished components that did not survive the full flow.',
    previewType: 'integratedSandbox',
  },
  {
    id: 'production',
    number: '06',
    title: 'Move into production',
    artifact: 'Migration to production.',
    body: [
      { text: 'With the full flow validated, I moved to production with ' },
      { text: 'migration notes, system checks, backend contracts, and token-deviation reports', strong: true },
      { text: ', so intent did not get flattened in handoff.' },
    ],
    prevented: 'Intent getting flattened in handoff.',
    previewType: 'productionMigration',
  },
];

export const designForgeOutcomes = [
  {
    title: 'Faster build',
    copy: 'Less rework because the product was not being rediscovered during execution.',
    Icon: SpeedBuildIcon,
  },
  {
    title: 'Cleaner UX',
    copy: 'Building the rough experience first exposed UX problems before visual polish.',
    Icon: UxClarityIcon,
  },
  {
    title: 'Better UI output',
    copy: 'Every component had a known role inside the student journey.',
    Icon: UiOutputIcon,
  },
  {
    title: 'Safer production migration',
    copy: 'The final feature carried product logic and design intent into the real system.',
    Icon: ProductionShieldIcon,
  },
];

export const whyThisWorkedItems = [
  {
    id: 'spec',
    label: 'The spec',
    rest: 'carried the logic.',
    Icon: DocumentLogicIcon,
  },
  {
    id: 'journey',
    label: 'The journey',
    rest: 'carried the flow.',
    Icon: JourneyFlowIcon,
  },
  {
    id: 'rough-build',
    label: 'The rough build',
    rest: 'exposed the UX.',
    Icon: EyeRevealIcon,
  },
  {
    id: 'interface',
    label: 'The interface',
    rest: 'sharpened the product.',
    Icon: InterfaceFrameIcon,
  },
];
