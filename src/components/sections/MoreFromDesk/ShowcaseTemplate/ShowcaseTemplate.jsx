import { useState } from 'react';
import Image from 'next/image';
import MoreWorkEmbedModal from '../MoreWorkEmbedModal';
import ShowcaseHero from '../ShowcaseHero';
import WorkPreview from '../WorkPreview';
import PrototypeEmbed from '../PrototypeEmbed';
import SectionHeading from '../SectionHeading';
import ScreenSetShowcase from '../ScreenSetShowcase';
import ShowcaseSidebar from '../ShowcaseSidebar';
import ShowcaseSpecStrip from '../ShowcaseSpecStrip';
import TestimonialMarquee from '../TestimonialMarquee';
import VideoTestimonialCard from '../VideoTestimonialCard';
import StakeholderQuoteCard from '../../../shared/StakeholderQuoteCard';
import TestimonialCard from '../../../shared/TestimonialCard';
import ContextCardGrid from './ContextCardGrid';
import ObjectivesGrid from './ObjectivesGrid';
import ThesisCallout from './ThesisCallout';
import CompareCard from './CompareCard';
import DecisionStatCard from './DecisionStatCard';
import ShiftTable from './ShiftTable';
import FullPageModalProvider from './FullPageModal';
import styles from './ShowcaseTemplate.module.css';

/* No loading="lazy" here: the layers are absolutely positioned with zero
   height until the image loads, so Chromium never considers them
   intersecting and lazy images would stay blank forever. */
function comparePage(src, alt) {
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={src} alt={alt} />;
}

