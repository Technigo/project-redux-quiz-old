import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import './ResetButton.css';

export const ResetButton = () => {
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(quiz.actions.restart());
  };
  return (
    <div className="resetButtonContainer">
      <button className="resetButton" onClick={restart} type="button">
        Play again
      </button>
    </div>
  );
};