import styles from '../SparkPresenterCaseStudy.module.css';
import { renderInlineContent } from '../sparkHelpers';
import { painPoints } from '../sparkData';

export default function PainPointGrid() {
  return (
    <div className={styles.painPointGrid}>
      {painPoints.map((point) => (
        <article className={styles.painPointCard} key={point.title}>
          <span className={styles.painPointAvatar}>{point.initials}</span>
          <div>
            <p>{point.actor}</p>
            <h3>{point.title}</h3>
          </div>
          <span>{renderInlineContent(point.body)}</span>
        </article>
      ))}
    </div>
  );
}
