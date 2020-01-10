import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from './Summary';

export const NextButton = () => {
  const questions = useSelector(state => state.quiz.questions);
  const currentQuesionIndex = useSelector(
    state => state.quiz.currentQuesionIndex
  );
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="nextBtn"
        type="button"
        vakue="Next"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        {currentQuesionIndex === questions.length - 1 ? 'Submit' : 'Next'}
      </button>
      <Summary />
    </>
  );
};
