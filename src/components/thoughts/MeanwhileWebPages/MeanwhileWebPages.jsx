import { motion, useReducedMotion } from 'motion/react';
import GifMeme from '../GifMeme';
import {
  ThoughtsSpineIcon,
  ThoughtsClockIcon,
  ThoughtsLiveUiIcon,
  ThoughtsProofIcon,
  ThoughtsInventionIcon,
  ThoughtsFramesIcon,
  ThoughtsNewRuleIcon,
  ThoughtsCheckIcon,
} from '../../icons/icons';
import QuoteHero from './QuoteHero';
import FullPageTour from './FullPageTour';
import PipelineTeam from './PipelineTeam';
import ReceiptChart from './ReceiptChart';
import Reveal from './Reveal';
import { gifs, rules, sources, photoCredits } from './meanwhileData';
import styles from './MeanwhileWebPages.module.css';

// Thoughts No. 01, told in beats: one idea per screen, a reaction GIF on
// its own as the punchline, then the beat it sets up. Headers sit on one
// left edge; GIF beats sit centred. Orange pencil marks every human call;
// sky blue is agent work.

const RULE_ICONS = {
  spine: ThoughtsSpineIcon,
  clock: ThoughtsClockIcon,
  ui: ThoughtsLiveUiIcon,
  proof: ThoughtsProofIcon,
  invention: ThoughtsInventionIcon,
  frames: ThoughtsFramesIcon,
  rule: ThoughtsNewRuleIcon,
};

function GifBeat({ gif, tilt }) {
  return (
    <section className={styles.gifBeat}>
      <Reveal className={styles.gifHolder}>
        <GifMeme {...gif} tilt={tilt} />
      </Reveal>
    </section>
  );
}

function StatBeat() {
  const reduce = useReducedMotion();
  const pop = (i) => ({
    initial: { opacity: 0, scale: 0.4 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: reduce ? { duration: 0 } : { delay: i * 0.06, duration: 0.35 },
  });

  return (
    <section className={styles.beat} aria-label="Who did what">
      <div className={`${styles.inner} ${styles.stats}`}>
        <div className={styles.stat}>
          <p className={styles.statNum}>14</p>
          <p className={styles.statLabel}>sections, built by agents 🤖</p>
          <ul className={styles.tiles} aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <motion.li key={i} className={styles.tile} {...pop(i)} />
            ))}
          </ul>
        </div>
        <div className={styles.stat}>
          <p className={`${styles.statNum} ${styles.statHuman}`}>5</p>
          <p className={styles.statLabel}>gates where I decide 🙋</p>
          <ul className={styles.ticks} aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <motion.li key={i} className={styles.tick} {...pop(i + 4)}>
                <ThoughtsCheckIcon className={styles.tickIcon} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function MeanwhileWebPages() {
  return (
    <main className={styles.page}>
      <QuoteHero />

      <GifBeat gif={gifs.why} />

      <section className={styles.beat} aria-labelledby="why-h">
        <div className={`${styles.inner} ${styles.offset}`}>
          <Reveal className={styles.head}>
            <p className={`${styles.hand} ${styles.kicker}`}>fair question</p>
            <h2 id="why-h" className={styles.h2}>Why hand a web page to robots?</h2>
          </Reveal>
          <Reveal delay={0.15} className={styles.aside}>
            <p className={styles.body}>
              <span className={styles.accent}>Because</span> the doom threads weren’t building anything 🤷 and I had a service page to ship. 📦
            </p>
            <p className={styles.body}>
              So I handed a team of AI agents the brief. They researched the market, wrote the story, built every section and checked their own screenshots. I made the calls. ☕
            </p>
          </Reveal>
        </div>
      </section>

      <StatBeat />

      <FullPageTour />

      <PipelineTeam />

      <GifBeat gif={gifs.raw} tilt="right" />

      <section className={styles.beat} aria-labelledby="rules-h">
        <div className={styles.inner}>
          <Reveal className={styles.head}>
            <h2 id="rules-h" className={styles.h2}>Seven rules nobody gets to skip</h2>
            <p className={styles.body}>None of them need AI. The agents just can’t wriggle out of them. 🔒</p>
          </Reveal>
          <ol className={styles.rules}>
            {rules.map((r, i) => {
              const Icon = RULE_ICONS[r.icon];
              return (
                <Reveal as="li" key={r.title} delay={i * 0.06} className={styles.rule}>
                  <span className={styles.ruleNum} aria-hidden="true">{i + 1}</span>
                  <Icon className={styles.ruleIcon} />
                  <h3 className={styles.memberName}>{r.title}</h3>
                  <p className={styles.memberLine}>{r.line}</p>
                </Reveal>
              );
            })}
          </ol>
          <Reveal className={styles.but}>
            <span className={`${styles.hand} ${styles.butWord}`}>but</span>
            <span>a person still casts every face and approves every take. One take had someone grinning like a goofball. It went back. 🙅</span>
          </Reveal>
        </div>
      </section>

      <GifBeat gif={gifs.money} />

      <ReceiptChart />

      <footer className={`${styles.closer} ${styles.dark}`}>
        <div className={`${styles.inner} ${styles.center}`}>
          <Reveal>
            <p className={styles.closerBig}>
              The apocalypse is running late. <span>The page isn’t.</span> ⏰
            </p>
          </Reveal>
          <Reveal delay={0.15} className={styles.gifHolder}>
            <GifMeme {...gifs.thumbs} className={styles.narrowGif} />
          </Reveal>
          <p className={styles.bodyDark}>No download here, sorry. 🙏 The playbook is tuned to one company. The principles travel anywhere.</p>
        </div>

        <details className={`${styles.inner} ${styles.sources}`}>
          <summary className={styles.sourcesTitle}>Sources and credits</summary>
          <div className={styles.finePrint}>
            <ol className={styles.sourceList}>
              {sources.map((s) => (
                <li key={s.id} id={`src-${s.id}`}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ol>
            <p>
              Portraits: Wikimedia Commons, CC BY 2.0, cropped, greyscale (
              {photoCredits.map((c, i) => (
                <span key={c.who}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">{c.who} by {c.by}</a>
                  {i < photoCredits.length - 1 ? '; ' : ''}
                </span>
              ))}
              ). GIFs via GIPHY, credited under each clip; rights stay with their owners. Claude Code and OpenRouter logos belong to Anthropic and OpenRouter.
              The page, film and photos were made for Crozaint’s AI observability page; the L1–L3 engineers are AI-generated, real staff photos are pixelated and the screens show sample data. Built with Claude Code.
            </p>
          </div>
        </details>
      </footer>
    </main>
  );
}
