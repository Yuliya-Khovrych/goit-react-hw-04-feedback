import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const total = countTotalFeedback();


  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = countTotalFeedback();
    const percentage = (good * 100) / positiveFeedbackPercentage;
    return Math.round(percentage);
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}


// import { Component } from 'react';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     return totalFeedback;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedbackPercentage = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / positiveFeedbackPercentage;
//     return Math.round(percentage);
//   };

//   onLeaveFeedback = evt => {
//     const name = evt.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const optionKey = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionKey}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }
