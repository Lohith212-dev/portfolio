// Copy, quotes, GIFs and numbers for "Meanwhile, web pages".
// Numbers come from the Crozaint AI observability build logs
// (round-7/SPEND.md); quotes were checked against the sources below.

const IMG = '/images/thoughts/meanwhile-web-pages';
const VID = '/videos/thoughts/meanwhile-web-pages';

export const quotes = [
  {
    id: 'q1',
    text: 'With artificial intelligence we are summoning the demon.',
    who: 'Elon Musk',
    role: 'CEO, Tesla and SpaceX',
    when: 'MIT, 2014',
    photo: `${IMG}/musk.webp`,
  },
  {
    id: 'q2',
    text: 'There’s a 25% chance that things go really, really badly.',
    who: 'Dario Amodei',
    role: 'CEO, Anthropic',
    when: 'Axios AI+ Summit, 2025',
    photo: `${IMG}/amodei.webp`,
  },
  {
    id: 'q3',
    text: 'AI will probably most likely lead to the end of the world, but in the meantime, there’ll be great companies.',
    who: 'Sam Altman',
    role: 'now CEO, OpenAI',
    when: 'Airbnb Open Air, 2015',
    photo: `${IMG}/altman.webp`,
  },
];

export const gifs = {
  march: {
    src: `${VID}/terminator-march.mp4`,
    poster: `${IMG}/terminator-march-poster.webp`,
    width: 240,
    height: 136,
    alt: 'Terminator 2: a chrome T-800 endoskeleton marches toward the camera, a machine army behind it.',
    caption: 'The forecast, apparently.',
    credit: 'Terminator 2: Judgment Day (1991)',
    href: 'https://giphy.com/gifs/IZY2SE2JmPgFG',
  },
  why: {
    src: `${VID}/but-why.mp4`,
    poster: `${IMG}/but-why-poster.webp`,
    width: 480,
    height: 270,
    alt: 'Ryan Reynolds in scrubs, slowly lowering a surgical mask, captioned: But why?',
    caption: 'You, right now.',
    credit: 'Harold & Kumar Go to White Castle (2004)',
    href: 'https://giphy.com/gifs/1M9fmo1WAFVK0',
  },
  team: {
    src: `${VID}/avengers.mp4`,
    poster: `${IMG}/avengers-poster.webp`,
    width: 480,
    height: 258,
    alt: 'The Avengers circle up in a wrecked New York street as the camera swings around them.',
    caption: 'The team, assembling at 9am.',
    credit: 'The Avengers (2012)',
    href: 'https://giphy.com/gifs/5cZbRBLhW4tc4',
  },
  yes: {
    src: `${VID}/oh-yeah.mp4`,
    poster: `${IMG}/oh-yeah-poster.webp`,
    width: 332,
    height: 250,
    alt: 'Macho Man Randy Savage, in sunglasses and a jewelled crown, nodding with total approval.',
    caption: 'Me, approving the hero.',
    credit: 'Randy Savage, WWE',
    href: 'https://giphy.com/gifs/AobQDNI4K7a4U',
  },
  raw: {
    src: `${VID}/its-raw.mp4`,
    poster: `${IMG}/its-raw-poster.webp`,
    width: 480,
    height: 332,
    alt: 'Gordon Ramsay throws his hands up as the words It’s raw pop on screen.',
    caption: 'The reviewer agent, every single round.',
    credit: 'Gordon Ramsay',
    href: 'https://giphy.com/gifs/ftdB6XY9fSYdxBTm3w',
  },
  money: {
    src: `${VID}/take-my-money.mp4`,
    poster: `${IMG}/take-my-money-poster.webp`,
    width: 480,
    height: 268,
    alt: 'Fry from Futurama waving a fistful of cash: Shut up and take my money!',
    caption: 'Me, reading the invoice.',
    credit: 'Futurama, “Attack of the Killer App” (2010)',
    href: 'https://giphy.com/gifs/yAYZnhvY3fflS',
  },
  agents: {
    src: `${VID}/office-papers.mp4`,
    poster: `${IMG}/office-papers-poster.webp`,
    width: 480,
    height: 240,
    alt: 'A busy office: people at desks throw papers in the air as a man in a suit walks through.',
    caption: 'The agents, at 9:01am.',
    credit: 'The Beaverton, CraveTV',
    href: 'https://giphy.com/gifs/l3q2XOZGN48et1i6Y',
  },
  crew: {
    src: `${VID}/roll-camera.mp4`,
    poster: `${IMG}/roll-camera-poster.webp`,
    width: 480,
    height: 480,
    alt: 'Illustration: a tiny film crew wheels a camera dolly, one of them shouting Roll camera!',
    caption: 'The media crew, rolling.',
    credit: 'Robertas Nevecka',
    href: 'https://giphy.com/gifs/h9fBq3xOk99ycznOKp',
  },
  thumbs: {
    src: `${VID}/thumbs-up.mp4`,
    poster: `${IMG}/thumbs-up-poster.webp`,
    width: 236,
    height: 276,
    alt: 'The T-800 sinks into molten steel, giving one last thumbs up.',
    caption: 'See you at the next page.',
    credit: 'Terminator 2: Judgment Day (1991)',
    href: 'https://giphy.com/gifs/7TtvTUMm9mp20',
  },
};

