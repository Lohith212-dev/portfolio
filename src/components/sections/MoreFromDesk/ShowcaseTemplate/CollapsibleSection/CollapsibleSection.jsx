import { ChevronDown } from '../../../../icons/icons';
import styles from './CollapsibleSection.module.css';

/* A numbered section whose heading toggles its content open/closed.
   The serial number (01 / 02 …) sits in its own grid column so it stands
   apart from the title, and the body aligns under the title — never under
   the number. `open` and `onToggle` are owned by the template so the global
   Expand all / Collapse all control can drive every section at once. */
export default function CollapsibleSection({ id, number, title, open, onToggle, children }) {
  const headerId = `${id}-header`;
  const panelId = `${id}-panel`;

  return (
    <section id={id} className={`${styles.section} ${open ? styles.open : styles.closed}`}>
      <span className={styles.number} aria-hidden="true">{number}</span>

      <h2 className={styles.heading}>
        <button
          type="button"
          id={headerId}
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.titleText}>{title}</span>
          <ChevronDown className={styles.chevron} />
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={styles.panel}
        hidden={!open}
      >
        {children}
      </div>
    </section>
  );
}
