import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'
import RestartQuiz from "components/RestartQuiz";
import { ReactComponent as MyBackground } from '../assets/retro_bg.svg'
import HappyGif from '../components/HappyGif'
import SadGif from '../components/SadGif'


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
  margin-top: 40px;
  background-color: #FEE8DA;
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
const StyledAnswers = styled.div`
    font-size: 15px;
    padding: 10px;
    font-weight: 600;
    margin: 0;
`
const StyledAnswer = styled.p`
    margin: 0;
`
const StyledHeadline = styled.h1`
    font-size: 20px;
    padding: 20px 15px 0 15px;
    margin: 0;
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
    height: 300px;
    overflow: hidden;
`

const Summary = () => {

    const answers = useSelector((state) => state.quiz.answers)
    // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    const correctAnswers = answers.filter((correct) => correct.isCorrect === true)
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    return (
        <MainWrapper>
            <BackgroundStyled>
                <MyBackground />
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
                
                <StyledHeadline>Your answers:</StyledHeadline>
                <StyledAnswers>
                {answers.map((answer) => (
                        <StyledAnswer key={answer.questionId}>{answer.questionId}. <span className={answer.answer === answer.question.options[answer.question.correctAnswerIndex] ? 'green' : 'red'}>{answer.answer} </span>
                        (correct is {answer.question.options[answer.question.correctAnswerIndex]})
                        </StyledAnswer>
                ))}
                </StyledAnswers>
                <RestartQuiz />
            </FormWrapper>
            
        </MainWrapper>
    )
}

export default Summary