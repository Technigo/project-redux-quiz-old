import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Button } from 'reusable-components/Button';
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
      <Logo src={logo} width="40%" alt="start logo" />
      <Title $font> Quiz! </Title>
      <Button type="button" onClick={startOnClick}>Start</Button>
    </StartContainer>
  )
}