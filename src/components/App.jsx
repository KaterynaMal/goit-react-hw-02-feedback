import { Component } from 'react';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { SectionTitle } from './SectionTitle';
import { Notification } from './Notification';

import css from './Feedback.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className={css.feedback_container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={options}
          />
        </SectionTitle>
        <SectionTitle title="Feedback Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}
