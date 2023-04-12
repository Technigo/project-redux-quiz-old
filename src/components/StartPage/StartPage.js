import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { ButtonContainer, Button } from 'reusable-components/Button';
import { Title } from 'reusable-components/Title';
import logo from 'assets/logo.jpg'
import { Image } from 'reusable-components/Image';
import { StartContainer, Logo } from './StartPageStyling';

export const StartPage = () => {
  const dispatch = useDispatch()
  const startOnClick = () => {
    dispatch(quiz.actions.startQuiz())
  }
  return (
    <StartContainer>
      <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Logo src={logo} alt="quiz logo" />
      <Title fontSize="4rem"> Quiz! </Title>
      <ButtonContainer>
        <Button type="button" onClick={startOnClick}>Start</Button>
      </ButtonContainer>
    </StartContainer>
  )
}