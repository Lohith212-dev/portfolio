import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../shared/ThemeContext';
import { SharedLinkedInIcon } from '../../icons/icons';
import styles from './FeaturedProjects.module.css';

const projects = [
  {
    id: 'sat-lms',
    slug: 'sat-lms',
    name: 'SAT LMS',
    funName: 'SAT LMS',
    headline: 'How I made a learning platform behave like a personalized tutor',
    summary: 'I used diagnostic-first UX, prescribed paths, and next-action UI to turn scattered course material into a guided learning journey.',
    tags: [
      { label: 'End to end product creation' },
      { label: 'Live', tone: 'active' },
    ],
    metrics: [
      {
        value: '2.8x',
        label: 'higher continuation',
      },
      {
        value: '1.4x',
        label: 'deeper learning progress',
      },
    ],
    quote: {
      text: 'I had not thought about UX at this level before. The minute decisions Lohith made made the flow surprisingly easy to follow.',
      person: 'Sanchari',
      role: 'Technical Lead, e-GMAT',
      image: '/images/testimonials/testimonial-sanchari-portrait.png',
      imageStyle: { transform: 'scale(1.4)', transformOrigin: 'center 22%' },
      linkedinUrl: 'https://www.linkedin.com/in/shomesanchari/',
    },
    funSticker: 'The path finds the student.',
    media: {
      poster: '/images/work/work-sat-lms-preview-thumbnail.png',
      mp4: '/videos/work/work-sat-lms-preview.mp4',
    },
  },
  {
    id: 'spark-presenter',
    slug: 'spark-presenter',
    name: 'S.P.A.R.K. Presenter',
    funName: 'S.P.A.R.K. Presenter',
    headline: 'How I built an assembly line for learning content - and made manual production obsolete',
    tags: [
      { label: 'Product design and Architecture' },
      { label: 'LIVE', tone: 'active' },
    ],
    metrics: [
      {
        value: '100',
        label: 'files processed in 2 hours',
      },
      {
        value: '95%+',
        label: 'automated accuracy',
      },
    ],
    summary: 'I built a component system and automation pipeline that turns raw course content into production-ready learning experiences in minutes.',
    quote: {
      text: 'Knowing how long course builds usually take, seeing a full course come together in just minutes was genuinely astonishing.',
      person: 'Rashmi Vaidya',
      role: 'Former GMAT Strategy Expert, e-GMAT',
      image: '/images/testimonials/testimonial-rashmi-portrait.png',
      imageStyle: { transform: 'scale(1.6)', transformOrigin: '52% 28%' },
      linkedinUrl: 'https://www.linkedin.com/in/rashmi-vaidya-26b8a935/',
    },
    funSticker: 'One system. Many lessons.',
    media: {
      poster: '/images/work/work-spark-presenter-preview-thumbnail.webp',
      webm: '/videos/work/work-spark-presenter-preview.webm',
      mp4: '/videos/work/work-spark-presenter-preview.mp4',
    },
  },
  {
    id: 'egmat-website',
    slug: '/more-works/egmat-public-website',
    name: 'e-GMAT Website',
    funName: 'e-GMAT Website',
    headline: 'How I rebuilt the website to make product value easier to trust',
    tags: [
      { label: 'Web Design' },
      { label: 'Live', tone: 'active' },
    ],
    metrics: [
      {
        value: '2.4x',
        label: 'faster time-to-trial',
      },
      {
        value: '38%',
        label: 'drop in pricing-page bounce',
      },
    ],
    summary: 'I reorganized messaging, proof, and action paths so visitors could understand the offering faster and move forward with more confidence.',
    quote: {
      text: "The site speaks more clearly than it ever has, and that's because Lohith owned the message, not just the visuals. He restructured how we talk about the platform - the hero line, the pricing frame, the success-stories pitch - and built each page around those decisions. The difference shows on every scroll.",
      person: 'Sundeep Eddu',
      role: 'Head of Marketing & Sales, e-GMAT',
      image: '/images/testimonials/testimonial-sundeep-portrait.png',
      // Source is a wider headshot (face sits high, lots of shirt below); zoom in on the face.
      imageStyle: { transform: 'scale(1.5)', transformOrigin: 'center 32%' },
      linkedinUrl: 'https://www.linkedin.com/in/eddu-sundeep/',
    },
    funSticker: 'The front door got serious.',
    media: {
      poster: '/images/work/work-egmat-website-preview-thumbnail.png',
      mp4: '/videos/work/work-egmat-website-preview.mp4',
    },
  },
  {
    id: 'neuron',
    slug: '/more-works/neuron',
    name: 'Neuron',
    funName: 'Neuron',
    headline: 'How I turned scattered GMAT practice into a focused workspace',
    tags: [
      { label: 'End-to-end product design' },
      { label: 'Live', tone: 'active' },
    ],
    metrics: [
      {
        value: '40%',
        label: 'less time-to-first-question',
      },
      {
        value: '3.1x',
        label: 'weak-area retest rate',
      },
    ],
    summary: 'I designed Neuron end-to-end - user flows, interactions, design system, and every screen - so learners could drill official questions in a structured flow instead of stitching practice together across platforms.',
    quote: {
      text: 'All he had was a problem statement. He figured out the user flows, he figured out the interactions, he figured out the complete app, all by himself. The results show the same. The stickiness is much better compared to Scholaranium.',
      person: 'Rajat Sadana',
      role: 'Co-Founder & CMO, e-GMAT',
      image: '/images/testimonials/testimonial-rajat-portrait.png',
      imageStyle: { transform: 'scale(1.5)', transformOrigin: 'center 32%' },
      linkedinUrl: 'https://www.linkedin.com/in/rajat-sadana/',
    },
    funSticker: 'No more wandering around.',
    media: {
      poster: '/images/work/work-neuron-preview-thumbnail.png',
      mp4: '/videos/work/work-neuron-preview.mp4',
    },
  },
];

