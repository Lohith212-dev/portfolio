import { useEffect, useRef, useState } from 'react';
import DesktopFrame from '../../../case-study/device-frames/DesktopFrame';
import {
  LiveEmbedArrow,
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
} from '../../../icons/icons';
import ScreenshotCarousel from '../ScreenshotCarousel';
import styles from './WorkPreview.module.css';

// The live embed always shows inside the landscape liquid-glass monitor frame,
// on every breakpoint, so the preview keeps one consistent width-to-height
// aspect ratio (no portrait tablet/phone frames). The width is capped and
// otherwise fills the available container width.
const FRAME_CAP = 1000;
const FRAME_FALLBACK = 920;

// The viewport width (in CSS px) we want the embedded site to *think* it has,
// so it renders its desktop layout. An <iframe>'s internal viewport equals its
// own CSS width, so we render it at this width and scale it down to fit the
// frame's actual screen area: scale = screenWidth / DESIGN_VIEWPORT.
const DESIGN_VIEWPORT = 1440;

export default function WorkPreview({
  title,
  embedUrl,
  liveBadge,
  screenshots,
  walkthroughNote,
}) {
  const shellRef = useRef(null);
  const viewportRef = useRef(null);
  const pageScrollTopRef = useRef(0);
  const wasFullscreenRef = useRef(false);
  const [shellWidth, setShellWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  // Two tabs above the frame (when a walkthrough video exists): the live site
  // and the product-walkthrough video.
  const [activeTab, setActiveTab] = useState('preview');

  // Track the available width so the device frame fills its container (capped).
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

  // Measure the actual screen area inside the device frame's bezel so the
  // zoom factor tracks the real available space (no need to recompute bezel math).
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const node = viewportRef.current;
    if (!node) return undefined;
    const update = () => setScreenSize({ width: node.clientWidth, height: node.clientHeight });
    update();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [shellWidth, activeTab]);

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

  if (!embedUrl && !screenshots?.length) {
    return null;
  }

  const frameWidth = shellWidth > 0
    ? Math.min(shellWidth, FRAME_CAP)
    : FRAME_FALLBACK;

  // Render the iframe at the desktop design viewport, then scale it down to the
  // measured screen width. The scaled height is sized so it fills the screen.
  const designWidth = DESIGN_VIEWPORT;
  const zoom = screenSize.width > 0 ? screenSize.width / designWidth : 1;
  const scalerStyle = screenSize.width > 0
    ? {
      width: `${designWidth}px`,
      height: `${screenSize.height / zoom}px`,
      transform: `scale(${zoom})`,
    }
    : undefined;

  const hasWalkthrough = Boolean(walkthroughNote?.embedUrl);
  const isWalkthrough = hasWalkthrough && activeTab === 'walkthrough';
  const walkthroughTabLabel = walkthroughNote?.tabLabel || 'Product walkthrough';
  // The walkthrough video sits in the same monitor frame at 16:9 (no scaler).
  const walkthroughWidth = shellWidth > 0
    ? Math.min(shellWidth, FRAME_CAP)
    : FRAME_FALLBACK;

  const tabs = hasWalkthrough ? (
    <div className={styles.previewTabs}>
      <div
        className={styles.previewToggle}
        data-active={isWalkthrough ? 'walkthrough' : 'preview'}
        role="tablist"
        aria-label={`${title} preview`}
      >
        <span className={styles.previewToggleIndicator} aria-hidden="true" />
        <button
          type="button"
          role="tab"
          aria-selected={!isWalkthrough}
          className={`${styles.previewToggleButton} ${!isWalkthrough ? styles.previewToggleButtonActive : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Live product
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isWalkthrough}
          className={`${styles.previewToggleButton} ${isWalkthrough ? styles.previewToggleButtonActive : ''}`}
          onClick={() => setActiveTab('walkthrough')}
        >
          {walkthroughTabLabel}
        </button>
      </div>
    </div>
  ) : null;

  // Disclaimer stays with the walkthrough video, where it belongs.
  const disclaimer = isWalkthrough && walkthroughNote.trail ? (
    <p className={styles.walkthroughNote}>{walkthroughNote.trail}</p>
  ) : null;

  const fullscreenControl = !isFullscreen ? (
    <button
      type="button"
      className={`${styles.controlButton} ${styles.controlDockOutside}`}
      aria-label="View fullscreen"
      onClick={toggleFullscreen}
    >
      <VideoEnterFullscreenIcon />
    </button>
  ) : null;

  const exitFullscreenControl = isFullscreen ? (
    <button
      type="button"
      className={`${styles.controlButton} ${styles.controlDockInside}`}
      aria-label="Exit fullscreen"
      onClick={toggleFullscreen}
    >
      <VideoExitFullscreenIcon />
    </button>
  ) : null;

  let stage;
  if (isWalkthrough) {
    stage = (
      <div ref={shellRef} className={styles.frameShell}>
        <div className={styles.frameStage}>
          {fullscreenControl}
          <DesktopFrame
            width={walkthroughWidth}
            showStand
            screenAspectRatio={9 / 16}
            className={styles.deviceFrame}
          >
            <div
              ref={viewportRef}
              className={`${styles.previewViewport} ${isFullscreen ? styles.previewViewportFullscreen : ''}`}
            >
              {exitFullscreenControl}
              <iframe
                src={walkthroughNote.embedUrl}
                title={`${title} product walkthrough`}
                className={styles.previewEmbed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </DesktopFrame>
        </div>
      </div>
    );
  } else if (embedUrl) {
    stage = (
      <div ref={shellRef} className={styles.frameShell}>
        <div className={styles.frameStage}>
          {liveBadge ? (
            <span className={styles.liveBadgeSide} aria-hidden="true">
              <span className={styles.liveBadgeLabel}>{liveBadge}</span>
              <LiveEmbedArrow className={styles.liveBadgeSideArrow} color="currentColor" />
            </span>
          ) : null}

          {liveBadge ? (
            <span className={styles.liveBadgeChip} aria-hidden="true">
              <span className={styles.liveBadgeChipDot} />
              {liveBadge}
            </span>
          ) : null}

          {fullscreenControl}

          <DesktopFrame width={frameWidth} showStand className={styles.deviceFrame}>
            <div
              ref={viewportRef}
              className={`${styles.previewViewport} ${isFullscreen ? styles.previewViewportFullscreen : ''}`}
            >
              {exitFullscreenControl}

              <div
                className={styles.previewScaler}
                style={isFullscreen ? undefined : scalerStyle}
              >
                <iframe
                  src={embedUrl}
                  title={`${title} live website preview`}
                  className={styles.previewEmbed}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </DesktopFrame>
        </div>
      </div>
    );
  } else {
    stage = <ScreenshotCarousel title={title} screenshots={screenshots} />;
  }

  return (
    <div className={styles.previewRoot}>
      {tabs}
      {disclaimer}
      {stage}
    </div>
  );
}
