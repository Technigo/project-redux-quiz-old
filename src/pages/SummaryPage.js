import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ButtonNeon, NeonHeader, ButtonWrapper } from 'GlobalStyles';
import { Summary } from '../components/Summary'
import { quiz } from '../reducers/quiz';

/* gets info from store, dispatches restart action and returns summary page */
export const SummaryPage = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const correctAnswers = answers.filter((answer) => answer.isCorrect)
  const dispatch = useDispatch();

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <NeonHeader>SUMMARY</NeonHeader>
      <SummaryWrapper>
        <Summary />
        <QuizResult>You had {correctAnswers.length}/5 correct answers</QuizResult>

      </SummaryWrapper>
      <RestartButtonWrapper>
        <ButtonNeon onClick={onRestartClick} type="button"><NeonHeader>Restart</NeonHeader></ButtonNeon>
      </RestartButtonWrapper>
    </div>
  )
};

// Styled Components

/* restart button wrapper and media query */

const RestartButtonWrapper = styled(ButtonWrapper)`
  position: absolute;
  top: 91%;
 
  @media (max-width: 667px) {
    bottom: -10%;
    
    }
`;

//----------------------

const SummaryWrapper = styled.p`
  text-align: left;
  width: 60%;
  margin: 2% auto;

`;

//----------------------

const QuizResult = styled.p`
  margin: 2%;
  font-weight: 700;
`;