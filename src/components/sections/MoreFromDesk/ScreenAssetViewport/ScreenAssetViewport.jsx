import { useEffect, useRef } from 'react';
import styles from './ScreenAssetViewport.module.css';

export default function ScreenAssetViewport({ src, alt, resetKey }) {
  const viewportRef = useRef(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [resetKey]);

  return (
    <div ref={viewportRef} className={styles.screenAssetViewport}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={styles.screenAsset}
        loading="lazy"
      />
    </div>
  );
}
