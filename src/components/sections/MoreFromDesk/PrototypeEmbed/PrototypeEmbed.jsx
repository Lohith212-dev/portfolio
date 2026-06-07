import { useEffect, useRef, useState } from 'react';
import DesktopFrame from '../../../case-study/device-frames/DesktopFrame';
import {
  LiveEmbedArrow,
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
} from '../../../icons/icons';
import styles from './PrototypeEmbed.module.css';

/* Prototype embeds (Adobe XD / Figma share links) render a fixed-size artboard
   and do NOT reflow across breakpoints the way a live responsive site does.
   So unlike WorkPreview, this frame stays a desktop monitor on every device,
   and the screen area inside the bezel keeps the artboard's aspect ratio so
   the prototype fits edge to edge instead of letterboxing. Reusable by any
   showcase entry that embeds an XD or Figma prototype — `aspect` carries the
   artboard resolution ({ width, height }) and `maxWidth` caps how wide the
   monitor renders on screen, so other apps can plug in their own sizes. */
const FRAME_CAP = 1000;
const FRAME_FALLBACK = 920;
const DEFAULT_ASPECT = { width: 1536, height: 728 };

export default function PrototypeEmbed({
  title,
  embedUrl,
  liveBadge,
  aspect,
  maxWidth,
  walkthroughNote,
  onOpenWalkthrough,
}) {
  const shellRef = useRef(null);
  const viewportRef = useRef(null);
  const pageScrollTopRef = useRef(0);
  const wasFullscreenRef = useRef(false);
  const [shellWidth, setShellWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Track the available width so the frame fills its container (capped).
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const node = shellRef.current;
    if (!node) return undefined;
    const update = () => setShellWidth(node.clientWidth);
    update();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isActive = document.fullscreenElement === viewportRef.current;
      setIsFullscreen(isActive);
      /* Restore only when THIS viewport exits fullscreen. Other elements'
         fullscreen transitions fire this event too — restoring on those
         would jump the page to a stale (initially 0 = hero) position. */
      if (!isActive && wasFullscreenRef.current) {
        window.setTimeout(() => {
          window.scrollTo({ top: pageScrollTopRef.current, behavior: 'auto' });
        }, 0);
      }
      wasFullscreenRef.current = isActive;
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen?.().catch?.(() => {});
      return;
    }
    pageScrollTopRef.current = window.scrollY;
    await viewport.requestFullscreen?.().catch?.(() => {});
  };

  if (!embedUrl) {
    return null;
  }

  const frameCap = maxWidth || FRAME_CAP;
  const frameWidth = shellWidth > 0
    ? Math.min(shellWidth, frameCap)
    : Math.min(FRAME_FALLBACK, frameCap);
  const ratio = (aspect?.height || DEFAULT_ASPECT.height) / (aspect?.width || DEFAULT_ASPECT.width);

  return (
    <>
      <div ref={shellRef} className={styles.frameShell}>
        {liveBadge ? (
          <span className={styles.liveBadgeSide} aria-hidden="true">
            <span className={styles.liveBadgeLabel}>{liveBadge}</span>
            <LiveEmbedArrow className={styles.liveBadgeSideArrow} color="currentColor" />
          </span>
        ) : null}

        <div className={styles.frameStage}>
          {liveBadge ? (
            <span className={styles.liveBadgeChip} aria-hidden="true">
              <span className={styles.liveBadgeChipDot} />
              {liveBadge}
            </span>
          ) : null}

          {!isFullscreen ? (
            <button
              type="button"
              className={`${styles.controlButton} ${styles.controlDockOutside}`}
              aria-label="View fullscreen"
              onClick={toggleFullscreen}
            >
              <VideoEnterFullscreenIcon />
            </button>
          ) : null}

          <DesktopFrame
            width={frameWidth}
            showStand
            screenAspectRatio={ratio}
            className={styles.deviceFrame}
          >
            <div
              ref={viewportRef}
              className={`${styles.previewViewport} ${isFullscreen ? styles.previewViewportFullscreen : ''}`}
            >
              {isFullscreen ? (
                <button
                  type="button"
                  className={`${styles.controlButton} ${styles.controlDockInside}`}
                  aria-label="Exit fullscreen"
                  onClick={toggleFullscreen}
                >
                  <VideoExitFullscreenIcon />
                </button>
              ) : null}

              {/* No down-scaling wrapper: the prototype player sizes its
                  artboard to the iframe, so the iframe just fills the screen. */}
              <iframe
                src={embedUrl}
                title={`${title} prototype preview`}
                className={styles.previewEmbed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </DesktopFrame>
        </div>
      </div>

      {walkthroughNote ? (
        <p className={styles.walkthroughNote}>
          <span>{walkthroughNote.lead} </span>
          <button
            type="button"
            className={styles.walkthroughButton}
            onClick={() => onOpenWalkthrough?.({
              title: walkthroughNote.modalTitle || walkthroughNote.label,
              browserTitle: walkthroughNote.browserTitle || walkthroughNote.modalTitle || walkthroughNote.label,
              url: walkthroughNote.embedUrl,
            })}
          >
            {walkthroughNote.label} <span aria-hidden="true">{'↗'}</span>
          </button>
          {walkthroughNote.trail ? <span> - {walkthroughNote.trail}</span> : null}
        </p>
      ) : null}
    </>
  );
}
