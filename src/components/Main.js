import React from 'react'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import background from 'images/background.jpg';
import styled from 'styled-components/macro';
import { Button } from './Buttons';

const Main = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  if (!quizOver) {
    return (
      <Background img src={background} alt="70s pattern">
        <InnerWrapper />
        <CurrentQuestion />
        <Button
          handleClick={() => onNextQuestion()}
          buttonText="Next question" />
      </Background>
    )
  } else {
    return (
      <Background alt="70s pattern">
        <InnerWrapper />
        <Summary />
        <Button
          handleClick={() => onRestart()}
          buttonText="Start over" />
      </Background>
    )
  }
}

const Background = styled.main`
background-image: url(${background});
position: relative;
width: 100vw;
height:80vh;
background-size: cover;
margin: auto;
`;

const InnerWrapper = styled.div`


`

export default Main;