import React from 'react';

/**
 * <PhoneFrame /> — Liquid-glass-style mobile phone frame (portrait).
 *
 * Wraps an iframe (or any React children) in a translucent glass bezel
 * inspired by Apple's "liquid glass" design language. Aims for a CLEAR
 * glass look (see-through rim with bright highlights), not a frosted one.
 *
 * Includes physical side buttons (power on the right, volume up/down on
 * the left) so the component reads as an actual phone, not just a
 * rounded rectangle.
 *
 * The glass effect uses CSS `backdrop-filter`, which blurs and tints
 * whatever sits BEHIND this component on the page. Place it over a
 * colorful background for the effect to be visible.
 *
 * Props:
 *   src           string  — URL to load in the iframe. Optional (use `children` instead).
 *   title         string  — Accessibility label for the iframe. Default: "App preview".
 *   width         number  — Frame width in pixels. Height auto-scales. Default: 300.
 *   showIsland    boolean — If true, renders an iPhone-style dynamic island.
 *                           Default: false. Turn on only when your demo respects the
 *                           top safe-area; otherwise the island overlaps content.
 *   showButtons   boolean — If true, renders side buttons (power + volume).
 *                           Default: true. These help the component read as a phone.
 *   children      node    — Content rendered inside the screen area (used when `src` is not provided).
 *   className     string  — Extra className appended to the root element.
 *   style         object  — Extra inline styles merged onto the root.
 *   iframeProps   object  — Extra props forwarded to the underlying <iframe>.
 *
 * Example:
 *   <PhoneFrame src="https://your-app-demo.com" />
 *   <PhoneFrame src="https://..." width={340} showIsland />
 */
export default function PhoneFrame({
  src,
  title = 'App preview',
  width = 300,
  showIsland = false,
  showButtons = true,
  children,
  className = '',
  style = {},
  iframeProps = {},
}) {
  // Aspect ratio roughly matches modern smartphones (≈ 19.5:9 in portrait).
  const aspectRatio = 19.5 / 9;
  const height = Math.round(width * aspectRatio);
  const outerRadius = Math.round(width * 0.14);
  const framePadding = Math.max(10, Math.round(width * 0.04));
  const innerRadius = Math.max(0, outerRadius - framePadding);
  const islandWidth = Math.round(width * 0.32);
  const islandHeight = Math.round(width * 0.085);
  const islandTop = Math.round(width * 0.045);

  const rootStyle = {
    '--lgp-w': `${width}px`,
    '--lgp-h': `${height}px`,
    '--lgp-r-outer': `${outerRadius}px`,
    '--lgp-r-inner': `${innerRadius}px`,
    '--lgp-pad': `${framePadding}px`,
    '--lgp-island-w': `${islandWidth}px`,
    '--lgp-island-h': `${islandHeight}px`,
    '--lgp-island-top': `${islandTop}px`,
    ...style,
  };

  return (
    <div
      className={['liquid-glass-phone', className].filter(Boolean).join(' ')}
      style={rootStyle}
    >
      <style>{phoneFrameStyles}</style>
      <div className="liquid-glass-phone__screen">
        {src ? (
          <iframe
            src={src}
            title={title}
            {...iframeProps}
          />
        ) : (
          children
        )}
      </div>
      {showButtons && (
        <>
          <span className="liquid-glass-phone__btn lgp-btn--power" aria-hidden="true" />
          <span className="liquid-glass-phone__btn lgp-btn--vol-up" aria-hidden="true" />
          <span className="liquid-glass-phone__btn lgp-btn--vol-down" aria-hidden="true" />
        </>
      )}
      {showIsland && (
        <span className="liquid-glass-phone__island" aria-hidden="true" />
      )}
    </div>
  );
}

const phoneFrameStyles = `
.liquid-glass-phone {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: var(--lgp-w);
  height: var(--lgp-h);
  padding: var(--lgp-pad);
  border-radius: var(--lgp-r-outer);
  background:
    linear-gradient(140deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.04) 35%,
      rgba(255, 255, 255, 0.02) 65%,
      rgba(255, 255, 255, 0.14) 100%);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  box-shadow:
    0 30px 80px -25px rgba(15, 20, 30, 0.55),
    0 12px 28px -10px rgba(15, 20, 30, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.55),
    inset 0 2px 1px rgba(255, 255, 255, 0.95),
    inset 0 -1.5px 1px rgba(255, 255, 255, 0.28),
    inset 2px 0 0 rgba(255, 255, 255, 0.42),
    inset -2px 0 0 rgba(255, 255, 255, 0.42);
  isolation: isolate;
}

.liquid-glass-phone::before,
.liquid-glass-phone::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.liquid-glass-phone::before {
  background:
    radial-gradient(135% 70% at 15% -8%, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0) 50%),
    radial-gradient(125% 65% at 85% 100%, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 55%);
  mix-blend-mode: screen;
}

.liquid-glass-phone::after {
  box-shadow:
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.65),
    inset 0 0 1px 0.5px rgba(0, 0, 0, 0.30);
}

.liquid-glass-phone__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--lgp-r-inner);
  overflow: hidden;
  background: #0a0a0a;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.85),
    inset 0 0 0 2px rgba(255, 255, 255, 0.04);
  z-index: 1;
}

.liquid-glass-phone__screen > iframe,
.liquid-glass-phone__screen > * {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.liquid-glass-phone__island {
  position: absolute;
  top: var(--lgp-island-top);
  left: 50%;
  transform: translateX(-50%);
  width: var(--lgp-island-w);
  height: var(--lgp-island-h);
  background: #000;
  border-radius: 999px;
  z-index: 5;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(255, 255, 255, 0.04),
    0 0 0 0.5px rgba(0, 0, 0, 0.6);
}

/* ---- Side buttons: subtle metallic-glass pills protruding from the edges ---- */
.liquid-glass-phone__btn {
  position: absolute;
  width: 3px;
  background:
    linear-gradient(180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(220, 220, 225, 0.35) 30%,
      rgba(180, 180, 190, 0.40) 70%,
      rgba(255, 255, 255, 0.35) 100%);
  border-radius: 2px;
  z-index: 3;
  box-shadow:
    inset 0 1px 0.5px rgba(255, 255, 255, 0.75),
    inset 0 -1px 0.5px rgba(0, 0, 0, 0.30),
    0 0 1px rgba(0, 0, 0, 0.45);
}

/* Power button (right side) — ~24% from top, ~10% tall. */
.lgp-btn--power {
  right: -2px;
  top: 24%;
  height: 10%;
}

/* Volume up (left side) — ~18% from top, ~7% tall. */
.lgp-btn--vol-up {
  left: -2px;
  top: 18%;
  height: 7%;
}

/* Volume down (left side) — sits just below volume up. */
.lgp-btn--vol-down {
  left: -2px;
  top: 27%;
  height: 7%;
}
`;
