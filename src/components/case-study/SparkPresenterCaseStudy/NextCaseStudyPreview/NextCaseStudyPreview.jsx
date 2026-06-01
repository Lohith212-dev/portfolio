import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from '../SparkPresenterCaseStudy.module.css';

export default function NextCaseStudyPreview() {
  const handlePointerMove = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--next-cursor-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--next-cursor-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <a className={lmsStyles.nextCasePreview} href="/#featured-projects" onMouseMove={handlePointerMove}>
      <span className={lmsStyles.nextCaseMediaFrame}>
        <span className={lmsStyles.nextCaseRibbon} aria-hidden="true">
          Trust / SEO / conversion
        </span>
        <span className={styles.websitePreviewSurface} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
      </span>
      <span className={lmsStyles.nextCaseCopy}>
        <span className={lmsStyles.nextCaseTitle}>e-GMAT Website: How I rebuilt the website to make product value easier to trust</span>
        <span className={lmsStyles.nextCaseSummary}>
          S.P.A.R.K. solved internal content scale. The website revamp dealt with a public-facing surface: clarity, trust, SEO, performance, and conversion behavior.
        </span>
      </span>
      <span className={lmsStyles.nextCaseHoverCue} aria-hidden="true">
        View in detail
      </span>
    </a>
  );
}
