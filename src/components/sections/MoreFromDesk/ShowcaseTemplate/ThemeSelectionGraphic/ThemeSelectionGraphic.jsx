import styles from './ThemeSelectionGraphic.module.css';

const BASE = '/images/case-studies/egmat-blogs/theme-logos';

/* Bespoke graphic for the blog "chose the engine" decision: ten WordPress
   themes I evaluated, greyed out and struck through, ringed around the one I
   picked. Coded (not a flat screenshot) so it stays crisp, scales with its
   column, keeps a transparent background, and reads from the design tokens.
   Each reject sits on an absolute point (percentages of the 16:9 box) and is
   sized in cqi units so the whole composition scales with the container. */

// Green tick used in the winner card.
function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="15" fill="var(--color-accent-green)" />
      <path d="M9 15.5l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThemeSelectionGraphic() {
  return (
    <figure className={styles.graphic} role="img"
      aria-label="Ten WordPress themes evaluated and struck through, with Elegant Themes' Extra chosen as the pick on three criteria: easy updates, blog capability, and customization.">

      {/* ---- rejected themes (ring) ---- */}
      <span className={styles.reject} style={{ left: '29.4%', top: '12.2%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '3.1cqi' }} src={`${BASE}/astra-dark.svg`} alt="" />
      </span>

      <span className={styles.reject} style={{ left: '70.6%', top: '12.2%' }}>
        <span className={styles.word} style={{ fontSize: '2.6cqi' }}>Jannah.</span>
      </span>

      <span className={styles.reject} style={{ left: '15%', top: '33.3%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '2.9cqi' }} src={`${BASE}/hestia.svg`} alt="" />
        <span className={styles.word}>Hestia</span>
      </span>

      <span className={styles.reject} style={{ left: '14.1%', top: '52.2%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '3.9cqi' }} src={`${BASE}/soledad.png`} alt="" />
      </span>

      <span className={styles.reject} style={{ left: '15.9%', top: '72.2%' }}>
        <svg className={styles.mark} viewBox="0 0 46 46" aria-hidden="true">
          <rect width="46" height="46" rx="11" fill="#3a3a42" />
          <path d="M16 12v22M16 23l11-11M16 23l11 11" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
        <span className={styles.word}>Kadence&nbsp;<small>WP</small></span>
      </span>

      <span className={styles.reject} style={{ left: '85%', top: '33.3%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '3.4cqi' }} src={`${BASE}/newspaper.png`} alt="" />
      </span>

      <span className={styles.reject} style={{ left: '86.1%', top: '52.2%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '3.1cqi' }} src={`${BASE}/oceanwp.png`} alt="" />
        <span className={styles.word}>OceanWP</span>
      </span>

      <span className={styles.reject} style={{ left: '84.5%', top: '72.2%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '2.5cqi' }} src={`${BASE}/gp-dark.svg`} alt="" />
      </span>

      <span className={styles.reject} style={{ left: '29.4%', top: '88.9%' }}>
        <svg className={styles.mark} viewBox="0 0 46 46" aria-hidden="true">
          <rect width="46" height="46" rx="11" fill="#3a3a42" />
          <path d="M14 33V13l18 20V13" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.word}>Neve</span>
      </span>

      <span className={styles.reject} style={{ left: '70.6%', top: '88.9%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} style={{ height: '3.1cqi' }} src={`${BASE}/blocksy.png`} alt="" />
        <span className={styles.word}>Blocksy</span>
      </span>

      {/* ---- the pick ---- */}
      <div className={styles.winner}>
        <span className={styles.pick}>Our pick</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.extraMark} src={`${BASE}/extra-mark.png`} alt="Extra by Elegant Themes" />
        <span className={styles.extraName}>Extra</span>
        <span className={styles.extraBy}>by Elegant Themes</span>
        <span className={styles.divider} aria-hidden="true" />
        <ul className={styles.feats}>
          <li><Check /><span>Easy updates</span></li>
          <li><Check /><span>Blog capability</span></li>
          <li><Check /><span>Customization</span></li>
        </ul>
      </div>
    </figure>
  );
}
