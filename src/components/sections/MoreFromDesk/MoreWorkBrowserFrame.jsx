import { useEffect, useRef, useState } from 'react';
import {
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
} from '../../icons/icons';
import styles from './MoreWorkBrowserFrame.module.css';

export default function MoreWorkBrowserFrame({
  title,
  eyebrow,
  darkChrome = false,
  hideFullscreenControl = false,
  children,
  closeLabel,
  onClose,
  className = '',
  bodyClassName = '',
}) {
  const frameRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const frame = frameRef.current;

    if (!frame) return;

    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }

    frame.requestFullscreen?.();
  };

  return (
    <div ref={frameRef} className={`${styles.frame} ${className}`}>
      <div className={`${styles.chrome} ${darkChrome ? styles.chromeDark : ''}`}>
        <span className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.chromeTitle}>
          {eyebrow ? <span>{eyebrow}</span> : null}
          {title}
        </span>
        <span className={styles.controls}>
          {!hideFullscreenControl ? (
            <button
              type="button"
              className={styles.controlButton}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <VideoExitFullscreenIcon /> : <VideoEnterFullscreenIcon />}
            </button>
          ) : null}
          {onClose ? (
            <button
              type="button"
              className={styles.controlButton}
              aria-label={closeLabel || 'Close'}
              onClick={onClose}
            >
              <span aria-hidden="true">x</span>
            </button>
          ) : null}
        </span>
      </div>
      <div className={`${styles.body} ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}
