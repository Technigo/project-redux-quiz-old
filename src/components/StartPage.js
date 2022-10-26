import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

const StartPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Quiz</h1>

      <button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.startQuiz());
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
