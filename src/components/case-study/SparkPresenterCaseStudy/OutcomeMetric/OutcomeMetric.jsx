import Tooltip from '../../../shared/Tooltip';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';

export default function OutcomeMetric({ metric }) {
  return (
    <article className={lmsStyles.outcomeMetric}>
      <p className={lmsStyles.outcomeMetricValue}>{metric.value}</p>
      <p className={lmsStyles.outcomeMetricLabel}>
        <span>{metric.label}</span>
        <Tooltip
          content={(
            <span className="block space-y-3">
              {metric.tooltip.map((item) => (
                <span key={item} className="block">{item}</span>
              ))}
            </span>
          )}
          panelClassName={lmsStyles.metricTooltipPanel}
        >
          <span className={lmsStyles.outcomeMetricTip}>?</span>
        </Tooltip>
      </p>
      <p className={lmsStyles.outcomeMetricDelta}>{metric.detail}</p>
    </article>
  );
}
