import InfoNote from '../../../shared/InfoNote';
import styles from './ShowcaseHero.module.css';

// Titles read as "Name — descriptor". Break after the em dash so the
// descriptor drops to its own line and the headline reads cleanly.
function renderTitle(title) {
  const dashIndex = title.indexOf('—');
  if (dashIndex === -1) return title;
  const lead = title.slice(0, dashIndex + 1);
  const rest = title.slice(dashIndex + 1).trimStart();
  return (
    <>
      {lead}
      <br />
      {rest}
    </>
  );
}

export default function ShowcaseHero({ title, note, summary }) {
  return (
    <div className={styles.titleBlock}>
      <h1>{renderTitle(title)}</h1>
      <InfoNote>{note}</InfoNote>
      <p className={styles.heroSummary}>{summary}</p>
    </div>
  );
}
