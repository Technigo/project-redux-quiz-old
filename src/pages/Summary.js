import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import RestartQuiz from "components/RestartQuiz";
import { ReactComponent as MyBackground } from '../assets/retro_bg.svg'
import HappyGif from '../components/HappyGif'
import SadGif from '../components/SadGif'
import AnswersSummary from "components/AnswersSummary";


const MainWrapper = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const BackgroundStyled = styled.div`
    height: 100vh;
    position: fixed;
    z-index: -1;
    display: flex;
`

const FormWrapper = styled.div`
  width: 90vw;
  background-color: #FEE8DA;
  margin-top: 35px;
  @media (min-width: 768px) {
    max-width: 600px;
    height: 600px;
  }
`
const QuestionHeader = styled.div`
  height: 50px;
  background-color: #512A8D;
  color: #FEE8DA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`
const ProgressHeader = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
`
const StyledHappyGifs = styled(HappyGif)`
    width: 100%;
`
const StyledSadGifs = styled(SadGif)`
    width: 200px;
    height: 100px;
`
const StyledGifs = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
`
const StyledBackground = styled(MyBackground)`
    height: 100%;
`

const Summary = () => {

    const answers = useSelector((state) => state.quiz.answers)
    const correctAnswers = answers.filter((correct) => correct.isCorrect === true)


    return (
        <MainWrapper>
            <BackgroundStyled>
                <StyledBackground />
            </BackgroundStyled>
            <FormWrapper>
                <QuestionHeader>
                    <ProgressHeader>Score {correctAnswers.length}/{answers.length}</ProgressHeader>
                </QuestionHeader>
                <StyledGifs>
                    {correctAnswers.length >= 3 && (
                        <StyledHappyGifs />
                    )}
                    {correctAnswers.length < 3 && (
                        <StyledSadGifs />
                    )}
                </StyledGifs>
                <AnswersSummary />
                <RestartQuiz />
            </FormWrapper>
        </MainWrapper>
    )
}

export default Summary