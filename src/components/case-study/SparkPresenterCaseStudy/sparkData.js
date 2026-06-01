export const liveActivityUrl = '';
export const highlightClassName = 'box-decoration-clone bg-accent-green px-1 text-ink-950';

export const caseStudyLinks = [
  { href: '#tldr', label: 'TL;DR' },
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Approach' },
  { href: '#build', label: 'Build' },
  { href: '#outcome', label: 'Outcome' },
];

export const metrics = [
  {
    label: 'Batch conversion',
    value: '100 files in ~2 hours',
    startValue: 0,
    endValue: 100,
    suffix: ' files in ~2 hours',
    detail: 'Batch conversion moved from activity-by-activity authoring to scaled production.',
    tooltip: [
      'Previously, one activity could take around 3 full days to convert, review, revise, export, and upload through the manual workflow.',
      'The metric refers to batch conversion speed for a representative production run.',
    ],
  },
  {
    label: 'Translation reliability',
    value: '95%+ automated accuracy',
    startValue: 45,
    endValue: 95,
    suffix: '%+ automated accuracy',
    detail: 'Translation reliability was supported by validation and correction checks.',
    tooltip: [
      'Reliability came from codifying SME intent, design judgment, component rules, schema expectations, and quality checks into the workflow.',
      'The remaining edge cases were handled through validator and corrector stages.',
    ],
  },
  {
    label: 'Update cycle',
    value: 'MIN to update',
    detail: 'Content changes could move from source correction to rendered activity without rebuilding a full package.',
    tooltip: [
      'Maintenance shifted from regenerate-and-reupload to update-source-and-render.',
      'The final activity became a render of structured content instead of a static third-party package.',
    ],
  },
];

export const painPoints = [
  {
    actor: 'ID · Instructional Designer',
    initials: 'ID',
    title: 'Conversion was manual',
    body: 'I opened every file, read and understood the complete lesson, and interpreted it to build manually in [Articulate Rise](https://rise.com). One file. Three days.',
  },
  {
    actor: 'SM · Course Architect',
    initials: 'SM',
    title: 'Intent lived in separate rooms',
    body: 'I wrote the content knowing exactly how it should flow. By the time it came back built in Rise, the sequence had shifted. We reviewed and realigned — every time.',
  },
  {
    actor: 'RV · Course Architect',
    initials: 'RV',
    title: 'Review became production',
    body: 'I reviewed every activity not just for accuracy, but to check whether my intended learning sequence survived the conversion. That review round was baked into every production cycle.',
  },
  {
    actor: 'OP · Operations',
    initials: 'OP',
    title: 'Every update was a rebuild',
    body: 'When a source file changed, I updated it in Rise, exported it as an HTML package, replaced the production file manually, and re-added all tracking IDs by hand. Every time.',
  },
  {
    actor: 'PE · Product & Engineering',
    initials: 'PE',
    title: 'Tracking was locked out',
    body: 'I needed custom tracking on specific learner actions. Rise didn\'t support it. The presentation layer lived inside Rise — and we were limited to what Rise let us measure.',
  },
];

export const approachMachines = [
  {
    number: '01',
    title: 'The SME lens',
    question: 'What should the learner understand here?',
    body: 'This machine had to preserve instructional intent — what matters, what comes first, what needs emphasis. The content already carried this intelligence. The system needed to read it.',
  },
  {
    number: '02',
    title: 'The designer\'s eye',
    question: 'How should this moment be presented?',
    body: 'This machine had to decide: is this an explanation, an example, a takeaway, a practice problem? The same call a designer makes manually — made automatically.',
  },
  {
    number: '03',
    title: 'The engineer\'s spine',
    question: 'How does this become stable product input?',
    body: 'This machine had to turn presentation decisions into structured, valid, renderable data — something the backend could store and the frontend could reliably render.',
  },
];

