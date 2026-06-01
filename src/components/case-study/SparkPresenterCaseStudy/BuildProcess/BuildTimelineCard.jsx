import styles from '../SparkPresenterCaseStudy.module.css';
import { BuildTimelineStepIcon } from './BuildTimelineIcons';

export default function BuildTimelineCard({ step, isActive = false }) {
  return (
    <article className={`${styles.buildTimelineCard} ${isActive ? styles.buildTimelineCardActive : ''}`}>
      {step.stat ? <span className={styles.buildTimelineCardRibbon}>{step.stat}</span> : null}

      <div className={styles.buildTimelineCardBody}>
        <span className={`${styles.buildTimelineCardIcon} ${styles[`buildTimelineCardIcon${step.iconTone}`]}`}>
          <BuildTimelineStepIcon icon={step.icon} />
        </span>
        <h3 className={styles.buildTimelineCardTitle}>{step.title}</h3>
        <p className={styles.buildTimelineCardDescription}>{step.description}</p>
      </div>
    </article>
  );
}
