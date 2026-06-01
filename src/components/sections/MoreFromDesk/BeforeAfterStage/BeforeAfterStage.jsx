import { useEffect, useRef, useState } from 'react';
import {
  VideoPauseIcon,
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
  VideoPlayIcon,
} from '../../../icons/icons';
import InfoIcon from '../InfoIcon';
import ScrollingScreenshot from '../ScrollingScreenshot';
import styles from './BeforeAfterStage.module.css';

export default function BeforeAfterStage({ media }) {
  const [activeSide, setActiveSide] = useState('after');
  const [fullscreenSide, setFullscreenSide] = useState(null);
  const [isPaused, setIsPaused] = useState({
    before: false,
    after: false,
  });
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === beforeRef.current) {
        setFullscreenSide('before');
        return;
      }

      if (document.fullscreenElement === afterRef.current) {
        setFullscreenSide('after');
        return;
      }

      setFullscreenSide(null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const togglePaused = (side) => {
    setIsPaused((current) => ({
      ...current,
      [side]: !current[side],
    }));
  };

  const toggleFullscreen = async (side) => {
    const panel = side === 'before' ? beforeRef.current : afterRef.current;

    if (!panel) {
      return;
    }

    if (document.fullscreenElement === panel) {
      await document.exitFullscreen?.();
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    }

    setActiveSide(side);
    await panel.requestFullscreen?.();
  };

  const panels = [
    {
      side: 'before',
      annotation: 'Before',
      src: media.beforeSrc,
      alt: media.beforeAlt,
    },
    {
      side: 'after',
      annotation: 'After',
      src: media.afterSrc,
      alt: media.afterAlt,
    },
  ];

  return (
    <div className={styles.compareStage}>
      <p className={styles.compareHint}>
        <span className={styles.compareHintIcon} aria-hidden="true">
          <InfoIcon />
        </span>
        <span>Click on the view before or after to swipe the view and see it in full screen.</span>
      </p>
      <div className={styles.compareStack}>
        {panels.map((panel) => {
          const isActive = activeSide === panel.side;
          const isFullscreen = fullscreenSide === panel.side;

          return (
            <article
              key={panel.side}
              ref={panel.side === 'before' ? beforeRef : afterRef}
              className={[
                styles.comparePanel,
                isActive ? styles.comparePanelActive : styles.comparePanelInactive,
                panel.side === 'before' ? styles.comparePanelBefore : styles.comparePanelAfter,
              ].join(' ')}
              onClick={() => setActiveSide(panel.side)}
            >
              <div className={styles.compareCard}>
                {!isFullscreen ? (
                  <div className={styles.compareCardHeader}>
                    <span
                      className={[
                        styles.compareAnnotation,
                        panel.side === 'before' ? styles.compareAnnotationBefore : styles.compareAnnotationAfter,
                      ].join(' ')}
                    >
                      {panel.annotation}
                    </span>
                    <div className={styles.compareControls}>
                      <button
                        type="button"
                        className={styles.glassButton}
                        aria-label={isPaused[panel.side] ? `Resume ${panel.annotation.toLowerCase()} scroll` : `Pause ${panel.annotation.toLowerCase()} scroll`}
                        onClick={(event) => {
                          event.stopPropagation();
                          togglePaused(panel.side);
                        }}
                      >
                        {isPaused[panel.side] ? <VideoPlayIcon /> : <VideoPauseIcon />}
                      </button>
                      <button
                        type="button"
                        className={styles.glassButton}
                        aria-label={`View ${panel.annotation.toLowerCase()} fullscreen`}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleFullscreen(panel.side);
                        }}
                      >
                        <VideoEnterFullscreenIcon />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className={`${styles.glassButton} ${styles.fullscreenExitButton}`}
                    aria-label={`Exit fullscreen ${panel.annotation.toLowerCase()} view`}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleFullscreen(panel.side);
                    }}
                  >
                    <VideoExitFullscreenIcon />
                  </button>
                )}

                <ScrollingScreenshot
                  src={panel.src}
                  alt={panel.alt}
                  autoScroll={!isFullscreen && !isPaused[panel.side]}
                  allowViewportScroll={isFullscreen}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
