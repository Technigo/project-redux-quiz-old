import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);

  /* returns quote, correct answer and user answer fron store */
  return answers.map((answer) => {
    return (
      <SummarySection key={answer.questionId}>
        <p>{answer.question.questionText}</p>
        <BoldText>
          <p> Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
        </BoldText>
        <p>Your answer: {answer.answer}</p>
      </SummarySection>
    )
  })
};

// Styled components

/* summary and media query for each separate  section question */

const SummarySection = styled.section`
margin: 2% 0;
padding-bottom: 2%;
line-height: 150%;

@media (max-width: 667px) {
border-bottom: 1px solid;
margin: 4% 0;
padding-bottom: 4%;
}
`;

//----------------------

const BoldText = styled.span`
font-weight: 700;
`;

