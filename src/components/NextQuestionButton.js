import React from 'react';
import { useDispatch } from 'react-redux';

import { quiz } from 'reducers/quiz';

export const NextQuestionButton = ({ currentQuestion, buttonClickedTimes }) => {
  const dispatch = useDispatch();
  const goToNextQuestionCall = () => {
    dispatch(quiz.actions.goToNextQuestion());
    dispatch(
      quiz.actions.submitAnswer({ questionId: currentQuestion[0], answerIndex: currentQuestion[1] })
    );
  };

  return (
    <button
      disabled={buttonClickedTimes < 1}
      className="btn next-question"
      type="button"
      onClick={() => goToNextQuestionCall()}>
      Next Question
    </button>
  );
};
