import {
  GmatClubWordmarkIcon,
  TestimonialAvatarIcon,
  VideoPlayIcon,
} from '../../icons/icons';
import styles from './TestimonialCard.module.css';

/* Source-brand marks, keyed by the `sourceBrand` string the testimonials
   block declares. Brands without dedicated wordmark art fall back to a
   play-glyph + brand-name lockup (used for video testimonials). */
const SOURCE_BRAND_MARKS = {
  'GMAT Club': GmatClubWordmarkIcon,
};

/* One public-quote card — shared by the TestimonialMarquee scroller and the
   inline decision quotes on showcase pages. The card owns only its own
   chrome; layout sizing (width, flex basis, min-height) belongs to the
   consumer via className. */
export default function TestimonialCard({
  item,
  sourceBrand = 'Source',
  onOpenSource,
  className = '',
}) {
  const openSource = () => {
    onOpenSource?.({
      title: item.modalTitle || item.meta,
      browserTitle: sourceBrand,
      url: item.href,
    });
  };

  const BrandMark = SOURCE_BRAND_MARKS[sourceBrand];

  return (
    <article className={`${styles.testimonialCard} ${className}`.trim()}>
      <div className={styles.testimonialCardTop}>
        <div className={styles.testimonialQuoteMark} aria-hidden="true">&ldquo;</div>
        <button
          type="button"
          className={styles.testimonialSourceBrand}
          aria-label={`Open ${sourceBrand} for ${item.author}`}
          onClick={openSource}
        >
          {BrandMark ? (
            <BrandMark className={styles.testimonialSourceLogo} />
          ) : (
            <span className={styles.testimonialSourceText}>
              <VideoPlayIcon className={styles.testimonialSourcePlay} />
              {sourceBrand}
            </span>
          )}
        </button>
      </div>
      <blockquote
        className={styles.testimonialQuote}
        dangerouslySetInnerHTML={{ __html: item.quoteHtml }}
      />
      <footer className={styles.testimonialFooter}>
        <div className={styles.testimonialIdentity}>
          <span className={styles.testimonialAvatar} aria-hidden="true">
            <TestimonialAvatarIcon />
          </span>
          <div className={styles.testimonialIdentityCopy}>
            <div className={styles.testimonialAuthor}>{item.author}</div>
            <div className={styles.testimonialMeta}>{item.meta}</div>
          </div>
        </div>
        <button
          type="button"
          className={styles.testimonialSource}
          onClick={openSource}
        >
          View source <span aria-hidden="true">{'↗'}</span>
        </button>
      </footer>
    </article>
  );
}
