import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonNeon, NeonHeader, ButtonWrapper } from 'GlobalStyles';
import { Summary } from '../components/Summary'
import { quiz } from '../reducers/quiz';

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
      <ClonedButtonWrapper>
        <ButtonNeon onClick={onRestartClick} type="button"><NeonHeader>Restart</NeonHeader></ButtonNeon>
      </ClonedButtonWrapper>
    </div>
  )
};

const ClonedButtonWrapper = styled(ButtonWrapper)`
  position: absolute;
  top: 85%; 
  

`;

const SummaryWrapper = styled.p`
  text-align: left;
  width: 60%;
  margin: 2% auto;
  //* padding-bottom: 5%; */

`

const QuizResult = styled.p`
  margin: 2%;
  width: 
  border: 2px solid yellowgreen; 
`;