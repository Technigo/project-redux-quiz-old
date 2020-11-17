import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const quizStarted = useSelector((state) => state.quiz.quizStarted);

  return (
    <>
      {!quizStarted && (
        <section className="start">
          <h1>Please take this quiz</h1>
          <button
            className="start__button"
            type="button"
            onClick={() => dispatch(quiz.actions.startQuiz())}>
            Start quiz
          </button>
        </section>
      )}
    </>
  );
};
