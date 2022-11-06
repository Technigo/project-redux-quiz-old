import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NextButton } from 'components/NextButton';
import { quiz } from 'reducers/quiz';
import { OuterWrapper, Devices, PageContainer } from '../components/MainStyles';
import HappyPumpkin from '../images/pumpkinHappy.png';
import SadPumpkin from '../images/pumpkinSad.png';

// Final page where the result is shown and the user have option of retaking the quiz
export const Summary = () => {
  const dispatch = useDispatch();

  // Restart-function, triggered by button-onclick
  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  }

  // Variable that checks how many correct answer the user has
  const correctAnswers = useSelector(
    (state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );

  // Function that allows a different pumpkin to be shown
  // depending on how many correct answers there are
  const finalImage = () => {
    if (correctAnswers === 8) {
      return <PumpingImg src={HappyPumpkin} alt="" />
    } else {
      return <PumpingImg src={SadPumpkin} alt="" />
    }
  }

  // Function that allows a different message to be shown
  // depending on how many correct answers there are
  const finalMessage = () => {
    if (correctAnswers === 8) {
      return <PumpkinText> Impressive! </PumpkinText>
    } else if (correctAnswers >= 6 && correctAnswers < 8) {
      return <PumpkinText>Ok, but room for improvement!</PumpkinText>
    } else {
      return <PumpkinText>You need to read up on Halloween...</PumpkinText>
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
            {finalMessage()}
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

// The local styled components
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
  margin-bottom: 1vh;
`

const PumpkinText = styled.p`
  text-align: center;
  margin: 2% 2% 15% 2%;
`

const SummaryText = styled.div`
  align-items: center;
  justify-content: center;
  width: 70%;
  text-align: center;
  margin-bottom: 4vh;

  @media ${Devices.tablet} {
    width: 80%;
    margin-top: 2vh;
  }                                                                                                                                                                        
`

const Credits = styled.div`
  width: 80%;
  text-align: center;
  font-size: 14px;
  position: absolute;
  bottom: 0;
`