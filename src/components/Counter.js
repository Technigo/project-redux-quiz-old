import { useSelector } from 'react-redux';
import React from 'react';

export const Counter = () => {
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);
  const currentQuestion = useSelector(state => state.quiz.currentQuesionIndex);
  const questionsLeft = numberOfQuestions - currentQuestion;

  return (
    <div>
      {questionsLeft}/{numberOfQuestions}
    </div>
  );
};
