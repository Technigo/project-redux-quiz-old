import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';

const EndPage = () => {
  const dispatch = useDispatch();
  const correctAnswers = useSelector(
    (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );

  return (
    <div>
      <h1>Quiz Over</h1>
      <p> Your score is: {correctAnswers}</p>
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
