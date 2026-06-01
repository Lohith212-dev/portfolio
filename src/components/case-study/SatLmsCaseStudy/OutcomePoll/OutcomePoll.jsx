import { useState } from 'react';
import { outcomePollOptions } from '../satLmsData';
import styles from '../SatLmsCaseStudy.module.css';

export default function OutcomePoll() {
  const [selectedOption, setSelectedOption] = useState(null);
  const totalVotes = outcomePollOptions.reduce((sum, option) => sum + option.initialVotes + (selectedOption === option.id ? 1 : 0), 0);
  const hasVoted = Boolean(selectedOption);

  return (
    <aside className={styles.outcomePoll} aria-labelledby="outcome-poll-title">
      <div className={styles.outcomePollHeader}>
        <div>
          <h3 id="outcome-poll-title">What do you think?</h3>
          <p>When you&apos;re learning something new, what works better for you?</p>
        </div>
      </div>

      <div className={styles.outcomePollOptions}>
        {outcomePollOptions.map((option) => {
          const isSelected = selectedOption === option.id;
          const voteCount = option.initialVotes + (isSelected ? 1 : 0);
          const percentage = Math.round((voteCount / totalVotes) * 100);

          return (
            <button
              key={option.id}
              className={`${styles.outcomePollOption} ${isSelected ? styles.outcomePollOptionSelected : ''}`}
              type="button"
              aria-pressed={isSelected}
              style={{ '--poll-option-fill': `${hasVoted ? percentage : 0}%` }}
              onClick={() => setSelectedOption(option.id)}
            >
              <span className={styles.outcomePollOptionText}>{option.label}</span>
              {hasVoted ? <span className={styles.outcomePollPercent}>{percentage}%</span> : null}
            </button>
          );
        })}
      </div>

      <p className={styles.outcomePollMeta}>
        {totalVotes} votes
        <span aria-hidden="true">/</span>
        {hasVoted ? 'Thanks for weighing in' : 'Add your take'}
      </p>
    </aside>
  );
}
