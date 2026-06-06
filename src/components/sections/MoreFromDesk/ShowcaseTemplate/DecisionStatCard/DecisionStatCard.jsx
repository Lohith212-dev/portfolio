import { useEffect, useRef } from 'react';
import { StatIconCartCheck, StatIconReturnLoop } from '../../../../icons/icons';
import styles from './DecisionStatCard.module.css';

/* Icon registry: stat data stays plain strings; future case studies add a new
   animated icon to icons.jsx and one line here. */
const STAT_ICONS = {
  returnLoop: StatIconReturnLoop,
  cartCheck: StatIconCartCheck,
};

const BURST_DURATION_MS = 2200;
const PAUSE_DURATION_MS = 3200;

export default function DecisionStatCard({ figure, baseline, eyebrow, label, icon }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const Icon = STAT_ICONS[icon];

  /* Burst-pause cycle: while the card is in view, the icon animates a burst
     (two loops), rests, and repeats. Scrolling away stops the cycle. */
  useEffect(() => {
    const card = cardRef.current;

    if (!card || !iconRef.current) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let timeoutId = null;

    const runBurst = () => {
      iconRef.current?.startAnimation?.();
      timeoutId = setTimeout(runBurst, BURST_DURATION_MS + PAUSE_DURATION_MS);
    };

    const stopCycle = () => {
      clearTimeout(timeoutId);
      timeoutId = null;
      iconRef.current?.stopAnimation?.();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (timeoutId === null) runBurst();
          } else {
            stopCycle();
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.statCard}>
      <div className={styles.band}>
        {Icon ? <Icon ref={iconRef} className={styles.icon} size={30} /> : null}
        <span className={styles.bandLabel}>
          {String(eyebrow).split('\n').map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.figureRow}>
          <span className={styles.figure}>{figure}</span>
          {baseline ? <span className={styles.baseline}>{baseline}</span> : null}
        </div>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
}
