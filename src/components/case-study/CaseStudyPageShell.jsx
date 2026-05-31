import Footer from '../sections/Footer/Footer';
import Navigation from '../sections/Navigation/Navigation';

export default function CaseStudyPageShell({
  links,
  backHref = '/',
  backLabel = 'Back',
  showMobileMenu = true,
  secondaryNav = null,
  children,
}) {
  return (
    <div className="min-h-screen bg-surface-white text-ink-950 max-lg:[overflow-x:clip]">
      <Navigation
        links={links}
        showToggle={false}
        showMobileMenu={showMobileMenu}
        backHref={backHref}
        backLabel={backLabel}
      />
      {secondaryNav}

      <main>{children}</main>
      <Footer variant="caseStudy" />
    </div>
  );
}
