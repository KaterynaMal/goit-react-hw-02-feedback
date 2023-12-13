import React from 'react';
import css from './Feedback.module.css';


// options, onLeaveFeedback
const FeedbackOptions = ({  handleClick}) => {
  return (
    <div>
      <div className={css.btn_list}>
        <li>
          <button
            onClick={() => handleClick('good')}
            className={css.btn}
            type="button"
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick('neutral')}
            className={css.btn}
            type="button"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick('bad')}
            className={css.btn}
            type="button"
          >
            Bad
          </button>
        </li>
      </div>
    </div>
  );
};

export { FeedbackOptions };
