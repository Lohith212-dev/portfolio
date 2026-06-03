import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';

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
      className={lmsStyles.nextCasePreview}
      href="/more-works/egmat-public-website"
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <span className={lmsStyles.nextCaseMediaFrame}>
        <span className={lmsStyles.nextCaseRibbon} aria-hidden="true">
          Trust / SEO / conversion
        </span>
        <span className={lmsStyles.nextCaseMediaSurface} aria-hidden="true">
          {shouldPlayVideo ? (
            <video
              ref={videoRef}
              className={lmsStyles.nextCasePreviewVideo}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              poster="/images/work/work-egmat-website-preview-thumbnail.png"
            >
              <source src="/videos/work/work-egmat-website-preview.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/images/work/work-egmat-website-preview-thumbnail.png"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 768px) 25rem, 100vw"
              className={lmsStyles.nextCasePosterImage}
            />
          )}
        </span>
      </span>
      <span className={lmsStyles.nextCaseCopy}>
        <span className={lmsStyles.nextCaseTitle}>How I rebuilt the website to make product value easier to trust</span>
        <span className={lmsStyles.nextCaseSummary}>
          I reorganized messaging, proof, and action paths so visitors could understand the offering faster and move forward with more confidence.
        </span>
      </span>
      <span className={lmsStyles.nextCaseHoverCue} aria-hidden="true">
        View in detail
      </span>
    </a>
  );
}
