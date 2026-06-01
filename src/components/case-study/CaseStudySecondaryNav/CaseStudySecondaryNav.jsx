import { useEffect, useRef, useState } from 'react';
import styles from './CaseStudySecondaryNav.module.css';

/**
 * CaseStudySecondaryNav
 *
 * A bottom-sticky section nav for case studies, shown only at mobile/tablet
 * (≤1023px). Renders as a frosted pill bar floating ~0.85rem from the bottom
 * edges (same aesthetic as the global pill nav). Horizontally scrollable with
 * snap, active tab tracks scroll position (scroll-spy), and the whole bar slides
 * down off-screen once the page footer enters the viewport.
 *
 * Props:
 *   links: Array<{ href: '#section-id', label: string }>
 *   footerId: id of the footer element that triggers the hide (default 'footer')
 */
export default function CaseStudySecondaryNav({ links = [], footerId = 'footer' }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? null);
  const [hidden, setHidden] = useState(false);
  const [edges, setEdges] = useState({ left: false, right: false });
  const trackRef = useRef(null);
  const tabRefs = useRef({});

  // Fade the edge(s) of the tab strip that have more tabs scrolled off-screen,
  // so it reads as horizontally scrollable.
  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const left = el.scrollLeft > 2;
    const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 2;
    setEdges((prev) => (prev.left === left && prev.right === right ? prev : { left, right }));
  };

  useEffect(() => {
    updateEdges();
    if (typeof window === 'undefined') return undefined;
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);

  // Scroll-spy: highlight the section currently in the active band.
  useEffect(() => {
    if (typeof window === 'undefined' || links.length === 0) {
      return undefined;
    }

    const ids = links.map((link) => link.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        const activeId = ids.find((id) => visible.has(id));
        if (activeId) {
          setActiveHref(`#${activeId}`);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  // Hide the bar as soon as the footer enters the viewport.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }
    const footer = document.getElementById(footerId);
    if (!footer) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerId]);

  // Keep the active tab scrolled into horizontal view (no page jump).
  useEffect(() => {
    const tab = tabRefs.current[activeHref];
    const track = trackRef.current;
    if (tab && track) {
      const target = tab.offsetLeft - track.clientWidth / 2 + tab.clientWidth / 2;
      track.scrollTo({ left: Math.max(target, 0), behavior: 'smooth' });
    }
  }, [activeHref]);

  const handleClick = (event, href) => {
    if (!href?.startsWith('#') || typeof window === 'undefined') {
      return;
    }
    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }
    event.preventDefault();
    // offset by the fixed global nav at the top so the section lands below it
    const navBottom = document.querySelector('[data-nav-island]')?.getBoundingClientRect().bottom ?? 0;
    const offset = navBottom + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, '', href);
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    setActiveHref(href);
  };

  if (links.length === 0) {
    return null;
  }

  return (
    <nav
      className={`${styles.bottomNav} ${hidden ? styles.hidden : ''}`}
      aria-label="Case study sections"
    >
      <div
        ref={trackRef}
        className={styles.track}
        data-fade-left={edges.left ? 'true' : 'false'}
        data-fade-right={edges.right ? 'true' : 'false'}
        onScroll={updateEdges}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            ref={(el) => { tabRefs.current[link.href] = el; }}
            className={`${styles.tab} ${activeHref === link.href ? styles.tabActive : ''}`}
            aria-current={activeHref === link.href ? 'true' : undefined}
            onClick={(event) => handleClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
