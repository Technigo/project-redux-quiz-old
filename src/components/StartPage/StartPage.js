import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { ButtonContainer, Button } from 'reusable-components/Button';
import { Title } from 'reusable-components/Title';
import logo from 'assets/logo.jpg'
import { StartContainer, Logo } from './StartPageStyling';

export const StartPage = () => {
  const dispatch = useDispatch()
  const startOnClick = () => {
    dispatch(quiz.actions.startQuiz())
  }
  return (
    <StartContainer>
      <Logo src={logo} alt="quiz logo" />
      <Title fontSize="4rem"> Quiz! </Title>
      <ButtonContainer>
        <Button type="button" onClick={startOnClick}>Start</Button>
      </ButtonContainer>
    </StartContainer>
  )
}