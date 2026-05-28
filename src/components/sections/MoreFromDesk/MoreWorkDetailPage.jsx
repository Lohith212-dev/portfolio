import Image from 'next/image';
import Link from 'next/link';
import MiniMock from './MiniMock';
import { getLaneStyle } from './moreWorksUtils';
import styles from './MoreWorkDetailPage.module.css';

function getHeroImages(detail) {
  if (detail.heroShowcase?.length) {
    return detail.heroShowcase.slice(0, 3);
  }

  if (detail.solutionGroups?.length) {
    return detail.solutionGroups.flatMap((group) => group.images || []).slice(0, 3);
  }

  return [];
}

export default function MoreWorkDetailPage({ item, detail }) {
  const heroImages = getHeroImages(detail);
  const hasContext = Boolean(detail.context || detail.contribution);
  const hasProblem = Boolean(detail.problem || detail.problemPoints?.length);
  const hasObjectives = detail.objectives?.length;
  const hasSolutionGroups = detail.solutionGroups?.length;
  const hasEvidence = detail.evidence?.points?.length;
  const hasTakeaway = Boolean(detail.impact?.takeaway || detail.takeawayCards?.length);
  const impact = detail.impact;

  const sectionLinks = [
    hasContext ? { id: 'context', label: 'Context' } : null,
    hasProblem ? { id: 'problem', label: 'Problem' } : null,
    hasObjectives ? { id: 'design-objectives', label: 'Design' } : null,
    hasSolutionGroups ? { id: 'solution', label: 'Solution' } : null,
    impact ? { id: 'outcome', label: 'Outcome' } : null,
    hasTakeaway ? { id: 'takeaway', label: 'What I learned' } : null,
  ].filter(Boolean);

  return (
    <main className={styles.page} style={getLaneStyle(item)}>
      <section id="overview" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{detail.eyebrow}</p>
          <h1>{detail.title}</h1>
          <p className={styles.hook}>{detail.hook}</p>
          <p className={styles.intro}>{detail.intro}</p>

          {detail.meta?.length ? (
            <div className={styles.metaRow}>
              {detail.meta.map((entry) => (
                <span key={entry} className={styles.metaPill}>{entry}</span>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.heroStage}>
          {heroImages.length ? (
            <div className={styles.heroGallery}>
              <figure className={styles.heroGalleryPrimary}>
                <div className={styles.heroImageShell}>
                  <Image
                    src={heroImages[0].src}
                    alt={heroImages[0].alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 86vw, 56vw"
                    className={styles.heroImage}
                  />
                </div>
              </figure>

              {heroImages[1] ? (
                <figure className={styles.heroGallerySecondary}>
                  <div className={styles.heroImageShell}>
                    <Image
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 86vw, 28vw"
                      className={styles.heroImage}
                    />
                  </div>
                </figure>
              ) : null}

              {heroImages[2] ? (
                <figure className={styles.heroGalleryTertiary}>
                  <div className={styles.heroImageShell}>
                    <Image
                      src={heroImages[2].src}
                      alt={heroImages[2].alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 86vw, 28vw"
                      className={styles.heroImage}
                    />
                  </div>
                </figure>
              ) : null}
            </div>
          ) : (
            <div className={styles.previewPlaceholder}>
              <MiniMock laneId={item.laneId} index={0} />
            </div>
          )}
        </div>

        {detail.heroMetrics?.length ? (
          <div className={styles.metricStrip}>
            {detail.heroMetrics.map((metric) => (
              <article key={`${metric.value}-${metric.label}`} className={styles.metricCard}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <div className={styles.bodyShell}>
        {sectionLinks.length ? (
          <aside className={styles.sectionRail} aria-label="Page sections">
            <nav>
              {sectionLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>{link.label}</a>
              ))}
            </nav>
          </aside>
        ) : null}

        <div className={styles.contentStack}>
          {hasContext ? (
            <section id="context" className={styles.contentSection}>
              <p className={styles.sectionLabel}>Context</p>
              <h2>Why this product had to exist</h2>
              {detail.context ? <p className={styles.sectionBody}>{detail.context}</p> : null}
              {detail.contribution ? <p className={styles.sectionBody}>{detail.contribution}</p> : null}
            </section>
          ) : null}

          {hasProblem ? (
            <section id="problem" className={styles.contentSection}>
              <p className={styles.sectionLabel}>Problem</p>
              <h2>Students needed a plan they could trust and follow.</h2>
              {detail.problem ? <p className={styles.sectionBody}>{detail.problem}</p> : null}

              {detail.problemPoints?.length ? (
                <div className={styles.pointGrid}>
                  {detail.problemPoints.map((point, index) => (
                    <article key={point} className={styles.pointCard}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{point}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {hasObjectives ? (
            <section id="design-objectives" className={styles.contentSection}>
              <p className={styles.sectionLabel}>Design</p>
              <h2>Three targeted objectives shaped the wrapper.</h2>
              <div className={styles.objectiveGrid}>
                {detail.objectives.map((objective) => (
                  <article key={objective.title} className={styles.objectiveCard}>
                    <h3>{objective.title}</h3>
                    <p>{objective.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasSolutionGroups ? (
            <section id="solution" className={styles.contentSection}>
              <p className={styles.sectionLabel}>Solution</p>
              <h2>How the product comes together.</h2>
              {detail.solutionIntro ? <p className={styles.sectionBody}>{detail.solutionIntro}</p> : null}

              <div className={styles.solutionStack}>
                {detail.solutionGroups.map((group) => (
                  <article key={group.title} className={styles.solutionGroup}>
                    <div className={styles.solutionHeader}>
                      <p className={styles.groupEyebrow}>{group.eyebrow}</p>
                      <h3>{group.title}</h3>
                      <p className={styles.sectionBody}>{group.description}</p>
                    </div>

                    <div className={styles.visualPanel}>
                      <div className={styles.visualGrid}>
                        {group.images.map((image, index) => (
                          <figure
                            key={image.src}
                            className={`${styles.visualCard} ${index === 0 ? styles.visualCardFeature : ''}`}
                          >
                            <div className={styles.visualMedia}>
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 56vw"
                                className={styles.visualImage}
                              />
                            </div>
                            <figcaption className={styles.visualCaption}>
                              <strong>{image.title}</strong>
                              <span>{image.caption}</span>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>

                    {group.highlights?.length ? (
                      <ul className={styles.highlightList}>
                        {group.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasEvidence ? (
            <section className={styles.contentSection}>
              <p className={styles.sectionLabel}>{detail.evidence.eyebrow}</p>
              <h2>{detail.evidence.title}</h2>
              {detail.evidence.body ? <p className={styles.sectionBody}>{detail.evidence.body}</p> : null}
              <div className={styles.evidenceGrid}>
                {detail.evidence.points.map((point) => (
                  <article key={point} className={styles.evidenceCard}>
                    <p>{point}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {impact ? (
            <section id="outcome" className={styles.contentSection}>
              <p className={styles.sectionLabel}>{impact.eyebrow}</p>
              <h2>{impact.title}</h2>
              {impact.body ? <p className={styles.sectionBody}>{impact.body}</p> : null}

              {impact.metrics?.length ? (
                <div className={styles.impactMetricGrid}>
                  {impact.metrics.map((metric) => (
                    <article key={`${metric.value}-${metric.label}`} className={styles.impactMetricCard}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </article>
                  ))}
                </div>
              ) : null}

              {impact.proof?.length ? (
                <div className={styles.proofGrid}>
                  {impact.proof.map((proof) => (
                    <article key={proof.title} className={styles.proofCard}>
                      <h3>{proof.title}</h3>
                      {proof.body ? <p>{proof.body}</p> : null}
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {hasTakeaway ? (
            <section id="takeaway" className={styles.contentSection}>
              <p className={styles.sectionLabel}>What I learned</p>
              <h2>{detail.impact?.takeaway || 'What this project demonstrates'}</h2>

              {detail.takeawayCards?.length ? (
                <div className={styles.takeawayGrid}>
                  {detail.takeawayCards.map((card) => (
                    <article key={card.title} className={styles.takeawayInfoCard}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </div>

      <div className={styles.backRow}>
        <Link href="/#more-from-desk">Back to The Full Range</Link>
      </div>
    </main>
  );
}
