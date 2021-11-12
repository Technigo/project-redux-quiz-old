import React from 'react';
import { useDispatch } from 'react-redux';

import { quiz } from 'reducers/quiz';

export const NextQuestionButton = ({currentQuestion, buttonClickedTimes}) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={buttonClickedTimes < 1}
      className="btn next-question"
      type="button"
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion())
        dispatch(quiz.actions.submitAnswer({ questionId: currentQuestion[0], answerIndex: currentQuestion[1] }));
      }}>
      Next Question
    </button>
  );
};
