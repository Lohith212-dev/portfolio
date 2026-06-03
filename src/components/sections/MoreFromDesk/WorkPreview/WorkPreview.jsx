import { useEffect, useRef, useState } from 'react';
import DesktopFrame from '../../../case-study/device-frames/DesktopFrame';
import TabletFrame from '../../../case-study/device-frames/TabletFrame';
import PhoneFrame from '../../../case-study/device-frames/PhoneFrame';
import {
  LiveEmbedArrow,
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
} from '../../../icons/icons';
import ScreenshotCarousel from '../ScreenshotCarousel';
import styles from './WorkPreview.module.css';

// The live embed shows inside the same liquid-glass device frames the LMS
// case study uses, switching by breakpoint (desktop monitor / tablet / phone)
// so the responsive site is shown in the matching device. Widths are capped
// per device and otherwise fill the available container width.
const FRAME_CAP = { desktop: 1000, tablet: 560, phone: 290 };
const FRAME_FALLBACK = { desktop: 920, tablet: 520, phone: 270 };

// The viewport width (in CSS px) we want the embedded site to *think* it has,
// so it renders the matching layout. An <iframe>'s internal viewport equals its
// own CSS width, so we render it at this width and scale it down to fit the
// frame's actual screen area: scale = screenWidth / DESIGN_VIEWPORT.
const DESIGN_VIEWPORT = { desktop: 1440, tablet: 820, phone: 390 };

function DeviceFrame({ kind, width, className, children }) {
  if (kind === 'tablet') {
    return <TabletFrame width={width} className={className}>{children}</TabletFrame>;
  }
  if (kind === 'phone') {
    return <PhoneFrame width={width} className={className}>{children}</PhoneFrame>;
  }
  return <DesktopFrame width={width} showStand className={className}>{children}</DesktopFrame>;
}

export default function WorkPreview({
  title,
  embedUrl,
  liveBadge,
  screenshots,
  walkthroughNote,
  onOpenWalkthrough,
}) {
  const shellRef = useRef(null);
  const viewportRef = useRef(null);
  const pageScrollTopRef = useRef(0);
  const [shellWidth, setShellWidth] = useState(0);
  const [deviceKind, setDeviceKind] = useState('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

  // Pick the device frame to match the breakpoint (the embedded site is responsive).
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    const mqTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023.98px)');
    const update = () => {
      setDeviceKind(mqDesktop.matches ? 'desktop' : mqTablet.matches ? 'tablet' : 'phone');
    };
    update();
    mqDesktop.addEventListener('change', update);
    mqTablet.addEventListener('change', update);
    return () => {
      mqDesktop.removeEventListener('change', update);
      mqTablet.removeEventListener('change', update);
    };
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
  }, [deviceKind, shellWidth]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isActive = document.fullscreenElement === viewportRef.current;
      setIsFullscreen(isActive);
      if (!isActive) {
        window.setTimeout(() => {
          window.scrollTo({ top: pageScrollTopRef.current, behavior: 'auto' });
        }, 0);
      }
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
    ? Math.min(shellWidth, FRAME_CAP[deviceKind])
    : FRAME_FALLBACK[deviceKind];

  // Render the iframe at the device's design viewport, then scale it down to the
  // measured screen width. The scaled height is sized so it fills the screen.
  const designWidth = DESIGN_VIEWPORT[deviceKind];
  const zoom = screenSize.width > 0 ? screenSize.width / designWidth : 1;
  const scalerStyle = screenSize.width > 0
    ? {
      width: `${designWidth}px`,
      height: `${screenSize.height / zoom}px`,
      transform: `scale(${zoom})`,
    }
    : undefined;

  const walkthrough = walkthroughNote ? (
    <p className={styles.walkthroughNote}>
      <span>{walkthroughNote.lead} </span>
      <button
        type="button"
        className={styles.walkthroughButton}
        onClick={() => onOpenWalkthrough?.({
          title: walkthroughNote.modalTitle || walkthroughNote.label,
          browserTitle: 'Neuron walkthrough',
          url: walkthroughNote.embedUrl,
        })}
      >
        {walkthroughNote.label} <span aria-hidden="true">{'↗'}</span>
      </button>
      {walkthroughNote.trail ? <span> - {walkthroughNote.trail}</span> : null}
    </p>
  ) : null;

  if (!embedUrl) {
    return (
      <>
        <ScreenshotCarousel title={title} screenshots={screenshots} />
        {walkthrough}
      </>
    );
  }

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

          <DeviceFrame kind={deviceKind} width={frameWidth} className={styles.deviceFrame}>
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
          </DeviceFrame>
        </div>
      </div>

      {walkthrough}
    </>
  );
}
