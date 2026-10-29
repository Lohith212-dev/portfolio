import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { film, receipt, takes } from './meanwhileData';
import { ramp, useStill } from './QuoteHero';
import styles from './MeanwhileWebPages.module.css';

// The bill, as a pinned chart: the total counts up and the bars rise as you
// scroll, so the video bar towering over the rest is the punchline. Under
// "video eats the budget" sits the film itself (tap: full-screen player).
// A stack of photo takes points at the Images bar; tap it and the takes
// deal out, in order, as tiles over the chart.
// Reduced motion: no pin, bars at full height, tiles appear without motion.

const TOTAL = 11.2;

function Bar({ bar, index, progress, still }) {
  const start = 0.12 + index * 0.08;
  // Height (not scale) grows, so the value label rides on top of the bar.
  const height = useTransform(progress, (v) => `max(${bar.width * ramp(start, start + 0.25)(v)}%, 4px)`);

  return (
    <li className={styles.chartCol}>
      <span className={styles.chartTrack}>
        <span className={styles.chartValue}>{bar.value}</span>
        <motion.span
          className={styles.chartBar}
          style={{ height: still ? `max(${bar.width}%, 4px)` : height }}
        />
      </span>
      <span className={styles.chartName}>{bar.name}</span>
      <span className={styles.chartCalls}>{bar.calls} calls</span>
    </li>
  );
}

function TakesStack({ open, onToggle }) {
  return (
    <button
      type="button"
      className={styles.stack}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="takes-grid"
    >
      <span className={styles.stackPile} aria-hidden="true">
        {takes.slice(0, 4).map((t, i) => (
          <Image key={t.file} src={t.src} alt="" width={120} height={90} className={styles.stackCard} style={{ '--i': i }} />
        ))}
      </span>
      <span className={styles.stackText}>
        <span className={styles.stackHand}>{open ? 'stack them back ↩' : '↙ the photo takes, tap to spread 👆'}</span>
        <span className={styles.stackSmall}>{takes.length} takes, in the order they were made</span>
      </span>
    </button>
  );
}

function FilmModal({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label="The one-minute film"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button ref={closeRef} type="button" className={styles.modalClose} onClick={onClose}>Close ×</button>
      <video
        className={styles.modalVideo}
        controls
        autoPlay
        playsInline
        poster={film.poster}
        width={1920}
        height={1080}
        onClick={(e) => e.stopPropagation()}
      >
        <source src={film.src} type="video/mp4" />
        <track kind="captions" src={film.captions} srcLang="en" label="English" default />
      </video>
    </motion.div>
  );
}

function TakesGrid({ onClose, still }) {
  return (
    <motion.div
      id="takes-grid"
      className={styles.takes}
      initial={still ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={still ? undefined : { opacity: 0 }}
    >
      <ol className={styles.takesList}>
        {takes.map((t, i) => (
          <motion.li
            key={t.file}
            className={styles.take}
            initial={still ? false : { opacity: 0, y: 40, rotate: -6, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={still ? { duration: 0 } : { delay: i * 0.07, type: 'spring', stiffness: 260, damping: 24 }}
          >
            <Image src={t.src} alt={`Generated photo, ${t.label}`} width={480} height={362} className={styles.takeImg} />
            <span className={styles.takeLabel}>{i + 1}. {t.label}</span>
          </motion.li>
        ))}
      </ol>
      <button type="button" className={styles.takesClose} onClick={onClose}>Close ×</button>
    </motion.div>
  );
}

export default function ReceiptChart() {
  const ref = useRef(null);
  const still = useStill();
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const totalText = useTransform(scrollYProgress, (v) => `$${ramp(0.05, 0.55, 0, TOTAL)(v).toFixed(2)}`);
  const noteOpacity = useTransform(scrollYProgress, ramp(0.6, 0.7));

  return (
    <section ref={ref} className={`${styles.receipt} ${still ? styles.receiptStill : ''}`} aria-labelledby="receipt-h">
      <div className={styles.receiptStage}>
        <div className={styles.receiptHead}>
          <h2 id="receipt-h" className={styles.h2}>The receipt 🧾</h2>
          <p className={styles.receiptTotal} aria-label={`Total ${receipt.total}`}>
            {still ? receipt.total : <motion.span>{totalText}</motion.span>}
          </p>
          <p className={styles.small}>
            {receipt.calls} model calls across the last two rounds, every one logged. Once the agents fired three retakes at once and went 20 cents over budget. That’s a rule now too. 🙃
          </p>
        </div>

        <div className={styles.chartWrap}>
          <ol className={styles.chart}>
            {receipt.bars.map((bar, i) => (
              <Bar key={bar.name} bar={bar} index={i} progress={scrollYProgress} still={still} />
            ))}
          </ol>
          <motion.div className={styles.chartNote} style={{ opacity: still ? 1 : noteOpacity }}>
            <p className={styles.hand}>← video eats the budget</p>
            <button type="button" className={styles.filmThumb} onClick={() => setPlaying(true)}>
              <Image src={film.poster} alt="" width={320} height={180} className={styles.filmThumbImg} />
              <span className={styles.play} aria-hidden="true">▶</span>
              <span className={styles.filmThumbText}>this is the $9.60 receipt 🎬<small>play the one-minute film</small></span>
            </button>
          </motion.div>
          <div className={styles.stackSpot}>
            <TakesStack open={open} onToggle={() => setOpen((o) => !o)} />
          </div>
          <AnimatePresence>
            {open && <TakesGrid onClose={() => setOpen(false)} still={still} />}
          </AnimatePresence>
          {/* Portalled to <body>: the pinned stage is its own stacking
              context, which would trap the player under the nav. */}
          {playing && createPortal(
            <AnimatePresence>
              <FilmModal onClose={() => setPlaying(false)} />
            </AnimatePresence>,
            document.body,
          )}
        </div>
      </div>
    </section>
  );
}
