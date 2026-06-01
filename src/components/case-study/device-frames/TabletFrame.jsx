import React from 'react';

/**
 * <TabletFrame /> — Liquid-glass-style tablet frame (portrait).
 *
 * Wraps an iframe (or any React children) in a translucent glass bezel
 * inspired by Apple's "liquid glass" design language. Aims for a CLEAR
 * glass look (see-through rim with bright highlights), not a frosted one.
 *
 * Includes a front camera dot at the top center and a row of small
 * speaker dots along the bottom edge — both inside the bezel area, so
 * they don't overlap the iframe content.
 *
 * Props:
 *   src           string  — URL to load in the iframe. Optional (use `children` instead).
 *   title         string  — Accessibility label for the iframe. Default: "App preview".
 *   width         number  — Frame width in pixels. Height auto-scales. Default: 540.
 *   showCamera    boolean — Renders the front-camera dot at top center.
 *                           Default: true. Sits entirely inside the bezel.
 *   showSpeakers  boolean — Renders the bottom-edge speaker dots.
 *                           Default: true. Helps the component read as a tablet.
 *   children      node    — Content rendered inside the screen area (used when `src` is not provided).
 *   className     string  — Extra className appended to the root element.
 *   style         object  — Extra inline styles merged onto the root.
 *   iframeProps   object  — Extra props forwarded to the underlying <iframe>.
 *
 * Example:
 *   <TabletFrame src="https://your-app-demo.com" />
 *   <TabletFrame src="https://..." width={600} />
 */
export default function TabletFrame({
  src,
  title = 'App preview',
  width = 540,
  showCamera = true,
  showSpeakers = true,
  children,
  className = '',
  style = {},
  iframeProps = {},
}) {
  // Aspect ratio roughly matches a modern tablet in portrait (~ 1.4).
  const aspectRatio = 1.4;
  const height = Math.round(width * aspectRatio);
  const outerRadius = Math.round(width * 0.05);
  const framePadding = Math.max(12, Math.round(width * 0.028));
  const innerRadius = Math.max(0, outerRadius - framePadding);
  const cameraSize = Math.max(7, Math.round(width * 0.016));
  const cameraTop = Math.max(3, Math.round(framePadding / 2.6));

  const rootStyle = {
    '--lgt-w': `${width}px`,
    '--lgt-h': `${height}px`,
    '--lgt-r-outer': `${outerRadius}px`,
    '--lgt-r-inner': `${innerRadius}px`,
    '--lgt-pad': `${framePadding}px`,
    '--lgt-cam-size': `${cameraSize}px`,
    '--lgt-cam-top': `${cameraTop}px`,
    ...style,
  };

  return (
    <div
      className={['liquid-glass-tablet', className].filter(Boolean).join(' ')}
      style={rootStyle}
    >
      <style>{tabletFrameStyles}</style>
      <div className="liquid-glass-tablet__screen">
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
        <span className="liquid-glass-tablet__camera" aria-hidden="true" />
      )}
      {showSpeakers && (
        <div className="liquid-glass-tablet__speakers" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
      )}
    </div>
  );
}

const tabletFrameStyles = `
.liquid-glass-tablet {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: var(--lgt-w);
  height: var(--lgt-h);
  padding: var(--lgt-pad);
  border-radius: var(--lgt-r-outer);
  background:
    linear-gradient(140deg,
      rgba(255, 255, 255, 0.20) 0%,
      rgba(255, 255, 255, 0.05) 35%,
      rgba(255, 255, 255, 0.02) 65%,
      rgba(255, 255, 255, 0.16) 100%);
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  box-shadow:
    0 40px 100px -25px rgba(15, 20, 30, 0.55),
    0 16px 32px -12px rgba(15, 20, 30, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.55),
    inset 0 2px 1px rgba(255, 255, 255, 0.92),
    inset 0 -1.5px 1px rgba(255, 255, 255, 0.28),
    inset 2px 0 0 rgba(255, 255, 255, 0.40),
    inset -2px 0 0 rgba(255, 255, 255, 0.40);
  isolation: isolate;
}

.liquid-glass-tablet::before,
.liquid-glass-tablet::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.liquid-glass-tablet::before {
  background:
    radial-gradient(135% 60% at 15% -8%, rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0) 55%),
    radial-gradient(125% 60% at 85% 100%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0) 60%);
  mix-blend-mode: screen;
}

.liquid-glass-tablet::after {
  box-shadow:
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.62),
    inset 0 0 1px 0.5px rgba(0, 0, 0, 0.30);
}

.liquid-glass-tablet__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--lgt-r-inner);
  overflow: hidden;
  background: #0a0a0a;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.85),
    inset 0 0 0 2px rgba(255, 255, 255, 0.04);
  z-index: 1;
}

.liquid-glass-tablet__screen > iframe,
.liquid-glass-tablet__screen > * {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Front camera — sits inside the top bezel, doesn't overlap screen. */
.liquid-glass-tablet__camera {
  position: absolute;
  top: var(--lgt-cam-top);
  left: 50%;
  transform: translateX(-50%);
  width: var(--lgt-cam-size);
  height: var(--lgt-cam-size);
  background:
    radial-gradient(circle at 35% 35%, rgba(60, 60, 80, 0.95) 0%, #050505 70%);
  border-radius: 999px;
  z-index: 5;
  box-shadow:
    inset 0 0.5px 0.5px rgba(255, 255, 255, 0.35),
    0 0 0 0.5px rgba(0, 0, 0, 0.65),
    0 0 4px rgba(180, 200, 255, 0.20);
}

/* Bottom-edge stereo speaker grill — small dots in the bezel area. */
.liquid-glass-tablet__speakers {
  position: absolute;
  bottom: calc(var(--lgt-cam-top) - 1px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 3px;
  z-index: 5;
  pointer-events: none;
}

.liquid-glass-tablet__speakers > span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  box-shadow: inset 0 0.5px 0.5px rgba(255, 255, 255, 0.20);
}
`;
