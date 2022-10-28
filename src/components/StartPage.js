import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import CurrentQuestion from './CurrentQuestion';
import { Container } from './StyledComponents/Container';
import header from '../assets/header.png'
import { Button } from './StyledComponents/Button';

export const HeaderImage = styled.div`
display: flex;
justify-content: center;
padding: 20px;

 & img {
  width: 25rem;
 }
`
export const IntroContainer = styled.div`
  text-align: center;
`

export const IntroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
`

export const IntroText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`

export const StartPage = () => {
  const dispatch = useDispatch()
  const start = useSelector((state) => state.quiz.quizStarted);

  return (
    <div>
      <HeaderImage>
        <img src={header} alt="popquiz logo" />
      </HeaderImage>
      <Container>
        <IntroContainer>
          <IntroTitle>
            Welcome to the pop culture quiz!
          </IntroTitle>
          <IntroText>
            lorem lorem lorem lorem lorem lorem lorem lorem
          </IntroText>
        </IntroContainer>
        {!start ? <Button type="button" onClick={() => dispatch(quiz.actions.startQuiz())}>Start</Button>
          : <CurrentQuestion />}
      </Container>
    </div>
  )
}
