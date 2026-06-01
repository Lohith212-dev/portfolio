import { ArrowForwardLineIcon } from '../../../icons/icons';
import StickyPhaseNumbers from '../../../shared/StickyPhaseNumbers';
import ProcessTrail from '../../ProcessTrail';
import { Reveal, useScrollReveal } from '../satLmsHelpers';
import { designForgeOutcomes, designForgeSteps, whyThisWorkedItems } from '../satLmsData';
import ArtifactPreview from './artifacts';
import styles from '../SatLmsCaseStudy.module.css';

function ProcessSentence({ segments }) {
  return (
    <>
      {segments.map((segment, index) => (
        segment.strong ? (
          <strong key={`${segment.text}-${index}`}>{segment.text}</strong>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        )
      ))}
    </>
  );
}

function ProcessStep({ step, hideNumber = false }) {
  const ref = useScrollReveal();

  return (
    <article ref={ref} className={`${styles.processStep} ${styles.processStepReveal} ${hideNumber ? styles.processStepNoNumber : ''}`}>
      <div className={styles.processStepCopy}>
        {hideNumber ? null : <p className={styles.processStepNumber}>{step.number}</p>}
        <p className={styles.processArtifactLabel}>{step.artifact}</p>
        <h4>{step.title}</h4>
        <p><ProcessSentence segments={step.body} /></p>
        <p className={styles.processPrevented}>
          <strong>What this prevented:</strong> {step.prevented}
        </p>
      </div>

      <ArtifactPreview type={step.previewType} />
    </article>
  );
}

function WhyThisWorkedSection() {
  return (
    <section className={styles.whyWorkedBlock} aria-labelledby="why-worked-heading">
      <div className={styles.whyWorkedLeft}>
        <p className={styles.whyWorkedEyebrow}>
          <span aria-hidden="true" />
          Why this worked?
        </p>
        <h3 id="why-worked-heading">
          This build moved fast because AI was never solving the whole product at once.
        </h3>
      </div>

      <div className={styles.whyWorkedRight}>
        <ul className={styles.whyWorkedList}>
          {whyThisWorkedItems.map(({ Icon, ...item }) => (
            <li key={item.id}>
              <span className={styles.whyWorkedIconBadge} aria-hidden="true">
                <Icon />
              </span>
              <p>
                <strong>{item.label}</strong> {item.rest}
              </p>
            </li>
          ))}
        </ul>

        <div className={styles.whyWorkedCloser}>
          <span className={styles.whyWorkedArrowBadge} aria-hidden="true">
            <ArrowForwardLineIcon />
          </span>
          <strong>Each step narrowed the next one.</strong>
        </div>
      </div>
    </section>
  );
}

export default function DesignForgeProcessSection() {
  return (
    <ProcessTrail id="process" labelledBy="designforge-process-heading" className={styles.designForgeProcessSection}>
      <div className={`${styles.designForgeProcessContainer} mx-auto max-w-5xl`}>
        <Reveal>
          <div className={styles.processIntro}>
            <p className={styles.processEyebrow}>Process: the engine behind the speed</p>
            <h2 id="designforge-process-heading" className={styles.processHeading}>
              Built with <span className={styles.processHighlight}>DesignForge</span> in four weeks
            </h2>
            <p className={styles.processDescriptor}>
              DesignForge — my 6-phase AI + human methodology for shipping design and code together.
            </p>
            <p className={styles.processSubline}>
              Not by brute force. Experience first, interface next, production last.
            </p>
          </div>

          <div className={styles.processStoryGrid}>
            <div className={styles.processStoryCopy}>
              <p>
                <strong>I had already seen the trap:</strong> when product logic, UX flow, UI polish, code, data, and production constraints are solved together, the work gets noisy.
              </p>
              <p>
                So I split the build into layers: <strong>experience first, interface next, production last.</strong>
              </p>
            </div>

            <aside className={styles.processLayerPanel} aria-label="DesignForge separated layers">
              <p className={styles.processLayerKicker}>Separated layers</p>
              <div className={styles.processLayerRow}>
                <span>Layer 01</span>
                <strong>Experience first</strong>
              </div>
              <div className={styles.processLayerRow}>
                <span>Layer 02</span>
                <strong>Interface next</strong>
              </div>
              <div className={styles.processLayerRow}>
                <span>Layer 03</span>
                <strong>Production last</strong>
              </div>
            </aside>
          </div>

          <div className={styles.processTrailIntro}>
            <p className={styles.processTrailKicker}>Each step produced evidence.</p>
            <h3>The product did not jump from idea to UI.</h3>
            <p className={styles.processTrailSupport}>
              It moved <strong>one node at a time.</strong>
            </p>
          </div>

          <div className={`${styles.processTrail} ${styles.processTrailDesktopOnly}`} aria-label="DesignForge process artifact trail">
            {designForgeSteps.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>

          <div className={styles.processTrailMobile} aria-label="DesignForge process artifact trail">
            <StickyPhaseNumbers
              theme="light"
              topOffset="8.75rem"
              compact
              phases={designForgeSteps.map((step) => ({
                number: step.number,
                content: <ProcessStep step={step} hideNumber />,
              }))}
            />
          </div>

          <div className={styles.processOutcomeBlock}>
            <h3>The result?</h3>
            <div className={styles.processOutcomeGrid}>
              {designForgeOutcomes.map(({ Icon, ...outcome }) => (
                <article className={styles.processOutcomeCard} key={outcome.title}>
                  <span className={styles.processOutcomeIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <h4>{outcome.title}</h4>
                  <p>{outcome.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <WhyThisWorkedSection />
        </Reveal>
      </div>
    </ProcessTrail>
  );
}
