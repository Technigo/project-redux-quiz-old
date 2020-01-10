import React from 'react';
import { useSelector } from 'react-redux';

export const Answers = () => {
  const questions = useSelector(
    state => state.quiz.questions[state.quiz.currentQuesionIndex]
  );
  const answer = useSelector(state =>
    state.quiz.answers.find(
      a => a.questionId === questions.id // question could come from the previous selector in the last example
    )
  );

  if (answer === questions.id) {
    return <h1>{answer}</h1>;
  }
};

return (
  <>
    <h1 />
  </>
);
