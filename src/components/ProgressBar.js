import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const questionTotal = useSelector((store) => store.quiz.questions);
  const currentQuestion = useSelector((store) => {
    return store.quiz.questions[store.quiz.currentQuestionIndex];
  });

  return (

    <p className="QuestionCounter">
        Question: {currentQuestion.id} / {questionTotal.length}
    </p>

  );
};