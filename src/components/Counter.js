/* eslint-disable arrow-parens */
import { useSelector } from 'react-redux';
import React from 'react';
import './CurrentQuestion.css';

export const Counter = () => {
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);
  const currentQuestion = useSelector(state => state.quiz.currentQuesionIndex);
  const questionsLeft = numberOfQuestions - currentQuestion;

  return (
    <div className="counterContainer">
      <div className="counter">
        {questionsLeft}/{numberOfQuestions}
      </div>
    </div>
  );
};
