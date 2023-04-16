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
      return 'That is correct!';
    } else if (correctAnswer === 4) {
      return 'You nailed it!';
    } else if (correctAnswer === 3) {
      return 'Good job!';
    } else {
      return 'No, that is not correct';
    }
  };

  return (
    <div className="summary">
      <h1>You did great!</h1>
      <h3>
        You got: {correctAnswer} of {answers.length}
      </h3>
      <ResetButton />
      <p>{userSummary()}</p>
    </div>
  );
};