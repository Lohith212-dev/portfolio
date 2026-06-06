import MetaTags from '../../components/shared/MetaTags';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';
import ShowcaseTemplate from '../../components/sections/MoreFromDesk/ShowcaseTemplate';
import {
  getMoreWorkBySlug,
  getMoreWorkDetailItems,
  getMoreWorkDetailContent,
  getMoreWorkLaneCards,
} from '../../components/sections/MoreFromDesk/moreWorksData';

export default function MoreWorkPage({ item }) {
  const detail = getMoreWorkDetailContent(item);
  const laneProjects = getMoreWorkLaneCards(item.laneId);
  const leanPageLinks = detail.websiteNavLinks?.length
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
      <Navigation
        links={leanPageLinks}
        showToggle={false}
        backHref="/#more-from-desk"
      />
      <ShowcaseTemplate item={item} detail={detail} relatedProjects={laneProjects} />
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
