import Image from 'next/image';
import Link from 'next/link';
import { thoughts } from '../thoughtsData';
import styles from './ThoughtsIndex.module.css';

export default function ThoughtsIndex() {
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <h1 className={styles.title}>Thoughts</h1>
        <p className={styles.lede}>Short notes on design, AI and building things. Mostly serious.</p>
      </header>

      <ol className={styles.list}>
        {thoughts.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/thoughts/${entry.slug}`} className={styles.card}>
              <Image
                src={entry.cover}
                alt={entry.coverAlt}
                width={240}
                height={136}
                className={styles.cover}
              />
              <span className={styles.body}>
                <span className={styles.meta}>No. {entry.number} · {entry.date}</span>
                <span className={styles.cardTitle}>{entry.title}</span>
                <span className={styles.blurb}>{entry.blurb}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
