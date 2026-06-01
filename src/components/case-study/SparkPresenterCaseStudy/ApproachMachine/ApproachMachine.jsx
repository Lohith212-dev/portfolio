import styles from '../SparkPresenterCaseStudy.module.css';

export default function ApproachMachine({ machine }) {
  return (
    <article className={styles.approachMachine}>
      <div>
        <p>{machine.number}</p>
        <h3>{machine.title}</h3>
        <strong>{machine.question}</strong>
      </div>
      <p>{machine.body}</p>
    </article>
  );
}
