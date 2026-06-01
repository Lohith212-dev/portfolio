import { ExternalArrowIcon } from '../../../icons/icons';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from '../SparkPresenterCaseStudy.module.css';
import { liveActivityUrl } from '../sparkData';

export default function LiveProductCard() {
  const disabled = !liveActivityUrl;

  return (
    <article className={styles.liveProductCard}>
      <div className={styles.liveActivityPreview} aria-hidden="true">
        <div className={styles.livePreviewRail}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.livePreviewMain}>
          <span className={styles.livePreviewBadge}>Live product</span>
          <strong>Fraction Fluency</strong>
          <span className={styles.livePreviewLine} />
          <span className={styles.livePreviewLineShort} />
          <div className={styles.livePreviewCards}>
            <span>Example</span>
            <span>Practice</span>
            <span>Result guide</span>
          </div>
        </div>
      </div>
      <div className={styles.liveProductCopy}>
        <p className={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowGreen}`}>Shipped Output</p>
        <h3>Try the live learning experience</h3>
        <p>Click through a few S.P.A.R.K.-rendered learning activities to see how structured learning content becomes a cohesive product experience.</p>
        <p className={styles.liveProductNote}>The converter is internal; this is the rendered student-facing output.</p>
        {disabled ? (
          <button className={styles.liveProductDisabled} type="button" disabled>Add live URL</button>
        ) : (
          <a className={styles.liveProductLink} href={liveActivityUrl} target="_blank" rel="noreferrer">
            Open live activity <ExternalArrowIcon className={styles.liveProductIcon} />
          </a>
        )}
      </div>
    </article>
  );
}
