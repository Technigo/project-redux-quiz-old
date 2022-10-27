import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);

  return answers.map((answer) => {
    return (
      <SummarySection key={answer.questionId}>
        <p>{answer.question.questionText}</p>
        <p> Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
        <p>Your answer: {answer.answer}</p>
      </SummarySection>
    )
  })
};

const SummarySection = styled.section`
margin: 2%;
line-height: 150%;
`;