export const decisions = [
  {
    number: '01',
    title: 'Decision 01',
    choice: 'We built a modular system, not a single monolith.',
    situation: 'Every lesson had to move from raw prose to a structured output format the rendering engine could read — reliably, at scale, without manual oversight at every step.',
    reasoning: [
      'A single monolith is simpler: one input, one output, fewer parts to build. But when it fails, you can\'t tell where.',
      'A modular system has more stages. Each depends on the previous — more to build, more to test. But each stage does exactly one thing. When it fails, you know which stage to fix. And when the system needs to grow, you add a stage without touching the ones that already work.',
    ],
    result: [
      'We started with three stages: extract, store, render. Stages two and three worked. Stage one didn\'t — so we debugged it in isolation, split it into two, and added a Validator and Corrector around it. Three stages became six. None of the working stages changed.',
      '<mark>That\'s the proof.</mark>',
    ],
  },
  {
    number: '02',
    title: 'Decision 02',
    choice: 'A fixed component vocabulary, not open-ended interpretation.',
    situation: 'The system needed to decide how to present every moment in a lesson — whether a piece of content was an explanation, an example, a practice problem, a takeaway. Until now, a designer made that call manually for every lesson.',
    reasoning: [
      'If the system could invent any presentation approach, output would be unpredictable and impossible to test comprehensively. A fixed vocabulary means the system works within a defined set. Every lesson speaks the same visual language. Testing becomes finite.',
      'We closed the vocabulary.',
    ],
    result: [
      'The first version had 25 components — too many. Reviewing the output as learners, the switching felt overwhelming. We simplified the library. Because the vocabulary was fixed, removing a component was plug-and-play.',
      '<mark>The fixed vocabulary became a lever: update one component, and every lesson that uses it updates with it. Automatically.</mark>',
    ],
  },
  {
    number: '03',
    title: 'Decision 03',
    choice: 'JSON as the contract between the pipeline and the backend — not HTML.',
    situation: 'The pipeline needed to hand its output to the backend for storage, and the backend to the renderer for display. HTML was the path of least resistance — it would have worked.',
    reasoning: [
      'HTML is a single chunk — no named parts, nothing addressable, nothing trackable. Store it, display it, and that\'s all you get.',
      'JSON names everything. Every component, every field — addressable and trackable. And when both the pipeline and backend share the same expected format, the handoff becomes a contract.',
      'We chose JSON.',
    ],
    result: [
      'The backend stored structured data, not an HTML export. Every component was named, every learner interaction trackable — and the pipeline and backend held the same contract at every conversion.',
      '<mark>HTML would have stored the lesson. JSON stored every moment inside it.</mark>',
    ],
  },
  {
    number: '04',
    title: 'Decision 04',
    choice: 'Structured fields where the component decides the sequence. Free-flow HTML where the learning content does.',
    situation: 'For most components, the component\'s own structure defined the layout — a heading, a body, a visual. But some learning blocks contained mixed content where the author\'s sequence was the layout: text, then image, then more text — not because of component design, but because that was the order the learning demanded.',
    reasoning: [
      'Structured fields organise content by type — the component decides what goes where. When the learning sequence is more specific than the component\'s structure, typed fields break it. Images land in the image field, text in the text field — regardless of the order the author intended.',
      'Free-flow HTML lets content define its own order. The trade-off: it can\'t be addressed field by field. For components where the author\'s sequence is the layout, that\'s the right trade.',
      'The schema became a hybrid.',
    ],
    result: [
      'Learning blocks that mixed text and images now rendered in the order the content was written, not the order the data model preferred.',
      '<mark>The schema served the learning sequence, not data convenience.</mark>',
    ],
  },
];

export const buildTimelineSteps = [
  {
    number: '01',
    icon: 'map',
    iconTone: 'mint',
    title: 'Map the manual workflow',
    description: 'Every step of the existing process documented — who did it, why, and what a good outcome looked like. That map defined exactly what the system had to replicate.',
  },
  {
    number: '02',
    icon: 'proof',
    iconTone: 'coral',
    stat: '5 files',
    title: 'Proof of concept',
    description: 'Five complete content files converted end-to-end inside Claude Desktop — each as a full artifact, iterated within the conversation until the output was right. The goal wasn\'t perfect output. It was proof that automated conversion was possible at all.',
  },
  {
    number: '03',
    icon: 'blocks',
    iconTone: 'sky',
    stat: '20 files',
    title: 'Identify every learning block',
    description: 'With proof established, 20 files were run through the same process to surface every recurring learning block type. By the end, the full vocabulary of the system was known.',
  },
  {
    number: '04',
    icon: 'design',
    iconTone: 'lavender',
    title: 'Design the learning blocks',
    description: 'Each block from the lexicon was designed — its intent, when to use it, how it should render, and what distinguished it from adjacent block types. The designer\'s judgment, encoded as structured rules.',
  },
  {
    number: '05',
    icon: 'logic',
    iconTone: 'amber',
    title: 'Build translation intelligence',
    description: 'The most knowledge-intensive step in the manual workflow — deciding how to present each moment — encoded into the extractor. The component lexicon became its decision guide.',
  },
  {
    number: '06',
    icon: 'validate',
    iconTone: 'sage',
    title: 'Build the validator',
    description: 'The SME\'s review criteria documented and automated. The validator compared converted output against the source file, flagging missing content, broken sequences, and intent drift.',
  },
  {
    number: '07',
    icon: 'correct',
    iconTone: 'rose',
    title: 'Build the corrector',
    description: 'Validator errors fed directly into the corrector. What could be resolved without human input, was. The pipeline could now self-correct before output reached the backend.',
  },
  {
    number: '08',
    icon: 'render',
    iconTone: 'violet',
    stat: '4 versions',
    title: 'Build the renderer',
    description: 'Four versions built before the output was right. Each refined how the JSON contract translated into a learning experience the student would actually encounter.',
  },
  {
    number: '09',
    icon: 'scale',
    iconTone: 'green',
    stat: '100+ files',
    title: 'Test at scale',
    description: 'One hundred-plus files run through the complete pipeline. Issues surfaced, inputs refined, edge cases handled. The system hardened before it was trusted in production.',
  },
];

