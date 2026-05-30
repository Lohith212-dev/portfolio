import { useState, useMemo, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import styles from './Skills.module.css';

/**
 * MobileToolkitMagnetism (Pass 3 — Bento layout)
 *
 * Tap-driven BENTO replacement for the desktop magnetism on mobile/tablet
 * (<=1023px). Supersedes the Pass 2 magnetism stage that lived here. Five
 * skill tiles render in a 2fr/1fr bento grid; tapping a tile groups that
 * skill's tools at the top of the always-visible tool pool, dims the other
 * tiles, and rings the active tile. Tap the active tile again or tap empty
 * space to reset.
 *
 * Visibility is controlled by Skills.module.css — this component renders
 * inside .bentoStage and is shown at <=1023px, hidden at desktop.
 *
 * Tools are ALWAYS visible (never hidden) in both neutral and active states.
 *
 * Props:
 *   clusters: same shape as desktop `clusters` array (id, label, tone, tools[])
 *   tools:    derived unique tools list with `clusters: string[]` membership
 *   ToolLogo: component for the tool logo plate (same as desktop pills)
 */

// Bento placement + per-skill accent token + decorative SVG. Grid positions
// and accent colors mirror the approved toolkit-bento-preview.html spec;
// SVG opacities are dialed down hard per the Pass 3 integration notes
// (white strokes <= 0.12, fills <= 0.08) so they read as background texture.
const BENTO = {
  'product-ux': {
    tile: styles.bentoProduct,
    accent: 'var(--color-fun-accent-red)',
    graphic: (
      <svg
        className={styles.bentoGraphic}
        viewBox="0 0 220 246"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="16" y="16" width="130" height="100" rx="7" stroke="rgba(255,255,255,.12)" strokeWidth="1.8" />
        <rect x="24" y="24" width="52" height="36" rx="4" fill="rgba(255,255,255,.08)" />
        <rect x="82" y="24" width="56" height="14" rx="3" fill="rgba(255,255,255,.08)" />
        <rect x="82" y="43" width="38" height="10" rx="2" fill="rgba(255,255,255,.06)" />
        <rect x="24" y="68" width="114" height="8" rx="2" fill="rgba(255,255,255,.08)" />
        <rect x="24" y="81" width="78" height="8" rx="2" fill="rgba(255,255,255,.06)" />
        <line x1="16" y1="128" x2="188" y2="128" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="5 4" />
        <line x1="81" y1="16" x2="81" y2="230" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="5 4" />
        <path d="M152 148 L152 178 L159 171 L165 185 L169 183 L163 169 L172 169 Z" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" strokeWidth=".8" />
        <circle cx="24" cy="24" r="4.5" fill="rgba(255,255,255,.08)" />
        <circle cx="146" cy="24" r="4.5" fill="rgba(255,255,255,.06)" />
        <circle cx="24" cy="116" r="4.5" fill="rgba(255,255,255,.06)" />
      </svg>
    ),
  },
  'ai-stack': {
    tile: styles.bentoAi,
    accent: 'var(--color-accent-orange)',
    graphic: (
      <svg
        className={styles.bentoGraphic}
        viewBox="0 0 104 138"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="24" cy="38" r="7" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="24" cy="68" r="7" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="24" cy="98" r="7" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="60" cy="50" r="9" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="60" cy="86" r="9" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="92" cy="68" r="8" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <line x1="31" y1="40" x2="51" y2="52" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="31" y1="68" x2="51" y2="52" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="31" y1="68" x2="51" y2="84" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="31" y1="96" x2="51" y2="84" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="69" y1="54" x2="84" y2="65" stroke="rgba(255,255,255,.12)" strokeWidth="1.2" />
        <line x1="69" y1="82" x2="84" y2="71" stroke="rgba(255,255,255,.12)" strokeWidth="1.2" />
      </svg>
    ),
  },
  'web-dev': {
    tile: styles.bentoWeb,
    accent: 'var(--color-accent-lavender)',
    graphic: (
      <svg
        className={styles.bentoGraphic}
        viewBox="0 0 104 100"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="8" y="8" width="88" height="66" rx="5" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <line x1="8" y1="24" x2="96" y2="24" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <circle cx="17" cy="16" r="3" fill="rgba(255,255,255,.08)" />
        <circle cx="26" cy="16" r="3" fill="rgba(255,255,255,.06)" />
        <circle cx="35" cy="16" r="3" fill="rgba(255,255,255,.06)" />
        <polyline points="28,52 18,45 28,38" stroke="rgba(255,255,255,.12)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="46" y1="36" x2="40" y2="54" stroke="rgba(255,255,255,.1)" strokeWidth="2" strokeLinecap="round" />
        <polyline points="52,38 62,45 52,52" stroke="rgba(255,255,255,.12)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  marketing: {
    tile: styles.bentoMarketing,
    accent: 'var(--color-accent-green)',
    graphic: (
      <svg
        className={styles.bentoGraphic}
        viewBox="0 0 220 74"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="38" cy="37" r="10" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="38" cy="37" r="22" stroke="rgba(255,255,255,.1)" strokeWidth="1.2" />
        <circle cx="38" cy="37" r="34" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        <path
          d="M174 37 L177 28 L180 37 L189 37 L182 43 L185 52 L174 46 L163 52 L166 43 L159 37 Z"
          fill="rgba(255,255,255,.08)"
          stroke="rgba(255,255,255,.12)"
          strokeWidth=".8"
          strokeLinejoin="round"
        />
        <line x1="72" y1="37" x2="154" y2="37" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
    ),
  },
  instructional: {
    tile: styles.bentoInstructional,
    accent: 'var(--color-accent-sky)',
    graphic: (
      <svg
        className={styles.bentoGraphic}
        viewBox="0 0 104 74"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M52 18 C36 18 22 22 16 29 L16 60 C22 53 36 49 52 49 C68 49 82 53 88 60 L88 29 C82 22 68 18 52 18Z"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="1.5"
          fill="rgba(255,255,255,.06)"
          strokeLinejoin="round"
        />
        <line x1="52" y1="18" x2="52" y2="49" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <line x1="26" y1="33" x2="48" y2="31" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="26" y1="40" x2="48" y2="38" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        <line x1="26" y1="47" x2="42" y2="45" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        <line x1="56" y1="31" x2="78" y2="33" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <line x1="56" y1="38" x2="78" y2="40" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        <line x1="56" y1="45" x2="70" y2="47" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
      </svg>
    ),
  },
};

// Bento tile order (visual order; CSS grid-area pins the actual cells).
const TILE_ORDER = ['product-ux', 'ai-stack', 'web-dev', 'marketing', 'instructional'];

export default function MobileToolkitMagnetism({ clusters, tools, ToolLogo }) {
  const [activeSkill, setActiveSkill] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const clusterById = useMemo(() => {
    const map = {};
    clusters.forEach((c) => { map[c.id] = c; });
    return map;
  }, [clusters]);

  // Tiles in the fixed bento order, skipping any skill not present in data.
  const orderedTiles = useMemo(
    () => TILE_ORDER.filter((id) => clusterById[id]).map((id) => clusterById[id]),
    [clusterById],
  );

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

  const tileTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 280, damping: 26 };

  const activeAccent = activeSkill ? BENTO[activeSkill]?.accent : null;
  const activeLabel = activeSkill
    ? clusterById[activeSkill]?.label?.replace('\n', ' ')
    : null;

  const renderPill = (tool, { featured = false } = {}) => (
    <span
      key={tool.name}
      className={`${styles.bentoPill} ${featured ? styles.bentoPillFeatured : ''}`}
      style={featured ? { '--bento-accent': activeAccent } : undefined}
    >
      {featured && <span className={styles.bentoPillDot} aria-hidden="true" />}
      <ToolLogo toolName={tool.name} />
      <span className={styles.bentoPillName}>
        {tool.label || tool.name}
        {tool.level === 'learning' ? '*' : ''}
      </span>
    </span>
  );

  return (
    <div
      className={styles.bentoStage}
      role="region"
      aria-label="Skills and tools — tap a tile to see its toolkit"
      onClick={handleBackgroundTap}
    >
      <div
        className={styles.bentoGrid}
        onClick={(event) => event.stopPropagation()}
      >
        {orderedTiles.map((cluster) => {
          const isActive = activeSkill === cluster.id;
          const isDimmed = Boolean(activeSkill && !isActive);
          const config = BENTO[cluster.id];

          return (
            <motion.button
              key={cluster.id}
              type="button"
              onClick={() => handleSkillTap(cluster.id)}
              aria-pressed={isActive}
              aria-label={`${cluster.label.replace('\n', ' ')}${isActive ? ' (active)' : ''}`}
              animate={{
                scale: isActive ? 1.04 : 1,
                opacity: isDimmed ? 0.25 : 1,
                filter: isDimmed ? 'saturate(0.15)' : 'saturate(1)',
              }}
              transition={tileTransition}
              style={{ '--bento-accent': config?.accent }}
              className={`${styles.bentoTile} ${config?.tile || ''} ${isActive ? styles.bentoTileActive : ''}`}
            >
              {config?.graphic}
              <span className={styles.bentoTileLabel}>{cluster.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div
        className={styles.bentoTools}
        onClick={(event) => event.stopPropagation()}
        aria-live="polite"
        aria-atomic="true"
      >
        {activeSkill ? (
          <>
            <p className={styles.bentoToolsLabel} style={{ color: activeAccent }}>
              {activeLabel} · {activeTools.length} tools
            </p>
            <div className={styles.bentoFeatured}>
              {activeTools.map((tool) => renderPill(tool, { featured: true }))}
            </div>
            {inactiveTools.length > 0 && (
              <>
                <div className={styles.bentoDivider} />
                <div className={styles.bentoPool}>
                  {inactiveTools.map((tool) => renderPill(tool))}
                </div>
              </>
            )}
            <p className={styles.bentoResetHint}>
              Tap the active tile again, or tap empty space, to reset
            </p>
          </>
        ) : (
          <div className={styles.bentoPool}>
            {tools.map((tool) => renderPill(tool))}
          </div>
        )}
      </div>
    </div>
  );
}
