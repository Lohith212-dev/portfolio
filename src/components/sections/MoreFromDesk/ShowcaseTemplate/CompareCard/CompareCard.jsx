import { useEffect, useRef } from 'react';
import { CompareHandleIcon, VideoEnterFullscreenIcon } from '../../../../icons/icons';
import InfoNote from '../../../../shared/InfoNote';
import { useFullPageModal } from '../FullPageModal';
import styles from './CompareCard.module.css';

export default function CompareCard({
  beforeContent,
  afterContent,
  beforeLabel = 'Before',
  afterLabel = 'After',
  ariaLabel,
}) {
  const frameRef = useRef(null);
  const handleRef = useRef(null);
  const { open } = useFullPageModal();

  useEffect(() => {
    const frame = frameRef.current;
    const handle = handleRef.current;

    if (!frame || !handle) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      // No autoplay sweep; the wipe rests at the midpoint, drag still works.
      frame.classList.remove(styles.autoplay);
      frame.style.setProperty('--reveal', '50%');
    }

    let dragging = false;
    let hovering = false;

    const setReveal = (pct) => {
      frame.style.setProperty('--reveal', `${pct}%`);
    };

    // Measure the handle's rendered position rather than reading --reveal via
    // getComputedStyle, which is unreliable mid-animation.
    const currentRevealPct = () => {
      const handleRect = handle.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      const centerX = handleRect.left + handleRect.width / 2 - frameRect.left;
      return Math.max(0, Math.min(100, (centerX / frameRect.width) * 100));
    };

    // Freeze autoplay at the in-flight position while the pointer is over the
    // card; manual control lasts only as long as the hover or drag.
    const pauseAuto = () => {
      if (!frame.classList.contains(styles.autoplay)) return;
      const inFlight = currentRevealPct();
      frame.classList.remove(styles.autoplay);
      setReveal(inFlight);
    };

    // Resume the sweep once the pointer has left and no drag is in flight.
    // The keyframes restart from 0% — the dropped inline --reveal falls back
    // to the stylesheet value, and the animation overrides it anyway.
    const maybeResume = () => {
      if (reducedMotion || dragging || hovering) return;
      frame.style.removeProperty('--reveal');
      frame.classList.add(styles.autoplay);
    };

    const onPointerEnter = () => {
      hovering = true;
      pauseAuto();
    };

    const onPointerLeave = () => {
      hovering = false;
      maybeResume();
    };

    const startDrag = (event) => {
      pauseAuto();
      dragging = true;
      handle.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const onMove = (event) => {
      if (!dragging) return;
      const rect = frame.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setReveal(pct);
    };

    const endDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      try {
        handle.releasePointerCapture(event.pointerId);
      } catch {
        // Pointer capture already released — nothing to do.
      }
      maybeResume();
    };

    frame.addEventListener('pointerenter', onPointerEnter);
    frame.addEventListener('pointerleave', onPointerLeave);
    frame.addEventListener('pointerdown', pauseAuto);
    handle.addEventListener('pointerdown', startDrag);
    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', endDrag);
    handle.addEventListener('pointercancel', endDrag);

    return () => {
      frame.removeEventListener('pointerenter', onPointerEnter);
      frame.removeEventListener('pointerleave', onPointerLeave);
      frame.removeEventListener('pointerdown', pauseAuto);
      handle.removeEventListener('pointerdown', startDrag);
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', endDrag);
      handle.removeEventListener('pointercancel', endDrag);
    };
  }, []);

  return (
    <div className={styles.compareBlock}>
      <div className={styles.compareViewActions}>
        <button
          type="button"
          className={styles.viewButton}
          aria-label={`Open the ${beforeLabel} page in fullscreen`}
          onClick={() => open({ content: beforeContent, label: `${beforeLabel} · full page` })}
        >
          <VideoEnterFullscreenIcon className={styles.viewButtonIcon} />
          View {beforeLabel} Page
        </button>
        <button
          type="button"
          className={styles.viewButton}
          aria-label={`Open the ${afterLabel} page in fullscreen`}
          onClick={() => open({ content: afterContent, label: `${afterLabel} · full page` })}
        >
          <VideoEnterFullscreenIcon className={styles.viewButtonIcon} />
          View {afterLabel} Page
        </button>
      </div>

      <InfoNote>
        Drag the slider to compare before and after. Use the buttons above to view either page
        in full screen.
      </InfoNote>

      <div
        ref={frameRef}
        className={`${styles.compareFrame} ${styles.autoplay}`}
        role="img"
        aria-label={ariaLabel}
      >
        <div className={`${styles.compareLayer} ${styles.compareAfter}`}>
          {afterContent}
          <span className={`${styles.compareLabel} ${styles.compareLabelAfter}`}>{afterLabel}</span>
        </div>
        <div className={`${styles.compareLayer} ${styles.compareBefore}`}>
          {beforeContent}
          <span className={`${styles.compareLabel} ${styles.compareLabelBefore}`}>{beforeLabel}</span>
        </div>
        <div className={styles.compareDivider} aria-hidden="true" />
        <button
          ref={handleRef}
          type="button"
          className={styles.compareDividerHandle}
          aria-label="Drag left or right to compare"
        >
          <CompareHandleIcon className={styles.handleIcon} />
        </button>
      </div>
    </div>
  );
}
