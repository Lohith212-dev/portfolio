import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import GifMeme from '../GifMeme';
import { ThoughtsClaudeCodeLogo, ThoughtsOpenRouterLogo } from '../../icons/icons';
import Reveal from './Reveal';
import { ramp, useStill } from './QuoteHero';
import { gifs, pipeline, teamGroups } from './meanwhileData';
import styles from './PipelineTeam.module.css';

// "How I did it" turns into "Meet the team". Every stage of the real
// pipeline is a card; as it scrolls past the middle of the screen it flips
// over to show who did that stage. Orange cards are my five gates. Under
// the pipeline, the team it turned into: agents, media crew, me.
// Reduced motion: no flip; each card shows its stage and who did it.

const AVATAR = '/images/footer/footer-avatar-circled.png';

function Logo({ kind, className }) {
  if (kind === 'claude') return <ThoughtsClaudeCodeLogo className={className} />;
  if (kind === 'openrouter') return <ThoughtsOpenRouterLogo className={className} />;
  return <Image src={AVATAR} alt="" width={48} height={48} className={`${className} ${styles.avatar}`} />;
}

function StageFront({ stage }) {
  return (
    <div className={`${styles.face} ${stage.mine ? styles.mine : ''}`}>
      <p className={styles.stageLabel}>{stage.label}</p>
      <h4 className={styles.stageTitle}>{stage.title}</h4>
      {stage.line && <p className={styles.stageLine}>{stage.line}</p>}
      {stage.bullets && (
        <ul className={styles.bullets}>
          {stage.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
      {stage.foot && <p className={styles.stageLine}>{stage.foot}</p>}
    </div>
  );
}

function StageBack({ stage }) {
  const { who } = stage;
  return (
    <div className={`${styles.face} ${styles.back} ${who.me ? styles.backMe : ''}`}>
      <span className={styles.backLogo}><Logo kind={who.me ? 'me' : 'claude'} className={styles.logo} /></span>
      <p className={styles.stageLabel}>{stage.title} was</p>
      <h4 className={styles.stageTitle}>{who.name}</h4>
      <p className={styles.stageLine}>{who.line}</p>
    </div>
  );
}

function StageCard({ stage, still }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'start 0.3'] });
  const rotateY = useTransform(scrollYProgress, ramp(0, 1, 0, 180));

  if (still) {
    return (
      <li className={styles.card}>
        <div className={styles.stillCard}>
          <StageFront stage={stage} />
          <p className={styles.stillWho}>
            <Logo kind={stage.who.me ? 'me' : 'claude'} className={styles.logoSmall} />
            {stage.who.name}
          </p>
        </div>
      </li>
    );
  }

  return (
    <li ref={ref} className={styles.card}>
      <motion.div className={styles.flipper} style={{ rotateY }}>
        <StageFront stage={stage} />
        <StageBack stage={stage} />
      </motion.div>
    </li>
  );
}

export default function PipelineTeam() {
  const still = useStill();

  return (
    <section className={styles.section} aria-labelledby="how-h">
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p className={styles.kicker}>keep scrolling: every stage flips to whoever did it 🔄</p>
          <h2 id="how-h" className={styles.h2}>How I did it</h2>
          <p className={styles.body}>
            Eight stages, three kinds of loop. Agents do the legwork; the orange cards are where I step in. Nothing moves past one of those without a yes.
          </p>
          <div className={styles.legend} aria-hidden="true">
            <span><i className={styles.keyMine} />I decide</span>
            <span><i className={styles.keyAgent} />Agents work</span>
          </div>
        </Reveal>

        {pipeline.map((row) => (
          <div key={row.row} className={styles.row}>
            <p className={styles.rowLabel}>{row.row}</p>
            <ol className={styles.cards}>
              {row.stages.map((stage) => (
                <StageCard key={stage.id} stage={stage} still={still} />
              ))}
            </ol>
          </div>
        ))}

        <Reveal className={styles.head}>
          <p className={styles.kicker}>which makes the team…</p>
          <h2 id="team-h" className={styles.h2}>Meet the team</h2>
          <p className={styles.body}>Stand-ups are short. Most of the team doesn’t have a body. 👻</p>
        </Reveal>

        <ul className={styles.groups}>
          {teamGroups.map((g, i) => (
            <Reveal as="li" key={g.id} delay={i * 0.1} className={`${styles.group} ${g.id === 'human' ? styles.groupMe : ''}`}>
              <GifMeme {...gifs[g.gif]} tilt={i % 2 ? 'right' : 'left'} className={styles.groupGif} />
              <div className={styles.groupHead}>
                <span className={styles.groupLogo}><Logo kind={g.logo} className={styles.logo} /></span>
                <h3 className={styles.groupTitle}>{g.title}</h3>
                <span className={styles.groupNote}>{g.note}</span>
              </div>
              {g.id === 'human' ? (
                <div className={styles.meText}>
                  <p className={styles.chip}>{g.members[0]}</p>
                  <p className={styles.body}>{g.members[1]}</p>
                </div>
              ) : (
                <ul className={styles.chips}>
                  {g.members.map((m) => <li key={m} className={styles.chip}>{m}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
