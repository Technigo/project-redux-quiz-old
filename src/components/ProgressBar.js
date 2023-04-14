/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import './ProgressBar.css';

export const ProgressBar = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => {
    return state.quiz.questions[state.quiz.currentQuestionIndex];
  });

  return (
    <div className="container">
      <h3 className="progress-bar">
        Question: {currentQuestionIndex.id} / {questions.length}
      </h3>
    </div>
  );
};
