import {
  GmatClubWordmarkIcon,
  TestimonialAvatarIcon,
} from '../../../icons/icons';
import styles from './TestimonialMarquee.module.css';

export default function TestimonialMarquee({ testimonials, onOpenSource }) {
  const items = testimonials?.items || [];
  const trackItems = items.length > 1 ? [...items, ...items] : items;
  const sourceBrand = testimonials?.sourceBrand || 'Source';

  const openSource = (item) => {
    onOpenSource?.({
      title: item.modalTitle || item.meta,
      browserTitle: sourceBrand,
      url: item.href,
    });
  };

  return (
    <div className={styles.marquee} aria-label="Public testimonials">
      <div className={styles.marqueeTrack}>
        {trackItems.map((item, index) => (
          <article key={`${item.author}-${item.href}-${index}`} className={styles.testimonialCard}>
            <div className={styles.testimonialCardTop}>
              <div className={styles.testimonialQuoteMark} aria-hidden="true">&ldquo;</div>
              <button
                type="button"
                className={styles.testimonialSourceBrand}
                aria-label={`Open ${testimonials?.sourceBrand || 'source'} for ${item.author}`}
                onClick={() => openSource(item)}
              >
                <GmatClubWordmarkIcon className={styles.testimonialSourceLogo} />
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
                onClick={() => openSource(item)}
              >
                View source <span aria-hidden="true">{'↗'}</span>
              </button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
