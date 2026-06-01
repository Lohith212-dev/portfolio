import { InfoIcon } from '../../../icons/icons';
import styles from './ShowcaseHero.module.css';

export default function ShowcaseHero({ title, note, summary }) {
  return (
    <div className={styles.titleBlock}>
      <h1>{title}</h1>
      <p className={styles.heroNote}>
        <span className={styles.heroNoteIcon} aria-hidden="true">
          <InfoIcon />
        </span>
        <span>{note}</span>
      </p>
      <p className={styles.heroSummary}>{summary}</p>
    </div>
  );
}
