import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);

  return answers.map((answer) => {
    return (
      <section key={answer.questionId}>
        <p>
          {answer.question.questionText} is from
          {answer.question.options[answer.question.correctAnswerIndex]}
        </p>
        <p>You answered {answer.answer}</p>
      </section>

    )
  })
};