import { useEffect, useRef, useState } from 'react';
import TestimonialCard from '../../../shared/TestimonialCard';
import VideoTestimonialCard from '../VideoTestimonialCard';
import { VideoPlayIcon, VideoPauseIcon } from '../../../icons/icons';
import styles from './TestimonialMarquee.module.css';

// An interactive marquee: it gently auto-scrolls, but the reader can grab and
// drag it (mouse), flick it (touch), or scroll it (trackpad) at any time. The
// auto-scroll pauses while dragging or while a link inside is focused.
export default function TestimonialMarquee({ testimonials, onOpenSource }) {
  const items = testimonials?.items || [];
  const isVideo = testimonials?.variant === 'video';
  const loop = items.length > 1;
  // Duplicate the set so the auto-scroll can wrap seamlessly at the halfway point.
  const trackItems = loop ? [...items, ...items] : items;

  const scrollerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const stateRef = useRef({
    playing: true,
    paused: false,
    pendingDrag: false,
    dragging: false,
    suppressClick: false,
    startX: 0,
    startLeft: 0,
  });

  const togglePlay = () => {
    const next = !stateRef.current.playing;
    stateRef.current.playing = next;
    setPlaying(next);
  };

  useEffect(() => {
    if (!loop || typeof window === 'undefined') return undefined;
    const el = scrollerRef.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const state = stateRef.current;
    const SPEED = 0.45; // px per frame — a slow, readable drift
    let raf = 0;
    const tick = () => {
      raf = window.requestAnimationFrame(tick);
      if (!state.playing || state.paused || state.dragging) return;
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      const next = el.scrollLeft + SPEED;
      el.scrollLeft = next >= half ? next - half : next;
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [loop, trackItems.length]);

  // Keep the scroll position inside the first copy so the loop is seamless,
  // whether moved by the auto-scroll, a drag, or a native (touch/trackpad) scroll.
  const wrapScroll = () => {
    const el = scrollerRef.current;
    if (!el || !loop) return;
    const half = el.scrollWidth / 2;
    if (half <= 0) return;
    if (el.scrollLeft < 0) el.scrollLeft += half;
    else if (el.scrollLeft >= half) el.scrollLeft -= half;
  };

  const handlePointerDown = (event) => {
    const state = stateRef.current;
    state.paused = true;
    // Mouse: click-and-drag to scrub. Touch/pen keep native momentum scroll.
    if (event.pointerType !== 'mouse') return;
    state.pendingDrag = true;
    state.startX = event.clientX;
    state.startLeft = scrollerRef.current?.scrollLeft ?? 0;
  };

  const handlePointerMove = (event) => {
    const state = stateRef.current;
    if (!state.pendingDrag && !state.dragging) return;
    const el = scrollerRef.current;
    if (!el) return;
    // Only start dragging past a small threshold, so a plain click on a card
    // link still registers (no pointer capture until the reader actually drags).
    if (!state.dragging) {
      if (Math.abs(event.clientX - state.startX) < 5) return;
      state.dragging = true;
      el.setPointerCapture?.(event.pointerId);
    }
    el.scrollLeft = state.startLeft - (event.clientX - state.startX);
    wrapScroll();
  };

  const endDrag = (event) => {
    const state = stateRef.current;
    state.pendingDrag = false;
    if (state.dragging) {
      state.dragging = false;
      state.suppressClick = true; // swallow the click that ends a drag
      scrollerRef.current?.releasePointerCapture?.(event.pointerId);
    }
  };

  return (
    <div className={styles.marqueeWrap}>
      {loop ? (
        <div className={styles.marqueeControls}>
          <button
            type="button"
            className={styles.playToggle}
            onClick={togglePlay}
            aria-pressed={!playing}
            aria-label={playing ? 'Pause auto-scroll' : 'Play auto-scroll'}
          >
            {playing
              ? <VideoPauseIcon className={styles.playIcon} />
              : <VideoPlayIcon className={styles.playIcon} />}
            <span>{playing ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      ) : null}

      <div
        ref={scrollerRef}
        className={`${styles.marquee} ${loop ? styles.interactive : ''}`}
        aria-label="Public testimonials"
        onPointerEnter={() => { stateRef.current.paused = true; }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={(event) => { endDrag(event); stateRef.current.paused = false; }}
      onPointerCancel={endDrag}
      onScroll={wrapScroll}
      onClickCapture={(event) => {
        if (stateRef.current.suppressClick) {
          event.preventDefault();
          event.stopPropagation();
          stateRef.current.suppressClick = false;
        }
      }}
      onFocusCapture={() => { stateRef.current.paused = true; }}
      onBlurCapture={() => { stateRef.current.paused = false; }}
    >
      <div className={styles.marqueeTrack}>
        {trackItems.map((item, index) => (
          isVideo ? (
            /* Wide card with the 9:16 video playing inline. */
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
    </div>
  );
}
