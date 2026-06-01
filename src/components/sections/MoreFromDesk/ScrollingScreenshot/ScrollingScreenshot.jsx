import { useEffect, useRef, useState } from 'react';
import styles from './ScrollingScreenshot.module.css';

export default function ScrollingScreenshot({
  src,
  alt,
  autoScroll = true,
  allowViewportScroll = false,
}) {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const image = imageRef.current;

      if (!viewport || !image) {
        return;
      }

      setScrollDistance(Math.max(image.offsetHeight - viewport.clientHeight, 0));
    };

    measure();
    window.addEventListener('resize', measure);

    return () => window.removeEventListener('resize', measure);
  }, [src, allowViewportScroll]);

  return (
    <div
      ref={viewportRef}
      className={[
        styles.compareViewport,
        allowViewportScroll ? styles.compareViewportScrollable : '',
      ].join(' ')}
    >
      <div
        className={[
          styles.screenshotTrack,
          autoScroll && scrollDistance > 0 && !allowViewportScroll ? styles.screenshotTrackAnimating : '',
        ].join(' ')}
        style={{
          '--scroll-distance': `${scrollDistance}px`,
          '--scroll-duration': `${Math.max(14, scrollDistance / 34)}s`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={styles.screenshotImage}
          loading="lazy"
          onLoad={() => {
            const viewport = viewportRef.current;
            const image = imageRef.current;

            if (!viewport || !image) {
              return;
            }

            setScrollDistance(Math.max(image.offsetHeight - viewport.clientHeight, 0));
          }}
        />
      </div>
    </div>
  );
}
