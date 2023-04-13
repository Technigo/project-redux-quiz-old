/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ResetButton } from 'components/ResetButton';
import { useSelector } from 'react-redux';
import './summary.css';

export const SummaryPage = () => {
  // Variable to calculate how many correct answer the user has given
  const correctAnswer = useSelector(
    (state) =>
      state.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );
  const answers = useSelector((state) => state.quiz.answers);

  const userSummary = () => {
    if (correctAnswer === 5) {
      return 'Youa are a genius 🧠';
    } else if (correctAnswer === 4) {
      return 'Well done 👌';
    } else if (correctAnswer === 3) {
      return 'Well done 👌';
    } else {
      return 'You need to study more 🤦';
    }
  };

  // console.log(correctAnswer);
  return (
    <div className="summary">
      <h1>Oh wow, what a ride!</h1>
      <h3>
        Your final score was: {correctAnswer} out of {answers.length}
      </h3>
      <ResetButton />
      <p>{userSummary()}</p>
    </div>
  );
};
