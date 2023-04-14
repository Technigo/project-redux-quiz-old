import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { ButtonContainer, Button } from 'reusable-components/Button';
import { Title } from 'reusable-components/Title';
import { StartContainer, Logo, InfoContainer } from './StartPageStyling';

export const StartPage = () => {
  const dispatch = useDispatch()
  const startOnClick = () => {
    dispatch(quiz.actions.startQuiz())
  }
  return (
    <StartContainer>

      <Logo src="/images/logo.jpg" alt="quiz logo" />
      {/* <Title fontSize="4rem"> Quiz! </Title> */}
      <InfoContainer>
        <Title fontSize="1rem"> See how much you know about food around the world.</Title>
        <Title fontSize="1rem">Correct: +3</Title>
        <Title fontSize="1rem"> Incorrect: -2</Title>
      </InfoContainer>
      <ButtonContainer>
        <Button type="button" onClick={startOnClick}>Start</Button>
      </ButtonContainer>
    </StartContainer>
  )
}