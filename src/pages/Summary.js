import React from 'react';
import { ResetButton } from 'components/ResetButton';
import { useSelector } from 'react-redux';

export const SummaryPage = () => {
  // Variable to calculate how many correct answer the user has given
  const correctAnswer = useSelector(
    (state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).lenght
  );
  console.log(correctAnswer);
  return (
    <div>
      <h1>Summary Page</h1>
      {` your final score was: ${correctAnswer}
      import score, import button to restart, import some celebration
      `}
      <ResetButton />
    </div>
  )
}