export const moreWorkLanes = [
  {
    id: 'product',
    eyebrow: 'Product Systems',
    title: 'Product Design',
    shortTitle: 'Product',
    accentVar: '--color-accent-orange',
    softVar: '--color-surface-peach',
    metric: '7+ tools & systems',
    proof: 'Flows, specs, dashboards, trackers, diagnostics, and decision loops.',
    description: 'Shaping messy product logic into clear decisions, usable flows, and shipped interfaces.',
    cards: [
      {
        slug: 'sk-studies',
        title: 'SK Studies',
        tag: 'Study workflow',
        note: 'Structured learning journeys with clearer next steps.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'SK Studies',
          role: 'Product design, learning workflow',
          year: '2024',
          context: 'A study workflow shaped around clearer learning momentum.',
          description: 'A lean product context for the SK Studies work, showing how structured learning journeys, visible next steps, and repeatable study behavior came together.',
          outcome: 'Made the study path easier to understand before final assets are added.',
          tools: ['Product logic', 'UX flows', 'Interface design'],
          stats: ['Study workflow', 'Learning journeys', 'Next-step clarity'],
        },
      },
      {
        slug: 'personalized-study-planner',
        title: 'Personalized Study Planner',
        tag: 'Planning system',
        note: 'A planning flow that converts goals into a usable prep path.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'Personalized Study Planner',
          hook: 'A planner that turns GMAT ambition into a route a student can actually follow.',
          intro: 'Instead of asking students to translate score goals, section strengths, and available hours into a spreadsheet, the product guides them from target-setting to an executable study plan in one connected flow.',
          role: 'Product design',
          contribution: 'I designed the flow that turns target score, current ability, sectional goals, time commitment, and study sequence into one clear planning experience.',
          year: '2024',
          status: 'Live tool',
          projectType: 'Internal product',
          meta: [
            'Role: Product design',
            'Scope: Planning workflow',
            'Tools: Figma + flow logic',
            'Status: Live',
            'Timeline: 2024',
          ],
          context: 'GMAT prep is full of moving pieces: target score, current level, section strengths, time available, and a test date that keeps getting closer. Most students know the destination, but not the path.',
          problem: 'The design problem was not just showing more data. It was helping students answer three anxious questions quickly: Can I reach this score? How long will it take? What should I do first? Without that clarity, planning becomes guesswork or a spreadsheet chore.',
          description: 'A planning flow that turns target score, available time, and prep intent into a path a student can actually follow.',
          tools: ['Figma', 'Flow design', 'UX writing', 'Planning logic'],
          heroMetrics: [
            {
              value: '3 questions',
              label: 'answered up front',
            },
            {
              value: '~10 min',
              label: 'to draft a usable first plan',
            },
            {
              value: '5 steps',
              label: 'from target to execution',
            },
          ],
          problemPoints: [
            'Students know the score they want, but not the smartest path to get there.',
            'Planning usually breaks when sectional goals, weekly hours, and test date are handled in separate places.',
            'Dense planning logic feels intimidating unless the product keeps translating it into the next clear step.',
          ],
          heroShowcase: [
            {
              src: '/images/more-works/personalized-study-planner/more-work-psp-plan-view.webp',
              alt: 'Personalized Study Planner summary view showing scores, milestones, and commitments.',
              width: 1530,
              height: 1721,
            },
            {
              src: '/images/more-works/personalized-study-planner/more-work-psp-timeline-view.webp',
              alt: 'Personalized Study Planner timeline view showing score journeys.',
              width: 1530,
              height: 1245,
            },
            {
              src: '/images/more-works/personalized-study-planner/more-work-psp-calendar-view.webp',
              alt: 'Personalized Study Planner calendar execution view.',
              width: 1530,
              height: 1543,
            },
          ],
          objectives: [
            {
              title: 'Make the path feel concrete',
              body: 'Help students see how a target score becomes sectional and sub-sectional milestones instead of abstract percentages.',
            },
            {
              title: 'Turn strategy into execution',
              body: 'Connect score goals to weekly study hours, study sequence, and a tentative test date that feels believable.',
            },
            {
              title: 'Keep progress inspectable',
              body: 'Let students revisit, edit, and understand the plan without needing an expert beside them every time.',
            },
          ],
          solutionIntro: 'I broke the experience into a simple planning arc: understand the route, inspect the score journey, and carry it into day-to-day execution.',
          solutionGroups: [
            {
              eyebrow: 'Product preview',
              title: 'Start with clarity, not intimidation',
              description: 'The opening planner summary gives students one answerable picture: current level, target milestones, sub-sectional abilities, and the commitments needed to reach them. This reduces the “where do I even begin?” moment.',
              highlights: [
                'Current and target scores sit side by side.',
                'Milestones are grouped by overall, sectional, and sub-sectional levels.',
                'The planning flow ends with concrete commitments instead of abstract advice.',
              ],
              images: [
                {
                  src: '/images/more-works/personalized-study-planner/more-work-psp-plan-view.webp',
                  alt: 'Personalized Study Planner summary view showing scores, milestones, and commitments.',
                  width: 1530,
                  height: 1721,
                  title: 'Plan summary',
                  caption: 'The full planner turns score goals into a structured route.',
                  emphasis: 'feature',
                },
                {
                  src: '/images/more-works/personalized-study-planner/more-work-psp-overall-summary.webp',
                  alt: 'Personalized Study Planner overall summary screen with score and subsection recap.',
                  width: 1530,
                  height: 1528,
                  title: 'Milestone recap',
                  caption: 'A compact checkpoint helps students confirm targets before moving on.',
                },
              ],
            },
            {
              eyebrow: 'Journeys',
              title: 'Show the journey section by section',
              description: 'Once the target is set, the planner visualizes how each section needs to move. Timelines and progress bars make improvement feel paced and believable instead of vague.',
              highlights: [
                'Each section gets its own visible journey.',
                'Time estimates frame effort as a range, not a mystery.',
                'Students can see where attention needs to shift first.',
              ],
              images: [
                {
                  src: '/images/more-works/personalized-study-planner/more-work-psp-timeline-view.webp',
                  alt: 'Personalized Study Planner timeline view showing progress and sectional journeys.',
                  width: 1530,
                  height: 1245,
                  title: 'Sectional journeys',
                  caption: 'Verbal, Quant, and Data Insights each get a visible path from current score to target.',
                  emphasis: 'feature',
                },
              ],
            },
            {
              eyebrow: 'Execution',
              title: 'Carry the plan into an execution calendar',
              description: 'A plan only matters if it survives real life. I linked the strategy layer to a calendar-style execution tracker so weekly hours, no-study days, and course blocks feel operational, not theoretical.',
              highlights: [
                'Study blocks are distributed across actual calendar days.',
                'The execution view keeps weekly hour commitments visible.',
                'Mobile navigation keeps the flow easy to return to mid-prep.',
              ],
              images: [
                {
                  src: '/images/more-works/personalized-study-planner/more-work-psp-calendar-view.webp',
                  alt: 'Personalized Study Planner execution tracker in calendar mode with study blocks and time commitments.',
                  width: 1530,
                  height: 1543,
                  title: 'Execution tracker',
                  caption: 'The plan becomes a weekly schedule with courses, hours, and study-free days.',
                  emphasis: 'feature',
                },
                {
                  src: '/images/more-works/personalized-study-planner/more-work-psp-mobile-menu.webp',
                  alt: 'Personalized Study Planner mobile menu showing step navigation through the planning flow.',
                  width: 400,
                  height: 800,
                  title: 'Mobile menu',
                  caption: 'Key planner steps stay reachable on smaller screens without losing orientation.',
                },
              ],
            },
          ],
          evidence: {
            eyebrow: 'Why it works',
            title: 'The interface keeps answering the same three questions',
            body: 'Across screens, the planner keeps returning to the same student need: what is the goal, what is the route, and what do I do next. That consistency is what makes a dense planning system feel usable.',
            points: [
              'Goal visibility: target score, sectional milestones, and tentative date stay explicit.',
              'Route visibility: timeline and summary screens show how the plan unfolds across sections.',
              'Action visibility: the execution view translates strategy into hours, tasks, and study sequence.',
            ],
          },
          impact: {
            eyebrow: 'Impact / proof',
            title: 'The value is not just planning advice. It is planning that becomes executable.',
            body: 'From the product walkthrough and supporting material, the planner is positioned to help students answer the three biggest prep questions in minutes rather than relying on guesswork or an expert call. That is the product proof this design needed to make visible.',
            metrics: [
              {
                value: '4,000+ hrs',
                label: 'of R&D behind the planning model',
              },
              {
                value: '~10 min',
                label: 'to generate the first plan',
              },
              {
                value: '$500 / 10k INR',
                label: 'expert-planning cost the tool can replace',
              },
            ],
            proof: [
              {
                title: 'From target to milestones',
                body: 'Students can move from a score goal to sectional and sub-sectional targets without doing the translation themselves.',
              },
              {
                title: 'From milestones to calendar',
                body: 'The product carries the plan into weekly execution instead of stopping at strategy.',
              },
              {
                title: 'From one-time advice to an editable system',
                body: 'Plans can be revisited and adjusted when time or goals change.',
              },
            ],
            takeaway: 'This project shows how I turn dense decision logic into interfaces that feel calmer, more legible, and easier to act on.',
          },
          takeawayCards: [
            {
              title: 'What this page should prove',
              body: 'I can translate a messy planning engine into a flow that feels explainable before it feels complex.',
            },
            {
              title: 'Why that matters',
              body: 'For students, calm and clarity are not cosmetic. They are what make a difficult plan feel worth following.',
            },
          ],
          outcome: 'Translated abstract prep goals into a visible plan structure.',
          stats: ['Goal input', 'Prep path', 'Decision support'],
        },
      },
      {
        slug: 'sigma-x',
        title: 'SIGma-X',
        tag: 'Internal product',
        note: 'Complex capability translated into a usable operating interface.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'SIGma-X',
          role: 'Internal product UX',
          year: '2024',
          context: 'A complex internal capability that needed a calmer operating surface.',
          description: 'A product interface pass focused on turning dense internal logic into clear controls, readable status, and useful operating cues.',
          outcome: 'Made the product easier to reason through for internal teams.',
          tools: ['Information architecture', 'Dashboard UX', 'Interaction design'],
          stats: ['Internal product', 'Operating UI', 'Complex logic'],
        },
      },
      {
        slug: 'scholaranium',
        title: 'Scholaranium',
        tag: 'Learning UX revamp',
        note: 'Practice, review, and learning loops rebuilt for clarity.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'Scholaranium',
          role: 'Learning UX revamp',
          year: '2023',
          context: 'A learning product surface where practice and review needed a clearer loop.',
          description: 'A revamp pass around how students enter practice, understand review, and return to learning without losing their place.',
          outcome: 'Clarified the learning loop and reduced ambiguity between practice and review.',
          tools: ['Learning UX', 'Review flows', 'Visual hierarchy'],
          stats: ['Practice loop', 'Review system', 'Learning clarity'],
        },
      },
      {
        slug: 'study-streak-rings',
        title: 'Study Streak Rings',
        tag: 'Behavior loop',
        note: 'Motivation mechanics designed around consistency and return behavior.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'Study Streak Rings',
          role: 'Behavior design',
          year: '2024',
          context: 'A behavior loop for helping study consistency feel visible and rewarding.',
          description: 'A motivation mechanic shaped around return behavior, progress memory, and the small signals that make consistency easier to continue.',
          outcome: 'Gave consistency a visible product language.',
          tools: ['Behavior design', 'Gamified UX', 'Progress states'],
          stats: ['Consistency loop', 'Return cue', 'Progress memory'],
        },
      },
      {
        slug: 'execution-tracker',
        title: 'Execution Tracker',
        tag: 'Progress visibility',
        note: 'A tracking layer for making effort, gaps, and next actions visible.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'Execution Tracker',
          role: 'Progress system UX',
          year: '2024',
          context: 'A tracker for turning messy execution into visible progress and gaps.',
          description: 'A visibility layer that helps users understand what moved, what is stuck, and what deserves attention next.',
          outcome: 'Made progress easier to inspect without reading through scattered notes.',
          tools: ['Tracking UX', 'Status design', 'Progress systems'],
          stats: ['Effort visible', 'Gap tracking', 'Next actions'],
        },
      },
      {
        slug: 'climatics',
        title: 'Climatics',
        tag: 'Side product',
        note: 'Weather app experiment focused on clean utility and visual hierarchy.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Product Systems',
          title: 'Climatics',
          role: 'Side product experiment',
          year: '2023',
          context: 'A compact weather app experiment built around everyday utility.',
          description: 'A side product focused on clean hierarchy, useful weather states, and a fast read of what matters right now.',
          outcome: 'Explored how utility apps can feel simpler without feeling thin.',
          tools: ['Product UI', 'Visual hierarchy', 'Utility design'],
          stats: ['Weather utility', 'Fast scan', 'Side product'],
        },
      },
    ],
  },
  {
    id: 'web',
    eyebrow: 'Web Services',
    title: 'Web Design & Build',
    shortTitle: 'Web Build',
    accentVar: '--color-accent-lavender',
    softVar: '--color-surface-lilac',
    metric: '150+ pages built',
    proof: 'Content structure, page design, interaction logic, and implementation-ready layouts.',
    description: 'Marketing sites, landing pages, blogs, explainers, and conversion journeys built end to end.',
    cards: [
      {
        slug: 'egmat-public-website',
        title: 'e-GMAT Public Website',
        tag: 'Public website',
        note: 'A public-facing website that introduces a dense GMAT prep ecosystem with a clearer first read.',
        actionType: 'internal-route',
        embedUrl: 'https://e-gmat.com/',
        externalUrl: 'https://e-gmat.com/',
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'e-GMAT website revamp',
          hook: 'A marketing-site redesign that traded aspirational claims for legible structure and verifiable proof.',
          summary: 'e-GMAT is a GMAT-prep platform with one of the strongest track records in the category. I led an end-to-end redesign of the marketing site and built a new success-stories layer so prospective students can find themselves in the product, the proof, and the price.',
          heroNote: 'This is just a display page and the full case study is coming soon.',
          roleParagraph: 'I led the redesign end-to-end - repositioning, information architecture, content system, and visual design - across three surfaces: the homepage, the pricing page, and a new success-stories section that did not exist before.',
          role: 'Lead Product Designer',
          year: '2023-2025',
          context: 'A public-facing redesign across the homepage, pricing, and success stories layer.',
          description: 'A marketing-site redesign that makes the platform easier to understand, trust, and compare.',
          status: 'Live',
          projectType: 'Marketing site redesign',
          embedUrl: 'https://e-gmat.com/',
          externalUrl: 'https://e-gmat.com/',
          websiteNavLinks: [
            { href: '#context', label: 'Context' },
            { href: '#shipped', label: 'Approach' },
            { href: '#shift', label: 'The Shift' },
          ],
          overviewCard: {
            eyebrow: 'Overview',
            headline: 'The platform had the substance. The surface wasn\'t doing it justice.',
            paragraphs: [
              'e-GMAT is a GMAT-prep platform with one of the strongest track records in the category. But the marketing site spoke past anyone not already in the top tier — the hero opened with "We coach achievers," pricing offered six overlapping options, and proof leaned on aspirational claims more than on stories visitors could verify or identify with.',
              'I led an end-to-end redesign across three surfaces — the homepage, the pricing page, and a new success-stories section that didn\'t exist before — so the site explains who it\'s for, what it does, and what it costs without making a student work to figure it out.',
            ],
          },
          notesCard: {
            eyebrow: 'Notes',
            headline: 'Five decisions, one through-line.',
            intro: 'The redesign isn\'t five separate improvements. It\'s a single shift carried across surfaces: from asking visitors to trust claims, to showing them structure, faces, and verifiable numbers.',
            decisions: [
              {
                number: '01',
                title: 'Repositioned the hero from gatekeeping to inclusive',
                body: '"We coach achievers" became "Transform your GMAT score, no matter where you begin." Real student score cards moved into the first viewport — so visitors see faces and scores they can identify with before they see a feature.',
                pair: {
                  beforeLabel: 'Old hero',
                  afterLabel: 'New hero with score cards',
                },
              },
              {
                number: '02',
                title: 'Restructured the homepage into six clear pillars',
                body: 'A loose feature list became Planning, Learning, Tracking, Practice, Analytics, and Mocks. Each pillar gets a focused section with a real product screenshot, so visitors can map their concern to a feature without scanning the whole page.',
              },
              {
                number: '03',
                title: 'Collapsed pricing from six options to three',
                body: 'Two formats × three durations became one course × three durations, reframed as "Same course, different durations." Added a 7-day money-back guarantee in the same band.',
                pair: {
                  beforeLabel: 'Old pricing — 6 SKUs',
                  afterLabel: 'New pricing — 3 durations',
                },
              },
              {
                number: '04',
                title: 'Built a new browsable success-stories layer',
                body: 'Created a filterable index by scorer profile — 100th percentile, 705+, starting below 535, sub-60-day improvements, 150+ point gains, sectional wins — with a dedicated page per student (video, strategy breakdown, similar journeys). "Trust us" became "here\'s someone like you."',
                pair: {
                  beforeLabel: 'Did not exist',
                  afterLabel: 'Browsable success-stories index',
                },
              },
              {
                number: '05',
                title: 'Rebuilt proof from aspirational to verifiable',
                body: 'Replaced broad claims like "$200M+ in scholarships" with specifics the site can show: "70% Record Verified," "675+ scores reported in 2025," and #1 ratings on GMAT Club, YouTube, and Reddit. Credibility now rests on what can be demonstrated, not what can be asserted.',
              },
            ],
            shift: {
              eyebrow: 'The shift',
              headline: 'From asking for trust to showing it.',
              rows: [
                {
                  before: '"We coach achievers"',
                  after: '"No matter where you begin"',
                },
                {
                  before: 'Loose feature list',
                  after: 'Six structured pillars',
                },
                {
                  before: 'Six pricing SKUs',
                  after: 'Three durations of one course',
                },
                {
                  before: 'Aspirational claims',
                  after: 'Verifiable proof + platform ratings',
                },
                {
                  before: 'No success-story layer',
                  after: 'Browsable index, page per student',
                },
              ],
            },
          },
          sidebar: {
            categories: ['Marketing site', 'Edtech'],
            facts: [
              { label: 'Role', value: 'Principal Product Designer & Frontend Developer' },
              { label: 'Timeline', value: 'October 2025' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 2,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'e-gmat.com',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'egmat-blogs',
        title: 'e-GMAT Blogs',
        tag: 'SEO content system',
        note: 'High-volume content pages shaped for readability and search intent.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Web Services',
          title: 'e-GMAT Blogs',
          role: 'Web design, SEO content system',
          year: '2023-2025',
          context: 'A high-volume blog system where readability and search intent had to work together.',
          description: 'A web system pass across content-heavy pages, focused on hierarchy, reusable sections, and making long-form pages easier to scan.',
          outcome: 'Supported a scalable publishing surface for search-led content.',
          tools: ['Web design', 'SEO structure', 'Reusable page patterns'],
          stats: ['150+ pages', 'SEO intent', 'Content system'],
        },
      },
      {
        slug: 'nerdypixel-studios',
        title: 'NerdyPixel Studios',
        tag: 'Agency landing page',
        note: 'A focused brand surface for positioning, trust, and lead capture.',
        actionType: 'internal-route',
        embedUrl: 'https://nerdypixelstudios.ca',
        externalUrl: 'https://nerdypixelstudios.ca',
        details: {
          eyebrow: 'Web Services',
          title: 'NerdyPixel Studios',
          role: 'Landing page design and build',
          year: '2025',
          context: 'A studio landing page for positioning, trust, and lead capture.',
          description: 'A focused brand surface built to explain what the studio does quickly, while keeping a path open for prospective clients.',
          outcome: 'Turned a broad service story into a tighter public-facing surface.',
          tools: ['Landing page', 'Brand positioning', 'Conversion UX'],
          stats: ['Agency surface', 'Lead capture', 'Brand trust'],
        },
      },
      {
        slug: 'free-trial-page',
        title: 'Free Trial Page',
        tag: 'Conversion page',
        note: 'Landing-page structure refined around clarity and action.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Web Services',
          title: 'Free Trial Page',
          role: 'Conversion page design',
          year: '2024',
          context: 'A conversion page where the offer, proof, and action needed to line up quickly.',
          description: 'A landing-page structure designed around clarity, motivation, and a direct next action.',
          outcome: 'Made the page easier to understand and act on.',
          tools: ['Conversion UX', 'Landing-page structure', 'Copy hierarchy'],
          stats: ['Offer clarity', 'Action path', 'Conversion page'],
        },
      },
      {
        slug: 'coach-connect',
        title: 'Coach Connect',
        tag: 'Product explainer',
        note: 'A product page built to explain value quickly and visually.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Web Services',
          title: 'Coach Connect',
          role: 'Product explainer page',
          year: '2024',
          context: 'A product page that needed to explain value before users lost patience.',
          description: 'A page design focused on making the product promise, workflow, and reasons to believe clear in a quick scan.',
          outcome: 'Improved the first-read story for a coaching product.',
          tools: ['Product storytelling', 'Page design', 'Visual explanation'],
          stats: ['Explainer page', 'Value clarity', 'Product story'],
        },
      },
      {
        slug: 'm7-admits-page',
        title: 'M7 Admits Page',
        tag: 'Interactive page',
        note: 'A richer admissions story with carousel and card interactions.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Web Services',
          title: 'M7 Admits Page',
          role: 'Interactive web page',
          year: '2024',
          context: 'An admissions story that needed richer browsing than a static page could give.',
          description: 'A web page with carousel and card interactions to help outcomes, schools, and proof feel more inspectable.',
          outcome: 'Created a more active way to explore admissions proof.',
          tools: ['Interactive UI', 'Carousel UX', 'Proof design'],
          stats: ['Interactive page', 'Admissions story', 'Card system'],
        },
      },
      {
        slug: 'growth-pages',
        title: 'Growth Pages',
        tag: 'Marketing system',
        note: 'Reusable interaction patterns across public-facing web pages.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Web Services',
          title: 'Growth Pages',
          role: 'Marketing page system',
          year: '2023-2025',
          context: 'A collection of public-facing pages that needed repeatable quality at volume.',
          description: 'Reusable page patterns for marketing, content, proof, and conversion moments across web surfaces.',
          outcome: 'Helped repeated page production stay visually and structurally consistent.',
          tools: ['Web systems', 'Interaction patterns', 'Page production'],
          stats: ['Reusable patterns', 'Growth pages', 'Public web'],
        },
      },
    ],
  },
  {
    id: 'marketing',
    eyebrow: 'Visual Systems',
    title: 'Marketing & Branding',
    shortTitle: 'Branding',
    accentVar: '--color-accent-green',
    softVar: '--color-surface-mint',
    metric: 'Campaigns, logos & video collateral',
    proof: 'From individual creatives to repeatable visual systems built for recall.',
    description: 'Campaign, logo, and content systems built for visual recall.',
    cards: [
      {
        slug: 'encubate',
        title: 'Encubate',
        tag: 'Campaign identity',
        note: 'A campaign system shaped across message, look, and launch collateral.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'Encubate',
          role: 'Campaign identity',
          year: '2024',
          context: 'A campaign identity system shaped across message, launch collateral, and visual recall.',
          description: 'Image-led campaign work will live here as final assets are added.',
          outcome: 'Built a visual container for a campaign story.',
          tools: ['Campaign identity', 'Brand system', 'Launch assets'],
          stats: ['Campaign system', 'Launch collateral', 'Visual recall'],
        },
      },
      {
        slug: 'logo-design',
        title: 'Logo Design',
        tag: 'Brand marks',
        note: 'Identity explorations for brands, initiatives, and internal products.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'Logo Design',
          role: 'Brand mark exploration',
          year: '2023-2025',
          context: 'Identity explorations across brands, initiatives, and internal products.',
          description: 'A gallery-ready slot for final logo explorations and brand mark assets.',
          outcome: 'Gave multiple ideas a memorable visual mark.',
          tools: ['Logo design', 'Identity systems', 'Visual exploration'],
          stats: ['Brand marks', 'Identity work', 'Explorations'],
        },
      },
      {
        slug: 'youtube-growth-system',
        title: 'YouTube Growth System',
        tag: 'Video design ops',
        note: 'Thumbnail, shorts, community, and publishing systems for consistency.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'YouTube Growth System',
          role: 'Video design operations',
          year: '2024',
          context: 'A repeatable content system for thumbnails, shorts, community, and publishing consistency.',
          description: 'A visual operations system for making recurring video assets feel consistent without slowing production.',
          outcome: 'Made video collateral faster to produce and easier to recognize.',
          tools: ['Thumbnail systems', 'Content operations', 'Visual templates'],
          stats: ['Thumbnails', 'Shorts', 'Publishing system'],
        },
      },
      {
        slug: 'student-success-creatives',
        title: 'Student Success Creatives',
        tag: 'Story collateral',
        note: 'Visual systems for turning outcomes into credible proof.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'Student Success Creatives',
          role: 'Outcome storytelling collateral',
          year: '2023-2025',
          context: 'Outcome stories that needed to feel credible, scannable, and repeatable.',
          description: 'A visual system for turning student outcomes into social and page-ready proof.',
          outcome: 'Made success stories easier to trust at a glance.',
          tools: ['Story collateral', 'Proof design', 'Social systems'],
          stats: ['Outcome proof', 'Story assets', 'Credibility'],
        },
      },
      {
        slug: 'webinar-campaigns',
        title: 'Webinar Campaigns',
        tag: 'Conversion collateral',
        note: 'Event visuals, promotion assets, and funnel-support creatives.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'Webinar Campaigns',
          role: 'Event campaign collateral',
          year: '2023-2025',
          context: 'Event promotion assets built to support awareness, registration, and follow-through.',
          description: 'A campaign collateral slot for webinar visuals, promotion assets, and funnel support.',
          outcome: 'Kept event promotion clear and visually consistent.',
          tools: ['Event visuals', 'Campaign design', 'Conversion collateral'],
          stats: ['Event assets', 'Promotion system', 'Funnel support'],
        },
      },
      {
        slug: 'social-creatives',
        title: 'Social Creatives',
        tag: 'Attention design',
        note: 'Fast-turnaround assets built for scanning, recall, and action.',
        actionType: 'internal-route',
        details: {
          eyebrow: 'Visual Systems',
          title: 'Social Creatives',
          role: 'Fast-turnaround creative design',
          year: '2023-2025',
          context: 'Social assets built to be understood quickly in crowded feeds.',
          description: 'A gallery-ready slot for fast-turnaround creatives built around scanning, recall, and action.',
          outcome: 'Helped recurring social messages keep a stronger visual memory.',
          tools: ['Social design', 'Attention design', 'Fast iteration'],
          stats: ['Scanning', 'Recall', 'Action'],
        },
      },
    ],
  },
];

