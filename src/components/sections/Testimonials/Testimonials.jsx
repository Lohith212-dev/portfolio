import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { ChevronLeft, ChevronRight, SharedLinkedInIcon } from '../../icons/icons';
import styles from './Testimonials.module.css';

// Auto-advance interval for the mobile/tablet carousel. Desktop is scroll-driven
// (no fixed cadence), so per the pass-3 decision policy we pick a calm, reading-
// friendly cadence for the quote-led cards.
const MOBILE_AUTOPLAY_MS = 6500;

const testimonials = [
  {
    id: 'atul',
    name: 'Atul Kumar',
    role: 'Chief Product Architect, Career Launcher',
    relation: 'Former COO, e-GMAT · Mentor',
    badge: 'Relentless Builder',
    headlinePrefix: 'He is a',
    quote:
      'Lohith was relentless in the best way. I watched him grow from someone I hired and mentored into the face of design at eGMAT. Once he sets his sights on something, he does not rest until it is finished.',
    linkedin: 'https://www.linkedin.com/in/atulkumar4/',
    avatar: '/images/testimonials/testimonial-atul-portrait.png',
    accentClass: styles.accentGreen,
  },
  {
    id: 'sundeep',
    name: 'Sundeep Eddu',
    role: 'Head of Marketing & Sales, e-GMAT',
    relation: 'Public website redesign partner',
    badge: 'End-to-End Owner',
    headlinePrefix: 'He is an',
    quote:
      'Lohith did not just design the public website — he owned the content, structure, and production end to end. We shipped faster and cleaner than any project of that scale, and his decisions still show in every section.',
    linkedin: 'https://www.linkedin.com/in/eddu-sundeep/',
    avatar: '/images/testimonials/testimonial-sundeep-portrait.png',
    accentClass: styles.accentYellow,
  },
  {
    id: 'sanchari',
    name: 'Sanchari Shome',
    role: 'Technical Lead, e-GMAT',
    relation: 'SAT product suite collaborator',
    badge: 'Spec Architect',
    headlinePrefix: 'She calls him a',
    quote:
      "Lohith speaks engineering's language. His specs come with edge cases, data structures, and test cases already mapped. The SAT product suite moved in weeks because nothing about the build was ambiguous.",
    linkedin: 'https://www.linkedin.com/in/shomesanchari/',
    avatar: '/images/testimonials/testimonial-sanchari-portrait.png',
    accentClass: styles.accentOrange,
  },
];

function splitBadge(badge) {
  const [firstWord, ...rest] = badge.split(' ');

  return {
    firstWord,
    rest: rest.join(' '),
  };
}

function getPairIndex(scrollValue, total) {
  const raw = scrollValue * (total - 1);

  return Math.min(total - 2, Math.max(0, Math.floor(raw)));
}

function getLocalFlipProgress(scrollValue, total) {
  const raw = scrollValue * (total - 1);
  const pairIndex = getPairIndex(scrollValue, total);

  return Math.min(1, Math.max(0, raw - pairIndex));
}

function LinkedInIconLink({ href, name }) {
  return (
    <a
      className={styles.linkedin}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${name}'s LinkedIn profile`}
      onClick={(event) => event.stopPropagation()}
    >
      <SharedLinkedInIcon className={styles.linkedinIcon} />
    </a>
  );
}

function TestimonialFace({ item, side, opacity }) {
  const { firstWord, rest } = splitBadge(item.badge);

  return (
    <motion.article className={`${styles.face} ${side === 'front' ? styles.faceFront : styles.faceBack}`} style={{ opacity }}>
      <div className={styles.stage}>
        <div className={styles.personWrap}>
          <div className={`${styles.personHalo} ${item.accentClass}`} />
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            className={styles.person}
            sizes="(min-width: 1120px) 300px, 278px"
            unoptimized
            priority={item.id === 'atul'}
          />
        </div>

        <div className={`${styles.card} ${styles.identityCard}`}>
          <div className={styles.nameRow}>
            <h3 className={styles.cardTitle}>{item.name}</h3>
            <LinkedInIconLink href={item.linkedin} name={item.name} />
          </div>
          <p className={styles.meta}>{item.role}</p>
          <p className={`${styles.meta} ${styles.metaSubtle}`}>{item.relation}</p>
        </div>

        <div className={`${styles.card} ${styles.headlineCard}`}>
          <h3 className={`${styles.cardTitle} ${styles.headlineTitle}`}>
            - {item.headlinePrefix}{' '}
            <span className={`${styles.scriptHighlight} ${item.accentClass}`}>
              {firstWord}
            </span>{' '}
            {rest}
          </h3>
        </div>

        <div className={`${styles.card} ${styles.quoteCard}`}>
          <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
        </div>
      </div>
    </motion.article>
  );
}

