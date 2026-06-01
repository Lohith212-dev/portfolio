import styles from '../SparkPresenterCaseStudy.module.css';
import { useInViewOnce } from '../sparkHelpers';
import { beforePipelineSteps, sparkPipelineSteps } from '../sparkData';

function PipelineStepIcon({ step }) {
  return (
    <span className={styles.pipelineStepIconWrap} aria-hidden="true">
      <img src={step.iconSrc} alt="" className={styles.pipelineStepIcon} />
    </span>
  );
}

function PipelinePill({ step, className = '', isVisible, style = {} }) {
  const pillClassName = [styles.pipelinePill, className, isVisible ? styles.pipelinePillVisible : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={pillClassName}
      style={style}
    >
      <div className={styles.pipelinePillChip}>
        <PipelineStepIcon step={step} />
        <span className={styles.pipelinePillLabel}>{step.label}</span>
      </div>
      <span className={styles.pipelinePillDescription}>{step.description}</span>
    </div>
  );
}

function BeforePipelineBoard({ isVisible = false }) {
  return (
    <article className={styles.pipelineBoard}>
      <div className={styles.pipelineBoardCopy}>
        <h3>Before</h3>
        <p>Every step is manual</p>
      </div>

      <div className={styles.pipelineBoardMetricWrap}>
        <p className={styles.pipelineBoardMetric}>3 days {'·'} 1 file</p>
      </div>

      <div className={`${styles.pipelineBoardCanvas} ${styles.pipelineBoardCanvasBefore}`}>
        <div className={styles.pipelineManualStack}>
          {beforePipelineSteps.slice().reverse().map((step, index) => (
            <PipelinePill
              key={step.id}
              step={step}
              isVisible={isVisible}
              className={[
                styles.pipelinePillManual,
                index % 2 === 1 ? styles.pipelinePillManualAlt : '',
              ].filter(Boolean).join(' ')}
              style={{
                '--pipeline-pill-rotation': step.rotate,
                '--pipeline-pill-duration': '9800ms',
                '--pipeline-pill-delay': `${index * 780}ms`,
                top: step.top,
                left: step.left,
                width: step.width,
              }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function SparkPipelineBoard({ isVisible = false }) {
  const groupedSteps = sparkPipelineSteps.filter((step) => !step.outside);
  const externalStep = sparkPipelineSteps.find((step) => step.outside);

  return (
    <article className={styles.pipelineBoard}>
      <div className={styles.pipelineBoardCopy}>
        <h3>The S.P.A.R.K. assembly line</h3>
        <p>All the manual effort automated</p>
      </div>

      <div className={styles.pipelineBoardMetricWrap}>
        <p className={styles.pipelineBoardMetric}>2 hours {'·'} 100 files</p>
        <img
          src="/images/case-studies/spark/build/underline.svg"
          alt=""
          aria-hidden="true"
          className={styles.pipelineBoardUnderline}
        />
      </div>

      <div className={`${styles.pipelineBoardCanvas} ${styles.pipelineBoardCanvasSpark}`}>
        <div className={styles.pipelineSparkStage}>
          <div className={styles.pipelineSparkCore}>
            {groupedSteps.map((step, index) => (
              <PipelinePill
                key={step.id}
                step={step}
                isVisible={isVisible}
                className={styles.pipelinePillGrouped}
                style={{
                  '--pipeline-pill-rotation': index % 2 === 0 ? '0.9deg' : '-0.9deg',
                  '--pipeline-pill-duration': '3400ms',
                  '--pipeline-pill-delay': `${index * 220}ms`,
                }}
              />
            ))}
          </div>

          {externalStep ? (
            <PipelinePill
              step={externalStep}
              isVisible={isVisible}
              className={`${styles.pipelinePillSparkWrite} ${styles.pipelinePillDashed}`}
              style={{
                '--pipeline-pill-rotation': '-2deg',
                '--pipeline-pill-duration': '3400ms',
                '--pipeline-pill-delay': `${groupedSteps.length * 220}ms`,
              }}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function BuildPipelineComparison() {
  const { ref, isVisible } = useInViewOnce({ threshold: 0.2, rootMargin: '0px 0px -80px 0px' });

  return (
    <div ref={ref} className={styles.pipelineComparisonSection}>
      <div className={styles.pipelineComparisonGrid}>
        <BeforePipelineBoard isVisible={isVisible} />
        <SparkPipelineBoard isVisible={isVisible} />
      </div>
    </div>
  );
}
