import CaseStudyVideoFrame from '../../CaseStudyVideoFrame';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from '../SparkPresenterCaseStudy.module.css';

export default function HeroVideo() {
  return (
    <CaseStudyVideoFrame
      frameClassName={`${lmsStyles.heroImage} ${styles.heroVideoFrame} shadow-2xl`}
      mediaClassName={styles.heroVideoMedia}
      videoClassName="block h-auto w-full"
      ariaLabel="S.P.A.R.K. Content Presenter product demo placeholder"
      autoPlay={false}
      loop
      muted
      playsInline
      sources={[]}
    />
  );
}
