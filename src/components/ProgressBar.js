import React from 'react';
import { useSelector } from 'react-redux';
import './ProgressBar.css';

export const ProgressBar = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => {
    return state.quiz.questions[state.quiz.currentQuestionIndex];
  });

  const progress = (currentQuestionIndex.id / questions.length) * 100;

  return (
    <div className="container">
      <h3 className="progress-bar">
        Question: {currentQuestionIndex.id} / {questions.length}
      </h3>
      <progress className="progress" value={progress} max="100">
        {progress}%
      </progress>
    </div>
  );
};