function parseAnimatedMetric(value) {
  const patterns = [
    { regex: /^(\d+(?:\.\d+)?)x$/, suffix: 'x' },
    { regex: /^(\d+(?:\.\d+)?)(%\+?)$/, suffixFromMatch: true },
    { regex: /^(\d+(?:\.\d+)?)$/, suffix: '' },
  ];

  for (const pattern of patterns) {
    const match = pattern.regex.exec(value);

    if (match) {
      const numericValue = match[1];

      return {
        target: Number.parseFloat(numericValue),
        decimals: numericValue.includes('.') ? numericValue.split('.')[1].length : 0,
        suffix: pattern.suffixFromMatch ? match[2] : pattern.suffix,
      };
    }
  }

  return null;
}

function AnimatedMetric({ value, isActive }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const parsedMetric = parseAnimatedMetric(value);

    if (!isActive || !parsedMetric) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId;
    const duration = 900;
    const startTime = performance.now();

    const tick = now => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - ((1 - progress) ** 3);
      const animatedValue = parsedMetric.target * eased;
      const formattedValue = parsedMetric.decimals > 0
        ? animatedValue.toFixed(parsedMetric.decimals)
        : Math.round(animatedValue).toString();

      setDisplayValue(`${formattedValue}${parsedMetric.suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    const initialValue = parsedMetric.decimals > 0 ? `0.${'0'.repeat(parsedMetric.decimals)}` : '0';
    setDisplayValue(`${initialValue}${parsedMetric.suffix}`);
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, value]);

  return <>{displayValue}</>;
}

function ProjectCard({ project, isFunMode }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const primaryLinkRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [playsByDefault, setPlaysByDefault] = useState(false);
  const [isProofActive, setIsProofActive] = useState(false);
  const href = project.slug.startsWith('#') || project.slug.startsWith('/')
    ? project.slug
    : `/case-studies/${project.slug}`;
  const hasPoster = Boolean(project.media?.poster);
  const hasVideo = Boolean(project.media?.mp4);
  const shouldPlayVideo = hasVideo && (isActive || playsByDefault);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
    const syncPlayMode = () => setPlaysByDefault(mediaQuery.matches);

    syncPlayMode();
    mediaQuery.addEventListener('change', syncPlayMode);

    return () => mediaQuery.removeEventListener('change', syncPlayMode);
  }, []);

  useEffect(() => {
    if (!videoRef.current || !shouldPlayVideo) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }, [shouldPlayVideo]);

  useEffect(() => {
    if (!cardRef.current) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
  };

  const mediaContent = (
    <>
      {shouldPlayVideo ? (
        <video
          ref={videoRef}
          className={styles.previewVideo}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        >
          {project.media?.webm && <source src={project.media.webm} type="video/webm" />}
          <source src={project.media.mp4} type="video/mp4" />
        </video>
      ) : hasPoster ? (
        <Image
          src={project.media.poster}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 767px) calc(100vw - 3rem), min(100vw - 6rem, 1200px)"
          className={styles.posterImage}
        />
      ) : (
        <div className={styles.placeholderPreview} aria-hidden="true">
          <span className={styles.placeholderLabel}>Preview coming soon</span>
        </div>
      )}
    </>
  );

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isFunMode ? styles.cardEditorialFun : styles.cardEditorialNormal} ${isProofActive ? styles.cardSuppressHoverCue : ''}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => {
        setIsActive(false);
        setIsProofActive(false);
      }}
      onFocus={() => setIsActive(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsActive(false);
          setIsProofActive(false);
        }
      }}
      onMouseMove={handlePointerMove}
    >
      <Link
        ref={primaryLinkRef}
        href={href}
        aria-label={`View ${project.name} case study`}
        className={styles.cardPrimaryLink}
      />

      <div className={styles.cardContent}>
        <div className={styles.editorialGrid}>
          <div className={styles.editorialMediaPanel}>
            <div className={styles.editorialMediaSurface}>
              {mediaContent}
            </div>

            {isFunMode && (
              <span className={`${styles.funSticker} font-caveat font-bold text-fun-ink-50`}>
                {project.funSticker}
              </span>
            )}
          </div>

          <div className={styles.editorialContent}>
            <header className={styles.editorialHeader}>
              <h3 className={`${styles.editorialProjectName} ${isFunMode ? 'font-caveat font-bold text-fun-ink-50' : 'font-cabinet font-extrabold text-accent-orange'}`}>
                {isFunMode ? project.funName : project.name}
              </h3>
              <div className={styles.editorialTagRow}>
                {project.tags.map(tag => (
                  <span key={tag.label} className={`${styles.editorialTag} ${tag.tone ? styles[tag.tone] : ''} font-dm`}>
                    {tag.tone && <span className={styles.tagDot} aria-hidden="true" />}
                    {tag.label}
                  </span>
                ))}
              </div>
            </header>

            <div className={styles.editorialBody}>
              <div className={styles.editorialMainCopy}>
                <h4 className={`${styles.editorialTitle} ${isFunMode ? 'font-caveat font-bold text-fun-ink-50' : 'font-cabinet font-extrabold text-ink-950'}`}>
                  {project.headline}
                </h4>
                <p className={`${styles.editorialSummary} font-dm ${isFunMode ? 'text-fun-ink-300' : 'text-ink-700'}`}>
                  {project.summary}
                </p>
                <div className={styles.editorialMetrics}>
                  {project.metrics.map(metric => (
                    <span key={`${metric.value}-${metric.label}`} className={styles.editorialMetric}>
                      <strong className="font-cabinet font-extrabold">
                        <AnimatedMetric value={metric.value} isActive={hasEntered} />
                      </strong>
                      {metric.label ? <span className="font-dm">{metric.label}</span> : null}
                    </span>
                  ))}
                </div>

                <span className={`${styles.mobileCaseLink} font-dm font-extrabold`}>
                  View Case Study <span aria-hidden="true">{'\u2197'}</span>
                </span>
              </div>

              <aside
                className={styles.editorialProof}
                aria-label={`Proof from ${project.quote.person}`}
                onMouseEnter={() => setIsProofActive(true)}
                onMouseLeave={() => setIsProofActive(false)}
                onFocus={() => setIsProofActive(true)}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsProofActive(false);
                  }
                }}
                onClick={event => {
                  if (event.target.closest('a')) return;
                  primaryLinkRef.current?.click();
                }}
              >
                <p className={`${styles.editorialQuote} font-dm ${isFunMode ? 'text-fun-ink-200' : 'text-ink-700'}`}>
                  "{project.quote.text}"
                </p>
                <span className={styles.editorialPerson}>
                  {project.quote.image && (
                    <span className={styles.editorialAvatarFrame}>
                      <Image
                        src={project.quote.image}
                        alt={`${project.quote.person} portrait`}
                        width={320}
                        height={320}
                        sizes="56px"
                        className={styles.editorialAvatar}
                        style={project.quote.imageStyle}
                      />
                    </span>
                  )}
                  <span className={styles.editorialPersonDetails}>
                    {project.quote.linkedinUrl ? (
                      <a
                        href={project.quote.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.quote.person} LinkedIn profile`}
                        className={styles.editorialLinkedInLink}
                      >
                        <SharedLinkedInIcon className={styles.editorialLinkedInIcon} />
                      </a>
                    ) : (
                      <SharedLinkedInIcon className={styles.editorialLinkedInIcon} />
                    )}
                    <strong className="font-cabinet font-extrabold">{project.quote.person}</strong>
                    <small className="font-dm">{project.quote.role}</small>
                  </span>
                </span>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <span className={`${styles.hoverCue} font-dm font-extrabold`} aria-hidden="true">
        View in detail <span>{'\uD83D\uDC40'}</span>
      </span>
    </article>
  );
}

