import Image from 'next/image';
import { ExternalArrowIcon, RedditIcon } from '../../icons/icons';
import CaseStudyHero from '../CaseStudyHero';
import CaseStudyMetricStrip from '../CaseStudyMetricStrip';
import CaseStudyOutcome from '../CaseStudyOutcome';
import CaseStudySectionHeader from '../CaseStudySectionHeader';
import CaseStudyTemplate from '../CaseStudyTemplate';
import DecisionEvidenceSection from '../DecisionEvidenceSection';
import NextCaseBridge from '../NextCaseBridge';
import RotatingCardStack from '../RotatingCardStack';
import ShippedFlowSection from '../ShippedFlowSection';
import { AnimatedMetricValue, MetricLabel, Reveal, StaggeredText } from './satLmsHelpers';
import {
  caseStudyLinks,
  metrics,
  redditCards,
  stakeholderQuotes,
  tutorDecisions,
} from './satLmsData';
import ApproachInteraction from './ApproachInteraction';
import DesignForgeProcessSection from './DesignForgeProcessSection';
import HeroVideo from './HeroVideo';
import NextCaseStudyPreview from './NextCaseStudyPreview';
import OutcomeMetric from './OutcomeMetric';
import OutcomePoll from './OutcomePoll';
import StakeholderQuoteCard from './StakeholderQuoteCard';
import TutorDecision, { TutorDecisionBody } from './TutorDecision';
import styles from './SatLmsCaseStudy.module.css';

