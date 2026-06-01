import { useEffect, useRef, useState } from 'react';
import MoreWorkBrowserFrame from '../MoreWorkBrowserFrame';
import styles from './ScreenshotCarousel.module.css';

export default function ScreenshotCarousel({ title, screenshots }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef(null);

  const slides = screenshots || [];
  const safeIndex = Math.min(activeIndex, Math.max(slides.length - 1, 0));
  const activeSlide = slides[safeIndex];

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [safeIndex]);

  if (!slides.length) {
    return null;
  }

  const baseId = `${title}-screenshot`.replace(/\s+/g, '-').toLowerCase();
  const hasTabs = slides.length > 1;

  const slideLabel = (slide, index) => slide.label || `Screen ${index + 1}`;

  return (
    <div className={styles.carousel}>
      {hasTabs ? (
        <div
          className={styles.tabs}
          role="tablist"
          aria-label={`${title} screenshots`}
        >
          {slides.map((slide, index) => {
            const tabId = `${baseId}-${index}`;
            const isActive = index === safeIndex;

            return (
              <button
                key={tabId}
                id={`${tabId}-tab`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabId}-panel`}
                tabIndex={isActive ? 0 : -1}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {slideLabel(slide, index)}
              </button>
            );
          })}
        </div>
      ) : null}

      <MoreWorkBrowserFrame
        title={title}
        darkChrome
        className={styles.frame}
        bodyClassName={styles.frameBody}
      >
        <div
          id={`${baseId}-${safeIndex}-panel`}
          role="tabpanel"
          aria-labelledby={hasTabs ? `${baseId}-${safeIndex}-tab` : undefined}
          aria-label={hasTabs ? undefined : title}
          className={styles.frameInner}
        >
          <div ref={viewportRef} className={styles.viewport}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeSlide.src}
              alt={activeSlide.alt || slideLabel(activeSlide, safeIndex)}
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </MoreWorkBrowserFrame>

      {activeSlide.caption ? (
        <p className={styles.caption}>{activeSlide.caption}</p>
      ) : null}
    </div>
  );
}
