import Head from 'next/head';
import MetaTags from '../../components/shared/MetaTags';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';
import ThoughtsIndex from '../../components/thoughts/ThoughtsIndex';

export default function ThoughtsPage() {
  return (
    <>
      <MetaTags />
      <Head>
        <title>Thoughts | Lohith Savala</title>
        <meta name="description" content="Short notes on design, AI and building things." />
      </Head>
      <Navigation links={[]} showToggle={false} showMobileMenu={false} backHref="/" />
      <ThoughtsIndex />
      <Footer variant="lean" />
    </>
  );
}
