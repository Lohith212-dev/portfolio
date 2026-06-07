import { useEffect, useRef, useState } from 'react';
import MoreWorkBrowserFrame from '../MoreWorkBrowserFrame';
import ScreenAssetViewport from '../ScreenAssetViewport';
import styles from './ScreenSetShowcase.module.css';

export default function ScreenSetShowcase({ screenSet, sectionTitle }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const rootRef = useRef(null);
  /* Auto-advance (screenSet.autoAdvance, ms): cycles the tabs like a step-by-
     step animation while the set is on screen. A manual tab click hands
     control back to the reader permanently. Intentionally not gated on
     prefers-reduced-motion: this is content progression (a discrete tab
     swap), not decorative motion — and Windows maps "Animation effects:
     off" to reduce, which would silently kill the walkthrough. */
  const [autoPlaying, setAutoPlaying] = useState(Boolean(screenSet.autoAdvance));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!screenSet.autoAdvance || !autoPlaying) return undefined;
    if (typeof window === 'undefined') return undefined;
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [screenSet.autoAdvance, autoPlaying]);

  useEffect(() => {
    if (!screenSet.autoAdvance || !autoPlaying || !inView) return undefined;
    const id = window.setInterval(() => {
      setActiveTabIndex((index) => (index + 1) % screenSet.tabs.length);
    }, screenSet.autoAdvance);
    return () => window.clearInterval(id);
  }, [screenSet.autoAdvance, autoPlaying, inView, screenSet.tabs.length]);

  const activeTab = screenSet.tabs[activeTabIndex];
  const activeIdBase = `${sectionTitle}-${activeTabIndex}`.replace(/\s+/g, '-').toLowerCase();

  return (
    <div ref={rootRef} className={styles.screenShowcase}>
      {screenSet.tabs.length > 1 ? (
        <div className={styles.screenTabs} role="tablist" aria-label={`${sectionTitle} screen variations`}>
          {screenSet.tabs.map((tab, index) => {
            const tabId = `${sectionTitle}-${index}`.replace(/\s+/g, '-').toLowerCase();
            const isActive = index === activeTabIndex;

            return (
              <button
                key={tab.label}
                id={`${tabId}-tab`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabId}-panel`}
                tabIndex={isActive ? 0 : -1}
                className={`${styles.screenTab} ${isActive ? styles.screenTabActive : ''}`}
                onClick={() => {
                  setAutoPlaying(false);
                  setActiveTabIndex(index);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {screenSet.plain ? (
        /* Supporting illustration, not product UI — rendered as a simple
           image at its own proportions, no browser chrome around it. */
        <div
          id={`${activeIdBase}-panel`}
          role="tabpanel"
          aria-labelledby={screenSet.tabs.length > 1 ? `${activeIdBase}-tab` : undefined}
          aria-label={screenSet.tabs.length === 1 ? sectionTitle : undefined}
          className={styles.plainPanel}
        >
          {/* All tabs render (inactive ones hidden) so switching — manual or
              auto — never waits on a fresh image fetch. Hidden + lazy would
              never load, so multi-tab sets load eagerly. */}
          {screenSet.tabs.map((tab, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={tab.label}
              src={tab.src}
              alt={tab.alt}
              className={styles.plainImage}
              loading={screenSet.tabs.length > 1 ? 'eager' : 'lazy'}
              hidden={index !== activeTabIndex}
            />
          ))}
        </div>
      ) : (
        <MoreWorkBrowserFrame
          title={screenSet.frameTitle || sectionTitle}
          className={styles.screenFrame}
          bodyClassName={styles.screenFrameBody}
        >
          <div
            id={`${activeIdBase}-panel`}
            role="tabpanel"
            aria-labelledby={screenSet.tabs.length > 1 ? `${activeIdBase}-tab` : undefined}
            aria-label={screenSet.tabs.length === 1 ? sectionTitle : undefined}
            className={styles.screenFrameInner}
          >
            <ScreenAssetViewport
              src={activeTab.src}
              alt={activeTab.alt}
              resetKey={`${activeTab.label}-${activeTabIndex}`}
            />
          </div>
        </MoreWorkBrowserFrame>
      )}

      {activeTab.caption ? (
        <p className={styles.screenCaption}>{activeTab.caption}</p>
      ) : null}
    </div>
  );
}