function MobileCard({ item }) {
  const { firstWord, rest } = splitBadge(item.badge);

  return (
    <article className={styles.mobileCard}>
      {/* Headline = PRIMARY: largest, boldest. Badge words highlighted GREEN. */}
      <h3 className={styles.mobileHeadline}>
        - {item.headlinePrefix}{' '}
        <span className={styles.mobileBadge}>{firstWord}</span>{' '}
        {rest}
      </h3>

      {/* Quote = SECONDARY: smaller supporting text. */}
      <p className={styles.mobileQuote}>&ldquo;{item.quote}&rdquo;</p>

      {/* Attribution: small circular photo + name + role, divided by top border. */}
      <div className={styles.mobileAttribution}>
        <div className={styles.mobilePersonWrap}>
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            className={styles.mobilePerson}
            sizes="44px"
            unoptimized
          />
        </div>

        <div className={styles.mobileIdentity}>
          <div className={styles.nameRow}>
            <h4 className={styles.mobileName}>{item.name}</h4>
            <LinkedInIconLink href={item.linkedin} name={item.name} />
          </div>
          <p className={styles.mobileRole}>{item.role}</p>
        </div>
      </div>
    </article>
  );
}

// How many layers (active + ghosts) the stack renders. 3 = front + 2 behind.
const STACK_DEPTH = 3;

// Per-depth target geometry for each layer in the stack. depth 0 = front (active),
// depth 1 = first ghost behind, depth 2 = second ghost behind. The depth props
// animate between these as the active index changes, so the layer physically
// scales/lifts forward instead of one surface element sliding.
const DEPTH_STATES = [
  { y: 0, scale: 1, opacity: 1, rotate: 0 },
  { y: 14, scale: 0.95, opacity: 1, rotate: -3 },
  { y: 28, scale: 0.9, opacity: 0.85, rotate: 4 },
];