// How the page got made: the real pipeline, stage by stage, in plain
// words. `mine` marks the five gates where I decide; `who` is the back of
// the card, the teammate that stage turns into as you scroll.
export const pipeline = [
  {
    row: 'Plan and research',
    stages: [
      { id: 'kickoff', label: 'Stage 0', title: 'Kick-off', line: 'Sets up a fresh workspace and a control board I can check from my phone. 📱', who: { name: 'Orchestrator', line: 'Runs the show and keeps the board current. Never sleeps. 🫡' } },
      { id: 'brief', label: 'Stage 1', title: 'Brief', line: 'Turns the sales call or my notes into a one-page brief, then freezes it so nobody drifts. 🧊', who: { name: 'Orchestrator, again', line: 'Also writes the brief. Many hats, no head. 🎩' } },
      { id: 'research', label: 'Stage 2 · 3 agents at once', title: 'Market research', bullets: ['Reads the platform we build on', 'Reads the rivals', 'Reads the firms selling the same thing'], foot: 'All of it as a buyer would. 🔎', who: { name: 'Researchers ×3', line: 'Read the market like buyers, in parallel. 🕵️' } },
      { id: 'script', label: 'Stage 3', title: 'Script', bullets: ['A writer drafts the story', 'A checker traces every claim to a source', 'A critic pokes holes'], foot: 'Loops until every claim is sourced. 🔁', who: { name: 'Writer, fact-checker, critic', line: '31 claims checked. Unsourced? Cut. ✂️' } },
    ],
  },
  {
    row: 'Direction',
    stages: [
      { id: 'direction', mine: true, label: 'Stage 4 · me', title: 'Direction', line: 'One question for me: reuse our reference library, or name 2–5 new sites to learn from?', who: { me: true, name: 'Me', line: 'Picked where the look comes from. 👑' } },
      { id: 'refs', label: 'Brand-blind scout', title: 'References pass', line: 'Captures live pages, not thumbnails, and tags each with the one move worth stealing. 📸', who: { name: 'Scout', line: 'Brand-blind on purpose, so it can’t copy us to ourselves. 🙈' } },
      { id: 'skin', label: 'Director agent', title: 'Skin pass', line: 'Maps each move onto our brand without sanding it down. 🎨', who: { name: 'Director', line: 'Taste, written down. 🎬' } },
    ],
  },
  {
    row: 'Build, review, ship',
    stages: [
      { id: 'hero', mine: true, label: 'Gate A · me', title: 'Hero', line: 'Built alone, round after round, until I say yes. 🙅 → 🙆', who: { me: true, name: 'Me', line: 'Said no a lot. Then yes. ✅' } },
      { id: 'signature', mine: true, label: 'Gate B · me', title: 'Signature section', line: 'Then the part that shows the product working. Same deal.', who: { me: true, name: 'Me', line: 'Same deal, second time. ✅' } },
      { id: 'lanes', label: 'Up to 3 agents at once', title: 'Section lanes', bullets: ['Build it', 'Screenshot it on desktop and phone', 'Grade it against the checklist', 'Fix it (three rounds, max)'], who: { name: 'Builders ×3 + the media crew', line: 'Code from Claude; photos, loops, voice and music through OpenRouter. 🧱' } },
      { id: 'review', label: 'Stage 6', title: 'Review', line: 'A reviewer who’s never seen the page reads it cold, plus an SEO check. One fix round.', who: { name: 'Critic', line: 'Nobody likes it. Everyone needs it. 🧐' } },
      { id: 'feedback', mine: true, label: 'Me', title: 'Feedback round', line: 'My notes go to the agents word for word, then back into the lanes. 📝', who: { me: true, name: 'Me', line: 'Notes, verbatim, every round. 📝' } },
      { id: 'ship', mine: true, label: 'Stage 7 · me', title: 'Ship', line: 'I say “ship it” and it goes live. 🚀', who: { me: true, name: 'Me', line: 'Pressed the button. 🚀' } },
    ],
  },
];

