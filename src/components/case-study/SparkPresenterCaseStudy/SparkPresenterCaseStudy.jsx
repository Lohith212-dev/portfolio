import { MotifCurlyArrow } from '../../icons/icons';
import CaseStudyHero from '../CaseStudyHero';
import CaseStudyMetricStrip from '../CaseStudyMetricStrip';
import CaseStudyOutcome from '../CaseStudyOutcome';
import CaseStudySectionHeader from '../CaseStudySectionHeader';
import CaseStudyTemplate from '../CaseStudyTemplate';
import DecisionEvidenceSection from '../DecisionEvidenceSection';
import NextCaseBridge from '../NextCaseBridge';
import ProcessTrail from '../ProcessTrail';
import lmsStyles from '../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from './SparkPresenterCaseStudy.module.css';
import {
  AnimatedMetricValue,
  MetricLabel,
  Reveal,
  RichText,
  StaggeredText,
  renderInlineContent,
} from './sparkHelpers';
import { approachMachines, caseStudyLinks, decisions, metrics } from './sparkData';
import HeroVideo from './HeroVideo';
import SparkCenterGraphic from './SparkCenterGraphic';
import PainPointGrid from './PainPointGrid';
import ApproachMachine from './ApproachMachine';
import SparkDecision from './SparkDecision';
import {
  BuildPipelineComparison,
  BuildProcessCloser,
  BuildTimelineIntro,
  BuildTimelineSection,
} from './BuildProcess';
import LiveProductCard from './LiveProductCard';
import OutcomePoll from './OutcomePoll';
import OutcomeMetric from './OutcomeMetric';
import NextCaseStudyPreview from './NextCaseStudyPreview';

