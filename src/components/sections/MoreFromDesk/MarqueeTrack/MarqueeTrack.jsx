import { useEffect, useMemo, useRef } from 'react';
import WorkCard from '../WorkCard';
import styles from '../MoreFromDesk.module.css';

export default function MarqueeTrack({ lane, index, onOpenModal, playing = true }) {
  const trackRef = useRef(null);
  const segmentRef = useRef(null);
  const playingRef = useRef(playing);
  const hoverRef = useRef(false);
  const draggingRef = useRef(false);
  const pendingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startOffsetRef = useRef(0);
  const offsetRef = useRef(0);
  const initializedRef = useRef(false);
  const renderedSegments = useMemo(() => [0, 1, 2], []);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    const track = trackRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!track || prefersReducedMotion) return undefined;

    let rafId = 0;
    let lastTime = performance.now();
    const direction = index % 2 === 0 ? -1 : 1;
    const speed = index === 1 ? 78 : 88;

    const getLoopWidth = () => {
      const segmentWidth = segmentRef.current?.getBoundingClientRect().width || track.scrollWidth / 3;
      return Math.max(segmentWidth + 20, 1);
    };

    const animate = (time) => {
      const deltaSeconds = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const loopWidth = getLoopWidth();

      if (!initializedRef.current) {
        offsetRef.current = direction > 0 ? -loopWidth : 0;
        initializedRef.current = true;
      }

      // Auto-scroll pauses when toggled off, while hovering, focused, or being
      // dragged. (Drag updates the transform directly, so the loop holds.)
      if (playingRef.current && !hoverRef.current && !draggingRef.current) {
        offsetRef.current += direction * speed * deltaSeconds;

        if (direction < 0) {
          while (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
        } else {
          while (offsetRef.current >= 0) offsetRef.current -= loopWidth;
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [index]);

  const loopWidthNow = () => {
    const segmentWidth = segmentRef.current?.getBoundingClientRect().width
      || (trackRef.current?.scrollWidth || 0) / 3;
    return Math.max(segmentWidth + 20, 1);
  };

  const applyOffset = (value) => {
    const loopWidth = loopWidthNow();
    let next = value;
    while (next <= -loopWidth) next += loopWidth;
    while (next > 0) next -= loopWidth;
    offsetRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${next}px, 0, 0)`;
  };

  const handlePointerDown = (event) => {
    pendingRef.current = true;
    startXRef.current = event.clientX;
    startYRef.current = event.clientY;
    startOffsetRef.current = offsetRef.current;
  };

  const handlePointerMove = (event) => {
    if (!pendingRef.current && !draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    if (!draggingRef.current) {
      const dx = event.clientX - startXRef.current;
      const dy = event.clientY - startYRef.current;
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      // Vertical intent → let the page scroll; only horizontal drags scrub.
      if (Math.abs(dx) <= Math.abs(dy)) {
        pendingRef.current = false;
        return;
      }
      draggingRef.current = true;
      track.setPointerCapture?.(event.pointerId);
    }

    applyOffset(startOffsetRef.current + (event.clientX - startXRef.current));
  };

  const endDrag = (event) => {
    pendingRef.current = false;
    if (draggingRef.current) {
      draggingRef.current = false;
      suppressClickRef.current = true; // swallow the click that ends a drag
      trackRef.current?.releasePointerCapture?.(event.pointerId);
    }
  };

  return (
    <div
      ref={trackRef}
      className={styles.marqueeTrack}
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
      onFocus={() => { hoverRef.current = true; }}
      onBlur={() => { hoverRef.current = false; }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={(event) => {
        if (suppressClickRef.current) {
          event.preventDefault();
          event.stopPropagation();
          suppressClickRef.current = false;
        }
      }}
    >
      {renderedSegments.map((segmentIndex) => (
        <div
          key={`${lane.id}-segment-${segmentIndex}`}
          ref={segmentIndex === 0 ? segmentRef : null}
          className={styles.marqueeSegment}
        >
          {lane.cards.map((item, cardIndex) => (
            <WorkCard
              key={`${lane.id}-${segmentIndex}-${item.title}-${cardIndex}`}
              item={item}
              lane={lane}
              index={cardIndex + segmentIndex * lane.cards.length}
              onOpenModal={onOpenModal}
              tabIndex={segmentIndex === 0 ? 0 : -1}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
