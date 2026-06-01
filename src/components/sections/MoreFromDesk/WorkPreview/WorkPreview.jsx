import MoreWorkBrowserFrame from '../MoreWorkBrowserFrame';
import ScreenshotCarousel from '../ScreenshotCarousel';
import styles from './WorkPreview.module.css';

export default function WorkPreview({
  title,
  embedUrl,
  screenshots,
  walkthroughNote,
  onOpenWalkthrough,
}) {
  if (!embedUrl && !screenshots?.length) {
    return null;
  }

  return (
    <>
      {embedUrl ? (
        <MoreWorkBrowserFrame
          title={title}
          darkChrome
          bodyClassName={styles.previewFrameBody}
        >
          <div className={styles.previewEmbedViewport}>
            <div className={styles.previewEmbedScaler}>
              <iframe
                src={embedUrl}
                title={`${title} live website preview`}
                className={styles.previewEmbed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </MoreWorkBrowserFrame>
      ) : (
        <ScreenshotCarousel title={title} screenshots={screenshots} />
      )}

      {walkthroughNote ? (
        <p className={styles.walkthroughNote}>
          <span>{walkthroughNote.lead} </span>
          <button
            type="button"
            className={styles.walkthroughButton}
            onClick={() => onOpenWalkthrough?.({
              title: walkthroughNote.modalTitle || walkthroughNote.label,
              browserTitle: 'Neuron walkthrough',
              url: walkthroughNote.embedUrl,
            })}
          >
            {walkthroughNote.label} <span aria-hidden="true">{'↗'}</span>
          </button>
          {walkthroughNote.trail ? <span> - {walkthroughNote.trail}</span> : null}
        </p>
      ) : null}
    </>
  );
}
