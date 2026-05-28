import MetaTags from '../../components/shared/MetaTags';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer/Footer';
import MoreWorkDetailContent from '../../components/sections/MoreFromDesk/MoreWorkDetailPage';
import WebsiteShowcasePage from '../../components/sections/MoreFromDesk/WebsiteShowcasePage';
import {
  getMoreWorkBySlug,
  getMoreWorkDetailItems,
  getMoreWorkDetailContent,
  getMoreWorkLaneCards,
} from '../../components/sections/MoreFromDesk/moreWorksData';

export default function MoreWorkDetailPage({ item }) {
  const detail = getMoreWorkDetailContent(item);
  const isWebsiteShowcase = detail.template === 'website-showcase';
  const laneProjects = getMoreWorkLaneCards(item.laneId);
  const leanPageLinks = isWebsiteShowcase
    ? (detail.websiteNavLinks?.length
      ? detail.websiteNavLinks
      : [
        { href: '#context', label: 'Context' },
        { href: '#shipped', label: 'Approach' },
        { href: '#shift', label: 'The Shift' },
      ])
    : [
      { href: '#overview', label: 'Overview' },
      { href: '#product-preview', label: 'Product preview' },
    ];

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
        backLabel="Back to range"
      />
      {isWebsiteShowcase ? (
        <WebsiteShowcasePage item={item} detail={detail} relatedProjects={laneProjects} />
      ) : (
        <MoreWorkDetailContent item={item} detail={detail} />
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
