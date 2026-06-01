import { useEffect, useState } from 'react';
import styles from './BackToTopPill.module.css';

/**
 * BackToTopPill
 *
 * A bottom-right pill that appears after the visitor scrolls past 1.5× the
 * viewport height and smooth-scrolls back to the top. Mobile/tablet only
 * (≤1023px) — hidden on desktop. Shared by the homepage footer and case
 * study pages.
 *
 * Props:
 *   raised: lift the pill above the bottom-sticky section nav (case studies).
 *   hideWhenFooterVisible: also hide once the page footer enters the viewport.
 *   footerId: id of the footer element to watch (default 'footer').
 */
export default function BackToTopPill({
  raised = false,
  hideWhenFooterVisible = false,
  footerId = 'footer',
}) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleScroll = () => {
      const trigger = window.innerHeight * 1.5;
      setScrolledPast(window.scrollY > trigger);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!hideWhenFooterVisible || typeof window === 'undefined') return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const footer = document.getElementById(footerId);
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [hideWhenFooterVisible, footerId]);

  const visible = scrolledPast && !footerInView;

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`${styles.backToTopPill} ${raised ? styles.backToTopPillRaised : ''} ${visible ? styles.backToTopPillVisible : ''}`}
    >
      <span aria-hidden="true">{'↑'}</span>
      <span>Top</span>
    </button>
  );
}
