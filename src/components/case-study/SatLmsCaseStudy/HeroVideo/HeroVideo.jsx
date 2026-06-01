import CaseStudyVideoFrame from '../../CaseStudyVideoFrame';
import styles from '../SatLmsCaseStudy.module.css';

export default function HeroVideo() {
  return (
    <CaseStudyVideoFrame
      frameClassName={`${styles.heroImage} shadow-2xl`}
      videoClassName="block h-auto w-full"
      playbackRate={0.8}
      poster="/images/case-studies/sat-lms/hero-focus-pace-on.webp"
      ariaLabel="SAT LMS personalized learning path product demo"
      autoPlay
      loop
      muted
      playsInline
      sources={[
        { src: '/videos/case-studies/sat-lms/pace-path.mp4', type: 'video/mp4' },
      ]}
    />
  );
}
