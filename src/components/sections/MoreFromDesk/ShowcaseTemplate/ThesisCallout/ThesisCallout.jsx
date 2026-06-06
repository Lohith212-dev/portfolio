import styles from './ThesisCallout.module.css';

export default function ThesisCallout({ text }) {
  return (
    <div className={styles.thesisCallout}>
      <p>{text}</p>
    </div>
  );
}
