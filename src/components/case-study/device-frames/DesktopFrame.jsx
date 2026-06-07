import React from 'react';

/**
 * <DesktopFrame /> — Liquid-glass-style desktop monitor frame (landscape).
 *
 * A 16:10 monitor mounted on a glass-textured wedge stand. The stand is
 * what makes this read as a desktop monitor rather than a rectangle —
 * keep it on for portfolio mockups.
 *
 * The glass effect uses CSS `backdrop-filter`, which blurs and tints
 * whatever sits BEHIND this component on the page. Place it over a
 * colorful background for the effect to be visible.
 *
 * Props:
 *   src           string  — URL to load in the iframe. Optional (use `children` instead).
 *   title         string  — Accessibility label for the iframe. Default: "App preview".
 *   width         number  — Frame width in pixels. Height auto-scales (16:10). Default: 800.
 *   showCamera    boolean — Renders a small webcam dot at top center. Default: true.
 *                           Sits inside the top bezel — does not overlap content.
 *   showStand     boolean — Renders the glass wedge stand below the screen. Default: true.
 *                           Without this the component reads as a floating rectangle.
 *   screenAspectRatio number — Optional height/width ratio for the INNER screen
 *                           area (e.g. 728 / 1536 for a fixed-size prototype
 *                           artboard). The bezel padding is added on top. When
 *                           omitted, the frame keeps its default 16:10 overall
 *                           proportions.
 *   children      node    — Content rendered inside the screen area (used when `src` is not provided).
 *   className     string  — Extra className appended to the root element.
 *   style         object  — Extra inline styles merged onto the root.
 *   iframeProps   object  — Extra props forwarded to the underlying <iframe>.
 *
 * Example:
 *   <DesktopFrame src="https://your-app-demo.com" />
 *   <DesktopFrame src="https://..." width={1000} />
 */
export default function DesktopFrame({
  src,
  title = 'App preview',
  width = 800,
  showCamera = true,
  showStand = true,
  screenAspectRatio,
  children,
  className = '',
  style = {},
  iframeProps = {},
}) {
  // 16:10 — matches modern Mac displays and design-canvas conventions.
  const aspectRatio = 10 / 16;
  const outerRadius = Math.max(14, Math.round(width * 0.022));
  const framePadding = Math.max(12, Math.round(width * 0.018));
  // With screenAspectRatio the inner screen honors the ratio exactly and the
  // bezel padding is added back; otherwise the original frame-level 16:10.
  const screenHeight = screenAspectRatio
    ? Math.round((width - framePadding * 2) * screenAspectRatio) + framePadding * 2
    : Math.round(width * aspectRatio);
  const innerRadius = Math.max(2, outerRadius - framePadding);
  const cameraSize = Math.max(6, Math.round(width * 0.009));
  const cameraTop = Math.max(3, Math.round(framePadding / 2.6));

  // Stand dimensions, proportional to screen.
  const neckWidth = Math.round(width * 0.13);
  const neckHeight = Math.round(width * 0.045);
  const footWidth = Math.round(width * 0.32);
  const footHeight = Math.max(8, Math.round(width * 0.012));

  const rootStyle = {
    '--lgd-w': `${width}px`,
    '--lgd-screen-h': `${screenHeight}px`,
    '--lgd-r-outer': `${outerRadius}px`,
    '--lgd-r-inner': `${innerRadius}px`,
    '--lgd-pad': `${framePadding}px`,
    '--lgd-cam-size': `${cameraSize}px`,
    '--lgd-cam-top': `${cameraTop}px`,
    '--lgd-neck-w': `${neckWidth}px`,
    '--lgd-neck-h': `${neckHeight}px`,
    '--lgd-foot-w': `${footWidth}px`,
    '--lgd-foot-h': `${footHeight}px`,
    ...style,
  };

  return (
    <div
      className={['liquid-glass-desktop', className].filter(Boolean).join(' ')}
      style={rootStyle}
    >
      <style>{desktopFrameStyles}</style>
      <div className="liquid-glass-desktop__frame">
        <div className="liquid-glass-desktop__screen">
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
        {showCamera && (
          <span className="liquid-glass-desktop__camera" aria-hidden="true" />
        )}
      </div>
      {showStand && (
        <>
          <div className="liquid-glass-desktop__neck" aria-hidden="true" />
          <div className="liquid-glass-desktop__foot" aria-hidden="true" />
        </>
      )}
    </div>
  );
}