const standaloneMoreWorkDetails = [
  {
    slug: 'neuron',
    title: 'Neuron',
    tag: 'GMAT practice platform',
    note: 'An OG-practice workspace that turns scattered question solving into one guided place to practice, review, and return.',
    actionType: 'internal-route',
    laneId: 'product',
    laneTitle: 'Product Design',
    accentVar: '--color-accent-orange',
    softVar: '--color-surface-peach',
    externalUrl: 'https://neuron.e-gmat.com/verbal/dashboard',
    details: {
      template: 'website-showcase',
      eyebrow: 'Product Design',
      title: 'Neuron — An OG-practice workspace, designed from scratch',
      previewTitle: 'Neuron',
      hook: 'An OG-practice workspace, designed from scratch.',
      summary: 'Neuron is e-GMAT\'s official-question practice platform. I designed it end-to-end - design system, components, and every screen - so students stop juggling platforms to solve official GMAT questions.',
      heroNote: 'This is just a display page and the full case study is coming soon.',
      role: 'Product Designer (sole)',
      year: 'June to July 2025',
      status: 'Live',
      projectType: 'GMAT practice platform',
      embedUrl: 'https://neuron.e-gmat.com/verbal/dashboard',
      externalUrl: 'https://neuron.e-gmat.com/verbal/dashboard',
      walkthroughNote: {
        lead: 'Prefer a guided tour?',
        label: 'Watch the product walkthrough on Loom',
        embedUrl: 'https://www.loom.com/embed/54fd0d39fd6d410eb4b59688db72b53f?hideEmbedTopBar=true&autoplay=1',
        modalTitle: 'Neuron product walkthrough',
        trail: 'recorded by the e-GMAT team; the product, design system, and screens are mine.',
      },
      websiteNavLinks: [
        { href: '#website-preview', label: 'Product preview' },
        { href: '#context', label: 'Context' },
        { href: '#shipped', label: 'Approach' },
        { href: '#testimonials', label: 'Testimonials' },
      ],
      overviewCard: {
        paragraphs: [
          'Neuron is e-GMAT\'s official-question practice platform. It gives students a focused workspace to solve real GMAT questions - timed, filtered by topic and difficulty, with analytics and e-GMAT-format solutions all in one place. Before Neuron, students were stitching this experience together across multiple sites and apps.',
        ],
      },
      roleParagraph: 'I designed the product end-to-end. I built the design system, the component library, and every screen in Figma, then handed the files to engineering for implementation. I did not write code; every visual and interaction decision in the product is mine.',
      notesCard: {
        intro: 'Neuron is built on two principles from the founding brief: no platform-juggling, and practice OG questions the right way. The design translates those into five concrete choices a student feels every time they open the product.',
        decisions: [
          {
            number: '01',
            title: 'Built the practice setup as a guided filter funnel',
            body: 'The custom-quizzing flow walks a student through section -> topic -> subtype -> difficulty -> source -> question pool, then surfaces the matching question set. Each step narrows scope, so a student lands on the right thirty questions instead of staring at three thousand.',
            screenSet: {
              frameTitle: 'Neuron - Custom quiz creation',
              tabs: [
                {
                  label: 'Base setup',
                  src: '/images/case-studies/neuron/neuron-quiz-creation-base.svg',
                  alt: 'Neuron custom quiz creation base setup screen.',
                  caption: 'The first screen narrows a broad question universe into a guided setup flow.',
                },
                {
                  label: 'Step 2',
                  src: '/images/case-studies/neuron/neuron-quiz-creation-step-2.svg',
                  alt: 'Neuron custom quiz creation second-step screen.',
                  caption: 'The second step keeps the same flow but gets more specific about the question pool.',
                },
              ],
            },
          },
          {
            number: '02',
            title: 'Made timed and untimed equally first-class',
            body: 'At the question level, "Start Timer" and "Show Solution" are equal-weight actions. Students choose whether they are attempting under exam conditions or reviewing for understanding - without burying either path in a menu.',
          },
          {
            number: '03',
            title: 'Embedded e-GMAT methodology in the solution view',
            body: 'The proprietary frameworks - passage analysis, pre-thinking, answer-choice elimination - live inside the solution view of every question, not in a separate course. Methodology gets taught at the moment of error, where retention is highest.',
            screenSet: {
              frameTitle: 'Neuron - Solution workspace',
              tabs: [
                {
                  label: 'RC time stats',
                  src: '/images/case-studies/neuron/neuron-solution-rc-time-stats.svg',
                  alt: 'Neuron reading-comprehension solution screen with time statistics and learning methodology.',
                  caption: 'Method, timing, and review all live inside the same solution surface.',
                },
              ],
            },
          },
          {
            number: '04',
            title: 'Designed the attempts dashboard as a learning loop',
            body: 'History is not a log. The attempts view filters by correct, incorrect, and bookmarked, links straight back to full solutions, and feeds back into custom quizzing - closing the loop between practice, review, and re-practice. Final-week prep was a core scenario in the design brief.',
            screenSet: {
              frameTitle: 'Neuron - Attempts workspace',
              tabs: [
                {
                  label: 'Default view',
                  src: '/images/case-studies/neuron/neuron-attempt-list-default.svg',
                  alt: 'Neuron attempt list default screen.',
                  caption: 'The dashboard starts as a sortable attempt history with clear review entry points.',
                },
                {
                  label: 'Actions menu',
                  src: '/images/case-studies/neuron/neuron-attempt-list-actions.svg',
                  alt: 'Neuron attempt list with actions menu open.',
                  caption: 'Row-level actions help a learner decide whether to inspect, retry, or organize an attempt.',
                },
                {
                  label: 'Session view',
                  src: '/images/case-studies/neuron/neuron-attempt-list-session.svg',
                  alt: 'Neuron attempt session details view.',
                  caption: 'A session-level view closes the loop between what was attempted and what should happen next.',
                },
              ],
            },
          },
          {
            number: '05',
            title: 'Built the full design system and component library from scratch',
            body: 'Tokens, primitives, components, layout templates - built in Figma so the team could ship the current platform and plan its v2 expansion (Data Insights questions, AI-generated similar questions, deeper analytics) without rebuilding the foundation.',
          },
        ],
      },
      testimonials: {
        title: 'Public reception',
        intro: 'After launch, public feedback on GMAT Club and Reddit started landing on the same things the product was designed to do - measurable score lifts traced back to specific behaviors, targeted weak-area drilling, and a practice loop tight enough to use between mock attempts.',
        note: 'Quotes below are verbatim from publicly posted reviews and debriefs on GMAT Club and Reddit. Emphasis is mine, to mark the part most relevant to the product design. Each quote links to its original source - these are public observations, not solicited testimonials.',
        sourceBrand: 'GMAT Club',
        items: [
          {
            author: 'aliquamdolorem',
            meta: '715 (Q88, V85, DI84) - GMAT Club review',
            quoteHtml: 'This targeted approach <mark>drove my CR hard accuracy from 60% to 82%.</mark>',
            href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365268',
            modalTitle: 'GMAT Club review — aliquamdolorem',
          },
          {
            author: 'madhavsawhney',
            meta: '665 (Q87, V83, DI79) - GMAT Club review',
            quoteHtml: 'Identify weakness -> study module -> practice official questions on Neuron, retest - <mark>created measurable improvement between each mock attempt.</mark>',
            href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365274',
            modalTitle: 'GMAT Club review — madhavsawhney',
          },
          {
            author: 'madhavsawhney',
            meta: '665 (Q87, V83, DI79) - GMAT Club review',
            quoteHtml: '<mark>Neuron let me drill official GMAT questions on my exact weak areas</mark>, reducing my solve time while improving accuracy.',
            href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365274',
            modalTitle: 'GMAT Club review — madhavsawhney',
          },
          {
            author: 'nikkhil22',
            meta: '685, +100-point improvement - GMAT Club forum',
            quoteHtml: 'When I had specific gaps in hard questions, <mark>Neuron was perfect for targeted practice.</mark> I used it to fill knowledge gaps without time pressure.',
            href: 'https://gmatclub.com/forum/from-585-to-685-my-gmat-focus-journey-100-point-improvement-448777.html',
            modalTitle: 'GMAT Club forum — nikkhil22',
          },
          {
            author: 'kalashjain',
            meta: '685 (V85, Q88, DI79) - GMAT Club forum',
            quoteHtml: 'Neuron <mark>helped me identify consistent patterns in my mistakes</mark> and fix the behavioural errors that I had identified.',
            href: 'https://gmatclub.com/forum/gmat-685-with-e-gmat-447885.html',
            modalTitle: 'GMAT Club forum — kalashjain',
          },
          {
            author: 'Suhani5236',
            meta: '655 (Q88, V82, DI77) - GMAT Club forum',
            quoteHtml: 'I started using Neuron for <mark>15-20 minute warm-up sessions before cementing, gradually building my attention span.</mark>',
            href: 'https://gmatclub.com/forum/from-555-to-655-a-100-point-gmat-journey-v82-q88-di77-454575.html',
            modalTitle: 'GMAT Club forum — Suhani5236',
          },
        ],
      },
      sidebar: {
        categories: ['Product', 'Edtech', 'GMAT prep'],
        facts: [
          { label: 'Role', value: 'Product Designer (sole)' },
          { label: 'Timeline', value: 'June to July 2025' },
          { label: 'Status', value: 'Live' },
        ],
        factsVisibleCount: 2,
        projectChips: [
          { label: 'Live', active: true, dot: true },
          {
            label: 'neuron.e-gmat.com',
            logo: '/images/case-studies/sat-lms/e-gmat.png',
          },
        ],
        projectDisclaimer: 'Logos are the properties of the respective companies.',
      },
    },
  },
];

