import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const startingState = useSelector((state) => state.quiz);

  return (
    <div className="progress-bar-container">
      <p>
        You are on question nr. {startingState.questions[currentQuestionIndex].id} out of{' '}
        {startingState.questions.length}
      </p>
      <progress
        className="progress-bar"
        id="file"
        value={questions[currentQuestionIndex].id}
        max={questions.length}
      />
    </div>
  );
};
