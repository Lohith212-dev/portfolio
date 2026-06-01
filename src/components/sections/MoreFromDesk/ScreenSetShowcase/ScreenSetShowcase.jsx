import { useState } from 'react';
import MoreWorkBrowserFrame from '../MoreWorkBrowserFrame';
import ScreenAssetViewport from '../ScreenAssetViewport';
import styles from './ScreenSetShowcase.module.css';

export default function ScreenSetShowcase({ screenSet, sectionTitle }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = screenSet.tabs[activeTabIndex];
  const activeIdBase = `${sectionTitle}-${activeTabIndex}`.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={styles.screenShowcase}>
      {screenSet.tabs.length > 1 ? (
        <div className={styles.screenTabs} role="tablist" aria-label={`${sectionTitle} screen variations`}>
          {screenSet.tabs.map((tab, index) => {
            const tabId = `${sectionTitle}-${index}`.replace(/\s+/g, '-').toLowerCase();
            const isActive = index === activeTabIndex;

            return (
              <button
                key={tab.label}
                id={`${tabId}-tab`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabId}-panel`}
                tabIndex={isActive ? 0 : -1}
                className={`${styles.screenTab} ${isActive ? styles.screenTabActive : ''}`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <MoreWorkBrowserFrame
        title={screenSet.frameTitle || sectionTitle}
        darkChrome
        className={styles.screenFrame}
        bodyClassName={styles.screenFrameBody}
      >
        <div
          id={`${activeIdBase}-panel`}
          role="tabpanel"
          aria-labelledby={screenSet.tabs.length > 1 ? `${activeIdBase}-tab` : undefined}
          aria-label={screenSet.tabs.length === 1 ? sectionTitle : undefined}
          className={styles.screenFrameInner}
        >
          <ScreenAssetViewport
            src={activeTab.src}
            alt={activeTab.alt}
            resetKey={`${activeTab.label}-${activeTabIndex}`}
          />
        </div>
      </MoreWorkBrowserFrame>

      {activeTab.caption ? (
        <p className={styles.screenCaption}>{activeTab.caption}</p>
      ) : null}
    </div>
  );
}
