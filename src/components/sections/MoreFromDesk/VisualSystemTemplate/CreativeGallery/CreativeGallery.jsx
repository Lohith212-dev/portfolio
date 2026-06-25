import { useFullPageModal } from '../../ShowcaseTemplate/FullPageModal';
import styles from './CreativeGallery.module.css';

/* A grid of creative assets — the workhorse of the visual-systems lane.
   Each tile is a button that opens the shared FullPageModal lightbox with the
   uncropped asset, so dense campaign work can be browsed at a glance and
   inspected in full. `layout` sets the tile crop for a whole grid; an item can
   override with its own `layout`. Galleries can also be split into labelled
   `groups` (e.g. the three message lenses) that share one heading. */

const LAYOUT_CLASS = {
  social: styles.frameSocial,
  wide: styles.frameWide,
  page: styles.framePage,
  tall: styles.frameTall,
};

function GalleryGrid({ items, layout, onOpen }) {
  return (
    <div className={styles.grid} data-layout={layout}>
      {items.map((item) => {
        const frameClass = LAYOUT_CLASS[item.layout || layout] || styles.frameWide;
        return (
          <button
            key={item.src}
            type="button"
            className={styles.card}
            onClick={() => onOpen(item)}
            aria-label={`View ${item.caption || item.alt || 'creative'} full size`}
          >
            <span className={`${styles.frame} ${frameClass}`}>
              {/* Plain img: campaign collateral, not LCP-critical product art;
                  lazy so a long gallery doesn't block first paint. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt || item.caption || ''} loading="lazy" />
              <span className={styles.zoomHint} aria-hidden="true">View</span>
            </span>
            {item.caption ? <span className={styles.caption}>{item.caption}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export default function CreativeGallery({ items, groups, layout = 'wide' }) {
  const { open } = useFullPageModal();

  const onOpen = (item) => {
    open({
      label: item.caption || item.alt || 'Creative',
      content: (
        <figure className={styles.lightboxFigure}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.alt || item.caption || ''} />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ),
    });
  };

  if (groups?.length) {
    return (
      <div className={styles.groupStack}>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <div className={styles.groupHead}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              {group.intro ? <p className={styles.groupIntro}>{group.intro}</p> : null}
            </div>
            <GalleryGrid
              items={group.items}
              layout={group.layout || layout}
              onOpen={onOpen}
            />
          </div>
        ))}
      </div>
    );
  }

  if (!items?.length) {
    return null;
  }

  return <GalleryGrid items={items} layout={layout} onOpen={onOpen} />;
}
