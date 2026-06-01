import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { MotifCurlyArrow } from '../../../icons/icons';
import VideoEditorialStack from '../../VideoEditorialStack';
import { Reveal } from '../satLmsHelpers';
import { tutorBehaviors } from '../satLmsData';
import styles from '../SatLmsCaseStudy.module.css';

function TutorBehaviorVideo({ behavior }) {
  return (
    <div className={styles.tutorBehaviorVideoWrap} aria-hidden="true">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={behavior.video} type="video/mp4" />
      </video>
    </div>
  );
}

function TutorBehaviorDescription({ behavior }) {
  return (
    <p className={styles.tutorBehaviorDescription}>
      {behavior.description.map((segment) => (
        segment.strong ? (
          <strong key={segment.text}>{segment.text}</strong>
        ) : (
          <span key={segment.text}>{segment.text}</span>
        )
      ))}
    </p>
  );
}

function TutorBehaviorRow({ behavior, scrollYProgress }) {
  const shouldReduceMotion = useReducedMotion();
  const x = useTransform(
    scrollYProgress,
    [behavior.rangeStart, behavior.rangeEnd],
    behavior.direction === 'left' ? ['-120px', '0px'] : ['120px', '0px']
  );
  const opacity = useTransform(scrollYProgress, [behavior.rangeStart, behavior.rangeEnd], [0, 1]);
  const motionStyle = shouldReduceMotion ? { x: 0, opacity: 1 } : { x, opacity };

  return (
    <motion.article
      className={`${styles.tutorBehaviorRow} ${behavior.videoPosition === 'right' ? styles.tutorBehaviorRowVideoRight : ''}`}
      style={motionStyle}
      aria-label={`${behavior.title}: ${behavior.descriptionText}`}
    >
      {behavior.videoPosition === 'left' ? <TutorBehaviorVideo behavior={behavior} /> : null}
      <h3 className={styles.tutorBehaviorTitle}>{behavior.title}</h3>
      <TutorBehaviorDescription behavior={behavior} />
      {behavior.videoPosition === 'right' ? <TutorBehaviorVideo behavior={behavior} /> : null}
    </motion.article>
  );
}

export default function ApproachInteraction() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });
  const behaviorRanges = [
    { rangeStart: 0.15, rangeEnd: 0.32 },
    { rangeStart: 0.32, rangeEnd: 0.5 },
    { rangeStart: 0.5, rangeEnd: 0.68 },
  ];
  const conclusionInitial = shouldReduceMotion ? false : { opacity: 0, y: 64, scale: 0.9, filter: 'blur(10px)' };
  const conclusionReveal = shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };
  const conclusionTransition = { duration: 0.72, ease: [0.16, 1, 0.3, 1] };
  const rejectedInitial = shouldReduceMotion ? false : {
    color: 'var(--color-ink-950)',
    backgroundSize: '0% 0.08em',
  };
  const rejectedReveal = shouldReduceMotion ? {} : {
    color: 'var(--color-ink-300)',
    backgroundSize: '100% 0.08em',
  };
  const rejectedTransition = {
    color: { duration: 0.45, delay: 0.8 },
    backgroundSize: { duration: 0.85, delay: 1.05, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div ref={sectionRef} className={`${styles.approachPinShell} ${styles.wordplayReady}`}>
      <div className={styles.approachSticky}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <VideoEditorialStack className={styles.approachInteractionLayout}>
              <div className={styles.approachThinkingRow}>
                <p className={`${styles.caseStudyBrow} ${styles.caseStudyBrowGreen}`}>My approach</p>
                <div className={styles.approachCopyColumn}>
                  <h2 id="approach-heading" className={styles.approachHeading}>How I approached the problem</h2>
                  <p className={styles.approachQuestion}>
                    Once the problem was clear, I asked the question —
                    <br />
                    <strong>If the student were working with a private tutor,</strong>
                    <br />
                    <strong className={styles.approachQuestionHighlight}>what would the tutor do for them?</strong>
                  </p>
                </div>
              </div>

              <div className={styles.tutorBehaviorList}>
                {tutorBehaviors.map((behavior, index) => (
                  <TutorBehaviorRow
                    key={behavior.id}
                    behavior={{ ...behavior, ...behaviorRanges[index] }}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>

              <div className={styles.approachConclusionWrap}>
                <motion.div
                  className={`${styles.approachConclusionArrow} ${styles.approachConclusionArrowTop}`}
                  initial={conclusionInitial}
                  whileInView={conclusionReveal}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ ...conclusionTransition, delay: 0.08 }}
                  aria-hidden="true"
                >
                  <MotifCurlyArrow />
                </motion.div>
                <motion.p
                  className={styles.wordplayStatement}
                  initial={conclusionInitial}
                  whileInView={conclusionReveal}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={conclusionTransition}
                  aria-label="I began thinking of the LMS as an intelligent tutor."
                >
                  <span>I began thinking of the LMS </span>
                  <motion.span
                    className={styles.wordplayRejected}
                    initial={rejectedInitial}
                    whileInView={rejectedReveal}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={rejectedTransition}
                  >
                    not as a place to browse courses, but
                    {' '}
                  </motion.span>
                  <span>as an intelligent tutor.</span>
                </motion.p>
                <motion.div
                  className={`${styles.approachConclusionArrow} ${styles.approachConclusionArrowBottom}`}
                  initial={conclusionInitial}
                  whileInView={conclusionReveal}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ ...conclusionTransition, delay: 0.12 }}
                  aria-hidden="true"
                >
                  <MotifCurlyArrow />
                </motion.div>
              </div>
            </VideoEditorialStack>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
