# Claude Code Kickoff — Portfolio Code Repo

Self-contained working contract for sessions that only have this code
folder. The full docs live outside this repo (`03-portfolio/00-docs/` in
the parent project); when they are not available, this file is the
source of truth.

Owner: Lohith Savala — product designer, no web-dev background. Explain
technical terms in plain English. Concise replies, no emojis, no filler.

## Working rules (non-negotiable)

1. **Propose before coding.** Describe the approach and get Lohith's
   approval before writing code. Two-stage flow always: report what you
   found / plan → approval → execute.
2. **Token policy.** Type and color come from the design tokens in the
   `@theme` block of `src/styles/globals.css`. Reuse existing steps
   (`--text-h1…h4`, `--text-body`, `--text-small`, `--text-caption`,
   `--text-case-study-statement`). NEVER create a new token without
   explicit approval — Lohith has rejected this before. One-off
   implementation values stay local to the component's CSS module with
   a comment.
3. **Type responsiveness lives in the tokens** (they are `clamp()`
   expressions). Never put `font-size` inside a `@media` block; base
   `font-size` must use a `--text-*` token. Documented decorative
   exceptions exist (quote glyphs, handwritten annotations,
   geometry-bound micro-labels) — keep them rare and commented.
4. **Component conventions.** Folder-per-component, PascalCase:
   `Component.jsx` + co-located `Component.module.css` + `index.js`
   re-export. A component used by 2+ consumers moves to
   `src/components/shared/`. Case-study building blocks live in
   `src/components/case-study/`. Data/util/icon modules stay flat
   (`moreWorksData.js`, `icons.jsx`, `ThemeContext.jsx`).
5. **Internal links must use `next/link`**, never plain `<a>` — the
   dynamic back-button system records the departure page on client-side
   navigations only (see `src/components/shared/backReturn.js`); a plain
   `<a>` full-reloads and breaks it.
6. **Icons** live in `src/components/icons/icons.jsx` — stroke
   `currentColor`, width 1.8, viewBox 24. Animated nav/stat icons follow
   the forwardRef + `startAnimation`/`stopAnimation` pattern already in
   that file.
7. **Verification.** `npm run build` must pass before any commit
   (currently 27 static pages). Check layouts at 375 / 768 / 1280.
   Breakpoints in use are max-width `39.999rem` (phone), `47.999rem`,
   and `63.999rem` (tablet); desktop is the base.
8. **Git.** Do not commit or deploy unless explicitly asked. Deploy =
   push `origin` (Lohith212-dev/portfolio), then:
   `gh auth switch --user nerdypixelstudios; git push nerdy main;`
   `gh auth switch --user Lohith212-dev; gh auth setup-git`
   (a bare push to `nerdy` 403s). The nerdy push triggers the Vercel
   deploy to vigilante-designer.nerdypixelstudios.ca.

## Stack

Next.js 16 (Pages Router, Turbopack). JSX only — no TypeScript.
Tailwind v4 + CSS Modules. Fonts: Cabinet Grotesk (display), DM Sans
(body), Caveat (handwritten accents).

## Codebase map

- `src/pages/index.js` — homepage (Hero → FeaturedProjects →
  DesignForge → MoreFromDesk → Skills → Testimonials → Footer).
- `src/pages/case-studies/*.js` — thin route wrappers around components
  in `src/components/case-study/`. Full case studies so far:
  `SatLmsCaseStudy` and `SparkPresenterCaseStudy` — each is an
  assembler (~290 lines) + a data file (`satLmsData.js` /
  `sparkData.js`) + helpers + grouped section subfolders.
- **`SatLmsCaseStudy` is the canonical full-case-study reference.**
  Study its assembler and section structure before building a new one.
- Reusable case-study blocks (already extracted):
  `CaseStudyTemplate` → `CaseStudyPageShell` (Navigation with dynamic
  back + `CaseStudySecondaryNav` bottom pill bar on tablet/mobile +
  Footer `caseStudy` variant + `BackToTopPill`), `CaseStudyHero`,
  `CaseStudySectionHeader`, `CaseStudyVideoFrame`/`BrowserChrome`,
  `CaseStudyMetricStrip`, `RotatingCardStack`, `VideoEditorialStack`,
  `DecisionEvidenceSection`, `ProcessTrail`, `CaseStudyOutcome`,
  `NextCaseBridge`, `ControlledVideo`.
- Shared blocks: `StakeholderQuoteCard`, `TestimonialCard`, `InfoNote`,
  `Tooltip`, `Navigation`, `Footer` (home / caseStudy / lean variants),
  `BackToTopPill`, `backReturn.js`.
- `src/pages/more-works/[slug].jsx` — the lighter "display wrapper"
  pages, rendered by `src/components/sections/MoreFromDesk/
  ShowcaseTemplate/` from entries in `moreWorksData.js`. These are NOT
  full case studies — they are holding pages.
- Static assets: `public/images/...`, `public/videos/...` organized by
  page.

## Current task frame: building the remaining full case studies

First up: **Personalized Study Planner (PSP)**.

- PSP currently exists only as a display wrapper:
  `/more-works/personalized-study-planner`, data entry near the top of
  `moreWorksData.js`, with screen assets under
  `public/images/more-works/personalized-study-planner/`.
- The new page should follow the SAT LMS / SPARK pattern: route at
  `src/pages/case-studies/<slug>.js` as a thin wrapper, component
  folder `src/components/case-study/<Name>CaseStudy/` with an
  assembler + data file + section subfolders, wrapped in
  `CaseStudyTemplate` (gives nav, bottom section nav, footer, back
  button for free).
- Lohith supplies the finalized content (his content iteration is
  done) — ask for it before proposing the section architecture. Map
  his content to existing reusable blocks first; only build new section
  components where no existing block fits.
- When the case study ships, decide with Lohith what happens to the
  PSP display wrapper and its lane card link in `moreWorksData.js`
  (point the card at the new case-study route).

## Before writing any code, read

1. `src/styles/globals.css` (the `@theme` token block)
2. `src/components/case-study/SatLmsCaseStudy/SatLmsCaseStudy.jsx`
3. `src/components/case-study/CaseStudyTemplate/` + `CaseStudyPageShell/`
4. The PSP entry in
   `src/components/sections/MoreFromDesk/moreWorksData.js`
5. The content document Lohith shares for the case study being built