// The team, once the pipeline has turned into people. Agents run in Claude
// Code; every photo, loop, voice and music cue came through OpenRouter.
export const teamGroups = [
  {
    id: 'agents',
    logo: 'claude',
    gif: 'agents',
    title: 'The agents',
    note: 'all Claude Code',
    members: ['Orchestrator', 'Researchers ×3', 'Writer', 'Fact-checker', 'Critic', 'Scout', 'Director', 'Builders ×3', 'Reviewer'],
  },
  {
    id: 'media',
    logo: 'openrouter',
    gif: 'crew',
    title: 'The media crew',
    note: 'all through OpenRouter',
    members: ['Photographer · Krea 2, FLUX, GPT Image', 'Camera · Kling 3, Veo 3.1', 'Narrator · ElevenLabs v4', 'Composer · Google Lyria 3'],
  },
  {
    id: 'human',
    logo: 'me',
    gif: 'yes',
    title: 'The human',
    note: 'that’s me',
    members: ['Creative director', 'Five gates: the look, the hero, the signature section, every feedback round, and ship. 😎'],
  },
];

// Ten of the photo takes, in the order they were made.
const TAKES = `${IMG}/takes`;
export const takes = [
  { file: 'tier-l1--krea_krea-2-large--1', label: 'L1 · Krea 2 · take 1' },
  { file: 'tier-l1--krea_krea-2-large--2', label: 'L1 · Krea 2 · take 2' },
  { file: 'tier-l2--black-forest-labs_flux-3-image--1', label: 'L2 · FLUX 3 · take 1' },
  { file: 'tier-l2--krea_krea-2-large--1', label: 'L2 · Krea 2 · take 1' },
  { file: 'tier-l2--krea_krea-2-large--2', label: 'L2 · Krea 2 · take 2' },
  { file: 'tier-l3--krea_krea-2-large--1', label: 'L3 · Krea 2 · take 1' },
  { file: 'tier-l3--krea_krea-2-large--2', label: 'L3 · Krea 2 · take 2' },
  { file: 'tier-l3--krea_krea-2-large--3', label: 'L3 · Krea 2 · take 3' },
  { file: 'tier-l3--krea_krea-2-large--4', label: 'L3 · Krea 2 · take 4' },
  { file: 'tier-l3--krea_krea-2-large--5', label: 'L3 · Krea 2 · take 5' },
].map((t) => ({ ...t, src: `${TAKES}/${t.file}.webp` }));

export const film = {
  src: `${VID}/film.mp4`,
  captions: `${VID}/film.vtt`,
  poster: `${IMG}/film-poster.webp`,
};

export const rules = [
  { icon: 'spine', title: 'One story spine', line: 'Cut every section that doesn’t move it.' },
  { icon: 'clock', title: 'A problem you can feel', line: 'Plus one sourced number.' },
  { icon: 'ui', title: 'Product UI that’s alive', line: 'Never a flat pasted screenshot.' },
  { icon: 'proof', title: 'Proof with a paper trail', line: '31 claims checked before any design.' },
  { icon: 'invention', title: 'Familiar sections, one invention', line: 'Spend the new idea where it sells.' },
  { icon: 'frames', title: 'Motion checked frame by frame', line: 'The last frame hides the stutter.' },
  { icon: 'rule', title: 'Every mistake becomes a rule', line: 'So it can’t happen twice.' },
];

export const receipt = {
  total: '$11.20',
  calls: 60,
  bars: [
    { name: 'Video', calls: 20, value: '$9.60', width: 100 },
    { name: 'Images', calls: 16, value: '$0.93', width: 9.7 },
    { name: 'Voice + transcripts', calls: 15, value: '$0.36', width: 3.75 },
    { name: 'Music', calls: 5, value: '$0.24', width: 2.5 },
    { name: 'AI judging the takes', calls: 4, value: '$0.06', width: 0.63 },
  ],
};

export const sources = [
  {
    id: 'q1',
    label: 'Elon Musk, MIT AeroAstro Centennial Symposium, 24 October 2014. Reported by TIME, republished by Fortune.',
    href: 'https://fortune.com/2014/10/27/elon-musk-warns-artificial-intelligence-is-like-summoning-the-demon',
  },
  {
    id: 'q2',
    label: 'Dario Amodei, Axios AI+ DC Summit, 17 September 2025. Reported by Axios.',
    href: 'https://www.axios.com/2025/09/17/anthropic-dario-amodei-p-doom-25-percent',
  },
  {
    id: 'q3',
    label: 'Sam Altman, then president of Y Combinator, at Airbnb Open Air, June 2015. Reported by Business Insider, via the Future of Life Institute.',
    href: 'https://futureoflife.org/ai/sam-altman-investing-in-ai-safety-research/',
  },
];

// Portraits: Wikimedia Commons, CC BY 2.0, shown in greyscale and cropped.
export const photoCredits = [
  { who: 'Elon Musk', by: 'Steve Jurvetson', href: 'https://commons.wikimedia.org/wiki/File:Elon_Musk_2015.jpg' },
  { who: 'Dario Amodei', by: 'TechCrunch', href: 'https://commons.wikimedia.org/wiki/File:Dario_Amodei_at_TechCrunch_Disrupt_2023_07.jpg' },
  { who: 'Sam Altman', by: 'TechCrunch', href: 'https://commons.wikimedia.org/wiki/File:Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_(cropped).jpg' },
];
