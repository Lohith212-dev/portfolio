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
        slug: 'personalized-study-planner',
        title: 'Personalized Study Planner',
        tag: 'Planning system',
        note: 'Turns target score, current ability, and weekly hours into a day-by-day GMAT prep path that re-plans when life happens.',
        actionType: 'internal-route',
        // Card cover: the dynamic-planning illustration (two students, two
        // opposite plans) — the product's differentiation at a glance.
        cover: {
          src: '/images/case-studies/personalized-study-planner/dynamic-planning.svg',
          position: 'center 18%',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Product Design',
          title: 'Personalized Study Planner — a GMAT plan built around you',
          previewTitle: 'Personalized Study Planner',
          hook: 'Built to answer the three questions every GMAT student fights: what should I study today, am I making progress, and when will I be ready?',
          summary: 'The Personalized Study Planner turns a student\'s target score, current ability, and weekly hours into a milestone-driven GMAT prep path. I designed the product end-to-end — the planning intelligence made usable, the setup flow, and the execution calendar it feeds.',
          heroNote: 'This is just a display page and the full case study is coming soon.',
          role: 'Product Designer (sole)',
          year: 'Aug 2023 – 2025',
          status: 'Live',
          projectType: 'Planning system',
          // XD share links block iframes on /view/ (X-Frame-Options: deny);
          // the /embed/ form of the same share ID is the embeddable one.
          embedUrl: 'https://xd.adobe.com/embed/0e075b18-9242-4e63-b64a-7cac4fd116ab-5b54/screen/a7ee07d1-f410-47a4-8396-e665fb972c67',
          // Fixed-artboard XD prototype: desktop frame at every breakpoint,
          // screen area at the artboard's 1536x728 resolution.
          prototypeEmbed: { aspect: { width: 1536, height: 728 } },
          externalUrl: 'https://gmatplanner.e-gmat.com/',
          // XD prototype, not the live product (the product sits behind a
          // paid login) — badge copy reflects that.
          liveBadge: 'XD prototype',
          walkthroughNote: {
            lead: 'Want to see the real product in motion?',
            label: 'Watch the product walkthrough',
            embedUrl: 'https://www.youtube.com/embed/QgczAkIqJ7A?autoplay=1',
            modalTitle: 'Personalized Study Planner product walkthrough',
            browserTitle: 'PSP walkthrough',
            trail: 'recorded by the e-GMAT team and used here as supporting content; I don\'t own the copyrights — all credits go to e-GMAT.',
          },
          websiteNavLinks: [
            { href: '#website-preview', label: 'Product preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
            { href: '#testimonials', label: 'Testimonials' },
          ],
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'Why this product had to exist',
              body: 'Every planning tool on the market handed students the same plan: a 3-month or 6-month cookie-cutter schedule keyed to nothing but a start score and a target. None of them looked at where a student actually stood inside each section, which gains were cheap and which were expensive, or how many hours a weekday really offered versus a weekend. Planning was the one part of GMAT prep nobody had personalized.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'What students were struggling with',
              body: 'Three questions, every single day:',
              questions: [
                'What should I study today?',
                'Am I making progress?',
                'When will I be ready for the test?',
              ],
              closing: 'Students burned hours deciding what to do, had no checkpoint that told them whether effort was becoming ability, and picked test dates by guesswork. And when life happened — sickness, work deadlines, travel — the plan broke and they started over.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'decide',
                title: 'Personal means subsection-deep',
                body: 'Personalization that stops at "your target is 715" is still a template. This plan reads strengths and weaknesses subsection-deep and builds a path of least resistance — ambitious targets where the student is strong, foundations-first where they\'re weak.',
              },
              {
                icon: 'verify',
                title: 'Answer the three questions',
                body: 'Every surface in the product answers one of the three questions students actually ask — daily tasks they wake up to, checkpoints that grade whether effort became ability, and a test date that is a calculation rather than a guess.',
              },
              {
                icon: 'loop',
                title: 'A plan that survives real life',
                body: 'Rigid plans break; flexible plans adapt and win. This plan absorbs sick days, work crunches, and fast or slow weeks without sending the student back to square one — adaptation is what makes the plan worth trusting.',
              },
            ],
            thesis: 'Every prep company handed out schedules. Nobody built strategy — a plan that reads the student, checks the progress, and bends with life. The Personalized Study Planner is that strategy.',
          },
          notesCard: {
            intro: 'The Personalized Study Planner takes three inputs — where the student stands, where they want to reach, and the hours their week can actually give — and turns them into a day-by-day path to the target score. Every decision below exists to keep that path personal, checkable, and alive.',
            decisions: [
              {
                number: '01',
                title: 'Built every plan on a path of least resistance',
                body: 'Strong in Quant at Q84? The plan sets an ambitious Q88 and 40 hours to excel. Weak in Verbal at V78? A realistic V83 and 80 hours to build foundations first. Another student gets the exact opposite plan for the same goal — strengths are leveraged, weaknesses are protected, and effort goes only where it moves your score.',
                screenSet: {
                  frameTitle: 'PSP — Dynamic planning',
                  // Supporting illustration, not product UI — no browser chrome.
                  plain: true,
                  tabs: [
                    {
                      label: 'Path of least resistance',
                      src: '/images/case-studies/personalized-study-planner/dynamic-planning.svg',
                      alt: 'Two students with the same goal receiving opposite plans, built from their sectional strengths and weaknesses.',
                      caption: 'Same goal, opposite students, opposite plans — strengths are pushed ambitious, weaknesses get foundations first.',
                    },
                  ],
                },
              },
              {
                number: '02',
                title: 'Broke success into checkpoints you can actually check',
                body: '"Am I making progress?" dies as a question when success is defined at the subsection level. The plan sets exact milestones and accuracy metrics per subsection — push the areas where the student naturally excels to the top percentiles, hold the weaker ones at achievable targets — so reaching the goal becomes a matter of execution, not luck.',
                screenSet: {
                  frameTitle: 'PSP — Milestones and journeys',
                  tabs: [
                    {
                      label: 'Sectional milestones',
                      src: '/images/case-studies/personalized-study-planner/sectional-milestones.svg',
                      alt: 'PSP sectional milestones with score targets and hours per milestone.',
                      caption: 'Each section\'s climb is staged into milestones with exact score targets and hours.',
                    },
                    {
                      label: 'Milestone view',
                      src: '/images/case-studies/personalized-study-planner/milestone-view.svg',
                      alt: 'PSP milestone detail view showing the subsections and accuracy targets inside one milestone.',
                      caption: 'One milestone, opened up — the subsections it covers and the accuracy that counts as done.',
                    },
                    {
                      label: 'Milestone summary',
                      src: '/images/case-studies/personalized-study-planner/milestone-summary.svg',
                      alt: 'PSP milestone summary listing every milestone and its timeline.',
                      caption: 'The full checkpoint view — every milestone and its timeline, before the plan is committed.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Turned "when should I take the test?" into a calculation',
                body: 'Not a guess — a calculation. The planner profiles the student across 25+ data points (daily commitment, current abilities, targets, preparation order), compares that profile against thousands of successful e-GMAT students who started in the same place, and recommends the test week with the highest probability of success. If 45 days is enough, it says 45 days; if four months, it says that.',
                screenSet: {
                  frameTitle: 'PSP — Test date prediction',
                  plain: true,
                  tabs: [
                    {
                      label: 'Test date prediction',
                      src: '/images/case-studies/personalized-study-planner/test-date.svg',
                      alt: 'PSP test-date prediction built from the student\'s profile, alongside successful e-GMAT students.',
                      caption: 'The recommended test week, derived from the student\'s own data points. The students pictured are e-GMATers — I don\'t own the rights to their photographs.',
                    },
                  ],
                },
              },
              {
                number: '04',
                title: 'Made waking up the easiest part of prep',
                body: 'The plan converts into days: each section\'s journey breaks into three stages — Learning, Cementing, Test Readiness, like levels in a game — and each stage into daily tasks. The student wakes up to "today: this module, this quiz, these five questions." And because this is a surface someone opens every single day, a focus mode strips everything but the current week.',
                screenSet: {
                  frameTitle: 'PSP — Daily execution',
                  plain: true,
                  tabs: [
                    {
                      label: 'Daily details',
                      src: '/images/case-studies/personalized-study-planner/daily-details.svg',
                      alt: 'PSP daily task detail: what to study today, for how long, in what order.',
                      caption: 'One day, fully answered — what to study, for how long, in what order.',
                    },
                  ],
                },
              },
              {
                number: '05',
                title: 'Graded every step and flagged the drift',
                body: 'Completing tasks isn\'t mastering concepts, so the tracker grades each activity — good, proceed; average, revise first; poor, redo — and the calendar carries the verdicts. Fall behind or skip ahead, and color-coded alerts flag the deviation the moment it happens. It works like a GPS: it won\'t drive for you, but you never drift off course without knowing.',
                screenSet: {
                  frameTitle: 'PSP — Tracking states',
                  plain: true,
                  tabs: [
                    {
                      label: 'Grading steps',
                      src: '/images/case-studies/personalized-study-planner/grading-steps.svg',
                      alt: 'PSP grading states: every activity graded good, average, or poor, with the verdict carried on the calendar.',
                      caption: 'Done isn\'t enough — every activity comes back graded: good, proceed; average, revise; poor, redo.',
                    },
                  ],
                },
              },
              {
                number: '06',
                title: 'Handed the student the levers — through a conversation, not a form',
                body: 'The plan runs on the student\'s reality: daily hours, prep sequence, test-date preference. But that\'s 10–12 inputs, and a long form would lose them. So the setup asks one thing at a time, confirms each step ("the target is set — now let\'s talk about your current score"), and shows progress visibly building. Every lever arrives as a recommendation with its reasoning shown upfront — the default is trustworthy, the edit is informed.',
                screenSet: {
                  frameTitle: 'PSP — The setup conversation',
                  tabs: [
                    {
                      label: 'Time commitments',
                      src: '/images/case-studies/personalized-study-planner/time-commitments.svg',
                      alt: 'PSP screen collecting weekday and weekend study hours.',
                      caption: 'Weekday and weekend hours are set separately — the plan respects real weeks.',
                    },
                    {
                      label: 'Prep sequence',
                      src: '/images/case-studies/personalized-study-planner/prep-sequence.svg',
                      alt: 'PSP study-sequence recommendation with its reasoning shown.',
                      caption: 'The recommended study order explains itself before the student edits it.',
                    },
                  ],
                },
              },
              {
                number: '07',
                title: 'Designed for the week that goes wrong',
                body: 'Life happens — sickness, a quarter-end crunch, a visit home — and that\'s exactly where every other plan died. Here the student adds "no study" days; the tracker re-analyzes the data points and recalculates the optimal path to the target in seconds. Replanning is a click, not a restart.',
                screenSet: {
                  frameTitle: 'PSP — Replanning',
                  plain: true,
                  // Auto-cycles like a 3-step animation; a tab click hands
                  // control back to the reader.
                  autoAdvance: 3200,
                  tabs: [
                    {
                      label: 'Add no-study days',
                      src: '/images/case-studies/personalized-study-planner/click-no-study.svg',
                      alt: 'PSP calendar with the "Add no study days" action highlighted.',
                      caption: 'Life happens — "no study" days are a first-class input, one click from the calendar.',
                    },
                    {
                      label: 'Select the days',
                      src: '/images/case-studies/personalized-study-planner/select-no-study.svg',
                      alt: 'PSP no-study-day selection screen with days being marked.',
                      caption: 'Mark the days life claims — sickness, a work crunch, a trip home.',
                    },
                    {
                      label: 'Confirm — plan updates',
                      src: '/images/case-studies/personalized-study-planner/confirm-nostudy.svg',
                      alt: 'PSP calendar recalculated around the confirmed no-study days.',
                      caption: 'One confirmation, and the path to the target recalculates in seconds.',
                    },
                  ],
                },
              },
              {
                number: '08',
                title: 'Let the plan move at the student\'s rhythm',
                body: 'Mastered a concept in 90 minutes instead of two hours? Mark it done and the next task unlocks now. Need more time on a stubborn module? Push the task out and the upcoming work redistributes smoothly. The timeline belongs to the student\'s cognitive rhythm, not to a calendar — quality understanding beats rushed completion.',
                screenSet: {
                  frameTitle: 'PSP — Pace control',
                  plain: true,
                  tabs: [
                    {
                      label: 'Finish early',
                      src: '/images/case-studies/personalized-study-planner/early-completion.svg',
                      alt: 'PSP pulling upcoming work in after a task is completed early.',
                      caption: 'Mastered it in 90 minutes instead of two hours? The next task unlocks now.',
                    },
                    {
                      label: 'Push out',
                      src: '/images/case-studies/personalized-study-planner/push-out.svg',
                      alt: 'PSP pushing a task out and redistributing the upcoming schedule.',
                      caption: 'Need more time on a stubborn module? Push it out — upcoming work redistributes smoothly.',
                    },
                  ],
                },
              },
            ],
          },
          testimonials: {
            title: 'Student testimonials',
            // Inline 9:16 video cards instead of the quote marquee.
            variant: 'video',
            intro: 'Students who used the planner keep pointing at the same things it was designed for — a path mapped out from the first mock to test day, and a daily milestone to wake up to.',
            note: 'These videos were recorded by students who used e-GMAT and are used here as supporting content; I don\'t own the copyrights — all credits go to e-GMAT. Quotes are transcribed from the videos, and emphasis is mine.',
            sourceBrand: 'YouTube',
            items: [
              {
                author: 'Shrutav Donde',
                meta: 'GMAT 805 — video testimonial',
                quoteHtml: '<mark>The study plan really mapped out everything that I had to do</mark> from the day I took the mock until the day I would give the actual exam… it also highlighted the parts which I need to focus on, so that I wouldn\'t waste time on something which would be a strength.',
                videoEmbedUrl: 'https://www.youtube.com/embed/9IYQTUc97g0',
                href: 'https://youtu.be/9IYQTUc97g0',
                modalTitle: 'Video testimonial — Shrutav Donde, GMAT 805',
              },
              {
                author: 'e-GMAT student',
                meta: 'GMAT 675 — video testimonial',
                quoteHtml: 'One of the factors was definitely the study plan that we receive as soon as we sign up… they provided me a daily planner kind of a thing, so <mark>I had a milestone to achieve every day.</mark>',
                videoEmbedUrl: 'https://www.youtube.com/embed/miH9X8UyA6c',
                href: 'https://youtu.be/miH9X8UyA6c',
                modalTitle: 'Video testimonial — GMAT 675 scorer',
              },
            ],
          },
          sidebar: {
            categories: ['Product', 'Edtech', 'GMAT prep'],
            facts: [
              { label: 'Role', value: 'Product Designer (sole)' },
              { label: 'Timeline', value: 'Aug 2023 — phased updates through 2025' },
              { label: 'Access', value: 'Paid product — sits behind an e-GMAT subscription' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 3,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'gmatplanner.e-gmat.com',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://gmatplanner.e-gmat.com/',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
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
    slug: 'egmat-public-website',
    title: 'e-GMAT Public Website',
    tag: 'Public website',
    note: 'A public-facing website that introduces a dense GMAT prep ecosystem with a clearer first read.',
    actionType: 'internal-route',
    laneId: 'web',
    laneTitle: 'Web Design & Build',
    accentVar: '--color-accent-lavender',
    softVar: '--color-surface-lilac',
    embedUrl: 'https://e-gmat.com/',
    externalUrl: 'https://e-gmat.com/',
    details: {
      template: 'website-showcase',
      eyebrow: 'Web Services',
      title: 'e-GMAT website revamp',
      hook: 'A marketing-site redesign that traded aspirational claims for legible structure and verifiable proof.',
      summary: 'e-GMAT is a GMAT-prep platform with one of the strongest track records in the category. I led an end-to-end redesign of the marketing site and built a new success-stories layer so prospective students can find themselves in the product, the proof, and the price.',
      heroNote: 'This is just a display page and the full case study is coming soon.',
      roleParagraph: 'I led the redesign end-to-end - repositioning, information architecture, content system, copywriting, and visual design - across three surfaces: the homepage, the pricing page, and a new success-stories section that did not exist before.',
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
        { href: '#objectives', label: 'Objectives' },
        { href: '#shipped', label: 'Approach' },
        { href: '#shift', label: 'The Shift' },
      ],
      contextCards: [
        {
          eyebrow: 'The opportunity',
          title: 'Why this site had to be rebuilt',
          body: 'e-GMAT had a 12-year track record and one of the strongest results catalogues in GMAT prep. But the marketing site was speaking to people who already knew the brand. First-time visitors — the people the business needed to reach next — were landing on a page that asked them to translate aspirational language and a six-option price grid into a buying decision on their own.',
        },
        {
          eyebrow: 'Problem statement',
          title: 'Visitors couldn\'t find themselves on the page',
          body: 'The site didn\'t answer the four questions a prospective student arrives with:',
          questions: [
            'Is this for someone at my level?',
            'What does it actually cost?',
            'Can I trust these claims?',
            'What do I do next?',
          ],
          closing: 'The substance was there. The surface forced visitors to work for it — or to leave and wait for a sales call.',
        },
      ],
      solutionObjectives: {
        items: [
          {
            icon: 'welcome',
            title: 'Welcome before you sell',
            body: 'Make the first viewport reach a student at any starting point, not just one who already identifies as a high-achiever. Show faces and scores that look like their own future.',
          },
          {
            icon: 'verify',
            title: 'Verify, don\'t claim',
            body: 'Replace aspirational stats with specifics visitors can verify on platforms they already trust — GMAT Club, YouTube, Reddit. Credibility shifts from rhetoric to evidence.',
          },
          {
            icon: 'decide',
            title: 'Decide, don\'t compare',
            body: 'Collapse six pricing SKUs into three durations of one course. Reduce decision fatigue at the moment intent is highest, without hiding what\'s being bought.',
          },
        ],
        thesis: 'I began thinking of the marketing site not as a brochure to scroll, but as the conversation sales used to have.',
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
            compare: {
              beforeSrc: '/images/case-studies/website/home-old.png',
              afterSrc: '/images/case-studies/website/home-new.png',
              beforeAlt: 'Original e-GMAT homepage screenshot.',
              afterAlt: 'Redesigned e-GMAT homepage screenshot.',
              ariaLabel: 'Comparison of homepage hero before and after redesign',
            },
          },
          {
            number: '02',
            title: 'Restructured the homepage into six clear pillars',
            body: 'A loose feature list became Planning, Learning, Tracking, Practice, Analytics, and Mocks. Each pillar gets a focused section with a real product screenshot, so visitors can map their concern to a feature without scanning the whole page.',
            stat: {
              figure: '25%',
              baseline: 'up from 15%',
              eyebrow: 'Post-\nlaunch',
              label: 'Visitor return rate climbed — visitors had a reason to come back when they could find specific information instead of re-scanning the same wall.',
              icon: 'returnLoop',
            },
          },
          {
            number: '03',
            title: 'Collapsed pricing from six options to three',
            body: 'Two formats × three durations became one course × three durations, reframed as "Same course, different durations." Added a 7-day money-back guarantee in the same band.',
            compare: {
              beforeSrc: '/images/case-studies/website/pricing-old.png',
              afterSrc: '/images/case-studies/website/pricing-new.png',
              beforeAlt: 'Original e-GMAT pricing page screenshot.',
              afterAlt: 'Redesigned e-GMAT pricing page screenshot.',
              ariaLabel: 'Comparison of pricing layout before and after redesign',
            },
            stat: {
              figure: '50%',
              baseline: 'up from 45%',
              eyebrow: 'Post-\nlaunch',
              label: 'Cart-to-purchase rate lifted — by the time visitors added a course to their cart, the messaging had done the convincing. The price card no longer had to carry the whole argument.',
              icon: 'cartCheck',
            },
          },
          {
            number: '04',
            title: 'Built a new browsable success-stories layer',
            body: 'Created a filterable index by scorer profile — 100th percentile, 705+, starting below 535, sub-60-day improvements, 150+ point gains, sectional wins — with a dedicated page per student (video, strategy breakdown, similar journeys). "Trust us" became "here\'s someone like you."',
            compare: {
              beforeSrc: '/images/case-studies/website/success-story-opened-old.png',
              afterSrc: '/images/case-studies/website/success-story-opened-new.png',
              beforeAlt: 'Original e-GMAT success story modal screenshot.',
              afterAlt: 'Redesigned e-GMAT success story page screenshot.',
              ariaLabel: 'Comparison of success-stories layer before and after',
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
      // Closing testimonial — same person and quote as the home page's
      // featured-projects card for this project.
      testimonial: {
        name: 'Sundeep Eddu',
        initials: 'S',
        role: 'Head of Marketing & Sales, e-GMAT',
        image: '/images/work/work-sundeep-portrait.png',
        linkedin: 'https://www.linkedin.com/in/eddu-sundeep/',
        quote: "The site speaks more clearly than it ever has, and that's because Lohith owned the message, not just the visuals. He restructured how we talk about the platform - the hero line, the pricing frame, the success-stories pitch - and built each page around those decisions. The difference shows on every scroll.",
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
        { href: '#objectives', label: 'Objectives' },
        { href: '#shipped', label: 'Approach' },
        { href: '#testimonials', label: 'Testimonials' },
      ],
      contextCards: [
        {
          eyebrow: 'The opportunity',
          title: 'Why this product had to exist',
          body: 'Students preparing for the GMAT need to practice on official questions. But no platform in the market combined those questions with proper analytics or quality solutions. Students were left juggling GMAT Club, the Official Guide, and other scattered sources — getting the questions, but no visibility into where they were actually stuck.',
        },
        {
          eyebrow: 'Problem statement',
          title: 'What students were struggling with',
          body: "The platform-juggling wasn't just inconvenient. It broke the practice → review → re-practice loop students needed in the final weeks of prep. Switching tools meant losing context, mistakes weren't tracked across sources, and methodology was always one tab away from the question that needed it.",
        },
      ],
      solutionObjectives: {
        items: [
          {
            icon: 'loop',
            title: 'Seamless practice and revision',
            body: "Students don't study in a line — they solve, review, bookmark, return, retry under the timer. Neuron treats questions, sessions, timed and untimed modes, and bookmarks as one continuous loop, not separate features.",
          },
          {
            icon: 'doubt',
            title: 'Seamless doubt-clearing',
            body: 'A doubt gets resolved where it arises. The e-GMAT methodology lives inside the solution view, and the forums are one click from the question — "I don\'t understand why" is answered without leaving the screen.',
          },
        ],
        thesis: 'Every platform had the questions. None had the loop — practice, review, doubt-clearing, retry — without switching tools. Neuron is the workspace where that loop lives.',
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
            inlineQuote: {
              author: 'madhavsawhney',
              meta: '665 (Q87, V83, DI79) — GMAT Club review',
              quoteHtml: '<mark>Neuron let me drill official GMAT questions on my exact weak areas</mark>, reducing my solve time while improving accuracy.',
              href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365274#:~:text=Neuron%20let%20me%20drill%20official%20GMAT%20questions%20on%20my%20exact%20weak%20areas%20with%20e%2DGMAT%27s%20superior%20explanations.%20What%20made%20it%20invaluable%20was%20the%20Error%20Log%E2%80%94I%20could%20revisit%20every%20incorrect%20question%20before%20test%20day%2C%20reducing%20my%20solve%20time%20while%20improving%20accuracy.',
              modalTitle: 'GMAT Club review — madhavsawhney',
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
            inlineQuote: {
              author: 'aliquamdolorem',
              meta: '715 (Q88, V85, DI84) — GMAT Club review',
              quoteHtml: 'This targeted approach <mark>drove my CR hard accuracy from 60% to 82%.</mark>',
              href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365268#:~:text=This%20targeted%20approach%20drove%20my%20CR%20hard%20accuracy%20from%2060%25%20to%2082%25',
              modalTitle: 'GMAT Club review — aliquamdolorem',
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
            inlineQuote: {
              author: 'madhavsawhney',
              meta: '665 (Q87, V83, DI79) — GMAT Club review',
              quoteHtml: 'Identify weakness → study module → practice official questions on Neuron, retest — <mark>created measurable improvement between each mock attempt.</mark>',
              href: 'https://gmatclub.com/reviews/comments/e-gmat-online-360-345365274#:~:text=created%20measurable%20improvement%20between%20each%20mock%20attempt',
              modalTitle: 'GMAT Club review — madhavsawhney',
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
        intro: 'After launch, public feedback on GMAT Club and Reddit started landing on the same things the product was designed to do — measurable score lifts traced back to specific behaviors, targeted weak-area drilling, and a practice loop tight enough to use between mock attempts.',
        note: 'Quotes below are verbatim from publicly posted reviews and debriefs on GMAT Club and Reddit. Emphasis is mine, to mark the part most relevant to the product design. Each quote links to its original source — these are public observations, not solicited testimonials.',
        sourceBrand: 'GMAT Club',
        items: [
          {
            author: 'nikkhil22',
            meta: '685, +100-point improvement — GMAT Club forum',
            quoteHtml: 'When I had specific gaps in hard questions, <mark>Neuron was perfect for targeted practice.</mark> I used it to fill knowledge gaps without time pressure.',
            href: 'https://gmatclub.com/forum/from-585-to-685-my-gmat-focus-journey-100-point-improvement-448777.html#:~:text=Neuron%20was%20perfect%20for%20targeted%20practice',
            modalTitle: 'GMAT Club forum — nikkhil22',
          },
          {
            author: 'kalashjain',
            meta: '685 (V85, Q88, DI79) — GMAT Club forum',
            quoteHtml: 'Neuron <mark>helped me identify consistent patterns in my mistakes</mark> and fix the behavioural errors that I had identified.',
            href: 'https://gmatclub.com/forum/gmat-685-with-e-gmat-447885.html#:~:text=helped%20me%20identify%20consistent%20patterns%20in%20my%20mistakes',
            modalTitle: 'GMAT Club forum — kalashjain',
          },
          {
            author: 'Suhani5236',
            meta: '655 (Q88, V82, DI77) — GMAT Club forum',
            quoteHtml: 'I started using Neuron for <mark>15-20 minute warm-up sessions before cementing, gradually building my attention span.</mark>',
            href: 'https://gmatclub.com/forum/from-555-to-655-a-100-point-gmat-journey-v82-q88-di77-454575.html#:~:text=gradually%20building%20my%20attention%20span',
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
    // Fixed-artboard prototype embed (XD/Figma): { aspect: { width, height } }.
    // Makes ShowcaseTemplate render PrototypeEmbed instead of WorkPreview.
    prototypeEmbed: details.prototypeEmbed || null,
    overviewCard: details.overviewCard || null,
    contextCards: details.contextCards || null,
    solutionObjectives: details.solutionObjectives || null,
    notesCard: details.notesCard || null,
    testimonial: details.testimonial || null,
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
