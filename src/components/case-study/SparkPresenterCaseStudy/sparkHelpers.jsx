import { useEffect, useRef, useState } from 'react';
import Tooltip from '../../shared/Tooltip';
import lmsStyles from '../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import styles from './SparkPresenterCaseStudy.module.css';
import { highlightClassName } from './sparkData';

export function useInViewOnce({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePreference);
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

export function Reveal({ children, className = '' }) {
  const { ref, isVisible } = useInViewOnce();

  return (
    <div ref={ref} className={`${lmsStyles.reveal} ${isVisible ? lmsStyles.revealVisible : ''} ${className}`}>
      {children}
    </div>
  );
}

export function StaggeredText({ as: Tag = 'h2', segments, text, id, className = '' }) {
  const { ref, isVisible } = useInViewOnce();
  const textSegments = segments || [{ text }];
  const ariaLabel = textSegments.map((segment) => segment.text).join(' ');
  let globalIndex = 0;

  return (
    <Tag
      id={id}
      ref={ref}
      className={`${lmsStyles.staggerText} ${isVisible ? lmsStyles.staggerTextVisible : ''} ${className}`}
      aria-label={ariaLabel}
    >
      {textSegments.map((segment, segmentIndex) => (
        <span key={`${segment.text}-${segmentIndex}`} className={segment.className || ''} aria-hidden="true">
          {segment.text.split(' ').map((word, wordIndex) => {
            const currentIndex = globalIndex;
            globalIndex += 1;

            return (
              <span
                key={`${word}-${segmentIndex}-${wordIndex}`}
                className={lmsStyles.staggerWord}
                style={{ '--word-index': currentIndex }}
              >
                {word}
              </span>
            );
          })}
          {segment.breakAfter ? <br aria-hidden="true" /> : ' '}
        </span>
      ))}
    </Tag>
  );
}

export function AnimatedMetricValue({ metric }) {
  const { ref, isVisible } = useInViewOnce();
  const [displayValue, setDisplayValue] = useState(metric.startValue ?? metric.value);
  const shouldAnimate = typeof metric.startValue === 'number' && typeof metric.endValue === 'number';

  useEffect(() => {
    if (!isVisible || !shouldAnimate) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(metric.endValue);
      return undefined;
    }

    let frameId;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1400, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(metric.startValue + ((metric.endValue - metric.startValue) * easedProgress));
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, metric.endValue, metric.startValue, shouldAnimate]);

  return (
    <p ref={ref} className="font-cabinet text-5xl font-extrabold leading-none text-accent-green md:text-6xl">
      {shouldAnimate ? `${displayValue}${metric.suffix || ''}` : metric.value}
    </p>
  );
}

export function MetricLabel({ metric }) {
  return (
    <p className="mt-5 flex items-center justify-center gap-2 font-dm text-base font-extrabold leading-tight text-ink-950">
      <span>{metric.label}</span>
      <Tooltip
        content={(
          <span className="block space-y-3">
            {metric.tooltip.map((item) => (
              <span key={item} className="block">{item}</span>
            ))}
          </span>
        )}
        panelClassName={lmsStyles.metricTooltipPanel}
      >
        <span className={styles.metricTip}>?</span>
      </Tooltip>
    </p>
  );
}

export function renderInlineContent(text) {
  if (!text) return null;

  const pattern = /<mark>(.*?)<\/mark>|\[([^\]]+)\]\(([^)]+)\)/g;
  const fragments = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      fragments.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      fragments.push(
        <mark key={`mark-${match.index}`} className={highlightClassName}>
          {match[1]}
        </mark>,
      );
    } else {
      fragments.push(
        <a
          key={`link-${match.index}`}
          href={match[3]}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-1 underline-offset-4"
        >
          {match[2]}
        </a>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    fragments.push(text.slice(lastIndex));
  }

  return fragments;
}

export function RichText({ as: Tag = 'p', text, className = '', ...props }) {
  return (
    <Tag className={className} {...props}>
      {renderInlineContent(text)}
    </Tag>
  );
}

export function RichParagraphGroup({ paragraphs, className = '', paragraphClassName = '' }) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph) => (
        <RichText
          key={paragraph}
          text={paragraph}
          className={paragraphClassName}
        />
      ))}
    </div>
  );
}

export function renderDecisionInlineContent(text) {
  if (!text) return null;

  const pattern = /<mark>(.*?)<\/mark>/g;
  const fragments = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      fragments.push(text.slice(lastIndex, match.index));
    }

    fragments.push(
      <strong key={`decision-mark-${match.index}`} className={styles.decisionStrong}>
        {match[1]}
      </strong>,
    );

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    fragments.push(text.slice(lastIndex));
  }

  return fragments;
}

export function DecisionRichText({ as: Tag = 'p', text, className = '' }) {
  return (
    <Tag className={className}>
      {renderDecisionInlineContent(text)}
    </Tag>
  );
}

export function DecisionParagraphGroup({ paragraphs, className = '', paragraphClassName = '' }) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph) => (
        <DecisionRichText
          key={paragraph}
          text={paragraph}
          className={paragraphClassName}
        />
      ))}
    </div>
  );
}