export default function SparkPresenterCaseStudy() {
  return (
    <CaseStudyTemplate navigationLinks={caseStudyLinks} secondaryNavLinks={caseStudyLinks}>
      <CaseStudyHero
        className={lmsStyles.heroGrid}
        eyebrow="S.P.A.R.K. Content Presenter"
        title={(
          <>
            Raw content to learning experience.
            {' '}
            <span className="inline-block -rotate-1 bg-accent-yellow px-1">Hours, not days.</span>
          </>
        )}
        punchline="No rebuilding. No review cycles. Just scale."
        summary={renderInlineContent('The system reads learning content as prose, decides how each moment should be presented, and outputs a production-ready activity — no manual authoring required.')}
        metaItems={[
          { label: 'Principal Product Architect & Frontend Developer' },
          { label: 'December 2025' },
          {
            label: 'e-GMAT',
            href: 'https://e-gmat.com/',
            logo: {
              src: '/images/case-studies/sat-lms/e-gmat.png',
              alt: 'e-GMAT logo',
              width: 889,
              height: 790,
            },
          },
        ]}
        disclaimer="Logos are properties of their respective companies."
        media={<HeroVideo />}
        contentWrapper={(content) => <Reveal>{content}</Reveal>}
      />

      <section id="tldr" className={`${lmsStyles.caseStudySection} bg-surface-white px-6`}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowGreen} mb-5`}>TL;DR</p>
            <RichText
              as="h2"
              text="I architected a scalable content processing system: <mark>a custom component grammar and an assembly pipeline</mark> that converts raw learning prose into production-ready activities."
              className="font-cabinet text-case-study-statement font-extrabold leading-tight text-ink-950"
            />

            <div className="mt-12">
              <SparkCenterGraphic />
            </div>

            <div className="mt-16 pt-4">
              <RichText
                as="h3"
                text="The shift was immediate: <mark>one file in three days becomes 100 files in two hours</mark>, output consistency was built into the system, and updates that once required full rebuilds now took minutes."
                className="font-cabinet text-case-study-statement font-extrabold leading-tight text-ink-950"
              />
              <CaseStudyMetricStrip
                metrics={metrics}
                className="mx-auto mt-14 grid max-w-5xl gap-8 text-center md:grid-cols-3"
                renderValue={(metric) => <AnimatedMetricValue metric={metric} />}
                renderLabel={(metric) => <MetricLabel metric={metric} />}
                renderDetail={(metric) => (
                  <p className="font-dm text-base leading-relaxed text-ink-700">{metric.detail}</p>
                )}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="problem" aria-labelledby="problem-heading" className={`${lmsStyles.problemSection} ${lmsStyles.caseStudySection} px-6`}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <CaseStudySectionHeader
              eyebrow="Problem"
              eyebrowClassName={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowOrange} mb-6`}
              renderHeading={() => (
                <StaggeredText
                  id="problem-heading"
                  className="font-cabinet text-5xl font-extrabold leading-tight text-ink-950 md:text-6xl"
                  segments={[
                    { text: 'Content creation scaled fast.', breakAfter: true },
                    { text: 'Content processing didn\'t.', className: styles.problemHeadingAccent },
                  ]}
                />
              )}
              copy="AI made content creation fast. Converting that content into a presentable, review-ready activity still took days — and it still depended entirely on a third-party tool that wasn’t built for this."
              copyClassName="mt-10 max-w-3xl font-dm text-body leading-relaxed text-ink-800"
            />

            <PainPointGrid />

            <div className={styles.problemBridge}>
              <p className={styles.approachCloser}>
                The bottleneck wasn&apos;t content. It was that{' '}
                <span className={styles.problemCloserHighlight}>every presentation decision was made by hand.</span>{' '}
                That needed to become a system.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solution" aria-labelledby="approach-heading" className={`${styles.approachSection} ${lmsStyles.caseStudySection} px-6`}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className={lmsStyles.approachThinkingRow}>
              <p className={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowGreen}`}>My approach</p>
              <div className={lmsStyles.approachCopyColumn}>
                <h2 id="approach-heading" className={lmsStyles.approachHeading}>How I approached the problem</h2>
                <p className={lmsStyles.approachQuestion}>
                  Once the problem was clear, I asked:
                  <br />
                  if every presentation decision is already being made by hand,
                  <br />
                  <strong className={lmsStyles.approachQuestionHighlight}>what would it take to make those decisions automatic?</strong>
                </p>
              </div>
            </div>
            <p className="mt-10 max-w-3xl font-dm text-body leading-relaxed text-ink-800">
              We mapped the manual workflow step by step. For each step, we wrote three things: the intent behind it, the success criteria, and the thinking that drove it. Then we turned those three into system intelligence.
            </p>
            <div className={styles.approachMachineGrid}>
              {approachMachines.map((machine) => (
                <ApproachMachine key={machine.title} machine={machine} />
              ))}
            </div>
            <div className={lmsStyles.approachConclusionWrap}>
              <div className={`${lmsStyles.approachConclusionArrow} ${lmsStyles.approachConclusionArrowTop}`} aria-hidden="true">
                <MotifCurlyArrow />
              </div>
              <p className={lmsStyles.wordplayStatement}>
                <span>We didn&apos;t need </span>
                <span className={`${lmsStyles.wordplayRejected} ${styles.approachRejectedStatic}`}>another design tool.</span>
                <span> We needed an assembly line with the intelligence of an SME, the judgment of a designer, and the thinking of an engineer.</span>
              </p>
              <div className={`${lmsStyles.approachConclusionArrow} ${lmsStyles.approachConclusionArrowBottom}`} aria-hidden="true">
                <MotifCurlyArrow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DecisionEvidenceSection
        id="decisions"
        labelledBy="decisions-heading"
        className={`${lmsStyles.decisionSection} ${lmsStyles.caseStudySection} px-6`}
        innerClassName="mx-auto max-w-5xl"
        header={(
          <Reveal>
            <CaseStudySectionHeader
              eyebrow="With the assembly-line lens on,"
              eyebrowClassName={`${lmsStyles.decisionKicker} ${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowGreen} mb-5`}
              renderHeading={() => (
                <StaggeredText
                  id="decisions-heading"
                  className={`${lmsStyles.decisionHeading} max-w-4xl font-cabinet text-4xl font-extrabold leading-tight md:text-6xl`}
                  segments={[
                    { text: 'I made 4 decisions', breakAfter: true },
                    { text: 'that turned manual conversion into a scalable product system.' },
                  ]}
                />
              )}
            />
          </Reveal>
        )}
        decisions={decisions}
        renderDecision={(decision) => (
          <Reveal key={decision.number}>
            <SparkDecision decision={decision} />
          </Reveal>
        )}
      />

      <ProcessTrail id="build" labelledBy="build-heading" className={styles.buildProcessSection}>
        <div className={styles.buildProcessShell}>
          <BuildTimelineIntro />
          <BuildTimelineSection />

          <div className="mx-auto max-w-5xl">
            <Reveal>
              <BuildPipelineComparison />
            </Reveal>

            <Reveal>
              <BuildProcessCloser />
            </Reveal>
          </div>
        </div>
      </ProcessTrail>

      <section className={`${styles.shippedOutputSection} ${lmsStyles.caseStudySection} px-6`}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <CaseStudySectionHeader
              eyebrow="Shipped Output"
              eyebrowClassName={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowOrange} mb-6`}
              renderHeading={() => (
                <StaggeredText
                  className="font-cabinet text-5xl font-extrabold leading-tight text-ink-950 md:text-6xl"
                  segments={[
                    { text: 'Student-facing', breakAfter: true },
                    { text: 'experience', className: 'box-decoration-clone bg-surface-white px-1 text-ink-950' },
                  ]}
                />
              )}
              copy="S.P.A.R.K.'s backend and translation logic stay invisible to the learner. What students experience is the final rendered activity: a cleaner learning flow that feels like part of the same e-GMAT ecosystem, not a third-party activity stitched onto the side."
              copyClassName="mt-10 max-w-3xl font-dm text-body leading-relaxed text-ink-800"
            />
            <LiveProductCard />
          </Reveal>
        </div>
      </section>

      <CaseStudyOutcome
        id="outcome"
        className={lmsStyles.finalOutcomeSection}
        innerClassName="mx-auto max-w-5xl"
        reveal={(content) => <Reveal>{content}</Reveal>}
      >
        <div className={lmsStyles.finalOutcomeStack}>
          <div className={lmsStyles.outcomeEditorial}>
            <div className={lmsStyles.outcomePanelCopy}>
              <p className={lmsStyles.outcomeEyebrow}>Outcome</p>
              <h2>Scalability at pace without manual cost.</h2>
              <p>
                The shift was immediate:{' '}
                <strong className="font-extrabold text-ink-950">one file in three days becomes 100 files in two hours</strong>
                , output consistency was built into the system, and updates that once required full rebuilds now took minutes.
              </p>
            </div>

            <div className={lmsStyles.outcomeMetricsGrid}>
              {metrics.map((metric) => (
                <OutcomeMetric key={metric.label} metric={metric} />
              ))}
            </div>
          </div>

          <OutcomePoll />

          <NextCaseBridge
            styles={lmsStyles}
            prelude="That is how I built this one."
            heading="Next, a public-facing product surface with a different kind of complexity."
            pointer={{
              src: '/images/case-studies/sat-lms/next-case-pointer-clean.webp',
              width: 707,
              height: 1335,
              sizes: '(min-width: 1024px) 34vw, 70vw',
              unoptimized: true,
            }}
            preview={<NextCaseStudyPreview />}
          />
        </div>
      </CaseStudyOutcome>
    </CaseStudyTemplate>
  );
}
