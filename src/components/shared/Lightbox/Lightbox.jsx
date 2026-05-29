import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Lightbox.module.css';

/**
 * Lightbox
 *
 * Lightweight tap-to-fullscreen wrapper. Renders its `trigger` inline; when the
 * trigger is tapped, opens a portal-rendered overlay with the `children` (the
 * full-size content). The overlay uses `touch-action: pinch-zoom` on its
 * content wrapper which lets the browser handle pinch-zoom and pan natively
 * on touch devices.
 *
 * Props:
 *   trigger: ReactNode  — element to render inline (becomes the tap target)
 *   children: ReactNode — content shown inside the lightbox when open
 *   triggerLabel?: string  — accessible label for the trigger button
 *   triggerClassName?: string
 *   contentClassName?: string  — applied to the inner pinch-zoom wrapper
 */
export default function Lightbox({
  trigger,
  children,
  triggerLabel = 'Open in fullscreen',
  triggerClassName = '',
  contentClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const overlay = (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={triggerLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close fullscreen"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div
            className={`${styles.content} ${contentClassName}`}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${triggerClassName}`}
        aria-label={triggerLabel}
        onClick={() => setIsOpen(true)}
      >
        {trigger}
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
