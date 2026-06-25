import { useState } from 'react';
import ShowcaseHero from '../ShowcaseHero';
import ShowcaseSpecStrip from '../ShowcaseSpecStrip';
import ShowcaseSidebar from '../ShowcaseSidebar';
import ThesisCallout from '../ShowcaseTemplate/ThesisCallout';
import CompareCard from '../ShowcaseTemplate/CompareCard';
import CollapsibleSection from '../ShowcaseTemplate/CollapsibleSection';
import FullPageModalProvider, { useFullPageModal } from '../ShowcaseTemplate/FullPageModal';
import CreativeGallery from './CreativeGallery';
import styles from './VisualSystemTemplate.module.css';

/* Lean template for the Marketing & Branding lane. These are visual-systems
   stories — galleries, before/after, campaign collateral — not live product
   pages, so the body is driven by an ordered `detail.sections` array of typed
   blocks instead of the web lane's fixed context→objectives→approach spine.
   It reuses the showcase chrome (hero, spec strip, side rail, collapsible
   sections, lightbox) so it sits inside the same visual family. */

// Plain img for compare/lightbox content — these are campaign assets, not
// product art, and the compare layers stack absolutely, so no next/image.
function fullImage(src, alt) {
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={src} alt={alt} />;
}

function StatStrip({ items }) {
  return (
    <div className={styles.statStrip}>
      {items.map((item) => (
        <div key={item.label} className={styles.statCell}>
          <span className={styles.statFigure}>{item.figure}</span>
          <span className={styles.statLabel}>{item.label}</span>
          {item.sub ? <span className={styles.statSub}>{item.sub}</span> : null}
        </div>
      ))}
    </div>
  );
}

function LeadImage({ lead, onOpen }) {
  return (
    <button
      type="button"
      className={styles.leadImage}
      onClick={() => onOpen(lead)}
      aria-label={`View ${lead.caption || lead.alt || 'lead creative'} full size`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={lead.src} alt={lead.alt || ''} />
      {lead.caption ? <span className={styles.leadCaption}>{lead.caption}</span> : null}
    </button>
  );
}

function SectionBody({ section }) {
  switch (section.type) {
    case 'prose':
      return (
        <div className={styles.paragraphStack}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.thesis ? <ThesisCallout text={section.thesis} /> : null}
        </div>
      );

    case 'stats':
      return (
        <div className={styles.blockStack}>
          {section.intro ? (
            <div className={styles.paragraphStack}>
              <p>{section.intro}</p>
            </div>
          ) : null}
          <StatStrip items={section.items} />
          {section.note ? <p className={styles.sourceNote}>{section.note}</p> : null}
        </div>
      );

    case 'compare':
      return (
        <div className={styles.blockStack}>
          {section.intro ? (
            <div className={styles.paragraphStack}>
              <p>{section.intro}</p>
            </div>
          ) : null}
          <CompareCard
            beforeContent={fullImage(section.before.src, section.before.alt)}
            afterContent={fullImage(section.after.src, section.after.alt)}
            beforeLabel={section.before.label || 'Before'}
            afterLabel={section.after.label || 'After'}
            ariaLabel={section.ariaLabel}
          />
          {section.caption ? <p className={styles.sourceNote}>{section.caption}</p> : null}
        </div>
      );

    case 'video':
      return (
        <div className={styles.blockStack}>
          {section.intro ? (
            <div className={styles.paragraphStack}>
              <p>{section.intro}</p>
            </div>
          ) : null}
          <div className={styles.videoFrame}>
            <iframe
              src={section.embedUrl}
              title={section.videoTitle || section.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {section.note ? <p className={styles.sourceNote}>{section.note}</p> : null}
        </div>
      );

    case 'gallery':
    default:
      return (
        <div className={styles.blockStack}>
          {section.intro ? (
            <div className={styles.paragraphStack}>
              <p>{section.intro}</p>
            </div>
          ) : null}
          <CreativeGallery
            items={section.items}
            groups={section.groups}
            layout={section.layout}
          />
          {section.note ? <p className={styles.sourceNote}>{section.note}</p> : null}
        </div>
      );
  }
}

function TemplateInner({ detail }) {
  const sidebar = detail.sidebar;
  const sections = detail.sections || [];
  const { open } = useFullPageModal();

  const sectionNumbers = Object.fromEntries(
    sections.map((section, index) => [section.id, String(index + 1).padStart(2, '0')])
  );

  const [openSections, setOpenSections] = useState(() =>
    Object.fromEntries(sections.map((section) => [section.id, true]))
  );
  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  const setAllSections = (value) =>
    setOpenSections(Object.fromEntries(sections.map((section) => [section.id, value])));

  const openLead = (lead) =>
    open({
      label: lead.caption || lead.alt || 'Creative',
      content: (
        <figure className={styles.lightboxFigure}>
          {fullImage(lead.src, lead.alt)}
          {lead.caption ? <figcaption>{lead.caption}</figcaption> : null}
        </figure>
      ),
    });

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <ShowcaseHero title={detail.title} note={detail.showHeroNote ? detail.heroNote : ''} summary={detail.summary} />
        <ShowcaseSpecStrip sidebar={sidebar} />
      </section>

      {detail.leadImage ? (
        <section className={styles.leadSection}>
          <LeadImage lead={detail.leadImage} onOpen={openLead} />
        </section>
      ) : null}

      <div className={styles.bodyShell}>
        <div className={styles.contentColumn}>
          {sections.length ? (
            <div className={styles.collapseControls}>
              <button type="button" className={styles.collapseControl} onClick={() => setAllSections(true)}>
                Expand all
              </button>
              <span className={styles.collapseDivider} aria-hidden="true">|</span>
              <button type="button" className={styles.collapseControl} onClick={() => setAllSections(false)}>
                Collapse all
              </button>
            </div>
          ) : null}

          {sections.map((section) => (
            <CollapsibleSection
              key={section.id}
              id={section.id}
              number={sectionNumbers[section.id]}
              title={section.title}
              open={openSections[section.id]}
              onToggle={() => toggleSection(section.id)}
            >
              <SectionBody section={section} />
            </CollapsibleSection>
          ))}
        </div>

        <ShowcaseSidebar sidebar={sidebar} />
      </div>
    </main>
  );
}

export default function VisualSystemTemplate({ detail }) {
  return (
    <FullPageModalProvider>
      <TemplateInner detail={detail} />
    </FullPageModalProvider>
  );
}
