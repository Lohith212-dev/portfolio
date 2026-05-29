import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import styles from './StickyPhaseNumbers.module.css';

/**
 * StickyPhaseNumbers
 *
 * Renders a vertical list of "phase" blocks. The phase number (e.g. "00", "01")
 * pins to the top of the viewport while the visitor scrolls through that phase's
 * content, then crossfades to the next number as the next phase enters view.
 *
 * Props:
 *   phases: Array<{ number: string, content: ReactNode }>
 *   theme:  'light' | 'dark'  (default 'light')
 *   topOffset: optional CSS length string for the sticky top offset (default '6rem')
 *   className: optional className for the outer container
 *
 * The component renders only the number-column sticky behaviour and the layout
 * scaffolding; the caller supplies the body content for each phase (title,
 * copy, artifact, etc.) so per-page styling stays in the calling section.
 */
function PhaseBlock({ phase, theme, topOffset }) {
  const blockRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start start', 'end start'],
  });

  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 1],
    [0, 1, 1, 0]
  );
  const numberY = useTransform(scrollYProgress, [0, 1], [0, -16]);

  const numberStyle = { '--sticky-phase-top': topOffset };
  if (!prefersReducedMotion) {
    numberStyle.opacity = numberOpacity;
    numberStyle.y = numberY;
  }

  return (
    <div ref={blockRef} className={styles.phaseBlock}>
      <div className={styles.numberColumn}>
        <motion.span
          className={`${styles.number} ${theme === 'dark' ? styles.numberDark : styles.numberLight}`}
          style={numberStyle}
          aria-hidden="true"
        >
          {phase.number}
        </motion.span>
      </div>
      <div className={styles.phaseBody}>{phase.content}</div>
    </div>
  );
}

export default function StickyPhaseNumbers({
  phases,
  theme = 'light',
  topOffset = '6rem',
  className = '',
}) {
  if (!Array.isArray(phases) || phases.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.root} ${className}`}>
      {phases.map((phase, index) => (
        <PhaseBlock
          key={phase.number ?? index}
          phase={phase}
          theme={theme}
          topOffset={topOffset}
        />
      ))}
    </div>
  );
}
