import styles from './SectionHeading.module.css';

export default function SectionHeading({ number, title }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionNumber}>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}
