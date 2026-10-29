import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import GifMeme from '../GifMeme';
import GifLoop from '../GifMeme/GifLoop';
import {
  ThoughtsSpineIcon,
  ThoughtsClockIcon,
  ThoughtsLiveUiIcon,
  ThoughtsProofIcon,
  ThoughtsInventionIcon,
  ThoughtsFramesIcon,
  ThoughtsNewRuleIcon,
  ThoughtsCheckIcon,
  ThoughtsClaudeCodeLogo,
  ThoughtsOpenRouterLogo,
} from '../../icons/icons';
import QuoteHero from './QuoteHero';
import FullPageTour from './FullPageTour';
import ReceiptChart from './ReceiptChart';
import Reveal from './Reveal';
import { FlowWide, FlowTall } from './FlowDiagram';
import { gifs, teamGroups, rules, film, sources, photoCredits } from './meanwhileData';
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

function GroupLogo({ logo }) {
  if (logo === 'claude') return <ThoughtsClaudeCodeLogo className={styles.logo} />;
  if (logo === 'openrouter') return <ThoughtsOpenRouterLogo className={styles.logo} />;
  return <Image src="/images/footer/footer-avatar-circled.png" alt="" width={56} height={56} className={styles.avatar} />;
}

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
          <p className={`${styles.statNum} ${styles.statHuman}`}>6</p>
          <p className={styles.statLabel}>decisions, made by me 🙋</p>
          <ul className={styles.ticks} aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
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

      <GifBeat gif={gifs.team} tilt="right" />

      <section className={styles.beat} aria-labelledby="team-h">
        <div className={styles.inner}>
          <Reveal className={styles.head}>
            <h2 id="team-h" className={styles.h2}>Meet the team</h2>
            <p className={styles.body}>Stand-ups are short. Most of the team doesn’t have a body. 👻</p>
          </Reveal>
          {teamGroups.map((g) => (
            <div key={g.id} className={styles.group}>
              <Reveal className={styles.groupHead}>
                <span className={styles.groupLogo}><GroupLogo logo={g.logo} /></span>
                <h3 className={styles.h3}>{g.title}</h3>
                <span className={styles.groupNote}>{g.note}</span>
              </Reveal>
              <ul className={styles.team}>
                {g.members.map((m, i) => (
                  <Reveal
                    as="li"
                    key={m.name}
                    delay={i * 0.06}
                    className={`${styles.member} ${g.id === 'human' ? styles.memberHuman : ''}`}
                  >
                    <span className={styles.memberLogo}><GroupLogo logo={g.logo} /></span>
                    <h4 className={styles.memberName}>{m.name}</h4>
                    <p className={styles.role}>{m.role}</p>
                    <p className={styles.memberLine}>{m.line}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <GifBeat gif={gifs.yes} />

      <section className={styles.beat} aria-labelledby="flow-h">
        <div className={styles.inner}>
          <Reveal className={styles.head}>
            <h2 id="flow-h" className={styles.h2}>I said yes six times.</h2>
            <p className={styles.body}>That’s my whole job. 👑 Agents do the legwork, and nothing moves past an orange mark without a yes.</p>
          </Reveal>
          <Reveal delay={0.15} className={styles.flowCard}>
            <div className={styles.legend} aria-hidden="true">
              <span><i className={styles.keyHuman} />I decide</span>
              <span><i className={styles.keyAgent} />Agents work</span>
              <span><i className={styles.keyBack} />Sent back to fix</span>
            </div>
            <FlowWide className={styles.flowWide} />
            <FlowTall className={styles.flowTall} />
          </Reveal>
        </div>
      </section>

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

      <section className={styles.beat} aria-labelledby="film-h">
        <div className={styles.inner}>
          <Reveal className={styles.head}>
            <p className={`${styles.hand} ${styles.kicker}`}>where the $9.60 went 🎬</p>
            <h2 id="film-h" className={styles.h2}>The video receipt</h2>
            <p className={styles.body}>
              A one-minute narrated film (motion graphics in code, AI voiceover, original score) and five-second loops of the engineers on the page. Sound on. 🔊
            </p>
          </Reveal>
          <Reveal delay={0.1} className={styles.film}>
            <video
              className={styles.filmVideo}
              controls
              playsInline
              preload="none"
              poster={film.poster}
              width={1920}
              height={1080}
            >
              <source src={film.src} type="video/mp4" />
              <track kind="captions" src={film.captions} srcLang="en" label="English" default />
            </video>
          </Reveal>
          <ul className={styles.loops}>
            {film.loops.map((l, i) => (
              <Reveal as="li" key={l.src} delay={0.1 + i * 0.08} className={styles.loop}>
                <GifLoop {...l} className={styles.loopVideo} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

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

        <div className={`${styles.inner} ${styles.sources}`}>
          <h2 className={styles.sourcesTitle}>Sources and credits</h2>
          <ol className={styles.sourceList}>
            {sources.map((s) => (
              <li key={s.id} id={`src-${s.id}`}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ol>
          <p className={styles.credits}>
            Portraits from Wikimedia Commons, CC BY 2.0, cropped and shown in greyscale:{' '}
            {photoCredits.map((c, i) => (
              <span key={c.who}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">{c.who} by {c.by}</a>
                {i < photoCredits.length - 1 ? ', ' : '. '}
              </span>
            ))}
            GIFs via GIPHY, each credited and linked under the clip; all rights stay with their owners.
            Claude Code and OpenRouter logos belong to Anthropic and OpenRouter.
            The page, film, photos and loops were made for Crozaint’s AI observability page; the L1–L3 engineers are AI-generated, real staff photos are pixelated and the screens show sample data. Built with Claude Code.
          </p>
        </div>
      </footer>
    </main>
  );
}
