/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import './Summary.css';

export const RestartButton = () => {
  const dispatch = useDispatch();

  const handleRestartButton = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <div className="restartBtnContainer">
      <button
        className="restartBtn"
        type="button"
        value="restart"
        onClick={handleRestartButton}
      >
        Restart
      </button>
    </div>
  );
};
