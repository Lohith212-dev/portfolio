import { useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import GifLoop from '../GifMeme/GifLoop';
import { gifs, quotes } from './meanwhileData';
import styles from './QuoteHero.module.css';

// The opening beat. A wide strip of Terminator footage (the forecast) over
// three people who build AI, quoted on AI ending us. The stage pins while
// you scroll and all three quotes go through the shredder at once: cut
// into strips, the strips fall away, then "fine. let it happen." and the
// headline take their place.
// Reduced motion: no pin; the cards show as cut strips, headline below.

const STRIPS = 9;
const CUT = [0.04, 0.16];
const FALL = [0.16, 0.6];

// Opacity is mapped with a function on purpose: motion hands a plain
// range-mapped opacity to the browser's native scroll timeline, which never
// updated here and left the headline invisible. A function mapping stays
// on the JS path, like the transforms.
export function ramp(from, to, a = 0, b = 1) {
  return (v) => {
    const t = Math.min(Math.max((v - from) / (to - from), 0), 1);
    return a + (b - a) * t;
  };
}

// Media queries are only known in the browser. useSyncExternalStore renders
// the server value (false) during hydration, then the real one, so the
// server and browser HTML always match.
function useMedia(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function useStill() {
  return useMedia('(prefers-reduced-motion: reduce)');
}

// Fixed pseudo-random per strip, so every visit shreds the same way.
function jitter(card, strip, salt) {
  const x = Math.sin((card + 1) * 97.13 + (strip + 1) * 13.37 + salt * 7.77) * 43758.5453;
  return x - Math.floor(x);
}

function CardFace({ quote, index }) {
  return (
    <div className={styles.face}>
      <span className={styles.number} aria-hidden="true">{index + 1}</span>
      <div className={styles.person}>
        <Image src={quote.photo} alt="" width={96} height={96} className={styles.photo} />
        <p className={styles.who}>
          <strong>{quote.who}</strong>
          <span>{quote.role} · {quote.when} · source [{index + 1}]</span>
        </p>
      </div>
      <p className={styles.quoteText}>“{quote.text}”</p>
    </div>
  );
}

function Strip({ quote, card, strip, progress, still }) {
  const left = (strip / STRIPS) * 100;
  const right = 100 - ((strip + 1) / STRIPS) * 100;
  const spread = (strip - (STRIPS - 1) / 2) * 5;
  const speed = 0.55 + jitter(card, strip, 1) * 0.9;
  const spin = (jitter(card, strip, 2) - 0.5) * 24;
  const delay = jitter(card, strip, 3) * 0.12;

  const x = useTransform(progress, ramp(CUT[0], CUT[1], 0, spread));
  const y = useTransform(progress, (v) => `${ramp(FALL[0] + delay, FALL[1], 0, 120 * speed)(v)}vh`);
  const rotate = useTransform(progress, ramp(FALL[0] + delay, FALL[1], 0, spin));
  const opacity = useTransform(progress, ramp(FALL[1] - 0.12, FALL[1], 1, 0));

  return (
    <motion.div
      className={styles.strip}
      style={{
        clipPath: `inset(0 ${right}% 0 ${left}%)`,
        ...(still ? { x: spread, rotate: spin / 6, y: Math.abs(spin) * 0.4, opacity: 1 } : { x, y, rotate, opacity }),
      }}
    >
      <CardFace quote={quote} index={card} />
    </motion.div>
  );
}

export default function QuoteHero() {
  const ref = useRef(null);
  const still = useStill();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const fineOpacity = useTransform(scrollYProgress, ramp(0.6, 0.68));
  const fineScale = useTransform(scrollYProgress, ramp(0.6, 0.68, 1.25, 1));
  const headOpacity = useTransform(scrollYProgress, ramp(0.68, 0.8));
  const headY = useTransform(scrollYProgress, ramp(0.68, 0.8, 40, 0));

  return (
    <header ref={ref} className={`${styles.hero} ${still ? styles.still : ''}`}>
      <div className={styles.stage}>
        <div className={styles.top}>
          <p className={styles.label}>Thoughts · No. 01 · October 2026</p>
          <p className={styles.intro}>The people building AI, on AI 🔮</p>
        </div>

        <figure className={styles.slate}>
          <GifLoop {...gifs.march} className={styles.slateVideo} />
          <figcaption className={styles.slateCap}>
            <span className={styles.slateLive}>● Live forecast</span>
          </figcaption>
          <a className={styles.slateCredit} href={gifs.march.href} target="_blank" rel="noopener noreferrer">{gifs.march.credit} · via GIPHY</a>
        </figure>

        <div className={styles.desk}>
          <ol className={styles.cards}>
            {quotes.map((q, card) => (
              <li key={q.id} className={styles.card}>
                {/* The readable card for assistive tech; the strips are visual. */}
                <blockquote className={styles.srOnly}>
                  <p>“{q.text}” {q.who}, {q.role}, {q.when}. <a href={`#src-${q.id}`}>Source {card + 1}</a></p>
                </blockquote>
                <div className={styles.sizer} aria-hidden="true"><CardFace quote={q} index={card} /></div>
                <div aria-hidden="true">
                  {Array.from({ length: STRIPS }, (_, strip) => (
                    <Strip key={strip} quote={q} card={card} strip={strip} progress={scrollYProgress} still={still} />
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.answer}>
            <motion.p
              className={styles.fine}
              style={still ? { opacity: 1, scale: 1 } : { opacity: fineOpacity, scale: fineScale }}
            >
              fine. let it happen.
            </motion.p>
            <motion.h1
              className={styles.headline}
              style={still ? { opacity: 1, y: 0 } : { opacity: headOpacity, y: headY }}
            >
              Meanwhile, I’m building <em>web pages</em> with it. <span className={styles.emoji} role="img" aria-label="relieved face">😌</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </header>
  );
}
