import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  // console.log(question);

  const questionArray = useSelector((state) => state.quiz.questions);
  // console.log(questionArray);

  return (
    <p>
      Question: {question.id} of {questionArray.length}
    </p>
  );
};
