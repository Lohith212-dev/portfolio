import { useEffect, useRef, useState } from 'react';
import CaseStudyVideoFrame from '../../CaseStudyVideoFrame';
import BrowserChrome from '../BrowserChrome';
import styles from '../SatLmsCaseStudy.module.css';

function DecisionVideoFrame({ decision }) {
  const frameRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(frame);

    return () => observer.disconnect();
  }, []);

  return (
    <CaseStudyVideoFrame
      ref={frameRef}
      frameClassName={`${styles.decisionBrowser} ${styles.decisionVideoBrowser} ${styles.decisionVideoFrame} ${isInView ? styles.decisionVideoFrameVisible : ''}`}
      mediaClassName={styles.decisionVideoReveal}
      videoClassName={styles.decisionVideo}
      loop
      muted
      playsInline
      preload="auto"
      playWhen={isInView}
      ariaLabel={decision.placeholderLabel}
      sources={[
        { src: decision.video, type: 'video/mp4' },
      ]}
    />
  );
}

function DecisionPlaceholderGraphic({ decision }) {
  const visualClassName = `${styles.decisionVisualFrame} ${styles[`decisionVisualFrame${decision.visualType}`]}`;

  return (
    <div>
      <div className={visualClassName}>
        {decision.visualType === 'recover' ? (
          <div className={styles.recoveryPlaceholder}>
            <p className="font-cabinet text-2xl font-extrabold leading-tight text-ink-950">{decision.placeholderTitle}</p>
            <p className="mt-2 font-dm text-base leading-relaxed text-ink-500">{decision.placeholderLabel}</p>
          </div>
        ) : (
          <>
            <div className={styles.decisionBrowser}>
              <BrowserChrome />
              <div className={styles.decisionPlaceholderCanvas}>
                <div className={styles.placeholderHeader}>
                  <span>{decision.placeholderTitle}</span>
                  {decision.visualType === 'personalize' ? <span className={styles.paceToggle}>PACE on</span> : null}
                </div>
                <div className={styles.placeholderHero}></div>
                <div className={styles.placeholderCards}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p className="font-dm text-sm font-extrabold uppercase tracking-widest text-ink-500">{decision.placeholderLabel}</p>
              </div>
            </div>

            {decision.visualType === 'diagnostic' ? (
              <div className={styles.decisionInset}>
                <p className="font-cabinet text-xl font-extrabold leading-tight text-ink-950">{decision.insetTitle}</p>
                <p className="mt-3 font-dm text-sm leading-relaxed text-ink-700">Shows why the diagnostic matters before exploration.</p>
                <div className={styles.insetActions}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : null}
          </>
        )}

        {decision.annotations.length > 0 ? (
          <div className={styles.decisionAnnotationLayer}>
            {decision.annotations.map((annotation, index) => (
              <span
                key={annotation}
                className={`${styles.decisionAnnotation} ${styles[`decisionAnnotation${index}`]}`}
              >
                {annotation}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function DecisionVisual({ decision }) {
  if (decision.video) {
    return <DecisionVideoFrame decision={decision} />;
  }

  return <DecisionPlaceholderGraphic decision={decision} />;
}
