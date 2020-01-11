/* eslint-disable arrow-parens */
import React from 'react';
import { useSelector } from 'react-redux';
import './Summary.css';

export const Summary = () => {
  const sumOfAnswers = useSelector(state => state.quiz.answers);
  const correctAnswers = sumOfAnswers.filter(answer => answer.isCorrect);

  return (
    <>
      <div>
        <h2>Your answers</h2>
      </div>
      <div className="answerContainer">
        {sumOfAnswers.map(answer => (
          <div className="answers">
            <p>Question: {answer.question.id}</p>
            <p>
              Correct answer:{' '}
              {answer.question.options[answer.question.correctAnswerIndex]}
            </p>
            <p>Your answer was: {answer.isCorrect ? 'correct' : 'incorrect'}</p>
          </div>
        ))}
      </div>
      <h4 className="scoreContainer">
        Your score is: {correctAnswers.length}/{sumOfAnswers.length}
      </h4>
    </>
  );
};
