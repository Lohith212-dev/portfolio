import CaseStudyPageShell from './CaseStudyPageShell';

export default function CaseStudyTemplate({
  navigationLinks,
  backHref = '/',
  backLabel = 'Back',
  showMobileMenu,
  secondaryNavLinks = null,
  children,
}) {
  return (
    <CaseStudyPageShell
      links={navigationLinks}
      backHref={backHref}
      backLabel={backLabel}
      showMobileMenu={showMobileMenu}
      secondaryNavLinks={secondaryNavLinks}
    >
      {children}
    </CaseStudyPageShell>
  );
}
