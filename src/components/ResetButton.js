import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const ResetButton = () => {
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(quiz.actions.restart());
  }
  return (
    <button
      className="nextButton"
      onClick={restart}
      type="button">
      Play Again
    </button>
  );
}