export default function ShowcaseTemplate({ item, detail, relatedProjects }) {
  const overviewCard = detail.overviewCard;
  const contextCards = detail.contextCards;
  const objectives = detail.solutionObjectives;
  const notesCard = detail.notesCard;
  const sidebar = detail.sidebar;
  const testimonials = detail.testimonials;
  const testimonial = detail.testimonial;
  const walkthroughNote = detail.walkthroughNote;
  const screenshots = detail.screenshots;
  const summary = detail.summary || 'This display page is using the shared lean wrapper while the full case study is still being prepared.';
  const roleParagraph = detail.roleParagraph || '';
  const comingSoonNote = detail.heroNote || 'This is just a display page and the full case study is coming soon.';
  const [activeEmbedModal, setActiveEmbedModal] = useState(null);

  const hasEmbed = Boolean(detail.embedUrl);
  const hasPreview = Boolean(detail.embedUrl || screenshots?.length);
  const hasContext = Boolean(contextCards?.length || overviewCard);

  const sectionOrder = [
    hasContext ? { id: 'context', title: contextCards?.length ? 'Setting the context' : 'Context' } : null,
    objectives ? { id: 'objectives', title: 'Solution objectives' } : null,
    notesCard ? { id: 'shipped', title: 'Approach' } : null,
    notesCard?.shift ? { id: 'shift', title: 'The Shift' } : null,
    testimonials ? { id: 'testimonials', title: testimonials.title || 'Testimonials' } : null,
  ].filter(Boolean);
  const sectionNumbers = Object.fromEntries(
    sectionOrder.map((section, index) => [section.id, String(index + 1).padStart(2, '0')])
  );

  return (
    <FullPageModalProvider>
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
              <ShowcaseSpecStrip sidebar={sidebar} />
              {detail.prototypeEmbed ? (
                /* Fixed-artboard prototype (XD/Figma): desktop frame on every
                   breakpoint — the embed does not reflow like a live site. */
                <PrototypeEmbed
                  title={detail.previewTitle || detail.title}
                  embedUrl={detail.embedUrl}
                  liveBadge={detail.liveBadge}
                  aspect={detail.prototypeEmbed.aspect}
                  maxWidth={detail.prototypeEmbed.maxWidth}
                  walkthroughNote={walkthroughNote}
                  onOpenWalkthrough={setActiveEmbedModal}
                />
              ) : (
                <WorkPreview
                  title={detail.previewTitle || detail.title}
                  embedUrl={detail.embedUrl}
                  liveBadge={detail.liveBadge}
                  walkthroughNote={walkthroughNote}
                  onOpenWalkthrough={setActiveEmbedModal}
                />
              )}
            </div>
          </section>
        ) : (
          <>
            <section className={styles.hero}>
              <ShowcaseHero title={detail.title} note={comingSoonNote} summary={summary} />
              <ShowcaseSpecStrip sidebar={sidebar} />
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
            {hasContext ? (
              <section id="context" className={styles.mainSection}>
                <SectionHeading
                  number={sectionNumbers.context}
                  title={contextCards?.length ? 'Setting the context' : 'Context'}
                />
                {contextCards?.length ? (
                  <ContextCardGrid cards={contextCards} />
                ) : (
                  <div className={styles.paragraphStack}>
                    {overviewCard.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </section>
            ) : null}

            {objectives ? (
              <section id="objectives" className={styles.mainSection}>
                <SectionHeading number={sectionNumbers.objectives} title="Solution objectives" />
                <ObjectivesGrid items={objectives.items} />
                {objectives.thesis ? <ThesisCallout text={objectives.thesis} /> : null}
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
                  {notesCard.decisions.map((decision, index) => (
                    <article key={decision.number} className={styles.decisionItem}>
                      <div className={styles.decisionText}>
                        <h3>
                          <span className={styles.decisionNumber}>
                            {`${Number(sectionNumbers.shipped)}.${index + 1}`}
                          </span>
                          {decision.title}
                        </h3>
                        <p>{decision.body}</p>
                      </div>

                      {decision.compare ? (
                        <CompareCard
                          beforeContent={comparePage(
                            decision.compare.beforeSrc,
                            decision.compare.beforeAlt,
                          )}
                          afterContent={comparePage(
                            decision.compare.afterSrc,
                            decision.compare.afterAlt,
                          )}
                          ariaLabel={decision.compare.ariaLabel}
                        />
                      ) : null}

                      {decision.stat ? (
                        <DecisionStatCard
                          figure={decision.stat.figure}
                          baseline={decision.stat.baseline}
                          eyebrow={decision.stat.eyebrow}
                          label={decision.stat.label}
                          icon={decision.stat.icon}
                        />
                      ) : null}

                      {decision.screenSet ? (
                        <ScreenSetShowcase
                          screenSet={decision.screenSet}
                          sectionTitle={decision.title}
                        />
                      ) : null}

                      {decision.inlineQuote ? (
                        /* Same card as the public-reception marquee, just
                           standalone and full-width — the decision grid
                           stretches it; no marquee sizing class. */
                        <TestimonialCard
                          item={decision.inlineQuote}
                          sourceBrand={testimonials?.sourceBrand}
                          onOpenSource={setActiveEmbedModal}
                        />
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {notesCard?.shift ? (
              <section id="shift" className={styles.mainSection}>
                <SectionHeading number={sectionNumbers.shift} title="The Shift" />
                <ShiftTable rows={notesCard.shift.rows} />
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

                {testimonials.variant === 'video' ? (
                  /* A couple of video testimonials don't need a scroller —
                     each card embeds its 9:16 short directly. */
                  <div className={styles.videoTestimonialStack}>
                    {testimonials.items.map((item) => (
                      <VideoTestimonialCard key={item.author} item={item} />
                    ))}
                  </div>
                ) : (
                  <TestimonialMarquee
                    testimonials={testimonials}
                    onOpenSource={setActiveEmbedModal}
                  />
                )}
              </section>
            ) : null}

            {testimonial ? (
              /* Closing testimonial: a single card, no section wrapper, no
                 heading — the visual end of the page. */
              <aside className={styles.loneTestimonial}>
                <StakeholderQuoteCard quote={testimonial} />
              </aside>
            ) : null}
          </div>

          <ShowcaseSidebar sidebar={sidebar} />
        </div>

        <MoreWorkEmbedModal modal={activeEmbedModal} onClose={() => setActiveEmbedModal(null)} />
      </main>
    </FullPageModalProvider>
  );
}
