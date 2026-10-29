import { useEffect, useRef } from 'react';

// A GIF served as a short muted MP4 loop (a fraction of the GIF's weight).
// Plays only while on screen; with reduced motion it never starts and the
// poster frame stands in as a still.
export default function GifLoop({ src, poster, width, height, alt, className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let onScreen = false;

    const sync = () => {
      if (onScreen && !motion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    }, { rootMargin: '120px 0px' });

    observer.observe(video);
    motion.addEventListener('change', sync);

    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="metadata"
      role="img"
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