const desktopFrameStyles = `
.liquid-glass-desktop {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: var(--lgd-w);
  isolation: isolate;
}

/* ---- Screen + bezel ---- */
.liquid-glass-desktop__frame {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: var(--lgd-screen-h);
  padding: var(--lgd-pad);
  border-radius: var(--lgd-r-outer);
  background:
    linear-gradient(140deg,
      rgba(255, 255, 255, 0.20) 0%,
      rgba(255, 255, 255, 0.05) 35%,
      rgba(255, 255, 255, 0.02) 65%,
      rgba(255, 255, 255, 0.16) 100%);
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  box-shadow:
    0 50px 120px -30px rgba(15, 20, 30, 0.55),
    0 20px 40px -15px rgba(15, 20, 30, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.55),
    inset 0 2px 1px rgba(255, 255, 255, 0.92),
    inset 0 -1.5px 1px rgba(255, 255, 255, 0.28),
    inset 2px 0 0 rgba(255, 255, 255, 0.40),
    inset -2px 0 0 rgba(255, 255, 255, 0.40);
}

.liquid-glass-desktop__frame::before,
.liquid-glass-desktop__frame::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.liquid-glass-desktop__frame::before {
  background:
    radial-gradient(140% 55% at 12% -10%, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0) 55%),
    radial-gradient(130% 55% at 88% 100%, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0) 60%);
  mix-blend-mode: screen;
}

.liquid-glass-desktop__frame::after {
  box-shadow:
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.60),
    inset 0 0 1px 0.5px rgba(0, 0, 0, 0.30);
}

.liquid-glass-desktop__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--lgd-r-inner);
  overflow: hidden;
  background: #0a0a0a;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.85),
    inset 0 0 0 2px rgba(255, 255, 255, 0.04);
  z-index: 1;
}

.liquid-glass-desktop__screen > iframe,
.liquid-glass-desktop__screen > * {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.liquid-glass-desktop__camera {
  position: absolute;
  top: var(--lgd-cam-top);
  left: 50%;
  transform: translateX(-50%);
  width: var(--lgd-cam-size);
  height: var(--lgd-cam-size);
  background:
    radial-gradient(circle at 35% 35%, rgba(60, 60, 80, 0.95) 0%, #050505 70%);
  border-radius: 999px;
  z-index: 5;
  box-shadow:
    inset 0 0.5px 0.5px rgba(255, 255, 255, 0.35),
    0 0 0 0.5px rgba(0, 0, 0, 0.65),
    0 0 4px rgba(180, 200, 255, 0.20);
}

/* ---- Stand: glass-textured neck + foot, both rendered with the same
       backdrop-filter so they pick up the background like the screen frame. ---- */
.liquid-glass-desktop__neck {
  position: relative;
  width: var(--lgd-neck-w);
  height: var(--lgd-neck-h);
  margin-top: -1px;
  border-radius: 0 0 4px 4px;
  background:
    linear-gradient(180deg,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.14) 100%);
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  box-shadow:
    inset 1px 0 0 rgba(255, 255, 255, 0.50),
    inset -1px 0 0 rgba(255, 255, 255, 0.50),
    inset 0 -1px 0 rgba(255, 255, 255, 0.20),
    0 4px 12px -4px rgba(15, 20, 30, 0.45);
}

.liquid-glass-desktop__foot {
  position: relative;
  width: var(--lgd-foot-w);
  height: var(--lgd-foot-h);
  margin-top: -1px;
  border-radius: 0 0 6px 6px;
  background:
    linear-gradient(180deg,
      rgba(255, 255, 255, 0.20) 0%,
      rgba(255, 255, 255, 0.06) 60%,
      rgba(255, 255, 255, 0.16) 100%);
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -1px 0 rgba(255, 255, 255, 0.25),
    inset 1px 0 0 rgba(255, 255, 255, 0.35),
    inset -1px 0 0 rgba(255, 255, 255, 0.35),
    0 10px 24px -8px rgba(15, 20, 30, 0.55);
}
`;
