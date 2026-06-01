import { useEffect, useRef, useState } from 'react';
import CaseStudySectionHeader from '../../CaseStudySectionHeader';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from '../SparkPresenterCaseStudy.module.css';
import { usePrefersReducedMotion } from '../sparkHelpers';
import { buildTimelineSteps } from '../sparkData';
import BuildTimelineCard from './BuildTimelineCard';

function BuildProcessHeading() {
  return (
    <h2 id="build-heading" className={styles.buildProcessHeading}>
      The build process produced
      <br />
      <span className={styles.buildProcessHeadingHighlight}>a system, not just a screen.</span>
    </h2>
  );
}

export function BuildTimelineIntro() {
  return (
    <div className={styles.buildTimelineIntro}>
      <CaseStudySectionHeader
        eyebrow="Build Process"
        eyebrowClassName={`${lmsStyles.caseStudyBrow} ${lmsStyles.caseStudyBrowGreen} mb-6`}
        renderHeading={() => <BuildProcessHeading />}
        copy="The work was less about designing a single learning activity and more about building a reliable production path. Each stage produced an output that made the next stage possible."
        copyClassName="mt-10 max-w-3xl font-dm text-body leading-relaxed text-ink-800"
      />
    </div>
  );
}

export function BuildTimelineSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const wrapperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [cardDirection, setCardDirection] = useState('next');
  const lastStepRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      const wrapperNode = wrapperRef.current;

      if (wrapperNode) {
        wrapperNode.style.height = 'auto';
      }

      setActiveStep(0);
      setCardDirection('next');
      lastStepRef.current = 0;
      return undefined;
    }

    const wrapperNode = wrapperRef.current;

    if (!wrapperNode) {
      return undefined;
    }

    let frameId = 0;
    let resizeTimeoutId;
    const totalSteps = buildTimelineSteps.length;

    const clampProgress = value => Math.min(Math.max(value, 0), 1);

    const updateTimeline = () => {
      frameId = 0;

      const availableScroll = Math.max(wrapperNode.offsetHeight - window.innerHeight, 1);
      const wrapperTop = wrapperNode.getBoundingClientRect().top + window.scrollY;
      const rawProgress = (window.scrollY - wrapperTop) / availableScroll;
      const nextProgress = clampProgress(rawProgress);
      const nextActiveStep = Math.max(0, Math.min(totalSteps - 1, Math.round(nextProgress * (totalSteps - 1))));

      if (nextActiveStep !== lastStepRef.current) {
        setCardDirection(nextActiveStep > lastStepRef.current ? 'next' : 'prev');
        lastStepRef.current = nextActiveStep;
        setActiveStep(nextActiveStep);
      }
    };

    const measureTimeline = () => {
      const stepTravel = Math.max(window.innerHeight * 0.72, 440);
      wrapperNode.style.height = `${window.innerHeight + (stepTravel * (totalSteps - 1))}px`;
      updateTimeline();
    };

    const requestTimelineUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateTimeline);
      }
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimeoutId);
      resizeTimeoutId = window.setTimeout(measureTimeline, 120);
    };

    measureTimeline();
    window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.clearTimeout(resizeTimeoutId);
      window.removeEventListener('scroll', requestTimelineUpdate);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={styles.buildTimelineReduced}>
        <div className={styles.buildTimelineStack}>
          {buildTimelineSteps.map((step) => (
            <BuildTimelineCard key={step.number} step={step} isActive />
          ))}
        </div>
      </div>
    );
  }

  const activeStepData = buildTimelineSteps[activeStep];

  return (
    <div ref={wrapperRef} className={styles.buildTimelineWrapper} role="region" aria-label="Build process timeline.">
      <div className={styles.buildTimelineSticky}>
        <div className={styles.buildTimelineTrack} aria-hidden="true">
          <span className={styles.buildTimelineTrackLine} />
          <div className={styles.buildTimelineMarkers}>
            {buildTimelineSteps.map((step, index) => (
              <span
                key={step.number}
                className={[
                  styles.buildTimelineMarker,
                  index === activeStep ? styles.buildTimelineMarkerActive : '',
                  index < activeStep ? styles.buildTimelineMarkerPassed : '',
                ].filter(Boolean).join(' ')}
              >
                <span className={styles.buildTimelineMarkerOrb}>{step.number}</span>
              </span>
            ))}
          </div>
        </div>

        <div className={styles.buildTimelineViewport}>
          <div
            key={activeStepData.number}
            className={[
              styles.buildTimelineCardMotion,
              cardDirection === 'prev' ? styles.buildTimelineCardMotionPrev : styles.buildTimelineCardMotionNext,
            ].join(' ')}
          >
            <BuildTimelineCard step={activeStepData} isActive />
          </div>
        </div>
      </div>
    </div>
  );
}
