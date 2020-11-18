import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const questionArray = useSelector((state) => state.quiz.questions);

  return (
    <p>
      Question: {question.id} of {questionArray.length}
    </p>
  );
};
