import { useEffect, useRef, useState } from 'react';
import Tooltip from '../../shared/Tooltip';
import styles from './SatLmsCaseStudy.module.css';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealVisible);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function Reveal({ children, className = '' }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </div>
  );
}

export function useInViewOnce({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, isVisible };
}

export function StaggeredText({ as: Tag = 'h2', segments, text, id, className = '' }) {
  const { ref, isVisible } = useInViewOnce();
  const textSegments = segments || [{ text }];
  let wordIndex = 0;
  const ariaLabel = textSegments.map((segment) => segment.text).join(' ');

  return (
    <Tag
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={`${className} ${styles.staggerText} ${isVisible ? styles.staggerTextVisible : ''}`}
    >
      {textSegments.map((segment, segmentIndex) => {
        const words = segment.text.split(' ');

        return (
          <span key={`${segment.text}-${segmentIndex}`} className={segment.className || ''} aria-hidden="true">
            {words.map((word, index) => {
              const currentIndex = wordIndex;
              wordIndex += 1;

              return (
                <span
                  key={`${word}-${currentIndex}`}
                  className={styles.staggerWord}
                  style={{ '--word-index': currentIndex }}
                >
                  {word}
                </span>
              );
            })}
            {segment.breakAfter ? <br /> : segmentIndex < textSegments.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </Tag>
  );
}

export function AnimatedMetricValue({ metric }) {
  const { ref, isVisible } = useInViewOnce();
  const [displayValue, setDisplayValue] = useState(metric.startValue);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(metric.endValue);
      return undefined;
    }

    if (!isVisible) {
      return undefined;
    }

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / 1400, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(metric.startValue + ((metric.endValue - metric.startValue) * easedProgress));

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isVisible, metric.endValue, metric.startValue]);

  return (
    <p ref={ref} className="font-cabinet text-6xl font-extrabold leading-none text-accent-green md:text-7xl">
      {displayValue}{metric.suffix}
    </p>
  );
}

export function MetricLabel({ metric }) {
  return (
    <p className="mt-5 inline-flex items-center justify-center gap-2 font-dm text-base font-extrabold leading-relaxed text-ink-700">
      <span>{metric.label}</span>
      <Tooltip
        content={(
          <span className="block space-y-3">
            {metric.tooltip.map((item) => (
              <span key={item} className="block">{item}</span>
            ))}
          </span>
        )}
        panelClassName={styles.metricTooltipPanel}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-ink-100 bg-surface-light font-dm text-xs font-extrabold text-ink-700">
          ?
        </span>
      </Tooltip>
    </p>
  );
}
