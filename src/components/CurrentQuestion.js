import React from 'react';
import { useSelector } from 'react-redux';
import { NextButton } from './NextButton';
import { ProgressBar } from './ProgressBar';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <NextButton />
      <ProgressBar />
    </div>
  );
};
