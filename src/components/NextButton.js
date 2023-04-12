import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const NextButton = () => {
  const dispatch = useDispatch();
  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }
  return (
    <button
      className="nextButton"
      onClick={goToNextQuestion}
      type="button">
      Next
    </button>
  );
}