export function getMoreWorkDetailItems() {
  const laneItems = moreWorkLanes.flatMap((lane) => (
    lane.cards
      .filter((card) => card.actionType === 'internal-route')
      .map((card) => ({
        ...card,
        laneId: lane.id,
        laneTitle: lane.title,
        accentVar: lane.accentVar,
        softVar: lane.softVar,
      }))
  ));

  return [...laneItems, ...standaloneMoreWorkDetails];
}

export function getMoreWorkBySlug(slug) {
  return getMoreWorkDetailItems().find((item) => item.slug === slug);
}

export function getMoreWorkLaneCards(laneId) {
  const lane = moreWorkLanes.find((entry) => entry.id === laneId);

  if (!lane) {
    return [];
  }

  return lane.cards.map((card) => ({
    ...card,
    laneId: lane.id,
    laneTitle: lane.title,
    accentVar: lane.accentVar,
    softVar: lane.softVar,
  }));
}

function buildDefaultImpact(details, item) {
  const proof = (details.stats || [])
    .filter(Boolean)
    .map((stat) => ({
      title: stat,
      body: '',
    }));

  if (!details.outcome && !details.description && !proof.length) {
    return null;
  }

  return {
    eyebrow: 'What this work shows',
    title: details.outcome || item.note,
    body: details.description || item.note,
    metrics: [],
    proof,
    takeaway: details.role
      ? `This work sits inside my ${details.role.toLowerCase()} practice.`
      : '',
  };
}

