import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Container } from './Styles/GlobalStyles';
import { quiz } from '../reducers/quiz';

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();
  console.log(answers);

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  };

  return (
    <Container>
      <div>
        {answers.map((answer) => {
          return (
            <Container>
              <SummarySection key={answer.questionId}>
                <p>{answer.question.questionText}</p>
                <BoldText>
                  <p>
                     Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}
                  </p>
                </BoldText>
                <p>Your answer: {answer.answer}</p>
              </SummarySection>
            </Container>
          )
        })}
      </div>
      <Button onClick={onRestartClick} type="button">Restart</Button>
    </Container>
  )
};
export default Summary;

const SummarySection = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
background: #f8d12c;
`;

const BoldText = styled.span`
font-weight: 700;
`;