import { useEffect, useRef, useState } from 'react';
import {
  VideoPauseIcon,
  ChevronRight,
  VideoEnterFullscreenIcon,
  VideoExitFullscreenIcon,
  VideoPlayIcon,
  GmatClubWordmarkIcon,
  TestimonialAvatarIcon,
} from '../../icons/icons';
import MoreWorkBrowserFrame from './MoreWorkBrowserFrame';
import MoreWorkEmbedModal from './MoreWorkEmbedModal';
import styles from './WebsiteShowcasePage.module.css';

const comparisonMediaByDecision = {
  '01': {
    beforeSrc: '/images/case-studies/website/home-old.png',
    afterSrc: '/images/case-studies/website/home-new.png',
    beforeAlt: 'Original e-GMAT homepage screenshot.',
    afterAlt: 'Redesigned e-GMAT homepage screenshot.',
  },
  '03': {
    beforeSrc: '/images/case-studies/website/pricing-old.png',
    afterSrc: '/images/case-studies/website/pricing-new.png',
    beforeAlt: 'Original e-GMAT pricing page screenshot.',
    afterAlt: 'Redesigned e-GMAT pricing page screenshot.',
  },
  '04': {
    beforeSrc: '/images/case-studies/website/success-story-opened-old.png',
    afterSrc: '/images/case-studies/website/success-story-opened-new.png',
    beforeAlt: 'Original e-GMAT success story modal screenshot.',
    afterAlt: 'Redesigned e-GMAT success story page screenshot.',
  },
};

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.15v4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="5.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionNumber}>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

function ScreenAssetViewport({ src, alt, resetKey }) {
  const viewportRef = useRef(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [resetKey]);

  return (
    <div ref={viewportRef} className={styles.screenAssetViewport}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={styles.screenAsset}
        loading="lazy"
      />
    </div>
  );
}

function ScreenSetShowcase({ screenSet, sectionTitle }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = screenSet.tabs[activeTabIndex];
  const activeIdBase = `${sectionTitle}-${activeTabIndex}`.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={styles.screenShowcase}>
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
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <MoreWorkBrowserFrame
        title={screenSet.frameTitle || sectionTitle}
        darkChrome
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

      {activeTab.caption ? (
        <p className={styles.screenCaption}>{activeTab.caption}</p>
      ) : null}
    </div>
  );
}