export const beforePipelineSteps = [
  {
    id: 'write',
    label: 'Write',
    description: 'Prose content authored by SME',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/sme.png',
    top: '69%',
    left: '7%',
    rotate: '2deg',
    width: '82%',
  },
  {
    id: 'extract',
    label: 'Extract',
    description: 'Content built manually in Articulate Rise',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/designer.png',
    top: '53%',
    left: '11%',
    rotate: '-2deg',
    width: '82%',
  },
  {
    id: 'validate',
    label: 'Validate',
    description: 'Learning intent reviewed by SME',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/sme.png',
    top: '37%',
    left: '6%',
    rotate: '2deg',
    width: '82%',
  },
  {
    id: 'correct',
    label: 'Correct',
    description: 'Fixes implemented back in Rise',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/designer.png',
    top: '21%',
    left: '10%',
    rotate: '-2deg',
    width: '82%',
  },
  {
    id: 'deploy',
    label: 'Deploy',
    description: 'Tracking added, activity linked by operations',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/operations.png',
    top: '6%',
    left: '8%',
    rotate: '2deg',
    width: '82%',
  },
];

export const sparkPipelineSteps = [
  {
    id: 'renderer',
    label: 'Renderer',
    description: 'JSON stored, rendered natively',
    iconType: 'glyph',
    iconSrc: '/images/case-studies/spark/build/render.svg',
    top: '10%',
    left: '8%',
    rotate: '0.8deg',
    width: '80%',
  },
  {
    id: 'corrector',
    label: 'Corrector',
    description: 'Resolves errors in the JSON',
    iconType: 'glyph',
    iconSrc: '/images/case-studies/spark/build/correct.svg',
    top: '30%',
    left: '6%',
    rotate: '-1.4deg',
    width: '83%',
  },
  {
    id: 'validator',
    label: 'Validator',
    description: 'Checks output. Flags errors.',
    iconType: 'glyph',
    iconSrc: '/images/case-studies/spark/build/validate.svg',
    top: '50%',
    left: '10%',
    rotate: '1.4deg',
    width: '78%',
  },
  {
    id: 'extractor',
    label: 'Extractor',
    description: 'Reads prose, maps to learning blocks',
    iconType: 'glyph',
    iconSrc: '/images/case-studies/spark/build/extract.svg',
    top: '70%',
    left: '8%',
    rotate: '-1deg',
    width: '84%',
  },
  {
    id: 'write',
    label: 'Write',
    description: 'Prose content authored by SME',
    iconType: 'avatar',
    iconSrc: '/images/case-studies/spark/build/sme.png',
    top: '90%',
    left: '10%',
    rotate: '-1.5deg',
    width: '76%',
    outside: true,
    dashed: true,
  },
];

export const buildCloserMilestones = [
  {
    value: '5 files',
    description: 'used for Proof of concept',
  },
  {
    value: '20 files',
    description: 'used for Component lexicon',
  },
  {
    value: '100+ files',
    description: 'Final testing',
  },
];

export const outcomePollOptions = [
  { id: 'expertise', label: 'Subject matter expertise — domain knowledge resists systematisation', initialVotes: 18 },
  { id: 'judgment', label: 'Design judgment — presentation decisions depend on too many variables', initialVotes: 41 },
  { id: 'contract', label: 'Neither — the hard part is the contract between them', initialVotes: 27 },
];
