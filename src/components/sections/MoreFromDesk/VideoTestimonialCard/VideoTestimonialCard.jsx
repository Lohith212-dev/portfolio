import { TestimonialAvatarIcon, YoutubeLogoIcon } from '../../../icons/icons';
import styles from './VideoTestimonialCard.module.css';

/* Wide testimonial card with the video inside it: quote + identity on the
   left, the 9:16 YouTube short playing on the right — no modal hop. Used
   when a testimonials block sets variant: 'video'. */
export default function VideoTestimonialCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
          <a
            className={styles.brandLink}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch ${item.author}'s testimonial on YouTube`}
          >
            <YoutubeLogoIcon className={styles.brandBadge} />
            <span className={styles.brandWord}>YouTube</span>
          </a>
        </div>
        <blockquote
          className={styles.quote}
          dangerouslySetInnerHTML={{ __html: item.quoteHtml }}
        />
        <footer className={styles.footer}>
          <span className={styles.avatar} aria-hidden="true">
            <TestimonialAvatarIcon />
          </span>
          <div className={styles.identityCopy}>
            <div className={styles.author}>{item.author}</div>
            <div className={styles.meta}>{item.meta}</div>
          </div>
        </footer>
      </div>

      <div className={styles.media}>
        <iframe
          src={item.videoEmbedUrl}
          title={item.modalTitle || `${item.author} video testimonial`}
          className={styles.video}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </article>
  );
}
