import { forwardRef } from 'react';
import ControlledVideo from './ControlledVideo';

function BrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 rounded-t-lg border-b border-ink-100 bg-surface-white px-3 py-1.5 lg:gap-2 lg:rounded-t-xl lg:px-4 lg:py-3">
      <div className="h-2 w-2 rounded-full bg-ink-100 lg:h-3 lg:w-3"></div>
      <div className="h-2 w-2 rounded-full bg-ink-100 lg:h-3 lg:w-3"></div>
      <div className="h-2 w-2 rounded-full bg-ink-100 lg:h-3 lg:w-3"></div>
    </div>
  );
}

const CaseStudyVideoFrame = forwardRef(function CaseStudyVideoFrame({
  frameClassName,
  mediaClassName,
  videoClassName = '',
  poster,
  ariaLabel,
  sources,
  playbackRate = 1,
  chrome = <BrowserChrome />,
  ...videoProps
}, forwardedRef) {
  return (
    <ControlledVideo
      ref={forwardedRef}
      className={frameClassName}
      chrome={chrome}
      mediaClassName={mediaClassName}
      videoClassName={videoClassName}
      poster={poster}
      ariaLabel={ariaLabel}
      sources={sources}
      playbackRate={playbackRate}
      {...videoProps}
    />
  );
});

export default CaseStudyVideoFrame;
