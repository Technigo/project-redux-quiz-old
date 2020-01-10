import React from 'react';
import { useSelector } from 'react-redux';
import { Options } from './Options';
import { NextButton } from './NextButton';

export const CurrentQuestion = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuesionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <section>
      <h1>Question: {question.questionText}</h1>
      <Options />
      <NextButton />
    </section>
  );
};
