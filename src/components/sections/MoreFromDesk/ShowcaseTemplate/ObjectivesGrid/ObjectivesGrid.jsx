import styles from './ObjectivesGrid.module.css';

export default function ObjectivesGrid({ items }) {
  return (
    <div className={styles.objectivesGrid}>
      {items.map((item) => (
        <article key={item.title} className={styles.objectiveCard}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
