import Footer from '../sections/Footer/Footer';
import Navigation from '../sections/Navigation/Navigation';
import BackToTopPill from '../shared/BackToTopPill/BackToTopPill';
import CaseStudySecondaryNav from './CaseStudySecondaryNav';

export default function CaseStudyPageShell({
  links,
  backHref = '/',
  backLabel = 'Back',
  showMobileMenu,
  secondaryNavLinks = null,
  children,
}) {
  // When a bottom-sticky section nav is present it takes over the section-link
  // role on mobile/tablet, so the global hamburger menu is hidden by default.
  const mobileMenu = showMobileMenu ?? !secondaryNavLinks;

  return (
    <div className="min-h-screen bg-surface-white text-ink-950 max-lg:[overflow-x:clip]">
      <Navigation
        links={links}
        showToggle={false}
        showMobileMenu={mobileMenu}
        backHref={backHref}
        backLabel={backLabel}
      />
      {secondaryNavLinks ? <CaseStudySecondaryNav links={secondaryNavLinks} /> : null}

      <main>{children}</main>
      <Footer variant="caseStudy" />
      <BackToTopPill raised hideWhenFooterVisible />
    </div>
  );
}
