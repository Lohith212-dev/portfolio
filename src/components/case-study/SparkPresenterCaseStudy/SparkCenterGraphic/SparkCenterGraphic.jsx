import styles from '../SparkPresenterCaseStudy.module.css';

export default function SparkCenterGraphic() {
  return (
    <div className={styles.sparkCenterGraphic} aria-label="S.P.A.R.K. combines a custom component grammar and an assembly pipeline to convert raw learning prose into production-ready activities">
      <div className={styles.sparkInputColumn}>
        {['Raw learning prose', 'Custom component grammar', 'Assembly pipeline'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className={styles.sparkCore}>
        <span>Center system</span>
        <strong>S.P.A.R.K. Content Presenter</strong>
        <p>Converts raw learning prose into production-ready activities.</p>
      </div>
      <div className={styles.sparkOutputColumn}>
        {['Production-ready activities', 'Output consistency', 'Updates in minutes'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p className={styles.sparkGraphicCaption}>A custom component grammar and an assembly pipeline turned raw learning prose into production-ready activities.</p>
    </div>
  );
}
