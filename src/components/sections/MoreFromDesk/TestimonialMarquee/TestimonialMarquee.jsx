import TestimonialCard from '../../../shared/TestimonialCard';
import VideoTestimonialCard from '../VideoTestimonialCard';
import styles from './TestimonialMarquee.module.css';

export default function TestimonialMarquee({ testimonials, onOpenSource }) {
  const items = testimonials?.items || [];
  const isVideo = testimonials?.variant === 'video';
  const trackItems = items.length > 1 ? [...items, ...items] : items;

  return (
    <div className={styles.marquee} aria-label="Public testimonials">
      <div className={styles.marqueeTrack}>
        {trackItems.map((item, index) => (
          isVideo ? (
            /* Wide card with the 9:16 video playing inline; hover/focus
               pauses the track (see module CSS), so playback is reachable. */
            <VideoTestimonialCard
              key={`${item.author}-${item.href}-${index}`}
              item={item}
              className={styles.marqueeVideoCard}
            />
          ) : (
            <TestimonialCard
              key={`${item.author}-${item.href}-${index}`}
              item={item}
              sourceBrand={testimonials?.sourceBrand}
              onOpenSource={onOpenSource}
              className={styles.marqueeCard}
            />
          )
        ))}
      </div>
    </div>
  );
}
