import GifLoop from './GifLoop';
import styles from './GifMeme.module.css';

// A reaction GIF as a taped-in print: white border, slight tilt, the joke
// in handwriting underneath and a credit line linking to its source.
export default function GifMeme({
  src,
  poster,
  width,
  height,
  alt,
  caption,
  credit,
  href,
  tilt = 'left',
  className = '',
}) {
  return (
    <figure className={`${styles.meme} ${tilt === 'right' ? styles.tiltRight : styles.tiltLeft} ${className}`}>
      <div className={styles.frame}>
        <GifLoop src={src} poster={poster} width={width} height={height} alt={alt} className={styles.video} />
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.joke}>{caption}</span>
        <a className={styles.credit} href={href} target="_blank" rel="noopener noreferrer">
          {credit} · via GIPHY
        </a>
      </figcaption>
    </figure>
  );
}
