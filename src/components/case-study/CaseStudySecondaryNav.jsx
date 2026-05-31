import { useEffect, useRef, useState } from 'react';
import styles from './CaseStudySecondaryNav.module.css';

/**
 * CaseStudySecondaryNav
 *
 * A horizontally scrollable in-page tab strip for case studies, shown only at
 * mobile/tablet (≤1023px). It pins sticky to the top once the visitor scrolls
 * past the page title, sits below the global Navigation, and highlights the
 * active section based on scroll position (scroll-spy).
 *
 * Props:
 *   links: Array<{ href: '#section-id', label: string }>
 */
export default function CaseStudySecondaryNav({ links = [] }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? null);
  const navRef = useRef(null);
  const trackRef = useRef(null);
  const tabRefs = useRef({});

  // Scroll-spy: highlight the section currently sitting just below the strip.
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

        // pick the first section (in document order) inside the active band
        const activeId = ids.find((id) => visible.has(id));
        if (activeId) {
          setActiveHref(`#${activeId}`);
        }
      },
      {
        // active band = a thin strip near the top of the viewport, just under
        // the pinned global nav + secondary nav
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

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
    const stripBottom = navRef.current?.getBoundingClientRect().bottom ?? 0;
    const offset = stripBottom + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, '', href);
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    setActiveHref(href);
  };

  if (links.length === 0) {
    return null;
  }

  return (
    <nav ref={navRef} className={styles.secondaryNav} aria-label="Case study sections">
      <div ref={trackRef} className={styles.track}>
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
