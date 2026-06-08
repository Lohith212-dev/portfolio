import Link from 'next/link';
import { ExternalArrowIcon } from '../../../icons/icons';
import MiniMock from '../MiniMock';
import styles from '../MoreFromDesk.module.css';

// Only the arrow is interactive — the rest of the card is a plain surface so a
// drag started anywhere on it scrubs the marquee instead of triggering the
// card (and a link/button wrapping the whole card would hijack the drag).
function ActionArrow({ item, lane, onOpenModal, tabIndex }) {
  const label = `Open ${item.title}`;
  const icon = <ExternalArrowIcon />;

  if (item.actionType === 'internal-route') {
    return (
      <Link
        href={`/more-works/${item.slug}`}
        className={styles.cardIcon}
        aria-label={label}
        tabIndex={tabIndex}
        draggable={false}
      >
        {icon}
      </Link>
    );
  }

  if (item.actionType === 'image-modal' || item.actionType === 'video-modal') {
    return (
      <button
        type="button"
        className={styles.cardIcon}
        aria-label={label}
        tabIndex={tabIndex}
        onClick={() => onOpenModal(item, lane)}
      >
        {icon}
      </button>
    );
  }

  if (item.actionType === 'external-link' && item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardIcon}
        aria-label={label}
        tabIndex={tabIndex}
        draggable={false}
      >
        {icon}
      </a>
    );
  }

  return (
    <span className={`${styles.cardIcon} ${styles.cardIconDisabled}`} aria-hidden="true">
      {icon}
    </span>
  );
}

export default function WorkCard({ item, lane, index, onOpenModal, tabIndex = 0 }) {
  const isInteractive = item.actionType === 'internal-route'
    || item.actionType === 'image-modal'
    || item.actionType === 'video-modal'
    || (item.actionType === 'external-link' && Boolean(item.href));

  return (
    <div className={`${styles.workCard} ${isInteractive ? '' : styles.workCardDisabled}`}>
      <MiniMock laneId={lane.id} index={index} cover={item.cover} />
      <span className={styles.cardBody}>
        <span className={styles.cardTopline}>
          <span>
            <span className={styles.cardTag}>{item.tag}</span>
            <span className={styles.cardTitle}>{item.title}</span>
          </span>
          <ActionArrow item={item} lane={lane} onOpenModal={onOpenModal} tabIndex={tabIndex} />
        </span>
        <span className={styles.cardNote}>{item.note}</span>
      </span>
    </div>
  );
}
