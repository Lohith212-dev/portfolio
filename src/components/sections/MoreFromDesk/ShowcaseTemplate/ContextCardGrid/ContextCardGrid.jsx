import styles from './ContextCardGrid.module.css';

export default function ContextCardGrid({ cards }) {
  return (
    <div className={styles.contextGrid}>
      {cards.map((card) => (
        <article key={card.title} className={styles.contextCard}>
          <span className={styles.contextEyebrow}>{card.eyebrow}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  );
}
