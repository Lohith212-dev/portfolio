import CaseStudyVideoFrame from '../../CaseStudyVideoFrame';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from '../SparkPresenterCaseStudy.module.css';
import { DecisionParagraphGroup } from '../sparkHelpers';

function SparkDecisionVideoFrame() {
  return (
    <CaseStudyVideoFrame
      frameClassName={`${lmsStyles.decisionBrowser} ${lmsStyles.decisionVideoBrowser} ${styles.sparkDecisionVideoFrame}`}
      mediaClassName={styles.sparkDecisionVideoReveal}
      videoClassName={lmsStyles.decisionVideo}
      ariaLabel="Placeholder for supporting decision video"
      autoPlay={false}
      loop
      muted
      playsInline
      sources={[]}
    />
  );
}

export default function SparkDecision({ decision }) {
  return (
    <article className={lmsStyles.tutorDecision}>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <p className={`${lmsStyles.decisionNumber} font-cabinet text-5xl font-extrabold leading-none md:col-span-1`}>{decision.number}</p>
        <div className="md:col-span-11">
          <h3 className={`${lmsStyles.decisionTitle} font-cabinet text-3xl font-extrabold leading-tight md:text-4xl`}>
            {decision.choice}
          </h3>

          <div className={lmsStyles.decisionEvidenceTable}>
            <div className={lmsStyles.decisionEvidenceRow}>
              <p className={lmsStyles.decisionEvidenceLabel}>The choice</p>
              <p className={lmsStyles.decisionEvidenceCopy}>{decision.choice}</p>
            </div>
            <div className={lmsStyles.decisionEvidenceRow}>
              <p className={lmsStyles.decisionEvidenceLabel}>Situation</p>
              <p className={lmsStyles.decisionEvidenceCopy}>{decision.situation}</p>
            </div>
            <div className={lmsStyles.decisionEvidenceRow}>
              <p className={lmsStyles.decisionEvidenceLabel}>Reasoning</p>
              <DecisionParagraphGroup
                paragraphs={decision.reasoning}
                className={`${lmsStyles.decisionEvidenceCopy} space-y-4`}
                paragraphClassName="m-0"
              />
            </div>
            <div className={lmsStyles.decisionEvidenceRow}>
              <p className={lmsStyles.decisionEvidenceLabel}>Result</p>
              <DecisionParagraphGroup
                paragraphs={decision.result}
                className={`${lmsStyles.decisionEvidenceCopy} space-y-4`}
                paragraphClassName="m-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SparkDecisionVideoFrame />
      </div>
    </article>
  );
}