export default function FeaturedProjects() {
  const { isFunMode } = useTheme();
  const stackRef = useRef(null);

  // Sticky cards all pin at (near) the same line and overlap. As each new card
  // slides up, scale the earlier cards down by how many sit on top of them so
  // the stack recedes into the background instead of flatly covering up.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return undefined;

    const items = Array.from(stack.querySelectorAll(`.${styles.stackItem}`));
    if (!items.length) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const SCALE_STEP = 0.06; // size lost per card stacked on top
    const MIN_SCALE = 0.82;
    const MAX_DEPTH = 3; // don't let far-back cards vanish
    const TRANSITION = 280; // px of scroll over which a card recedes

    let frame = 0;

    const apply = () => {
      frame = 0;

      if (reduceMotion.matches) {
        items.forEach(item => { item.style.transform = ''; });
        return;
      }

      // How "arrived" each card is (0 below the fold → 1 fully pinned).
      // Scale uses transform-origin: top, so it never shifts a card's top edge —
      // getBoundingClientRect().top stays clean to measure against.
      const progress = items.map(item => {
        const pinLine = Number.parseFloat(getComputedStyle(item).top) || 0;
        const top = item.getBoundingClientRect().top;
        return Math.min(Math.max((pinLine + TRANSITION - top) / TRANSITION, 0), 1);
      });

      items.forEach((item, i) => {
        let depth = 0;
        for (let j = i + 1; j < items.length; j += 1) depth += progress[j];
        depth = Math.min(depth, MAX_DEPTH);

        const scale = Math.max(MIN_SCALE, 1 - depth * SCALE_STEP);
        item.style.transform = depth > 0 ? `scale(${scale})` : '';
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    reduceMotion.addEventListener('change', apply);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduceMotion.removeEventListener('change', apply);
      if (frame) cancelAnimationFrame(frame);
      items.forEach(item => { item.style.transform = ''; });
    };
  }, []);

  return (
    <section id="featured-projects" className={`${isFunMode ? 'bg-fun-surface-dark' : 'bg-surface-white'} ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.headline}>
          <p className={`${styles.eyebrow} font-caveat font-bold ${isFunMode ? 'text-fun-accent-yellow' : 'text-accent-orange'}`}>
            {isFunMode ? "The vigilante's best work." : 'Shipped. Not just designed.'}
          </p>
          <div className={styles.headlineLine}>
            <h2 className={isFunMode
              ? `font-rock-salt text-fun-ink-50 leading-rock-salt ${styles.h2Fun}`
              : `font-cabinet font-extrabold text-ink-950 ${styles.h2Normal}`
            }>
              {isFunMode ? 'Missions Completed!' : <>Work That <span className={styles.speaksWord}>Speaks!</span></>}
            </h2>
          </div>
        </div>

        <div className={styles.stack} ref={stackRef}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.stackItem}
              style={{ '--stack-index': index, zIndex: index + 1 }}
            >
              <ProjectCard project={project} isFunMode={isFunMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
