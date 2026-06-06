import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../../../icons/icons';
import styles from './FullPageModal.module.css';

/* Context-managed singleton modal: every CompareCard on the page shares one
   modal instance. Cards call open({ content, label }) via useFullPageModal(). */
const FullPageModalContext = createContext(null);

export function useFullPageModal() {
  const context = useContext(FullPageModalContext);

  if (!context) {
    throw new Error('useFullPageModal must be used inside FullPageModalProvider');
  }

  return context;
}

export default function FullPageModalProvider({ children }) {
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = useCallback((payload) => setActive(payload), []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [active, close]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  const overlay = active ? (
    <div
      className={styles.fullModal}
      role="dialog"
      aria-modal="true"
      aria-label={active.label || 'Full page view'}
      onMouseDown={(event) => {
        // Backdrop click closes; clicks inside the white scroll column don't.
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div className={styles.modalScroll}>
        <div className={styles.modalTopBar}>
          <span className={styles.modalLabel}>{active.label}</span>
          <button type="button" className={styles.modalClose} onClick={close}>
            <CloseIcon className={styles.modalCloseIcon} color="currentColor" />
            Close
          </button>
        </div>
        <div className={styles.modalContent}>{active.content}</div>
      </div>
    </div>
  ) : null;

  return (
    <FullPageModalContext.Provider value={value}>
      {children}
      {mounted ? createPortal(overlay, document.body) : null}
    </FullPageModalContext.Provider>
  );
}