function MobileCarousel({ items }) {
  const total = items.length;
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next) => {
      const wrapped = ((next % total) + total) % total;
      setIndex(wrapped);
    },
    [total],
  );

  const advance = useCallback(
    (step) => {
      setIndex((current) => ((current + step) % total + total) % total);
    },
    [total],
  );

  // Auto-advance, paused on touch/drag interaction or when reduced motion is requested.
  useEffect(() => {
    if (prefersReducedMotion || paused || total <= 1) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, MOBILE_AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, paused, total]);

  const handleDragEnd = (_event, info) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;

    if (swipe < -60 || velocity < -400) {
      advance(1);
    } else if (swipe > 60 || velocity > 400) {
      advance(-1);
    }

    setPaused(false);
  };

  // Build the visible stack: the active item in front, followed by the next
  // items wrapping around. Each entry carries its depth (0 = front). Keyed by
  // item id so motion animates a layer's depth props as it moves forward.
  const visibleLayers = useMemo(() => {
    const depth = Math.min(STACK_DEPTH, total);
    return Array.from({ length: depth }, (_, offset) => {
      const itemIndex = (index + offset) % total;
      return { item: items[itemIndex], depth: offset };
    });
  }, [index, items, total]);

  return (
    <div className={styles.mobileCarousel}>
      {/* Top nav row: prev arrow · avatar thumbnails · next arrow. */}
      <div className={styles.mobileNav}>
        <button
          type="button"
          className={styles.mobileArrow}
          aria-label="Previous testimonial"
          onClick={() => advance(-1)}
        >
          <ChevronLeft className={styles.mobileArrowIcon} color="currentColor" />
        </button>

        <div className={styles.mobileAvatars} role="tablist" aria-label="Choose testimonial">
          {items.map((item, avatarIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`${styles.mobileAvatarBtn} ${index === avatarIndex ? styles.mobileAvatarActive : ''}`}
              aria-label={`Show testimonial from ${item.name}`}
              aria-selected={index === avatarIndex ? 'true' : 'false'}
              onClick={() => goTo(avatarIndex)}
            >
              <span className={styles.mobileAvatarImgWrap}>
                <Image
                  src={item.avatar}
                  alt=""
                  fill
                  className={styles.mobileAvatarImg}
                  sizes="44px"
                  unoptimized
                />
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.mobileArrow}
          aria-label="Next testimonial"
          onClick={() => advance(1)}
        >
          <ChevronRight className={styles.mobileArrowIcon} color="currentColor" />
        </button>
      </div>

      {/* Card stack: real layered cards whose depth (scale/y/opacity/rotate/shadow)
          animates as the index changes — the front card lifts away while the card
          behind scales forward into the front position. */}
      <div
        className={styles.mobileTrack}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {visibleLayers.map(({ item, depth }) => {
          const isFront = depth === 0;
          const state = prefersReducedMotion
            ? DEPTH_STATES[0]
            : (DEPTH_STATES[depth] ?? DEPTH_STATES[DEPTH_STATES.length - 1]);

          return (
            <motion.div
              key={item.id}
              className={styles.mobileSlide}
              aria-hidden={isFront ? undefined : 'true'}
              initial={false}
              animate={{
                y: state.y,
                scale: state.scale,
                opacity: state.opacity,
                rotate: prefersReducedMotion ? 0 : state.rotate,
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: STACK_DEPTH - depth }}
              drag={isFront && total > 1 ? 'x' : false}
              dragSnapToOrigin
              dragElastic={0.18}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setPaused(true)}
              onDragEnd={isFront ? handleDragEnd : undefined}
            >
              {/* Only the front card renders interactive content; ghosts behind
                  are inert silhouettes so screen readers / focus stay on the
                  active testimonial. */}
              {isFront ? (
                <MobileCard item={item} />
              ) : (
                <div className={styles.mobileGhostCard} />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const total = testimonials.length;
  const pairCount = total - 1;
  const [pairIndex, setPairIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionHeight = useMemo(() => `calc(${total * 115}vh + 18rem)`, [total]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const localFlipProgress = useTransform(scrollYProgress, (value) => getLocalFlipProgress(value, total));
  const flipRotation = useTransform(localFlipProgress, [0, 1], [0, -180]);
  const frontOpacity = useTransform(localFlipProgress, [0, 0.485, 0.5, 1], [1, 1, 0, 0]);
  const backOpacity = useTransform(localFlipProgress, [0, 0.5, 0.515, 1], [0, 0, 1, 1]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const nextPairIndex = getPairIndex(value, total);
    const rawIndex = value * pairCount;
    const nextActiveIndex = Math.min(total - 1, Math.max(0, Math.round(rawIndex)));

    setPairIndex(nextPairIndex);
    setActiveIndex(nextActiveIndex);
  });

  const jumpToSlide = (index) => {
    const section = sectionRef.current;
    if (!section) return;

    const maxScrollableDistance = Math.max(0, section.offsetHeight - window.innerHeight);
    const targetProgress = total === 1 ? 0 : index / (total - 1);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const targetY = sectionTop + maxScrollableDistance * targetProgress;

    setActiveIndex(index);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const frontItem = testimonials[pairIndex];
  const backItem = testimonials[pairIndex + 1];

  return (
    <section ref={sectionRef} id="testimonials" className={styles.section} style={{ height: sectionHeight }}>
      <div className={styles.sticky}>
        <motion.header className={styles.header} style={{ y: headerY }}>
          <p className={styles.kicker}>What they say?</p>
          <h2 className={styles.heading}>
            Echoes of <span className={styles.scriptWord}>Impact!</span>
          </h2>
          <p className={styles.subcopy}>
            Design is collaborative. From mentors to teammates, words that remind me — <strong>&quot;I&apos;ve made an impact!&quot;</strong>
          </p>
        </motion.header>

        <div className={styles.viewport}>
          <motion.div className={styles.flipper} style={{ rotateY: flipRotation }}>
            <TestimonialFace item={frontItem} side="front" opacity={frontOpacity} />
            <TestimonialFace item={backItem} side="back" opacity={backOpacity} />
          </motion.div>
        </div>

        <div className={styles.dots} aria-label="Choose testimonial slide">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dotButton} ${activeIndex === index ? styles.dotButtonActive : ''}`}
              aria-label={`Go to testimonial ${index + 1}: ${item.name}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => jumpToSlide(index)}
            />
          ))}
        </div>

        <div className={styles.mobileList}>
          <MobileCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}