export default function SatLmsCaseStudy() {
  return (
    <CaseStudyTemplate navigationLinks={caseStudyLinks} secondaryNavLinks={caseStudyLinks}>
      <CaseStudyHero
        className={styles.heroGrid}
        eyebrow="SAT LMS"
        title={(
          <>
            The LMS that personalizes your learning so that you <span className="inline-block -rotate-1 bg-accent-yellow px-1">learn only what you need to.</span>
          </>
        )}
        punchline="No browsing. No guessing. Just learning."
        summary="The LMS diagnoses each student's strengths and gaps, curates only the concepts they need, and turns the course into a clear action plan — not another library to browse."
        metaItems={[
          { label: 'Principal Product Designer & Frontend Developer' },
          { label: 'Dec 2025 - Mar 2026' },
          {
            label: 'e-gmat.com',
            href: 'https://e-gmat.com/',
            logo: {
              src: '/images/case-studies/sat-lms/e-gmat.png',
              alt: 'e-gmat.com logo',
              width: 889,
              height: 790,
            },
          },
        ]}
        disclaimer="Logos are properties of their respective companies."
        media={<HeroVideo />}
        contentWrapper={(content) => <Reveal>{content}</Reveal>}
      />

        <section id="tldr" className={`${styles.caseStudySection} bg-surface-white px-6`}>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className={`${styles.caseStudyBrow} ${styles.caseStudyBrowGreen} mb-5`}>TL;DR</p>
              <StaggeredText
                className="font-cabinet text-case-study-statement font-extrabold leading-tight text-ink-950"
                segments={[
                  { text: 'Students had content.', className: 'box-decoration-clone bg-accent-green px-1 text-ink-950' },
                  { text: 'What they lacked was a path built for them. I redesigned the LMS to prescribe the next step at every moment — making good learning behavior the default, not a willpower exercise.' },
                ]}
              />

              <div className="mx-auto mt-12 w-full lg:max-w-5xl">
                <Image
                  src="/images/case-studies/sat-lms/lms-central-graphic.svg"
                  alt="Learning management system transforms confused SAT learners into clear and confident students"
                  width={1845}
                  height={919}
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-16 pt-4">
                <p className={`${styles.caseStudyBrow} ${styles.caseStudyBrowGreen} mb-8`}>My Impact</p>
                <h3 className="font-cabinet text-case-study-statement font-extrabold leading-tight text-ink-950">
                  After my redesign, the LMS showed a clear shift in learning behavior: faster starts, deeper progression, and significantly higher continuation rates.
                </h3>
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

        <section id="problem" aria-labelledby="problem-heading" className={`${styles.problemSection} ${styles.caseStudySection} px-6`}>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                <CaseStudySectionHeader
                  eyebrow="The Problem"
                  eyebrowClassName={`${styles.caseStudyBrow} ${styles.caseStudyBrowOrange} mb-6`}
                  renderHeading={() => (
                    <StaggeredText
                      id="problem-heading"
                      className="font-cabinet text-5xl font-extrabold leading-tight text-ink-950 md:text-6xl"
                      segments={[
                        { text: 'SAT prep had enough content.', breakAfter: true },
                        { text: 'What students lacked was a path built for them.', className: 'box-decoration-clone bg-surface-white px-1 text-ink-950' },
                      ]}
                    />
                  )}
                  copy="Before designing the LMS, I looked at student conversations outside the product. The problem was not missing content. It was missing direction: students had practice and explanations, but still did not know which gap to fix next."
                  copyClassName="mt-10 max-w-xl font-dm text-body leading-relaxed text-ink-800"
                />

                <div>
                  <p className="mb-6 text-center font-dm text-sm font-normal italic leading-relaxed text-ink-500">
                    Student signals · hover on a card to pause
                  </p>
                  <RotatingCardStack
                    items={redditCards}
                    className={styles.problemEvidenceStack}
                    getPositionClassName={(position) => styles[`problemEvidenceCard${position}`]}
                    renderItem={({ item: card, tabIndex, positionClassName }) => (
                        <a
                          key={card.title}
                          href={card.href}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={tabIndex}
                          aria-label={`${card.subreddit} student signal: ${card.title}`}
                          className={`${styles.problemEvidenceCard} ${positionClassName}`}
                        >
                          <div className="mb-6 flex items-center gap-3">
                            <RedditIcon className="h-7 w-7 shrink-0" />
                            <span className="font-dm text-sm font-extrabold text-ink-800">{card.subreddit}</span>
                            <span className="rounded-full bg-surface-light px-3 py-1 font-dm text-xs font-bold text-ink-500">Student voice</span>
                            <ExternalArrowIcon className="ml-auto h-5 w-5 shrink-0 text-ink-950" />
                          </div>
                          <h3 className="font-cabinet text-3xl font-extrabold leading-tight text-ink-950">{card.title}</h3>
                          <p className="mt-5 font-dm text-lg font-bold italic leading-relaxed text-ink-700">
                            <span className="mr-2 text-ink-300">“</span>
                            {card.quote}
                            <span className="ml-2 text-ink-300">”</span>
                          </p>
                          <div className="my-6 border-t border-ink-100"></div>
                          <p className="font-dm text-base leading-relaxed text-ink-700">{card.interpretation}</p>
                        </a>
                    )}
                  />
                  <p className="mt-6 text-center font-dm text-xs italic leading-relaxed text-ink-500">
                    Logos are properties of their respective companies.
                  </p>
                </div>
              </div>

              <div className="mt-20 border-t border-ink-100 pt-10 md:mt-24 md:pt-12">
                <p className="font-cabinet text-3xl font-extrabold leading-tight text-ink-950 md:text-case-study-statement">
                  Students didn’t need another content dump. They needed a system that <span className="box-decoration-clone bg-accent-yellow px-1">diagnoses</span>, <span className="box-decoration-clone bg-accent-yellow px-1">prioritizes</span>, and <span className="box-decoration-clone bg-accent-yellow px-1">prescribes</span> what to learn - an intelligent tutor!
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="solution" aria-labelledby="approach-heading" className={`${styles.approachSection} ${styles.caseStudySection} px-6`}>
          <ApproachInteraction />
        </section>

        <DecisionEvidenceSection
          id="decisions"
          labelledBy="decisions-heading"
          className={`${styles.decisionSection} ${styles.caseStudySection} px-6`}
          innerClassName="mx-auto max-w-5xl"
          header={(
            <>
              <Reveal>
                <CaseStudySectionHeader
                  eyebrow="Key design decisions"
                  eyebrowClassName={`${styles.decisionKicker} ${styles.caseStudyBrow} ${styles.caseStudyBrowGreen} mb-5`}
                  renderHeading={() => (
                    <StaggeredText
                      id="decisions-heading"
                      className={`${styles.decisionHeading} max-w-4xl font-cabinet text-4xl font-extrabold leading-tight md:text-6xl`}
                      segments={[
                        { text: 'With the tutor lens on, I made', breakAfter: true },
                        { text: '4 pivotal decisions', className: styles.decisionHighlight },
                        { text: 'that made the LMS behave like a private tutor.' },
                      ]}
                    />
                  )}
                />
              </Reveal>

              <div className={styles.tutorDecisionsMobile} aria-hidden={false}>
                {tutorDecisions.map((decision) => (
                  <div key={decision.number} className={styles.tutorDecisionInline}>
                    <p className={styles.tutorDecisionInlineNumber}>
                      <span className={styles.tutorDecisionInlineKicker}>Decision</span>
                      {decision.number}
                    </p>
                    <TutorDecisionBody decision={decision} includeNumber={false} />
                  </div>
                ))}
              </div>
            </>
          )}
          decisions={tutorDecisions}
          renderDecision={(decision) => (
            <div key={decision.number} className={styles.tutorDecisionDesktopOnly}>
              <Reveal>
                <TutorDecision decision={decision} />
              </Reveal>
            </div>
          )}
          summary={(
            <Reveal>
              <div className={styles.decisionSummary}>
                <p className={`${styles.decisionSummaryText} mx-auto max-w-4xl text-center font-cabinet text-3xl font-extrabold leading-tight md:text-case-study-statement`}>
                  Together, these decisions made <span className={styles.decisionHighlight}>good learning behavior the default</span> — not something left to willpower.
                </p>
              </div>
            </Reveal>
          )}
        />

        <ShippedFlowSection />

        <DesignForgeProcessSection />

        <CaseStudyOutcome
          id="outcome"
          className={styles.finalOutcomeSection}
          innerClassName="mx-auto max-w-5xl"
          reveal={(content) => <Reveal>{content}</Reveal>}
        >
              <div className={styles.finalOutcomeStack}>
                <div className={styles.outcomeEditorial}>
                  <div className={styles.outcomePanelCopy}>
                    <p className={styles.outcomeEyebrow}>Outcome</p>
                    <h2>The prescribed path changed student movement.</h2>
                    <p>Students started faster, continued more often, and completed more of what the system recommended.</p>
                  </div>

                  <div className={styles.outcomeMetricsGrid}>
                    {metrics.map((metric) => (
                      <OutcomeMetric key={metric.label} metric={metric} />
                    ))}
                  </div>

                </div>

                <div className={styles.stakeholderSection}>
                  <div className={styles.stakeholderQuoteGrid} aria-label="Stakeholder validation">
                    {stakeholderQuotes.map((quote) => (
                      <StakeholderQuoteCard key={quote.name} quote={quote} />
                    ))}
                  </div>
                </div>

                <OutcomePoll />

                <NextCaseBridge
                  styles={styles}
                  prelude="That is how I built this one."
                  heading="Next, a different kind of complexity. Same clarity-first build system."
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
