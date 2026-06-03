import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from '../../../icons/icons';
import MoreWorkEmbedModal from '../MoreWorkEmbedModal';
import ShowcaseHero from '../ShowcaseHero';
import WorkPreview from '../WorkPreview';
import SectionHeading from '../SectionHeading';
import BeforeAfterStage from '../BeforeAfterStage';
import ScreenSetShowcase from '../ScreenSetShowcase';
import ShowcaseSidebar from '../ShowcaseSidebar';
import TestimonialMarquee from '../TestimonialMarquee';
import styles from './ShowcaseTemplate.module.css';

const comparisonMediaByDecision = {
  '01': {
    beforeSrc: '/images/case-studies/website/home-old.png',
    afterSrc: '/images/case-studies/website/home-new.png',
    beforeAlt: 'Original e-GMAT homepage screenshot.',
    afterAlt: 'Redesigned e-GMAT homepage screenshot.',
  },
  '03': {
    beforeSrc: '/images/case-studies/website/pricing-old.png',
    afterSrc: '/images/case-studies/website/pricing-new.png',
    beforeAlt: 'Original e-GMAT pricing page screenshot.',
    afterAlt: 'Redesigned e-GMAT pricing page screenshot.',
  },
  '04': {
    beforeSrc: '/images/case-studies/website/success-story-opened-old.png',
    afterSrc: '/images/case-studies/website/success-story-opened-new.png',
    beforeAlt: 'Original e-GMAT success story modal screenshot.',
    afterAlt: 'Redesigned e-GMAT success story page screenshot.',
  },
};

export default function ShowcaseTemplate({ item, detail, relatedProjects }) {
  const overviewCard = detail.overviewCard;
  const notesCard = detail.notesCard;
  const sidebar = detail.sidebar;
  const testimonials = detail.testimonials;
  const walkthroughNote = detail.walkthroughNote;
  const screenshots = detail.screenshots;
  const summary = detail.summary || 'This display page is using the shared lean wrapper while the full case study is still being prepared.';
  const roleParagraph = detail.roleParagraph || '';
  const comingSoonNote = detail.heroNote || 'This is just a display page and the full case study is coming soon.';
  const [activeEmbedModal, setActiveEmbedModal] = useState(null);

  const hasEmbed = Boolean(detail.embedUrl);
  const hasPreview = Boolean(detail.embedUrl || screenshots?.length);

  const sectionOrder = [
    overviewCard ? { id: 'context', title: 'Context' } : null,
    notesCard ? { id: 'shipped', title: 'Approach' } : null,
    notesCard?.shift ? { id: 'shift', title: 'The Shift' } : null,
    testimonials ? { id: 'testimonials', title: testimonials.title || 'Testimonials' } : null,
  ].filter(Boolean);
  const sectionNumbers = Object.fromEntries(
    sectionOrder.map((section, index) => [section.id, String(index + 1).padStart(2, '0')])
  );

  return (
    <main className={styles.page}>
      {hasEmbed ? (
        <section id="website-preview" className={styles.heroBand}>
          <Image
            src="/images/case-studies/sat-lms/shipped-flow-sky-background.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.skyImage}
            aria-hidden="true"
          />
          <div className={styles.skyWash} aria-hidden="true" />
          <div className={styles.skySheen} aria-hidden="true" />
          <div className={styles.skyGlow} aria-hidden="true" />

          <div className={styles.heroBandInner}>
            <ShowcaseHero title={detail.title} note={comingSoonNote} summary={summary} />
            <WorkPreview
              title={detail.previewTitle || detail.title}
              embedUrl={detail.embedUrl}
              liveBadge={detail.liveBadge}
              walkthroughNote={walkthroughNote}
              onOpenWalkthrough={setActiveEmbedModal}
            />
          </div>
        </section>
      ) : (
        <>
          <section className={styles.hero}>
            <ShowcaseHero title={detail.title} note={comingSoonNote} summary={summary} />
          </section>

          {hasPreview ? (
            <section id="website-preview" className={styles.previewSection}>
              <WorkPreview
                title={detail.previewTitle || detail.title}
                embedUrl={detail.embedUrl}
                screenshots={screenshots}
                walkthroughNote={walkthroughNote}
                onOpenWalkthrough={setActiveEmbedModal}
              />
            </section>
          ) : null}
        </>
      )}

      <div className={styles.bodyShell}>
        <div className={styles.contentColumn}>
          {overviewCard ? (
            <section id="context" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.context} title="Context" />
              <div className={styles.paragraphStack}>
                {overviewCard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          {notesCard ? (
            <section id="shipped" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.shipped} title="Approach" />
              <div className={styles.approachIntro}>
                {roleParagraph ? <p>{roleParagraph}</p> : null}
                {notesCard.intro ? <p>{notesCard.intro}</p> : null}
              </div>

              <div className={styles.decisionGroup}>
                {notesCard.decisions.map((decision) => {
                  const decisionMedia = comparisonMediaByDecision[decision.number];

                  return (
                    <article key={decision.number} className={styles.decisionItem}>
                      <div className={styles.decisionText}>
                        <h3>{decision.title}</h3>
                        <p>{decision.body}</p>
                      </div>

                      {decision.pair && decisionMedia?.beforeSrc && decisionMedia?.afterSrc ? (
                        <BeforeAfterStage media={decisionMedia} />
                      ) : null}

                      {decision.screenSet ? (
                        <ScreenSetShowcase
                          screenSet={decision.screenSet}
                          sectionTitle={decision.title}
                        />
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          {notesCard?.shift ? (
            <section id="shift" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.shift} title="The Shift" />
              <div className={styles.shiftCard}>
                {notesCard.shift.rows.map((row) => (
                  <div key={`${row.before}-${row.after}`} className={styles.shiftRow}>
                    <p className={styles.shiftBefore}>{row.before}</p>
                    <span className={styles.shiftArrow} aria-hidden="true">
                      <ChevronRight />
                    </span>
                    <p className={styles.shiftAfter}>{row.after}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {testimonials ? (
            <section id="testimonials" className={styles.mainSection}>
              <SectionHeading number={sectionNumbers.testimonials} title={testimonials.title || 'Testimonials'} />
              {testimonials.intro ? (
                <div className={styles.paragraphStack}>
                  <p>{testimonials.intro}</p>
                </div>
              ) : null}
              {testimonials.note ? <p className={styles.sourceNote}>{testimonials.note}</p> : null}

              <TestimonialMarquee
                testimonials={testimonials}
                onOpenSource={setActiveEmbedModal}
              />
            </section>
          ) : null}
        </div>

        <ShowcaseSidebar sidebar={sidebar} />
      </div>

      <MoreWorkEmbedModal modal={activeEmbedModal} onClose={() => setActiveEmbedModal(null)} />
    </main>
  );
}
