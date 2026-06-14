import styles from './ShowcaseSpecStrip.module.css';

/* Compact tablet/mobile stand-in for the side rail: just the essentials —
   role, timeline, and company — as a centered chip row under the hero.
   Desktop keeps the full ShowcaseSidebar; this strip only renders where
   the rail is hidden (see module CSS). */
export default function ShowcaseSpecStrip({ sidebar }) {
  const role = sidebar?.facts?.find((fact) => fact.label === 'Role')?.value;
  const timeline = sidebar?.facts?.find((fact) => fact.label === 'Timeline')?.value;
  const company = sidebar?.projectChips?.find((chip) => chip.logo);
  const responsibilities = sidebar?.responsibilities || [];

  if (!role && !timeline && !company && !responsibilities.length) {
    return null;
  }

  return (
    <aside className={styles.specStrip} aria-label="Project details">
      <div className={styles.chipRow}>
        {role ? <span className={styles.chip}>{role}</span> : null}
        {timeline ? <span className={styles.chip}>{timeline}</span> : null}
        {company ? (
          /* Clickable when the chip carries an external product link —
             mirrors the desktop side rail. */
          company.href ? (
            <a
              href={company.href}
              target="_blank"
              rel="noreferrer"
              className={styles.chip}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.logo}
                alt=""
                className={styles.chipLogo}
                aria-hidden="true"
              />
              {company.label} <span aria-hidden="true">{'↗'}</span>
            </a>
          ) : (
            <span className={styles.chip}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.logo}
                alt=""
                className={styles.chipLogo}
                aria-hidden="true"
              />
              {company.label}
            </span>
          )
        ) : null}
      </div>

      {responsibilities.length ? (
        /* The side rail is desktop-only, so the role detail rides along here on
           tablet/mobile — a compact list under the chips. */
        <ul className={styles.responsibilityList}>
          {responsibilities.map((item) => (
            <li key={item} className={styles.responsibilityItem}>{item}</li>
          ))}
        </ul>
      ) : null}

      {sidebar?.projectDisclaimer ? (
        <p className={styles.disclaimer}>{sidebar.projectDisclaimer}</p>
      ) : null}
    </aside>
  );
}
