import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const sumOfAnswers = useSelector(state => state.quiz.answers);
  const correctAnswers = sumOfAnswers.filter(answer => answer.isCorrect);

  return (
    <>
      {sumOfAnswers.map(answer => (
        <div>
          <h3>{answer.question.options[answer.question.correctAnswerIndex]}</h3>
          <h4>{answer.isCorrect ? 'correct' : 'incorrect'}</h4>
        </div>
      ))}
      <h4>Your score is: {correctAnswers.length}/5</h4>
    </>
  );
};
