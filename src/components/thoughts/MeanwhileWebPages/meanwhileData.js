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

// Who did the work. Agents run in Claude Code; every photo, loop, voice and
// music cue came from a model called through one OpenRouter account.
export const teamGroups = [
  {
    id: 'agents',
    logo: 'claude',
    title: 'The agents',
    note: 'all Claude Code',
    members: [
      { name: 'Researchers ×3', role: 'Market', line: 'Read the market like a buyer: the partner, the competitors, the firms selling the same thing. 🔎' },
      { name: 'Scriptwriter', role: 'Story', line: 'One story, section by section. Every number traced to a source. ✍️' },
      { name: 'Fact-checker', role: 'Claims', line: '31 claims checked against primary sources. Unsourced? Cut. ✂️' },
      { name: 'Director', role: 'Look', line: 'Maps reference sites onto the brand without sanding off what made them good. 🎬' },
      { name: 'Builders ×3', role: 'Code', line: 'One section each: build it, screenshot it on desktop and phone, grade it, fix it. 🧱' },
      { name: 'Critic', role: 'Review', line: 'Reviews every section cold, against a written checklist. Nobody likes it. Everyone needs it. 🧐' },
    ],
  },
  {
    id: 'media',
    logo: 'openrouter',
    title: 'The media crew',
    note: 'all through OpenRouter',
    members: [
      { name: 'Photographer', role: 'Krea 2 · FLUX · GPT Image', line: 'Shot every engineer on the page. Has never held a camera. 📸' },
      { name: 'Camera crew', role: 'Kling 3 · Veo 3.1', line: 'Five-second loops of those engineers, plus the film’s plates. 🎥' },
      { name: 'Narrator', role: 'ElevenLabs v4', line: 'Two voices auditioned, one hired. 🎙️' },
      { name: 'Composer', role: 'Google Lyria 3', line: 'Wrote the score. Second take: darker, no vocals. 🎹' },
    ],
  },
  {
    id: 'human',
    logo: 'me',
    title: 'The human',
    note: 'that’s me',
    members: [
      { name: 'Creative director', role: 'Six decisions', line: 'Wrote the brief, signed off the story, picked the look, approved the hero, sent fixes back, shipped it. Taking credit for all 14 sections. 😎' },
    ],
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
  loops: ['l1', 'l2', 'l3'].map((t) => ({
    src: `${VID}/loop-${t}.mp4`,
    poster: `${IMG}/loop-${t}-poster.webp`,
    width: 720,
    height: 720,
    alt: `Five-second generated loop of the ${t.toUpperCase()} engineer from the page.`,
  })),
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
