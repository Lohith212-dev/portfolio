import DecisionVisual from './DecisionVisual';
import styles from '../SatLmsCaseStudy.module.css';

function DecisionSentence({ segments }) {
  return (
    <>
      {segments.map((segment, index) => (
        segment.strong ? (
          <strong key={`${segment.text}-${index}`} className={styles.decisionEvidenceStrong}>{segment.text}</strong>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        )
      ))}
    </>
  );
}

export function TutorDecisionBody({ decision, includeNumber = true }) {
  return (
    <article className={styles.tutorDecision}>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        {includeNumber ? (
          <p className={`${styles.decisionNumber} font-cabinet text-5xl font-extrabold leading-none md:col-span-1`}>{decision.number}</p>
        ) : null}
        <div className={includeNumber ? 'md:col-span-11' : 'md:col-span-12'}>
          <h3 className={`${styles.decisionTitle} font-cabinet text-3xl font-extrabold leading-tight md:text-4xl`}>{decision.title}</h3>
          <div className={styles.decisionEvidenceTable}>
            <div className={styles.decisionEvidenceRow}>
              <p className={styles.decisionEvidenceLabel}>Decision aim</p>
              <p className={styles.decisionEvidenceCopy}>{decision.aim}</p>
            </div>
            <div className={styles.decisionEvidenceRow}>
              <p className={styles.decisionEvidenceLabel}>Product decision</p>
              <p className={styles.decisionEvidenceCopy}>
                <DecisionSentence segments={decision.productDecision} />
              </p>
            </div>
            <div className={styles.decisionEvidenceRow}>
              <p className={styles.decisionEvidenceLabel}>UX support</p>
              <p className={styles.decisionEvidenceCopy}>
                <DecisionSentence segments={decision.uxSupport} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <DecisionVisual decision={decision} />
      </div>
    </article>
  );
}

export default function TutorDecision({ decision }) {
  return <TutorDecisionBody decision={decision} includeNumber={true} />;
}
