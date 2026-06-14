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
          src: '/images/case-studies/personalized-study-planner/psp-thumbnail.webp',
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
                  // Supporting screens fill the column with a lifted shadow.
                  fullWidth: true,
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
                  // Two popups shown together (divider between) on desktop,
                  // tabbed on mobile.
                  sideBySide: true,
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
        cover: {
          src: '/images/case-studies/sigma-x/sigmax-thumbnail.webp',
          position: 'center',
        },
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
        tag: 'Practice & analytics',
        note: 'A ground-up rebuild of e-GMAT\'s highest-traffic practice platform — turning every attempt into actionable insight on what to fix next.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/scholaranium/scholaranium-thumbnail.webp',
          position: 'center',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Product Design',
          title: 'Scholaranium — practice that turns every attempt into actionable insight',
          previewTitle: 'Scholaranium 2.0',
          hook: 'An advanced practice platform that turns a student\'s attempt data into what other tools never showed — where you\'re strong, where you\'re weak, whether you\'re improving, and the exact gaps to fix next.',
          summary: 'Scholaranium is e-GMAT\'s practice platform — it turns every quiz attempt into actionable insight, surfacing where a student is strong, where they\'re weak, whether they\'re improving, and the exact gaps to fix. As the sole product designer, I took the product and screen requirements, defined and visualized every flow, and delivered the working prototype the engineering team built into the live product.',
          heroNote: 'This is just a display page and the full case study is coming soon.',
          role: 'Product Designer (sole)',
          year: 'May 2021',
          status: 'Live',
          projectType: 'Practice & analytics platform',
          // XD prototype is still in progress, so the Prototype tab shows a
          // placeholder window for now (swap embedUrl for the XD /embed/ link
          // when ready); the walkthrough tab carries the product teaser video.
          embedUrl: '/images/case-studies/scholaranium/xd-placeholder.html',
          prototypeEmbed: { aspect: { width: 1536, height: 728 } },
          externalUrl: 'https://scholaranium2.e-gmat.com/schol-20/verbal/dashboard',
          liveBadge: 'XD prototype',
          walkthroughNote: {
            lead: 'Want to see the real product in motion?',
            label: 'Watch the product walkthrough',
            embedUrl: 'https://www.youtube.com/embed/DCKvm4tR3D0?autoplay=1',
            modalTitle: 'Scholaranium 2.0 product teaser',
            browserTitle: 'Scholaranium teaser',
            trail: 'Recorded by the e-GMAT team and used here as supporting content; I don\'t own the copyrights — all credits go to e-GMAT.',
          },
          websiteNavLinks: [
            { href: '#website-preview', label: 'Product preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
            { href: '#testimonials', label: 'Testimonials' },
          ],
          contextIntro: 'Scholaranium was e-GMAT\'s original practice platform — built years earlier through outsourced design and development, and carrying over 20 million attempts. It worked, which is exactly why it had become a monolith no one wanted to touch: a high-traffic product students relied on every day, where any change risked breaking something. Version 2.0 was the decision to rebuild it anyway — from the ground up, with nothing of the old platform carried over.',
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'Why the rebuild had to happen',
              body: 'A practice platform earns its keep on the half of the job beyond serving questions — helping students see their strengths and weaknesses and actually improve. On that half, the old platform was thin: bare-minimum analytics that surfaced none of the things that move a score. The questions were strong; the intelligence around them was missing.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'What students were doing wrong',
              body: 'Without that intelligence, students practiced blind. The platform never clearly surfaced:',
              questions: [
                'Which areas were weak, and which were already strong',
                'Whether their scores were trending up or flat',
                'How many quality questions they had left',
                'Whether a good score was earned — or just lucky',
              ],
              closing: 'So they reviewed only the questions they got wrong, mislabeled ability gaps as "timing problems," and kept practicing without improving. Only the few who already reviewed like a private tutor got the real value.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'verify',
                title: 'Get more out of every quiz',
                body: 'A score you can\'t trust is noise. Every attempt had to show whether a result was real — earned, rushed, or lucky — and hand back a precise list of what to review and why, the way a private tutor would.',
              },
              {
                icon: 'target',
                title: 'Make weakness precise',
                body: 'Vague data is as useless as no data. The analytics had to take a student from "I\'m weak in Verbal" to "I\'m weak in hard LCM and GCD questions, this month" — weakness pinned to subsection, difficulty, and recency.',
              },
              {
                icon: 'doubt',
                title: 'Teach each metric where it lives',
                body: 'None of these metrics existed in the market; students didn\'t know they needed them. So every new metric had to explain itself in place — the causal logic shown right on the chart, with tooltips, launchers, and worked examples — so it landed without a manual.',
              },
            ],
            thesis: 'Most practice tools hand back a score and a pile of data. Scholaranium hands back a verdict you can trust, a weakness pinned to the exact block, and the reason behind both — practice that diagnoses, not just drills.',
          },
          notesCard: {
            intro: 'Scholaranium is two products in one loop — a place to practice, and an analytics engine that reads what you did. The decisions below follow the student through it: from the dashboard, into an attempt and the verdict it earns, and out into the analytics that say exactly what to fix next.',
            decisions: [
              {
                number: '01',
                title: 'Gave the platform one home and two clear intents',
                body: 'Everything starts at the dashboard. A student arrives with one of two intents — take an attempt, or understand how the last ones went — so the dashboard makes both first-class: question counts and quiz types on one side, the way into the analytics on the other. No hunting for where to go next.',
                screenSet: {
                  frameTitle: 'Scholaranium — Dashboard',
                  tabs: [
                    {
                      label: 'Dashboard',
                      src: '/images/case-studies/scholaranium/dashboard.png',
                      alt: 'Scholaranium dashboard showing question counts and quiz types alongside the entry into analytics.',
                      caption: 'One home, two intents — start a quiz, or go understand how the last ones went.',
                    },
                  ],
                },
              },
              {
                number: '02',
                title: 'Let students build a quiz worth taking',
                body: 'Practice only helps if it targets the right thing. The custom-quiz builder lets a student assemble exactly the set they need — by subsection, difficulty, and source, even pulling from their bookmarks and past mistakes — through a short, guided two-step flow instead of a wall of filters.',
                screenSet: {
                  frameTitle: 'Scholaranium — Custom quiz',
                  tabs: [
                    {
                      label: 'Pick what to practice',
                      src: '/images/case-studies/scholaranium/custom-quiz.png',
                      alt: 'Scholaranium custom-quiz builder step one: choosing subsection, difficulty, and source.',
                      caption: 'Choose exactly what to practice — subsection, difficulty, source, bookmarks, past mistakes.',
                    },
                    {
                      label: 'Refine and start',
                      src: '/images/case-studies/scholaranium/custom-quiz-2.png',
                      alt: 'Scholaranium custom-quiz builder step two: refining the set before starting.',
                      caption: 'A guided second step refines the set — then the quiz is ready to take.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Put "can you trust this score?" on the results screen',
                body: 'When the attempt ends, the results screen answers one question first: is this score real? Three factors — timing influence, luck, and rush-through — are computed from how long the student took on each question versus the benchmark, and shown right on the timing chart so the cause is visible, not asserted. Get a hard question right in 40 seconds when most people need two minutes? That is flagged as luck, with the evidence beside it.',
                screenSet: {
                  frameTitle: 'Scholaranium — Results: can you trust this score?',
                  tabs: [
                    {
                      label: 'Trust factors',
                      src: '/images/case-studies/scholaranium/xpert-trust-score.svg',
                      alt: 'Results screen surfacing timing influence, luck, and rush-through factors on the timing chart.',
                      caption: 'Timing influence, luck, and rush-through — read straight off the timing chart, with the evidence in view.',
                    },
                  ],
                },
              },
              {
                number: '04',
                title: 'Made the review list explain itself',
                body: 'The auto-curated review list includes questions the student got correct — and that is the point. A question makes the list on two facts, not one: right or wrong, and in time or not. Spent too little (a guess) or too much (which forces rushing later), and it is on the list, grouped under a plain reason: "you got this right — make sure it was for the right reasons." The reason is what built trust in the list.',
                screenSet: {
                  frameTitle: 'Scholaranium — The review list',
                  tabs: [
                    {
                      label: 'The review list',
                      src: '/images/case-studies/scholaranium/review-list.svg',
                      alt: 'Auto-curated review list with each question grouped under its reason for review.',
                      caption: 'Each question carries its reason — including the ones the student got right.',
                    },
                    {
                      label: 'Reviewing a question',
                      src: '/images/case-studies/scholaranium/solution-screen.png',
                      alt: 'Scholaranium solution screen with notes and analysis for reviewing a flagged question.',
                      caption: 'And the solution screen makes the actual review — notes, analysis, strategy — fast.',
                    },
                  ],
                },
              },
              {
                number: '05',
                title: 'Turned a 3-dimensional problem into one chart you read at a glance',
                body: 'Performance lives across three axes — subsection, difficulty, and recency — which overwhelms if you draw it as a plane. So I moved two of them into controls: the student picks a recency window and a difficulty band, and the chart shows one clean breakdown by subsection. Dense data, single read.',
                screenSet: {
                  frameTitle: 'Scholaranium — Skill data: overall performance',
                  tabs: [
                    {
                      label: 'Overall performance',
                      src: '/images/case-studies/scholaranium/skill-data-overall.png',
                      alt: 'Skill-data overall-performance chart broken down by subsection, with recency and difficulty as controls.',
                      caption: 'Two axes become controls; the chart stays a single, readable breakdown by subsection.',
                    },
                  ],
                },
              },
              {
                number: '06',
                title: 'Took weakness down to the block',
                body: 'Topic-level data is too sparse to trust — a handful of questions per topic yields no real signal. So analysis groups questions into blocks large enough to be statistically honest, and flags the block, not the topic, where a student should spend energy. "Weak in word problems" becomes "weak in savings-and-interest, hard."',
                screenSet: {
                  frameTitle: 'Scholaranium — Block and topic analysis',
                  tabs: [
                    {
                      label: 'Block-level analysis',
                      src: '/images/case-studies/scholaranium/block-level-analysis.png',
                      alt: 'Block-level analysis flagging the specific blocks where the student is weak.',
                      caption: 'Blocks are sized to be statistically honest — the flag lands where effort actually pays.',
                    },
                    {
                      label: 'Topic-level analysis',
                      src: '/images/case-studies/scholaranium/topic-level-analysis.png',
                      alt: 'Topic-level analysis breaking a block down into its constituent topics.',
                      caption: 'Drill into a block to see the topics underneath it.',
                    },
                  ],
                },
              },
              {
                number: '07',
                title: 'Gave weakness a single destination',
                body: 'A dedicated weak-areas view collects every flagged block in one place, each with a recommended next action — so the student never has to assemble the picture themselves.',
                screenSet: {
                  frameTitle: 'Scholaranium — Weak areas',
                  tabs: [
                    {
                      label: 'Weak areas',
                      src: '/images/case-studies/scholaranium/weak-areas.png',
                      alt: 'Weak-areas view listing every flagged block with a recommended action.',
                      caption: 'Every flagged block in one place, each with a recommended next action.',
                    },
                  ],
                },
              },
              {
                number: '08',
                title: 'Taught every new metric in place',
                body: 'Luck factor, block-level recency, weighted score — none of it existed elsewhere, so students did not know what they were looking at. Each metric explains itself where it appears, through inline tooltips and contextual launchers, so the student understands it without leaving the screen.',
                screenSet: {
                  frameTitle: 'Scholaranium — Metrics that teach themselves',
                  tabs: [
                    {
                      label: 'Explained in place',
                      src: '/images/case-studies/scholaranium/weak-areas-tooltip.png',
                      alt: 'A weak-areas metric with an inline tooltip explaining what it means and how to act on it.',
                      caption: 'Tooltips and launchers explain each new metric the moment it appears.',
                    },
                  ],
                },
              },
            ],
            shift: {
              eyebrow: 'The shift',
              headline: 'From practice you sat through to practice that improves you.',
              rows: [
                { before: 'Practice you could not learn from', after: 'Every attempt scored for what to fix' },
                { before: 'Review only the wrong answers', after: 'Review the right answers for the right reasons' },
                { before: '"I have a timing problem"', after: 'A timing problem in this exact construct' },
                { before: 'Topic data too thin to trust', after: 'Block-level data you can act on' },
                { before: 'One static accuracy number', after: 'Subsection × difficulty × recency' },
                { before: 'Analytics you needed a tutor to read', after: 'Metrics that teach themselves' },
              ],
            },
          },
          testimonials: {
            title: 'What students said',
            intro: 'These are from user-research interviews with students who used the rebuilt platform. They keep pointing at the same things it was designed for — data they can act on, weakness they can see, and scores they can trust.',
            note: 'Quotes are transcribed from recorded student feedback interviews and lightly cleaned for readability; emphasis is mine. The recordings were made by e-GMAT and are used here as supporting content — all credits go to e-GMAT.',
            sourceBrand: 'Student interviews',
            items: [
              {
                author: 'Saloni',
                meta: 'Student interview',
                quoteHtml: 'What I loved was <mark>access to data</mark> — you can drill down to where you\'re lacking and what to improve. Especially the feature where you see the last 15 questions versus the previous 15, and the timing improvement on that.',
              },
              {
                author: 'Michael',
                meta: 'Student interview',
                quoteHtml: 'The first thing that hit me was how user-friendly it is. <mark>It pinpoints which questions you should review the most, and then it tells you why</mark> — due to time, or incorrect answers.',
              },
              {
                author: 'Siddharth',
                meta: 'Student interview',
                quoteHtml: 'It\'s not only the questions you got wrong, but also the ones <mark>you got right where you took more time.</mark> That targeted approach is very valuable — it saves a lot of time for a student.',
              },
              {
                author: 'Punith',
                meta: 'Student interview',
                quoteHtml: 'The expert tab gives me <mark>analysis of questions I never thought I needed.</mark> The review list, the raw data, the weighted score — it\'s definitely an upgrade.',
              },
              {
                author: 'Aditya',
                meta: 'Student interview',
                quoteHtml: '<mark>The data is presented in a way I can understand better</mark> — the percentages are right there, I don\'t need to go anywhere else. The last-15 plots show how my prep is going long-term.',
              },
              {
                author: 'Tirush',
                meta: 'Student interview',
                quoteHtml: 'The best part is the metrics — <mark>I can see my weak areas and which areas to work on,</mark> which wasn\'t there before.',
              },
            ],
          },
          sidebar: {
            categories: ['Product', 'Edtech', 'GMAT prep'],
            facts: [
              { label: 'Role', value: 'Product Designer (sole)' },
              { label: 'Timeline', value: 'May 2021' },
              { label: 'Status', value: 'Live' },
              { label: 'Access', value: 'Free tier — sits behind an e-GMAT account' },
            ],
            factsVisibleCount: 4,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'scholaranium2.e-gmat.com',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://scholaranium2.e-gmat.com/schol-20/verbal/dashboard',
              },
            ],
            access: {
              summary: 'How to access Scholaranium',
              body: 'Scholaranium has a free tier — you don\'t need a paid subscription to try it.',
              steps: [
                'Create a free e-GMAT account',
                'Open the Scholaranium link above',
                'Start practicing — the free tier is available right after sign-up',
              ],
            },
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'study-streak-rings',
        title: 'Study Streak Rings',
        tag: 'Behavior loop',
        note: 'Motivation mechanics designed around consistency and return behavior.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/streak-rings/streak-rings-thumbnail.webp',
          position: 'center',
        },
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
        title: 'e-GMAT Blogs — one system, 150+ pages',
        tag: 'SEO content system',
        note: 'One WordPress theme made to behave like a system, so page 150 stays as on-brand as page 1.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/egmat-blogs/blog-landing-card.webp',
          position: 'center top',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'e-GMAT Blogs — a content system, not a pile of posts',
          previewTitle: 'e-GMAT Blogs',
          hook: 'A search-led blog rebuilt so the team could publish forever without an engineer in the loop — and so every article actually routed its reader onward instead of dead-ending.',
          summary: 'e-GMAT ranked well but couldn\'t move: every blog change waited on the engineering queue. I led a full rebuild on WordPress with the Extra theme — turning a flat list of posts into a system with real hierarchy, a conversion-minded article page, and a custom-built sidebar, extended with code wherever the theme fell short.',
          role: 'Lead designer',
          year: '2023',
          status: 'Live',
          projectType: 'SEO content system',
          embedUrl: 'https://e-gmat.com/blogs/',
          externalUrl: 'https://e-gmat.com/blogs/',
          liveBadge: 'live embed',
          websiteNavLinks: [
            { href: '#website-preview', label: 'Live preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
            { href: '#shift', label: 'The Shift' },
          ],
          contextCards: [
            {
              eyebrow: 'The trigger',
              title: 'Every fix waited on engineering',
              body: 'The old blog was hand-coded, so any change sat in the engineering queue behind the actual product. Improvements we knew would work couldn\'t ship — and we watched rankings slip while we waited.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'Ranking well, converting nothing',
              body: 'Strong content pulled readers onto article pages. The pages then did nothing with them — no recommendations, no path onward, no reason to sign up. Three gaps on every page:',
              questions: [
                'Where do I go after this article?',
                'What else here is worth reading?',
                'Why would I sign up?',
              ],
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'unlock',
                title: 'Cut the engineering dependency',
                body: 'A setup anyone could edit — no code, no queue, no bottleneck.',
              },
              {
                icon: 'route',
                title: 'Make every article a path forward',
                body: 'Each page had to recommend, cross-sell, and convert — not dead-end the reader it earned.',
              },
              {
                icon: 'hierarchy',
                title: 'Give the blog a real spine',
                body: 'A true structure — home to category to subcategory to article — readers and search both follow.',
              },
            ],
            thesis: 'The article page is the front door. People search a problem, not "e-GMAT blogs" — so they land mid-site, on an article. I designed everything around that page earning the next click.',
          },
          roleParagraph: 'I led this end-to-end on WordPress with Elegant Themes\' Extra — coordinating with SEO, architecting the flows, and driving the junior designers. Where the theme couldn\'t reach, I took the code route rather than settle.',
          notesCard: {
            intro: 'Two problems in one: how a reader finds the right page, and what that page does once they are on it. The decisions follow that split — and a few places where I had to out-build the theme.',
            decisions: [
              {
                number: '01',
                title: 'Chose the engine on purpose',
                body: 'I researched ten well-rated blog themes, shortlisted three, and picked Extra on three tests: how easily a non-coder could update it, whether it shipped the pieces a blog needs, and how far it could be customised.',
                graphic: 'theme-selection',
              },
              {
                number: '02',
                title: 'Treated the article page as the front door',
                body: 'Search visitors land on articles, not the home page — so that is where the work went. A register-free hook, sibling-category cross-links, and visual in-content link blocks turn a single answer into a reason to stay.',
                screenSet: {
                  plain: true,
                  fullWidth: true,
                  tabs: [
                    {
                      src: '/images/case-studies/egmat-blogs/article-front-door.png',
                      alt: 'Article page with a register hook, sibling-category links, and in-content link blocks.',
                      caption: 'The article page does the converting — hooks and cross-links built into the template.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Built a custom sidebar app',
                body: 'The theme\'s sidebar was too thin for the job, so I built my own. It adapts to the article — relevant reads, parallel categories, and the platform resources that match what the visitor came for.',
                screenSet: {
                  plain: true,
                  tabs: [
                    {
                      src: '/images/case-studies/egmat-blogs/custom-sidebar.png',
                      alt: 'Custom dynamic sidebar showing related articles, sibling categories, and resources.',
                      caption: 'A sidebar I coded from scratch — it changes with the article it sits beside.',
                    },
                  ],
                },
              },
              {
                number: '04',
                title: 'Closed every dead end',
                body: 'Three featured reads from the same category at the foot of each article, author pages to follow a writer, and breadcrumbs plus a secondary nav so a reader can always go up, across, or onward.',
                screenSet: {
                  plain: true,
                  sideBySide: true,
                  tabs: [
                    {
                      src: '/images/case-studies/egmat-blogs/related-reads.png',
                      alt: 'Three related featured articles at the end of an article.',
                      caption: 'End of article: three featured reads from the same category.',
                    },
                    {
                      src: '/images/case-studies/egmat-blogs/breadcrumbs-nav.png',
                      alt: 'Breadcrumbs and secondary navigation at the top of an article page.',
                      caption: 'Breadcrumbs and a secondary nav — orientation on every page.',
                    },
                  ],
                },
              },
              {
                number: '05',
                title: 'Gave the blog a spine',
                body: 'Home to category to subcategory to article, each level earning its place. The home page leads with featured and recent picks then fans into category chips; category and subcategory pages do the same one rung down.',
                screenSet: {
                  plain: true,
                  fullWidth: true,
                  tabs: [
                    {
                      src: '/images/case-studies/egmat-blogs/hierarchy.png',
                      alt: 'Blog hierarchy from home page to category to subcategory to article.',
                      caption: 'A four-level hierarchy where a flat list of posts used to be.',
                    },
                  ],
                },
              },
              {
                number: '06',
                title: 'Out-built the theme where it mattered',
                body: 'A prescribed theme gets you most of the way, then resists the last stretch. Rather than settle for "good enough," I extended it with custom CSS and injected code — the sidebar app, the in-content modules, the spacing — so the design served the content, not the other way round.',
              },
            ],
            shift: {
              rows: [
                { before: 'Every update waited on the engineering queue', after: 'The content team publishes and edits on its own' },
                { before: 'A flat, reverse-chron list of posts', after: 'Home to category to subcategory to article' },
                { before: 'Articles dead-ended the reader', after: 'Related reads, author pages, and links onward' },
                { before: 'No reason or route to sign up', after: 'Register hooks woven into the template' },
                { before: 'A thin, generic theme sidebar', after: 'A custom sidebar that adapts to each article' },
              ],
            },
          },
          sidebar: {
            categories: ['Web', 'Edtech', 'Content / SEO'],
            responsibilities: [
              'Coordinated with the SEO team on content needs',
              'Shaped the design language for the content',
              'Architected the user flows — ranking-aware, user-first',
              'Drove the junior designers to the envisioned output',
            ],
            facts: [
              { label: 'Role', value: 'Lead designer' },
              { label: 'Platform', value: 'WordPress + Extra (Elegant Themes), extended with code' },
              { label: 'Scope', value: 'Full rebuild — 150+ pages' },
              { label: 'Timeline', value: '2023, maintained since' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 5,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'e-gmat.com/blogs',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://e-gmat.com/blogs/',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'nerdypixel-studios',
        title: 'NerdyPixel — the work as the pitch',
        tag: 'Agency landing page',
        note: 'The studio\'s own site, built to prove a small team ships real outcomes and to qualify leads before the first call.',
        actionType: 'internal-route',
        embedUrl: 'https://nerdypixelstudios.ca',
        externalUrl: 'https://nerdypixelstudios.ca',
        cover: {
          src: '/images/case-studies/nerdypixel-studios/hero-card.webp',
          position: 'center top',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'NerdyPixel Studios — a studio site that sells the work, not adjectives',
          previewTitle: 'NerdyPixel Studios',
          hook: 'A boutique design studio has one credibility problem: prove a small team delivers real outcomes, fast, before a prospect clicks away. I designed and built our own site to answer that — with artifacts and numbers, not adjectives.',
          summary: 'NerdyPixel Studios is the design studio behind this portfolio. I designed and built its single-page site end-to-end — positioning, structure, visual identity, and a lead-qualifying inquiry form. The whole page is one funnel: say what we do, prove it with real work and hard metrics, then capture a qualified lead.',
          heroNote: 'A lean case study — the design decisions behind the studio site, in brief. You are looking at the live site embedded below.',
          role: 'Designer & Frontend (sole)',
          year: '2025',
          status: 'Live',
          projectType: 'Agency landing page',
          embedUrl: 'https://nerdypixelstudios.ca',
          externalUrl: 'https://nerdypixelstudios.ca',
          liveBadge: 'live embed',
          websiteNavLinks: [
            { href: '#website-preview', label: 'Live preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
          ],
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'A small studio with big-studio work',
              body: 'NerdyPixel does UI/UX, web and app design, and branding — and has the case studies to back it. But a boutique studio fights an instinct in every prospect: "are they big enough to handle this?" The site\'s job was to convert that doubt into confidence inside one scroll, using the work itself as the argument.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'Why most agency sites fail to convince',
              body: 'The default agency site over-promises and under-proves — a wall of services, a few logos, a contact form. It leaves a prospect asking:',
              questions: [
                'Have they actually shipped work like mine?',
                'Did that work move a real number?',
                'Will they take my project seriously?',
              ],
              closing: 'And the generic "Get in touch" form invites every tyre-kicker equally, so the studio spends its scarcest resource — time — on calls that go nowhere. The site had to both prove the work and filter the inbound.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'verify',
                title: 'Prove with artifacts and numbers',
                body: 'Lead with evidence a prospect can verify: real screenshots, logo boards, packaging photography, and hard case-study metrics. Proof-of-craft beats a testimonial carousel — show the work, then show what it did.',
              },
              {
                icon: 'decide',
                title: 'Qualify the lead at capture',
                body: 'A budget selector, project description, and file upload sit inside the inquiry form itself. The form does the first round of qualification, so the studio walks into every call already knowing the shape of the project.',
              },
              {
                icon: 'welcome',
                title: 'One page, one identity',
                body: 'A single-scroll page with a cohesive, slightly playful identity — branded accents over a whitespace base — that feels like the team made it, not a template. The site is itself a sample of the work.',
              },
            ],
            thesis: 'An agency site is a sample of the agency. I built ours as the argument it needed to make: the work proves the craft, the numbers prove the outcome, and the form proves we respect the prospect\'s time — and ours.',
          },
          roleParagraph: 'I designed and built the site end-to-end — positioning and copy direction, structure, visual system, and the front-end build, including the parts the page builder could not do natively, which I finished with custom CSS and JavaScript.',
          notesCard: {
            intro: 'The site is one funnel collapsed into a single page. The decisions below follow a visitor down it — from the promise, through the proof, to the qualified hand-off.',
            decisions: [
              {
                number: '01',
                title: 'Built the whole page as one scroll-down funnel',
                body: 'Hero promise → split services (web vs. branding) → proof → contact, in that order, on one page. No deep navigation, no sub-pages to lose people in. Every section moves the visitor one step closer to the form, and a "get in touch" CTA repeats at each natural stopping point so intent is never more than a tap from action.',
                screenSet: {
                  frameTitle: 'NerdyPixel — Hero and services',
                  tabs: [
                    {
                      label: 'Hero',
                      src: '/images/case-studies/nerdypixel-studios/hero.png',
                      alt: 'NerdyPixel Studios hero with tagline and primary CTA.',
                      caption: 'The hero states what the studio does and opens the funnel with a single CTA.',
                    },
                    {
                      label: 'Services split',
                      src: '/images/case-studies/nerdypixel-studios/services.png',
                      alt: 'Two-column services split: web services and branding services.',
                      caption: 'Web vs. branding in a two-column split — a visitor self-identifies their need fast.',
                    },
                  ],
                },
              },
              {
                number: '02',
                title: 'Made the case studies carry hard numbers',
                body: 'The flagship case study (Encubate) leads with quantified outcomes — conversion lift, signups, engagement, ROI — rendered as oversized numerals with small labels. The second (a restaurant brand) proves range with logo, packaging, and flex-display photography. Recognisable client logos do the trust work that words can\'t.',
                screenSet: {
                  frameTitle: 'NerdyPixel — Proof',
                  tabs: [
                    {
                      label: 'Case-study metrics',
                      src: '/images/case-studies/nerdypixel-studios/case-study-metrics.png',
                      alt: 'Encubate case study with oversized result numerals and small labels.',
                      caption: 'Outcomes as big numerals — the result is the headline, the label is the footnote.',
                    },
                    {
                      label: 'Logo board',
                      src: '/images/case-studies/nerdypixel-studios/logo-board.png',
                      alt: 'A grid of client and local-business logos.',
                      caption: 'A logo board proves range and gives the eye recognisable anchors.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Turned the contact form into a qualifier',
                body: 'Name and email are table stakes. The form also asks for company, location, project description, a file upload, a budget band, and consent — so a serious lead self-selects and an idle one drops off. The studio gets fewer, better calls, and arrives at each one already knowing the budget and the brief.',
                screenSet: {
                  frameTitle: 'NerdyPixel — Inquiry form',
                  plain: true,
                  tabs: [
                    {
                      label: 'Qualifying form',
                      src: '/images/case-studies/nerdypixel-studios/inquiry-form.png',
                      alt: 'Project inquiry form with budget selector, file upload, and consent.',
                      caption: 'Budget band, brief, and file upload qualify the lead before a single email is sent.',
                    },
                  ],
                },
              },
            ],
          },
          sidebar: {
            categories: ['Web', 'Agency', 'Branding'],
            facts: [
              { label: 'Role', value: 'Designer & Frontend (sole)' },
              { label: 'Timeline', value: '2025' },
              { label: 'Type', value: 'Single-page studio site' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 3,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'nerdypixelstudios.ca',
                href: 'https://nerdypixelstudios.ca',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'free-trial-page',
        title: 'Free Trial — the outcome, up front',
        tag: 'Conversion page',
        note: 'Anchored on one outcome (735+), with verifiable proof and a CTA in every block, so signing up is the easy path.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/free-trial/hero-card.webp',
          position: 'center top',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'Free Trial Page — the outcome up front, the proof behind it',
          previewTitle: 'Free Trial — GMAT Focus Prep',
          hook: 'A cold visitor gives a landing page one question: what do I get, and can I believe you? I designed this free-trial page to answer both before they scroll — the outcome in the headline, verifiable proof underneath, and no friction between wanting in and being in.',
          summary: 'This is the top-of-funnel acquisition page for e-GMAT\'s prep platform. I designed it to convert cold traffic into trial users by anchoring the whole page on the reader\'s goal — a 735+ score — surrounding it with proof a skeptic can verify, and removing every reason to hesitate before signing up.',
          heroNote: 'A lean case study — the conversion decisions behind the page, in brief. The live page is embedded below.',
          role: 'Web / Conversion Designer (sole)',
          year: '2024',
          status: 'Live',
          projectType: 'Conversion landing page',
          embedUrl: 'https://e-gmat.com/ft-gmat-focus-prep',
          externalUrl: 'https://e-gmat.com/ft-gmat-focus-prep',
          liveBadge: 'live embed',
          websiteNavLinks: [
            { href: '#website-preview', label: 'Live preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
          ],
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'Cold traffic, one shot to convert',
              body: 'Paid and organic traffic lands on this page with no relationship to the brand and a low tolerance for being sold to. The product is genuinely strong and free to try — the design problem was getting a stranger to believe that and act on it inside a few seconds, before the back button wins.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'What makes a stranger bounce',
              body: 'A visitor who can\'t immediately answer three things leaves:',
              questions: [
                'What exactly do I get for free?',
                'Why should I trust these claims?',
                'How much effort is it to start?',
              ],
              closing: 'Vague benefit copy, unverifiable hype, and a single buried sign-up button each kill the conversion on their own. The page had to make the offer concrete, the proof checkable, and the action unmissable.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'target',
                title: 'Anchor the page on the outcome',
                body: 'The headline is the reader\'s goal, not the product\'s name — "Achieve 735+." That frame opens the page and closes it, so the entire scroll reads as a path to the thing the visitor already wants.',
              },
              {
                icon: 'verify',
                title: 'Lead trust with verifiable proof',
                body: 'Replace adjectives with numbers a skeptic can check — market share, thousands of five-star reviews, #1 rankings on platforms they already trust, real score jumps. Credibility from evidence, not enthusiasm.',
              },
              {
                icon: 'welcome',
                title: 'Remove every reason to hesitate',
                body: 'It\'s free, so the page never asks for commitment it doesn\'t need. Low-friction CTAs repeat throughout, and each feature block has its own entry point — a visitor can start from whatever they happen to care about.',
              },
            ],
            thesis: 'A conversion page is a single argument, repeated until it lands: here is the outcome you want, here is the proof we deliver it, and here — again — is the frictionless way in.',
          },
          roleParagraph: 'I designed and built this as a marketing page in a page builder, extending it with custom CSS and JavaScript where the native components could not deliver the layout, the numbered-section rhythm, or the testimonial carousel.',
          notesCard: {
            intro: 'The page is one argument carried top to bottom. The decisions below trace it — how the offer is framed, how trust is built, and how the action is made the easiest thing on the page.',
            decisions: [
              {
                number: '01',
                title: 'Bookended the page with the outcome',
                body: '"Achieve 735+" opens the hero and reappears at the closing CTA, with the concrete free inclusions (hours of video, hundreds of practice questions, webinars, a mock, mentor chat) listed as a value checklist right beside it. The reader sees the destination first and is reminded of it at the moment of decision.',
                screenSet: {
                  frameTitle: 'Free Trial — Outcome-anchored hero',
                  tabs: [
                    {
                      label: 'Hero',
                      src: '/images/case-studies/free-trial/hero.png',
                      alt: 'Free-trial hero headlined "Achieve 735+" with a value checklist and CTA.',
                      caption: 'The headline is the reader\'s goal; the checklist makes "free" concrete.',
                    },
                    {
                      label: 'Closing CTA',
                      src: '/images/case-studies/free-trial/closing-cta.png',
                      alt: 'Closing call-to-action repeating the 735+ outcome with a signup form.',
                      caption: 'The same outcome closes the page — the bookend that frames the whole scroll.',
                    },
                  ],
                },
              },
              {
                number: '02',
                title: 'Put a CTA inside every feature block',
                body: 'Rather than funnel everyone through one button, each free-trial feature — video lessons, practice questions, webinars, the mock, mentor chat — carries its own "try it free" entry. A visitor who only cares about the mock starts from the mock. The page meets intent wherever it shows up instead of forcing a single path.',
                screenSet: {
                  frameTitle: 'Free Trial — Feature cards',
                  plain: true,
                  tabs: [
                    {
                      label: 'Feature grid',
                      src: '/images/case-studies/free-trial/feature-grid.png',
                      alt: 'Grid of free-trial feature cards, each with its own CTA.',
                      caption: 'Each feature is its own door in — intent never has to detour to a single button.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Made the proof checkable, not just loud',
                body: 'The social-proof band leads with specifics a visitor can independently verify — market share, 2,100+ five-star reviews, #1 ratings, GMAT Club-verified score jumps — and a testimonial carousel keeps the human proof digestible instead of a wall of quotes. Numbered section markers and a consistent accent give the long page a scannable rhythm.',
                screenSet: {
                  frameTitle: 'Free Trial — Proof',
                  tabs: [
                    {
                      label: 'Verifiable stats',
                      src: '/images/case-studies/free-trial/proof-stats.png',
                      alt: 'Social-proof band with market share, review count, and #1 rankings.',
                      caption: 'Numbers a skeptic can check, on platforms they already trust.',
                    },
                    {
                      label: 'Testimonial carousel',
                      src: '/images/case-studies/free-trial/testimonials.png',
                      alt: 'Rotating testimonial carousel with score jumps and quotes.',
                      caption: 'A carousel keeps human proof present without becoming a wall of text.',
                    },
                  ],
                },
              },
            ],
          },
          sidebar: {
            categories: ['Web', 'Edtech', 'Conversion'],
            facts: [
              { label: 'Role', value: 'Web / Conversion Designer (sole)' },
              { label: 'Timeline', value: '2024' },
              { label: 'Goal', value: 'Cold traffic → free-trial signups' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 3,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'e-gmat.com/ft-gmat-focus-prep',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://e-gmat.com/ft-gmat-focus-prep',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'coach-connect',
        title: 'Coach Connect — sell it, then serve it',
        tag: 'Sales page + app',
        note: 'Two surfaces for one subscription: a page that persuades, and an app where members live day to day.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/coach-connect/sales-hero-card.webp',
          position: 'center top',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'Coach Connect — selling the subscription, then serving it',
          previewTitle: 'Coach Connect',
          hook: 'A recurring mentoring subscription has two design problems, not one: convince a stranger it\'s worth $49 a month, then give the people who say yes a place to actually use it. I designed both surfaces — the sell and the stay.',
          summary: 'Coach Connect is e-GMAT\'s live-mentoring subscription. I designed two surfaces for it: a sales page that makes "what you get, who teaches it, what it costs" legible in one scroll, and a companion app — a low-chrome utility where enrolled students find their schedule, join sessions, and browse recordings. One product, two jobs, two very different design registers.',
          heroNote: 'A lean case study — the design decisions behind both surfaces, in brief. The sales page is embedded below.',
          role: 'Web & Product Designer (sole)',
          year: '2024',
          status: 'Live',
          projectType: 'Sales page + companion app',
          embedUrl: 'https://lohith-learn-pages.netlify.app/products/coach-connect',
          externalUrl: 'https://lohith-learn-pages.netlify.app/products/coach-connect',
          liveBadge: 'live embed',
          websiteNavLinks: [
            { href: '#website-preview', label: 'Live preview' },
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'Approach' },
          ],
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'A subscription is sold once and used forever',
              body: 'Coach Connect pairs students with top-rated instructors in recurring live sessions for $49/month. Unlike a one-time course, it has to win the sale and then keep earning it week after week. That meant two surfaces with opposite jobs — a page that persuades, and an app that quietly works — and they had to feel like one product.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'Where a single page would have failed',
              body: 'Try to do both jobs on one page and both suffer. A prospect needs:',
              questions: [
                'What exactly do I get, and what does it cost?',
                'Who is teaching me, and are they any good?',
              ],
              closing: 'But an enrolled student needs none of that — they need "when is my next session, how do I join, where are the recordings." A marketing page buries those daily tasks under a sales pitch; a utility app buries the pitch under tools. Each surface had to be designed for exactly one of these people.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'target',
                title: 'Make the offer legible at a glance',
                body: 'Anchor the sales page on the few numbers that decide the purchase — 15 sessions, $49, the target score — rendered big enough to read in a scan, so the value lands before the copy is read.',
              },
              {
                icon: 'verify',
                title: 'Earn trust with specifics',
                body: 'Back the instructors with concrete authority — exact review counts, percentiles, research hours — and show testimonials whose outcomes match the exact promise. Specifics persuade where adjectives slide off.',
              },
              {
                icon: 'loop',
                title: 'Design the using, not just the buying',
                body: 'Build the companion app around real student workflow — schedule, join, ask, review — as a low-chrome utility, so the product keeps delivering value long after the sale that a marketing page can\'t.',
              },
            ],
            thesis: 'A subscription product is two designs in a trench coat. I gave each its own surface — a persuasive page for the stranger, a frictionless tool for the member — so neither compromised the other.',
          },
          roleParagraph: 'I designed both surfaces — the marketing page and the companion app. The sales page was built as a marketing page, extended with custom CSS where the builder fell short; the app surface was designed around the day-to-day tasks of an enrolled student rather than around the sell.',
          notesCard: {
            intro: 'The decisions split cleanly across the two surfaces — the first three are about persuading a stranger to subscribe, the last is about serving the student who did.',
            decisions: [
              {
                number: '01',
                title: 'Anchored the sales page on oversized proof-numbers',
                body: 'The three numbers that actually decide the purchase — 15 sessions, $49/month, the 705+ target — are the visual anchors of the page, sized to be read in a glance. The value proposition is legible before a word of body copy, so a skim still converts.',
                screenSet: {
                  frameTitle: 'Coach Connect — Sales page',
                  tabs: [
                    {
                      label: 'Hero + numbers',
                      src: '/images/case-studies/coach-connect/sales-hero.png',
                      alt: 'Coach Connect sales hero anchored on session count, price, and target score.',
                      caption: 'The deciding numbers are the loudest thing on the page — value before copy.',
                    },
                    {
                      label: 'Value props',
                      src: '/images/case-studies/coach-connect/value-props.png',
                      alt: 'Four icon-led value-proposition blocks on the Coach Connect sales page.',
                      caption: 'One idea per block — sessions, flexibility, price, instructor quality.',
                    },
                  ],
                },
              },
              {
                number: '02',
                title: 'Built credibility from instructor specifics',
                body: 'The instructor spotlight trades adjectives for evidence — exact review counts, 99th–100th percentile scores, thousands of research hours — and the student testimonials are chosen so each one\'s outcome (score, percentile) mirrors the exact promise the page makes. The proof is specific enough to be checkable, which is what makes it land.',
                screenSet: {
                  frameTitle: 'Coach Connect — Authority and proof',
                  plain: true,
                  tabs: [
                    {
                      label: 'Instructor spotlight',
                      src: '/images/case-studies/coach-connect/instructors.png',
                      alt: 'Instructor spotlight with review counts, percentiles, and research hours.',
                      caption: 'Authority in numbers — reviews, percentiles, hours — not in praise.',
                    },
                  ],
                },
              },
              {
                number: '03',
                title: 'Tamed a 15-session calendar with progressive disclosure',
                body: 'Fifteen recurring sessions across three subjects is a lot to show without overwhelming the first view. A "show more / show less" calendar reveals the first few and collapses the rest, so the page proves the breadth of the offering without drowning a first-time visitor in a wall of slots.',
                screenSet: {
                  frameTitle: 'Coach Connect — Session calendar',
                  plain: true,
                  tabs: [
                    {
                      label: 'Collapsible calendar',
                      src: '/images/case-studies/coach-connect/calendar.png',
                      alt: 'Session calendar with a show-more control collapsing the full 15-session list.',
                      caption: 'Show a few, collapse the rest — breadth without the wall.',
                    },
                  ],
                },
              },
              {
                number: '04',
                title: 'Designed the companion app as a low-chrome utility',
                body: 'The app surface (a separate product, coachconnect.e-gmat.com) drops the sell entirely. It splits scheduling and recordings into a clean, tabbed layout with two task-specific CTAs — "join session" and "add to calendar" — instead of one ambiguous button, and organises the growing recordings archive into month tabs with named homework per session. It is built for a student\'s real workflow, not for conversion.',
                screenSet: {
                  frameTitle: 'Coach Connect — Companion app',
                  tabs: [
                    {
                      label: 'Schedule + join',
                      src: '/images/case-studies/coach-connect/app-schedule.png',
                      alt: 'Companion app showing the live-session schedule with join and add-to-calendar CTAs.',
                      caption: 'Two task-specific CTAs — join vs. add-to-calendar — match how students actually act.',
                    },
                    {
                      label: 'Recordings archive',
                      src: '/images/case-studies/coach-connect/app-recordings.png',
                      alt: 'Month-tabbed recordings archive with discussion points and named homework.',
                      caption: 'Month tabs keep a growing archive scannable; named homework adds accountability.',
                    },
                  ],
                },
              },
            ],
          },
          sidebar: {
            categories: ['Web', 'Product', 'Edtech'],
            facts: [
              { label: 'Role', value: 'Web & Product Designer (sole)' },
              { label: 'Timeline', value: '2024' },
              { label: 'Surfaces', value: 'Sales page + companion app' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 3,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'Sales page',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://lohith-learn-pages.netlify.app/products/coach-connect',
              },
              {
                label: 'coachconnect.e-gmat.com',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://coachconnect.e-gmat.com/',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies.',
          },
        },
      },
      {
        slug: 'growth-pages',
        title: 'Growth Pages — one system, many pages',
        tag: 'Marketing page system',
        note: 'Product, proof, session and careers pages on one visual system, tuned to each page\'s job in the funnel.',
        actionType: 'internal-route',
        cover: {
          src: '/images/case-studies/growth-pages/careers-home-card.webp',
          position: 'center top',
        },
        details: {
          template: 'website-showcase',
          eyebrow: 'Web Services',
          title: 'Growth Pages — one system, many pages, every funnel stage',
          previewTitle: 'Growth Pages',
          hook: 'Marketing doesn\'t need one perfect page — it needs dozens of good ones, fast, that all look like the same brand. This is the gallery: a single visual system stretched across product, proof, session, and careers pages, tuned to each page\'s job.',
          summary: 'Most of my web work doesn\'t fit a single case study — it\'s a body of growth and marketing pages produced at volume. Rather than design each from scratch, I built one visual system and a set of reusable patterns, then dialled the conversion intensity up or down to match where each page sits in the funnel. This gallery groups that work into four families: student-success proof, product and program pages, sessions and events, and careers.',
          heroNote: 'A lean case study — a gallery of the growth pages, grouped by the job each one does. Each card links to the live page.',
          role: 'Web / Growth Designer (sole)',
          year: '2023 – 2025',
          status: 'Live',
          projectType: 'Marketing page system',
          externalUrl: 'https://lohith-learn-pages.netlify.app/',
          websiteNavLinks: [
            { href: '#context', label: 'Context' },
            { href: '#objectives', label: 'Objectives' },
            { href: '#shipped', label: 'The gallery' },
          ],
          contextCards: [
            {
              eyebrow: 'The opportunity',
              title: 'Growth runs on page volume',
              body: 'A growth team ships constantly — a launch page this week, a success report next, a session registration, a careers post, a partner event. No single one of these is a flagship case study, but together they are the bulk of the public-facing web work, and they all have to feel like one brand while being produced far too fast to hand-craft individually.',
            },
            {
              eyebrow: 'Problem statement',
              title: 'Why volume breaks consistency',
              body: 'Produce dozens of pages with no system and three things go wrong:',
              questions: [
                'Every page drifts visually until the brand looks fragmented',
                'Each page is slow to build because nothing is reused',
                'Pages forget which funnel stage they\'re for — selling when they should reassure, or vice versa',
              ],
              closing: 'The answer wasn\'t one beautiful page. It was a system — shared patterns and a visual language — that any of these pages could be poured into, then tuned to the specific job it had to do.',
            },
          ],
          solutionObjectives: {
            items: [
              {
                icon: 'loop',
                title: 'One visual system, many pages',
                body: 'A shared language — the same headers, footers, stat panels, icon-led explainer blocks, and proof patterns — so a launch page and a careers page read as the same brand even though no two are identical.',
              },
              {
                icon: 'target',
                title: 'Match the page to its funnel job',
                body: 'Conversion intensity scales with intent: a free top-of-funnel page reassures and educates; a high-ticket program page leans on scarcity and proof; a post-registration page switches from selling to retaining. Same system, different dial settings.',
              },
              {
                icon: 'decide',
                title: 'Design for production, not one-offs',
                body: 'Patterns reusable enough that the next page is fast to build and on-brand by default — using a page builder for speed, and dropping to custom CSS and JavaScript only where the interaction demanded it.',
              },
            ],
            thesis: 'Growth design is a systems problem disguised as a page problem. I built the system once, then spent my time on the decision that actually varies per page: what job is this page doing, and how hard should it push?',
          },
          roleParagraph: 'I designed and built these pages on a page builder for production speed, extending them with custom CSS and JavaScript wherever the native components couldn\'t deliver the interaction — filters, carousels, countdowns, and the like. The gallery below groups the work by the job each page does; every card opens the live page.',
          notesCard: {
            intro: 'Four families of page, each tuned to a different moment in a prospect\'s journey — from proving the product works, to selling specific programs, to running live sessions, to hiring the team behind it all.',
            decisions: [
              {
                number: '01',
                title: 'Student-success proof — making outcomes browsable',
                body: 'The proof pages turn a flood of student results into something a prospect can navigate and believe: an annual success report that re-cuts one dataset into several "wow" framings, a templated success-story system where only the names and numbers change — shown here across four students from a 705 to an 805-equivalent journey — and a filterable admits wall. The design job is legibility at volume: proof that scales without reading as sameness.',
                gallery: [
                  {
                    title: '2025 Success Report',
                    note: 'A year of outcomes plus the product investment behind them — one dataset re-cut into several achievement lenses.',
                    href: 'https://lohith-learn-pages.netlify.app/products/egmat-2025-updates',
                    thumb: '/images/case-studies/growth-pages/success-report-2025.png',
                    alt: 'e-GMAT 2025 success report page.',
                  },
                  {
                    title: 'Success story — Divy, 735',
                    note: 'The templated case-study layout — hero score, before/after leap, per-section strategy, mentorship, recap.',
                    href: 'https://lohith-learn-pages.netlify.app/success-story/divy-gmat-735',
                    thumb: '/images/case-studies/growth-pages/success-divy-735.png',
                    alt: 'Divy GMAT 735 success-story page.',
                  },
                  {
                    title: 'Success story — Anirudh, 765',
                    note: 'Same template, a different student — the 765 journey poured into the identical skeleton.',
                    href: 'https://lohith-learn-pages.netlify.app/success-story/anirudh-gmat-765',
                    thumb: '/images/case-studies/growth-pages/success-anirudh-765.png',
                    alt: 'Anirudh GMAT 765 success-story page.',
                  },
                  {
                    title: 'Success story — Maria, 705',
                    note: 'The same system flexing to an international scorer\'s story — names and numbers swap, structure holds.',
                    href: 'https://lohith-learn-pages.netlify.app/success-story/maria-gmat-705',
                    thumb: '/images/case-studies/growth-pages/success-maria-705.png',
                    alt: 'Maria GMAT 705 success-story page.',
                  },
                  {
                    title: 'Success story — Sankha, 715 (GFE)',
                    note: 'A GMAT Focus Edition variant of the same template — proof the system spans formats.',
                    href: 'https://lohith-learn-pages.netlify.app/success-story/sankha-gfe-715',
                    thumb: '/images/case-studies/growth-pages/success-sankha-715.png',
                    alt: 'Sankha GFE 715 success-story page.',
                  },
                  {
                    title: 'M7 Admits proof-wall',
                    note: 'Hundreds of elite-school admits turned into a filterable, self-segmenting credibility argument — a normalized outcome card plus a cohort filter.',
                    href: 'https://lohith-learn-pages.netlify.app/admits-and-scholarships/m7-admits',
                    thumb: '/images/case-studies/growth-pages/m7-admits.png',
                    alt: 'M7 admits interactive proof-wall page.',
                  },
                ],
              },
              {
                number: '02',
                title: 'Product & program pages — complexity made scannable',
                body: 'Each product page takes something genuinely complex — a 1-on-1 mentorship program, a question-adaptive mock engine, a three-stage learning method — and breaks it into icon-led blocks, big-number stat panels, and head-to-head comparisons. The conversion dial moves with the price: a free mock says "try it"; a $499 program leans on scarcity and alumni proof.',
                gallery: [
                  {
                    title: 'Last Mile Push (LMP)',
                    note: 'High-ticket 1-on-1 program — a dual scholarship/purchase funnel and relative-advantage stats ("3X the success, half the time").',
                    href: 'https://lohith-learn-pages.netlify.app/products/lmp/enroll',
                    thumb: '/images/case-studies/growth-pages/lmp.png',
                    alt: 'Last Mile Push enrollment page.',
                  },
                  {
                    title: 'Sigma-X Adaptive Mocks',
                    note: 'A psychometric engine sold on insight, not score — translated into feature blocks and a comparison table against the official mock.',
                    href: 'https://lohith-learn-pages.netlify.app/products/sigma-x',
                    thumb: '/images/case-studies/growth-pages/sigma-x.png',
                    alt: 'Sigma-X adaptive mocks product page.',
                  },
                  {
                    title: 'GMAT Strategy Guidance',
                    note: 'A top-of-funnel method page — a three-stage journey with a progression graph and free tools, soft-CTA instead of a sell.',
                    href: 'https://lohith-learn-pages.netlify.app/gmat-strategy-guidance',
                    thumb: '/images/case-studies/growth-pages/strategy-guidance.png',
                    alt: 'GMAT strategy guidance methodology page.',
                  },
                ],
              },
              {
                number: '03',
                title: 'Sessions & events — one template, every state',
                body: 'The live-session pages run on a single registration layout — hero, countdown, details card, expandable content modules, host bios — content-swapped per topic. The sharpest decision is the post-registration state: the same template repurposed from acquisition to retention, swapping the register CTA for add-to-calendar and a guided pre-session checklist. Partner events (like the CAT decision-makers session) reuse the same system co-branded.',
                gallery: [
                  {
                    title: 'Weekly free sessions',
                    note: 'A reusable webinar-registration template — countdown-driven, content-swapped per topic, with a post-registration retention variant.',
                    href: 'https://lohith-learn-pages.netlify.app/free-session/gmat-strategy',
                    thumb: '/images/case-studies/growth-pages/weekly-sessions.png',
                    alt: 'Weekly free GMAT strategy session registration page.',
                  },
                  {
                    title: 'Partner event — CAT decision-makers',
                    note: 'The session system co-branded for a partner event — seats, schedule, and speaker line-up on the same layout.',
                    href: 'https://lohith-learn-pages.netlify.app/archived-pages/cat-mega-event/event-registration',
                    thumb: '/images/case-studies/growth-pages/partner-event-cat.png',
                    alt: 'CAT partner event landing page.',
                  },
                ],
              },
              {
                number: '04',
                title: 'Careers — selling the company to candidates',
                body: 'The careers pages apply the same growth thinking to a different audience: a homepage that pitches the company\'s mission and culture with the same warmth as a product page, and a job-description template that keeps every opening scannable — role, responsibilities, qualifications, and "what you\'ll get" in a consistent, accordion-style structure a candidate can read in a minute.',
                gallery: [
                  {
                    title: 'Careers homepage',
                    note: 'Mission, what the team achieved, employee spotlights, and open roles — recruiting marketing built on the product visual system.',
                    href: 'https://lohith-career-pages.netlify.app/',
                    thumb: '/images/case-studies/growth-pages/careers-home.png',
                    alt: 'e-GMAT careers homepage.',
                  },
                  {
                    title: 'Job-description template',
                    note: 'A reusable JD layout — overview, key responsibilities, qualifications, and what you\'ll get — scannable in a minute.',
                    href: 'https://lohith-career-pages.netlify.app/marketing-director',
                    thumb: '/images/case-studies/growth-pages/careers-jd.png',
                    alt: 'e-GMAT job description page template.',
                  },
                ],
              },
            ],
          },
          sidebar: {
            categories: ['Web', 'Growth / Marketing', 'Edtech'],
            facts: [
              { label: 'Role', value: 'Web / Growth Designer (sole)' },
              { label: 'Timeline', value: '2023 – 2025' },
              { label: 'Scope', value: 'Product, proof, session & careers pages' },
              { label: 'Status', value: 'Live' },
            ],
            factsVisibleCount: 3,
            projectChips: [
              { label: 'Live', active: true, dot: true },
              {
                label: 'learn.e-gmat.com',
                logo: '/images/case-studies/sat-lms/e-gmat.png',
                href: 'https://lohith-learn-pages.netlify.app/',
              },
            ],
            projectDisclaimer: 'Logos are the properties of the respective companies. Some pages are gated or run on rotating schedules, so a live link may show the current instance of a recurring page.',
          },
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
      showHeroNote: true,
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
      showHeroNote: true,
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
              // Tall product captures cropped to a tidy 16:9 pane (scroll for more).
              aspect: '16 / 9',
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
              aspect: '16 / 9',
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
              aspect: '16 / 9',
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
    // Opt-in flag for the lean/placeholder badge under the hero title; off for
    // the more-works lean case studies, on only for true coming-soon pages.
    showHeroNote: details.showHeroNote || false,
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
