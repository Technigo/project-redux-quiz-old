import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

const EndPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Quiz Over</h1>
      <p> Your score is:</p>
      <button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}
      >
        restart
      </button>
    </div>
  );
};

export default EndPage;
