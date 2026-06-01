import { useEffect } from 'react';
import MetaTags from '../components/shared/MetaTags';
import StoryBanner from '../components/shared/StoryBanner';
import BatReveal from '../components/shared/BatReveal';
import Navigation from '../components/shared/Navigation';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import MoreFromDesk from '../components/sections/MoreFromDesk';
import DesignForge from '../components/sections/DesignForge';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/shared/Footer';
import WireframeReveal from '../components/sections/WireframeReveal';
import { useTheme } from '../components/shared/ThemeContext';

export default function Home() {
  const { isFunMode, pendingScrollTarget, clearPendingScrollTarget } = useTheme();

  useEffect(() => {
    if (!pendingScrollTarget) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(pendingScrollTarget)?.scrollIntoView({ block: 'start' });
      clearPendingScrollTarget();
    });

    return () => cancelAnimationFrame(frame);
  }, [clearPendingScrollTarget, isFunMode, pendingScrollTarget]);

  return (
    <>
      <MetaTags />
      <BatReveal />
      <StoryBanner />
      {isFunMode ? (
        <WireframeReveal />
      ) : (
        <>
          <Navigation />
          <main>
            <Hero />
            <FeaturedProjects />
            <DesignForge />
            <MoreFromDesk />
            <Skills />
            <Testimonials />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
