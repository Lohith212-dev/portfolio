import {
  ObjectiveDecideIcon,
  ObjectiveDoubtIcon,
  ObjectiveHierarchyIcon,
  ObjectiveLoopIcon,
  ObjectiveRouteIcon,
  ObjectiveTargetIcon,
  ObjectiveUnlockIcon,
  ObjectiveVerifyIcon,
  ObjectiveWelcomeIcon,
} from '../../../../icons/icons';
import styles from './ObjectivesGrid.module.css';

/* Icon registry: objective data stays plain strings — same pattern as
   DecisionStatCard. */
const OBJECTIVE_ICONS = {
  welcome: ObjectiveWelcomeIcon,
  verify: ObjectiveVerifyIcon,
  decide: ObjectiveDecideIcon,
  loop: ObjectiveLoopIcon,
  doubt: ObjectiveDoubtIcon,
  target: ObjectiveTargetIcon,
  unlock: ObjectiveUnlockIcon,
  route: ObjectiveRouteIcon,
  hierarchy: ObjectiveHierarchyIcon,
};

export default function ObjectivesGrid({ items }) {
  return (
    <div className={styles.objectivesGrid}>
      {items.map((item) => {
        const Icon = OBJECTIVE_ICONS[item.icon];

        return (
          <article key={item.title} className={styles.objectiveCard}>
            {Icon ? (
              <span className={styles.objectiveIcon} aria-hidden="true">
                <Icon />
              </span>
            ) : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}