function ScrollingScreenshot({
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

function BeforeAfterStage({ media }) {
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

export default function WebsiteShowcasePage({ detail }) {
  const overviewCard = detail.overviewCard;
  const notesCard = detail.notesCard;
  const sidebar = detail.sidebar;
  const testimonials = detail.testimonials;
  const walkthroughNote = detail.walkthroughNote;
  const summary = detail.summary || 'This display page is using the shared lean wrapper while the full case study is still being prepared.';
  const roleParagraph = detail.roleParagraph || '';
  const comingSoonNote = detail.heroNote || 'This is just a display page and the full case study is coming soon.';
  const [activeEmbedModal, setActiveEmbedModal] = useState(null);

  const sectionOrder = [
    overviewCard ? { id: 'context', title: 'Context' } : null,
    notesCard ? { id: 'shipped', title: 'Approach' } : null,
    notesCard?.shift ? { id: 'shift', title: 'The Shift' } : null,
    testimonials ? { id: 'testimonials', title: testimonials.title || 'Testimonials' } : null,
  ].filter(Boolean);
  const sectionNumbers = Object.fromEntries(
    sectionOrder.map((section, index) => [section.id, String(index + 1).padStart(2, '0')])
  );
  const visibleFacts = sidebar?.facts?.slice(0, sidebar?.factsVisibleCount || sidebar?.facts?.length || 0) || [];
  const testimonialTrackItems = testimonials?.items?.length > 1
    ? [...testimonials.items, ...testimonials.items]
    : testimonials?.items || [];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.titleBlock}>
          <h1>{detail.title}</h1>
          <p className={styles.heroNote}>
            <span className={styles.heroNoteIcon} aria-hidden="true">
              <InfoIcon />
            </span>
            <span>{comingSoonNote}</span>
          </p>
          <p className={styles.heroSummary}>{summary}</p>
        </div>
      </section>

      <section id="website-preview" className={styles.previewSection}>
        <MoreWorkBrowserFrame
          title={detail.previewTitle || detail.title}
          darkChrome
          className={styles.previewFrame}
          bodyClassName={styles.previewFrameBody}
        >
          <div className={styles.previewEmbedViewport}>
            <div className={styles.previewEmbedScaler}>
              <iframe
                src={detail.embedUrl}
                title={`${detail.title} live website preview`}
                className={styles.previewEmbed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </MoreWorkBrowserFrame>

        {walkthroughNote ? (
          <p className={styles.walkthroughNote}>
            <span>{walkthroughNote.lead} </span>
            <button
              type="button"
              className={styles.walkthroughButton}
              onClick={() => setActiveEmbedModal({
                title: walkthroughNote.modalTitle || walkthroughNote.label,
                browserTitle: 'Neuron walkthrough',
                url: walkthroughNote.embedUrl,
              })}
            >
              {walkthroughNote.label} <span aria-hidden="true">{'\u2197'}</span>
            </button>
            {walkthroughNote.trail ? <span> - {walkthroughNote.trail}</span> : null}
          </p>
        ) : null}
      </section>

      <div className={styles.bodyShell}>
        <div className={styles.contentColumn}>
          {overviewCard ? (
            <section id="context" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.context} title="Context" />
              <div className={styles.paragraphStack}>
                {overviewCard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          {notesCard ? (
            <section id="shipped" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.shipped} title="Approach" />
              <div className={styles.approachIntro}>
                {roleParagraph ? <p>{roleParagraph}</p> : null}
                {notesCard.intro ? <p>{notesCard.intro}</p> : null}
              </div>

              <div className={styles.decisionGroup}>
                {notesCard.decisions.map((decision) => {
                  const decisionMedia = comparisonMediaByDecision[decision.number];

                  return (
                    <article key={decision.number} className={styles.decisionItem}>
                      <div className={styles.decisionText}>
                        <h3>{decision.title}</h3>
                        <p>{decision.body}</p>
                      </div>

                      {decision.pair && decisionMedia?.beforeSrc && decisionMedia?.afterSrc ? (
                        <BeforeAfterStage media={decisionMedia} />
                      ) : null}

                      {decision.screenSet ? (
                        <ScreenSetShowcase
                          screenSet={decision.screenSet}
                          sectionTitle={decision.title}
                        />
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          {notesCard?.shift ? (
            <section id="shift" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.shift} title="The Shift" />
              <div className={styles.shiftCard}>
                {notesCard.shift.rows.map((row) => (
                  <div key={`${row.before}-${row.after}`} className={styles.shiftRow}>
                    <p className={styles.shiftBefore}>{row.before}</p>
                    <span className={styles.shiftArrow} aria-hidden="true">
                      <ChevronRight />
                    </span>
                    <p className={styles.shiftAfter}>{row.after}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {testimonials ? (
            <section id="testimonials" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.testimonials} title={testimonials.title || 'Testimonials'} />
              {testimonials.intro ? (
                <div className={styles.paragraphStack}>
                  <p>{testimonials.intro}</p>
                </div>
              ) : null}
              {testimonials.note ? <p className={styles.sourceNote}>{testimonials.note}</p> : null}

              <div className={styles.marquee} aria-label="Public testimonials">
                <div className={styles.marqueeTrack}>
                  {testimonialTrackItems.map((item, index) => (
                    <article key={`${item.author}-${item.href}-${index}`} className={styles.testimonialCard}>
                      <div className={styles.testimonialCardTop}>
                        <div className={styles.testimonialQuoteMark} aria-hidden="true">&ldquo;</div>
                        <button
                          type="button"
                          className={styles.testimonialSourceBrand}
                          aria-label={`Open ${testimonials.sourceBrand || 'source'} for ${item.author}`}
                          onClick={() => setActiveEmbedModal({
                            title: item.modalTitle || item.meta,
                            browserTitle: testimonials.sourceBrand || 'Source',
                            url: item.href,
                          })}
                        >
                          <GmatClubWordmarkIcon className={styles.testimonialSourceLogo} />
                        </button>
                      </div>
                      <blockquote
                        className={styles.testimonialQuote}
                        dangerouslySetInnerHTML={{ __html: item.quoteHtml }}
                      />
                      <footer className={styles.testimonialFooter}>
                        <div className={styles.testimonialIdentity}>
                          <span className={styles.testimonialAvatar} aria-hidden="true">
                            <TestimonialAvatarIcon />
                          </span>
                          <div className={styles.testimonialIdentityCopy}>
                            <div className={styles.testimonialAuthor}>{item.author}</div>
                            <div className={styles.testimonialMeta}>{item.meta}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={styles.testimonialSource}
                          onClick={() => setActiveEmbedModal({
                            title: item.modalTitle || item.meta,
                            browserTitle: testimonials.sourceBrand || 'Source',
                            url: item.href,
                          })}
                        >
                          View source <span aria-hidden="true">{'\u2197'}</span>
                        </button>
                      </footer>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </div>

        <aside className={styles.sidebar} aria-label="Project details">
          {sidebar?.categories?.length ? (
            <div className={styles.sideSection}>
              <h3>Category</h3>
              <div className={styles.chipRow}>
                {sidebar.categories.map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
            </div>
          ) : null}

          {visibleFacts.length || sidebar?.projectChips?.length || sidebar?.projectDisclaimer ? (
            <div className={styles.sideSection}>
              <h3>Project</h3>
              {visibleFacts.length ? (
                <div className={styles.factList}>
                  {visibleFacts.map((fact) => (
                    <div key={fact.label} className={styles.factRow}>
                      <span className={styles.factLabel}>{fact.label}</span>
                      <span className={styles.factValue}>{fact.value}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {sidebar?.projectChips?.length ? (
                <div className={styles.projectChipRow}>
                  {sidebar.projectChips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`${styles.projectChip} ${chip.active ? styles.projectChipActive : ''}`}
                    >
                      {chip.dot ? <span className={styles.projectChipDot} aria-hidden="true" /> : null}
                      {chip.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={chip.logo}
                          alt=""
                          className={styles.projectChipLogo}
                          aria-hidden="true"
                        />
                      ) : null}
                      {chip.label}
                    </span>
                  ))}
                </div>
              ) : null}

              {sidebar?.projectDisclaimer ? (
                <p className={styles.projectDisclaimer}>{sidebar.projectDisclaimer}</p>
              ) : null}
            </div>
          ) : null}

        </aside>
      </div>

      <MoreWorkEmbedModal modal={activeEmbedModal} onClose={() => setActiveEmbedModal(null)} />
    </main>
  );
}
