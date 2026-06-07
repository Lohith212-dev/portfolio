import styles from './ShowcaseSidebar.module.css';

export default function ShowcaseSidebar({ sidebar }) {
  const visibleFacts = sidebar?.facts?.slice(0, sidebar?.factsVisibleCount || sidebar?.facts?.length || 0) || [];

  return (
    <aside className={styles.sidebar} aria-label="Project details">
      {sidebar?.categories?.length ? (
        <div className={styles.sideSection}>
          <h3>Category</h3>
          <div className={styles.chipRow}>
            {sidebar.categories.map((chip) => (
              <span key={chip} className={styles.chip}>{chip}</span>
            ))}
          </div>
        </div>
      ) : null}

      {visibleFacts.length || sidebar?.projectChips?.length || sidebar?.projectDisclaimer ? (
        <div className={styles.sideSection}>
          <h3>Project</h3>
          {visibleFacts.length ? (
            <div className={styles.factList}>
              {visibleFacts.map((fact) => (
                <div key={fact.label} className={styles.factRow}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              ))}
            </div>
          ) : null}

          {sidebar?.projectChips?.length ? (
            <div className={styles.projectChipRow}>
              {sidebar.projectChips.map((chip) => {
                const chipContent = (
                  <>
                    {chip.dot ? <span className={styles.projectChipDot} aria-hidden="true" /> : null}
                    {chip.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={chip.logo}
                        alt=""
                        className={styles.projectChipLogo}
                        aria-hidden="true"
                      />
                    ) : null}
                    {chip.label}
                    {chip.href ? <span aria-hidden="true">{'↗'}</span> : null}
                  </>
                );
                const chipClass = `${styles.projectChip} ${chip.active ? styles.projectChipActive : ''} ${chip.href ? styles.projectChipLink : ''}`;

                /* External product links only — internal routes would need
                   next/link, but these chips always point off-site. */
                return chip.href ? (
                  <a
                    key={chip.label}
                    href={chip.href}
                    target="_blank"
                    rel="noreferrer"
                    className={chipClass}
                  >
                    {chipContent}
                  </a>
                ) : (
                  <span key={chip.label} className={chipClass}>
                    {chipContent}
                  </span>
                );
              })}
            </div>
          ) : null}

          {sidebar?.projectDisclaimer ? (
            <p className={styles.projectDisclaimer}>{sidebar.projectDisclaimer}</p>
          ) : null}
        </div>
      ) : null}
    </aside>
  );
}
