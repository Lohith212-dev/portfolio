import styles from '../SparkPresenterCaseStudy.module.css';
import { buildCloserMilestones } from '../sparkData';
import { BuildCloserArrowIcon } from './BuildTimelineIcons';

export default function BuildProcessCloser() {
  return (
    <div className={styles.buildProcessCloser}>
      <div className={styles.buildProcessCloserLead}>
        <h3 className={styles.buildProcessCloserHeading}>Not just built.</h3>
        <p className={styles.buildProcessCloserText}>Iterated, tested, and hardened at scale.</p>
      </div>

      <div className={styles.buildProcessCloserCard}>
        <div className={styles.buildProcessCloserStats}>
          {buildCloserMilestones.map((item) => (
            <div key={item.value} className={styles.buildProcessCloserStatGroup}>
              <div className={styles.buildProcessCloserStat}>
                <strong>{item.value}</strong>
                <span>{item.description}</span>
              </div>
              {item.value !== buildCloserMilestones[buildCloserMilestones.length - 1].value ? (
                <span className={styles.buildProcessCloserArrow} aria-hidden="true">
                  <BuildCloserArrowIcon />
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className={styles.buildProcessCloserFoot}>
          <span className={styles.buildProcessCloserIconWrap} aria-hidden="true">
            <img src="/images/case-studies/spark/build/correct.svg" alt="" className={styles.buildProcessCloserIcon} />
          </span>
          <p>
            <strong>4 complete</strong>
            <span>iterations done for the renderer</span>
          </p>
        </div>
      </div>
    </div>
  );
}
