import InfoNote from '../../../shared/InfoNote';
import styles from './ShowcaseHero.module.css';

export default function ShowcaseHero({ title, note, summary }) {
  return (
    <div className={styles.titleBlock}>
      <h1>{title}</h1>
      <InfoNote>{note}</InfoNote>
      <p className={styles.heroSummary}>{summary}</p>
    </div>
  );
}
