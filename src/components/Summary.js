import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const numOfAnswers = answers.length;
  return (
    <p>You got {correctAnswers} correct answers out of {numOfAnswers}</p>
  );
};