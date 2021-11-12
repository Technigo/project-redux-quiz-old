import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const userAnswer = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  return (
    <div className="summary">
      <h2>This is your summary</h2>
      {userAnswer.map((item) => (
        <>
          <p>
            {' '}
            {item.questionId}: Correct answer is{' '}
            {item.question.options[item.question.correctAnswerIndex]}, so {item.answer} was{' '}
            {item.isCorrect ? 'correct' : 'wrong'}
          </p>
        </>
      ))}
      <button className="btn" type="button" onClick={() => dispatch(quiz.actions.restart())}>
        Restart Quiz
      </button>
    </div>
  );
};
