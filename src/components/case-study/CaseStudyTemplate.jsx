import CaseStudyPageShell from './CaseStudyPageShell';

export default function CaseStudyTemplate({
  navigationLinks,
  backHref = '/',
  backLabel = 'Back',
  showMobileMenu = true,
  secondaryNav = null,
  children,
}) {
  return (
    <CaseStudyPageShell
      links={navigationLinks}
      backHref={backHref}
      backLabel={backLabel}
      showMobileMenu={showMobileMenu}
      secondaryNav={secondaryNav}
    >
      {children}
    </CaseStudyPageShell>
  );
}
