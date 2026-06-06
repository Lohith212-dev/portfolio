import { InfoIcon } from '../../icons/icons';
import styles from './InfoNote.module.css';

/* The established info-box treatment (yellow-tinted pill with an info icon),
   extracted from ShowcaseHero when CompareCard became its second consumer. */
export default function InfoNote({ children }) {
  return (
    <p className={styles.infoNote}>
      <span className={styles.infoNoteIcon} aria-hidden="true">
        <InfoIcon />
      </span>
      <span>{children}</span>
    </p>
  );
}
