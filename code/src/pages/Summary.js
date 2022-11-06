/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { NextButton } from 'components/NextButton';
import { quiz } from 'reducers/quiz';
import { OuterWrapper, Devices, PageContainer } from '../components/MainStyles';
import HappyPumpkin from '../images/pumpkinHappy.png'
import SadPumpkin from '../images/pumpkinSad.png'

export const Summary = () => {
  const dispatch = useDispatch();

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }

  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  const finalImage = () => {
    if (correctAnswers === 8) {
      return <PumpingImg src={HappyPumpkin} alt="" />
    } else {
      return <PumpingImg src={SadPumpkin} alt="" />
    }
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ResultsContainer className="container">
          <SummaryTitle>Results</SummaryTitle>
          <Score>{`You got ${correctAnswers} out of 8 right`}</Score>
          {finalImage()}
          <SummaryText>
            <p>Want to give it another try?</p>
            <NextButton clickAction={restartQuiz} content="Try again!" />
          </SummaryText>
        </ResultsContainer>
        <Credits>
          <p>Images by: riajulislam from Flaticon & Yuri B and QuinceCreative from Pixabay</p>
        </Credits>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const InnerWrapper = styled.section`
  font-family: 'Courier Prime', monospace;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  
  @media ${Devices.tablet} {
    font-size: 25px;
  }
`

const ResultsContainer = styled(PageContainer)`
  width: 100%;
  height: auto;
  // added following:
  margin-top: 10%;
`

const Score = styled.div`
  margin-bottom: 5vh;
`

const SummaryTitle = styled.h1`
  margin-top: 7vh;
  font-family: 'Special Elite', cursive;
  color: #FFCD42;
`

const PumpingImg = styled.img`
  width: 20%;
  margin-bottom: 4vh;
`

const SummaryText = styled.div`
  align-items: center;
  justify-content: center;
  width: 70%;
  text-align: center;

  @media ${Devices.tablet} {
    width: 80%;
  }                                                                                                                                                                        
`

const Credits = styled.div`
  width: 80%;
  text-align: center;
  font-size: 14px;
  position: absolute;
  bottom: 0;
`