import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const answerIndex = useSelector((state) => state.quiz.answerIndex);
  const dispatch = useDispatch();

  return (
    <div className="summary">
      <h2>This is your summary</h2>
      <p>You got {answerIndex} questions correct!</p>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
    </div>
  );
};
