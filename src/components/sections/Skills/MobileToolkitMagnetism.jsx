import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import styles from './Skills.module.css';

/**
 * MobileToolkitMagnetism
 *
 * Tap-driven replacement for the desktop magnetism on mobile/tablet.
 * Mirrors the relationship between skill clusters and their tools without
 * relying on hover. Five skill bubbles render in a fixed grid; tapping
 * a bubble pulls its related tools into a clustered arrangement around it.
 *
 * Visibility is controlled by Skills.module.css — this component renders
 * inside .mobileMagnetStage and is shown at <=1023px, hidden at desktop.
 *
 * Props:
 *   clusters: same shape as desktop `clusters` array (id, label, tone, tools[])
 *   tools:    derived unique tools list with `clusters: string[]` membership
 *   ToolLogo: render prop / component for the tool logo plate
 */
export default function MobileToolkitMagnetism({ clusters, tools, ToolLogo }) {
  const [activeSkill, setActiveSkill] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const activeTools = useMemo(() => {
    if (!activeSkill) return [];
    return tools.filter((tool) => tool.clusters.includes(activeSkill));
  }, [activeSkill, tools]);

  const inactiveTools = useMemo(() => {
    if (!activeSkill) return [];
    return tools.filter((tool) => !tool.clusters.includes(activeSkill));
  }, [activeSkill, tools]);

  const handleSkillTap = useCallback((skillId) => {
    setActiveSkill((prev) => (prev === skillId ? null : skillId));
  }, []);

  const handleBackgroundTap = useCallback((event) => {
    if (event.target === event.currentTarget) {
      setActiveSkill(null);
    }
  }, []);

  const springConfig = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 240, damping: 24 };

  const fadeTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.28 };

  const activeClusterLabel = activeSkill
    ? clusters.find((c) => c.id === activeSkill)?.label?.replace('\n', ' ')
    : null;

  return (
    <div
      className={styles.mobileMagnetStage}
      role="region"
      aria-label="Skills and tools — tap a skill to see its toolkit"
      onClick={handleBackgroundTap}
    >
      <div
        className={styles.mobileMagnetSkillGrid}
        onClick={(event) => event.stopPropagation()}
      >
        {clusters.map((cluster) => {
          const isActive = activeSkill === cluster.id;
          const isDimmed = Boolean(activeSkill && !isActive);

          return (
            <motion.button
              key={cluster.id}
              type="button"
              onClick={() => handleSkillTap(cluster.id)}
              aria-pressed={isActive}
              aria-label={`${cluster.label.replace('\n', ' ')}${isActive ? ' (active)' : ''}`}
              animate={{
                scale: isActive ? 1.06 : isDimmed ? 0.94 : 1,
                opacity: isDimmed ? 0.4 : 1,
              }}
              transition={springConfig}
              className={`${styles.mobileMagnetBubble} ${styles[cluster.tone]} ${isActive ? styles.mobileMagnetBubbleActive : ''}`}
            >
              <span className={styles.mobileMagnetBubbleLabel}>{cluster.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div
        className={styles.mobileMagnetToolStage}
        onClick={(event) => event.stopPropagation()}
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          {activeSkill ? (
            <motion.div
              key={`active-${activeSkill}`}
              className={styles.mobileMagnetActive}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
            >
              <div className={styles.mobileMagnetActiveCluster}>
                {activeTools.map((tool, index) => (
                  <motion.span
                    key={tool.name}
                    layout
                    initial={prefersReducedMotion ? false : { scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={prefersReducedMotion ? { duration: 0 } : {
                      type: 'spring',
                      stiffness: 260,
                      damping: 22,
                      delay: index * 0.035,
                    }}
                    className={`${styles.mobileToolPill} ${styles.mobileMagnetToolActive}`}
                  >
                    <ToolLogo toolName={tool.name} />
                    <span>{tool.label || tool.name}{tool.level === 'learning' ? '*' : ''}</span>
                  </motion.span>
                ))}
              </div>
              <p className={styles.mobileMagnetHint}>
                {activeClusterLabel ? `Tools under ${activeClusterLabel}.` : null}{' '}
                Tap the skill again or empty space to reset.
              </p>
              <div className={styles.mobileMagnetInactiveCluster}>
                {inactiveTools.map((tool) => (
                  <span
                    key={tool.name}
                    className={`${styles.mobileToolPill} ${styles.mobileMagnetToolInactive}`}
                  >
                    <ToolLogo toolName={tool.name} />
                    <span>{tool.label || tool.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="neutral"
              className={styles.mobileMagnetNeutral}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
            >
              {tools.map((tool) => (
                <span key={tool.name} className={styles.mobileToolPill}>
                  <ToolLogo toolName={tool.name} />
                  <span>{tool.label || tool.name}{tool.level === 'learning' ? '*' : ''}</span>
                </span>
              ))}
              <p className={styles.mobileMagnetHint}>
                Tap a skill above to attract its tools.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