export function getMoreWorkDetailContent(item) {
  const details = item.details || {};
  const toolsMeta = details.tools?.length
    ? `Tools: ${details.tools.slice(0, 2).join(' + ')}`
    : '';
  const meta = (details.meta || [
    details.role ? `Role: ${details.role}` : '',
    details.projectType ? `Type: ${details.projectType}` : '',
    toolsMeta,
    details.status ? `Status: ${details.status}` : '',
    details.year ? `Timeline: ${details.year}` : '',
  ].filter(Boolean));

  return {
    template: details.template || 'default',
    eyebrow: details.eyebrow || item.laneTitle,
    title: details.title || item.title,
    hook: details.hook || item.note,
    intro: details.intro || details.description || item.note,
    meta,
    summary: details.summary || '',
    context: details.context || '',
    problem: details.problem || '',
    contribution: details.contribution || '',
    tools: details.tools || [],
    embedUrl: item.embedUrl || details.embedUrl || '',
    // Handwritten "live embed" annotation pointing at the preview frame.
    // Defaults to 'live embed' when an embed exists; set details.liveBadge to a
    // custom string, or to false, when the embed is not a live product.
    liveBadge: details.liveBadge ?? ((item.embedUrl || details.embedUrl) ? 'live embed' : null),
    externalUrl: item.externalUrl || details.externalUrl || '',
    overviewCard: details.overviewCard || null,
    notesCard: details.notesCard || null,
    sidebar: details.sidebar || null,
    heroNote: details.heroNote || '',
    roleParagraph: details.roleParagraph || '',
    previewTitle: details.previewTitle || '',
    preview: details.preview || null,
    walkthroughNote: details.walkthroughNote || null,
    testimonials: details.testimonials || null,
    websiteNavLinks: details.websiteNavLinks || [],
    websiteSections: details.websiteSections || [],
    highlights: details.highlights || [],
    heroMetrics: details.heroMetrics || [],
    heroShowcase: details.heroShowcase || [],
    problemPoints: details.problemPoints || [],
    objectives: details.objectives || [],
    solutionIntro: details.solutionIntro || '',
    solutionGroups: details.solutionGroups || [],
    evidence: details.evidence || null,
    impact: details.impact || buildDefaultImpact(details, item),
    takeawayCards: details.takeawayCards || [],
  };
}
