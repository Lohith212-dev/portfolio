import { useEffect, useRef } from 'react';
import { CloseIcon } from '../../../icons/icons';
import styles from './MoreWorkEmbedModal.module.css';

export default function MoreWorkEmbedModal({ modal, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modal) return undefined;

    const previouslyFocused = document.activeElement;
    const frame = modalRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !frame) return;

      const focusable = Array.from(frame.querySelectorAll(focusableSelector));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.querySelector(focusableSelector)?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [modal, onClose]);

  if (!modal) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} role="presentation" onMouseDown={onClose}>
      <div
        ref={modalRef}
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="more-work-embed-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.modalCard}>
          <button
            type="button"
            className={styles.closeButton}
            aria-label={`Close ${modal.title}`}
            onClick={onClose}
          >
            <CloseIcon color="currentColor" />
          </button>
          <div className={styles.modalShell}>
            <h2 id="more-work-embed-modal-title" className={styles.srOnly}>{modal.title}</h2>
            <iframe
              src={modal.url}
              title={modal.title}
              className={styles.modalEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
