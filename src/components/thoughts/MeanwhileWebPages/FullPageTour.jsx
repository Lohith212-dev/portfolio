import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ramp, useStill } from './QuoteHero';
import styles from './MeanwhileWebPages.module.css';

// The whole finished page in a browser window. The stage pins and your
// scroll pans the page inside the window from the hero to the footer.
// Reduced motion: no pin; the window scrolls on its own like a normal box.

const SRC = '/images/thoughts/meanwhile-web-pages/full-page.webp';
const LIVE = 'https://www.crozaint.com/service/ai-observability';

export default function FullPageTour() {
  const ref = useRef(null);
  const still = useStill();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const pan = useTransform(scrollYProgress, (v) => `50% ${ramp(0.08, 0.92, 0, 100)(v)}%`);

  return (
    <section ref={ref} className={`${styles.tour} ${still ? styles.tourStill : ''}`} aria-labelledby="tour-h">
      <div className={styles.tourStage}>
        <div className={styles.head}>
          <h2 id="tour-h" className={styles.h2}>All 14 sections, top to bottom 👇</h2>
          <p className={styles.body}>
            The service page the agents built: one incident followed from the alert at 09:41 to the approved fix. Keep scrolling and it scrolls with you. 🖱️
          </p>
          <a className={styles.liveLink} href={LIVE} target="_blank" rel="noopener noreferrer">Open the live page ↗</a>
          <p className={styles.small}>Product screens show sample data. Real staff photos are pixelated here.</p>
        </div>

        <div className={styles.browser}>
          <div className={styles.browserBar}>
            <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
            <a href={LIVE} target="_blank" rel="noopener noreferrer">crozaint.com/service/ai-observability ↗</a>
          </div>
          {still ? (
            <div className={styles.browserScroll}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SRC} alt="The full AI observability service page, all 14 sections." width={960} height={14159} />
            </div>
          ) : (
            <motion.div
              className={styles.browserView}
              role="img"
              aria-label="The full AI observability service page, all 14 sections, panning from top to bottom."
              style={{ backgroundImage: `url(${SRC})`, backgroundPosition: pan }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
