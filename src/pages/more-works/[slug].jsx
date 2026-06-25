import MetaTags from '../../components/shared/MetaTags';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';
import CaseStudySecondaryNav from '../../components/case-study/CaseStudySecondaryNav';
import ShowcaseTemplate from '../../components/sections/MoreFromDesk/ShowcaseTemplate';
import VisualSystemTemplate from '../../components/sections/MoreFromDesk/VisualSystemTemplate';
import {
  getMoreWorkBySlug,
  getMoreWorkDetailItems,
  getMoreWorkDetailContent,
  getMoreWorkLaneCards,
} from '../../components/sections/MoreFromDesk/moreWorksData';

export default function MoreWorkPage({ item }) {
  const detail = getMoreWorkDetailContent(item);
  const laneProjects = getMoreWorkLaneCards(item.laneId);
  const isVisualSystem = detail.template === 'visual-system';
  const leanPageLinks = isVisualSystem
    ? (detail.sections || []).map((section) => ({ href: `#${section.id}`, label: section.navLabel || section.title }))
    : detail.websiteNavLinks?.length
    ? detail.websiteNavLinks
    : [
      detail.overviewCard ? { href: '#context', label: 'Context' } : null,
      detail.notesCard ? { href: '#shipped', label: 'Approach' } : null,
      detail.notesCard?.shift ? { href: '#shift', label: 'The Shift' } : null,
      detail.testimonials ? { href: '#testimonials', label: detail.testimonials.title || 'Testimonials' } : null,
    ].filter(Boolean);

  return (
    <>
      <MetaTags
        title={`${detail.title || item.title} | Lohith Savala`}
        description={detail.intro || item.note}
      />
      {/* Same pattern as the LMS case study: the bottom-sticky section nav
          owns section links on tablet/mobile, so the hamburger is hidden. */}
      <Navigation
        links={leanPageLinks}
        showToggle={false}
        showMobileMenu={false}
        backHref="/#more-from-desk"
      />
      <CaseStudySecondaryNav links={leanPageLinks} />
      {isVisualSystem ? (
        <VisualSystemTemplate detail={detail} />
      ) : (
        <ShowcaseTemplate item={item} detail={detail} relatedProjects={laneProjects} />
      )}
      <Footer variant="lean" />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getMoreWorkDetailItems().map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const item = getMoreWorkBySlug(params.slug);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: { item },
  };
}
