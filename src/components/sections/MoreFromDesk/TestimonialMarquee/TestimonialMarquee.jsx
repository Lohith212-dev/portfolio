import TestimonialCard from '../../../shared/TestimonialCard';
import styles from './TestimonialMarquee.module.css';

export default function TestimonialMarquee({ testimonials, onOpenSource }) {
  const items = testimonials?.items || [];
  const trackItems = items.length > 1 ? [...items, ...items] : items;

  return (
    <div className={styles.marquee} aria-label="Public testimonials">
      <div className={styles.marqueeTrack}>
        {trackItems.map((item, index) => (
          <TestimonialCard
            key={`${item.author}-${item.href}-${index}`}
            item={item}
            sourceBrand={testimonials?.sourceBrand}
            onOpenSource={onOpenSource}
            className={styles.marqueeCard}
          />
        ))}
      </div>
    </div>
  );
}
