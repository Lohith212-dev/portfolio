import Tooltip from '../../../shared/Tooltip';
import styles from '../SatLmsCaseStudy.module.css';

export default function OutcomeMetric({ metric }) {
  return (
    <article className={styles.outcomeMetric}>
      <p className={styles.outcomeMetricValue}>{metric.value}</p>
      <p className={styles.outcomeMetricLabel}>
        <span>{metric.label}</span>
        <Tooltip
          content={(
            <span className="block space-y-3">
              {metric.tooltip.map((item) => (
                <span key={item} className="block">{item}</span>
              ))}
            </span>
          )}
          panelClassName={styles.metricTooltipPanel}
        >
          <span className={styles.outcomeMetricTip}>?</span>
        </Tooltip>
      </p>
      <p className={styles.outcomeMetricDelta}>{metric.detail}</p>
    </article>
  );
}
