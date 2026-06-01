import { useState } from 'react';
import lmsStyles from '../../SatLmsCaseStudy/SatLmsCaseStudy.module.css';
import { outcomePollOptions } from '../sparkData';

export default function OutcomePoll() {
  const [selectedOption, setSelectedOption] = useState(null);
  const totalVotes = outcomePollOptions.reduce((sum, option) => sum + option.initialVotes + (selectedOption === option.id ? 1 : 0), 0);
  const hasVoted = Boolean(selectedOption);

  return (
    <aside className={lmsStyles.outcomePoll} aria-labelledby="spark-poll-title">
      <div className={lmsStyles.outcomePollHeader}>
        <div>
          <h3 id="spark-poll-title">When automating a creative workflow, what&apos;s harder to encode — subject matter expertise or design judgment?</h3>
        </div>
      </div>

      <div className={lmsStyles.outcomePollOptions}>
        {outcomePollOptions.map((option) => {
          const isSelected = selectedOption === option.id;
          const voteCount = option.initialVotes + (isSelected ? 1 : 0);
          const percentage = Math.round((voteCount / totalVotes) * 100);

          return (
            <button
              key={option.id}
              className={`${lmsStyles.outcomePollOption} ${isSelected ? lmsStyles.outcomePollOptionSelected : ''}`}
              type="button"
              aria-pressed={isSelected}
              style={{ '--poll-option-fill': `${hasVoted ? percentage : 0}%` }}
              onClick={() => setSelectedOption(option.id)}
            >
              <span className={lmsStyles.outcomePollOptionText}>{option.label}</span>
              {hasVoted ? <span className={lmsStyles.outcomePollPercent}>{percentage}%</span> : null}
            </button>
          );
        })}
      </div>

      <p className={lmsStyles.outcomePollMeta}>
        {totalVotes} votes
        <span aria-hidden="true">/</span>
        {hasVoted ? 'Thanks for weighing in' : 'Add your take'}
      </p>
    </aside>
  );
}
