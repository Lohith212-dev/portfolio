import styles from '../MoreFromDesk.module.css';

/* Card cover block. Plain tinted placeholder by default; cards that declare
   a `cover` on their data entry ({ src, position? }) show that artwork
   cropped into the same rounded mask. */
export default function MiniMock({ laneId, cover }) {
  return (
    <div className={`${styles.miniMock} ${styles[`miniMock${laneId}`] || ''}`} aria-hidden="true">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover.src}
          alt=""
          className={styles.miniMockCover}
          style={cover.position ? { objectPosition: cover.position } : undefined}
          loading="lazy"
        />
      ) : null}
    </div>
  );
}
