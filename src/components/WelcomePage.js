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
          <h1>Christmas Quiz</h1>
          <p className="start__text">What do you know about best selling Christmas gifts?</p>
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
