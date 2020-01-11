/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable arrow-parens */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from './Summary';
import './NextButton.css';

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
        value="Next"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        {currentQuesionIndex === questions.length - 1 ? 'Submit' : 'Next'}
      </button>
    </>
  );
};
