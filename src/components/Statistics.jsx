import React from 'react';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        <p>
          Cood: <span className={css.good}>{good}</span>
        </p>
        <p>
          Neutral: <span className="neutral">{neutral}</span>
        </p>
        <p>
          Bad: <span className="bad">{bad}</span>
        </p>

        <p>
          Total: <span className="total">{total}</span>
        </p>
        <p>
          Positive feedback:{' '}
          <span className="percentage">{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

export { Statistics };
