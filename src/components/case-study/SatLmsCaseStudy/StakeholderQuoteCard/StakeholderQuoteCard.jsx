import Image from 'next/image';
import { SharedLinkedInIcon, TrustTickIcon } from '../../../icons/icons';
import styles from '../SatLmsCaseStudy.module.css';

export default function StakeholderQuoteCard({ quote }) {
  return (
    <article className={styles.stakeholderQuoteCard}>
      <header className={styles.stakeholderQuoteHeader}>
        <span className={styles.stakeholderIdentity}>
          <span className={styles.stakeholderAvatarFrame}>
            <Image
              src={quote.image}
              alt={`${quote.name} portrait`}
              width={320}
              height={320}
              sizes="(min-width: 768px) 52px, 44px"
              className={styles.stakeholderAvatar}
              data-person={quote.initials.toLowerCase()}
            />
          </span>
          <span className={styles.stakeholderDetails}>
            <span className={styles.stakeholderNameLine}>
              <span>{quote.name}</span>
              <TrustTickIcon className={styles.stakeholderTrustIcon} />
            </span>
            <small>{quote.role}</small>
          </span>
        </span>
        <a
          href={quote.linkedin}
          target="_blank"
          rel="noreferrer"
          className={styles.stakeholderLinkedIn}
          aria-label={`${quote.name} on LinkedIn`}
        >
          <SharedLinkedInIcon className={styles.stakeholderLinkedInIcon} />
        </a>
      </header>
      <p className={styles.stakeholderQuoteText}>"{quote.quote}"</p>
    </article>
  );
}
