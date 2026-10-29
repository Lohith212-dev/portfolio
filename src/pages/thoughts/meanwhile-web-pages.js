import Head from 'next/head';
import MetaTags from '../../components/shared/MetaTags';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';
import MeanwhileWebPages from '../../components/thoughts/MeanwhileWebPages';
import { getThought } from '../../components/thoughts/thoughtsData';

const SITE = 'https://vigilante-designer.nerdypixelstudios.ca';
const entry = getThought('meanwhile-web-pages');
const url = `${SITE}/thoughts/${entry.slug}`;
const image = `${SITE}${entry.share.image}`;

export default function MeanwhileWebPagesPage() {
  return (
    <>
      <MetaTags />
      {/* This page's own share card; _document skips the site defaults here. */}
      <Head>
        <title>{`${entry.share.title} | Lohith Savala`}</title>
        <meta name="description" content={entry.share.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={entry.share.title} />
        <meta property="og:description" content={entry.share.description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={entry.share.imageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={entry.share.title} />
        <meta name="twitter:description" content={entry.share.description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Navigation
        links={[]}
        showToggle={false}
        showMobileMenu={false}
        backHref="/thoughts"
        backLabel="Thoughts"
      />
      <MeanwhileWebPages />
      <Footer variant="lean" />
    </>
  );
}
