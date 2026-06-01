import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../SatLmsCaseStudy.module.css';

export default function NextCaseStudyPreview() {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [playsByDefault, setPlaysByDefault] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
    const syncPlayMode = () => setPlaysByDefault(mediaQuery.matches);

    syncPlayMode();
    mediaQuery.addEventListener('change', syncPlayMode);

    return () => mediaQuery.removeEventListener('change', syncPlayMode);
  }, []);

  const shouldPlayVideo = isActive || playsByDefault;

  useEffect(() => {
    if (!videoRef.current || !shouldPlayVideo) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }, [shouldPlayVideo]);

  const handlePointerMove = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--next-cursor-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--next-cursor-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <a
      className={styles.nextCasePreview}
      href="/case-studies/spark-presenter"
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <span className={styles.nextCaseMediaFrame}>
        <span className={styles.nextCaseRibbon} aria-hidden="true">
          1 structure / many lessons
        </span>
        <span className={styles.nextCaseMediaSurface} aria-hidden="true">
          {shouldPlayVideo ? (
            <video
              ref={videoRef}
              className={styles.nextCasePreviewVideo}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
            >
              <source src="/videos/work/work-spark-presenter-preview.webm" type="video/webm" />
              <source src="/videos/work/work-spark-presenter-preview.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/images/work/work-spark-presenter-preview-thumbnail.webp"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 768px) 25rem, 100vw"
              className={styles.nextCasePosterImage}
            />
          )}
        </span>
      </span>
      <span className={styles.nextCaseCopy}>
        <span className={styles.nextCaseTitle}>How I built an assembly line for learning content - and made manual production obsolete</span>
        <span className={styles.nextCaseSummary}>
          I built a component system and automation pipeline that turns raw course content into production-ready learning experiences in minutes.
        </span>
      </span>
      <span className={styles.nextCaseHoverCue} aria-hidden="true">
        View in detail
      </span>
    </a>
  );
}
