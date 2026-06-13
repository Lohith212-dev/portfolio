import styles from './PageGalleryGrid.module.css';

/* A grid of linked page-cards — used by the growth-gallery decisions where a
   single screenSet can't express "one project, many live pages." Each card is
   an external link to a live page, so it uses a plain anchor (next/link is for
   internal navigation only). */
export default function PageGalleryGrid({ pages }) {
  if (!pages?.length) {
    return null;
  }

  return (
    <div className={styles.galleryGrid}>
      {pages.map((page) => {
        const isLink = Boolean(page.href);
        const Tag = isLink ? 'a' : 'div';
        const linkProps = isLink
          ? { href: page.href, target: '_blank', rel: 'noreferrer noopener' }
          : {};

        return (
          <Tag key={page.title} className={styles.galleryCard} {...linkProps}>
            <span className={styles.thumbFrame}>
              {/* Placeholder-friendly: a missing src degrades to the framed
                  surface rather than breaking layout. Plain img — these are
                  page thumbnails, not LCP-critical product art. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={page.thumb} alt={page.alt || page.title} loading="lazy" />
              {page.badge ? <span className={styles.badge}>{page.badge}</span> : null}
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardTitle}>{page.title}</span>
              {page.note ? <span className={styles.cardNote}>{page.note}</span> : null}
              {isLink ? <span className={styles.cardLink}>View live &#8599;</span> : null}
            </span>
          </Tag>
        );
      })}
    </div>
  );
}
