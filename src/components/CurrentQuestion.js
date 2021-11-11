import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NextQuestionButton from './NextQuestionButton'
import ProgressBar from './ProgressBar'
import Options from './Options'

const MainWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FormWrapper = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: #FEE8DA;
  border: 2px solid black;
  box-shadow: 8px 8px;
  @media (min-width: 768px) {
    max-width: 600px;
    height: 450px;
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
const QuestionStyled = styled.h1`
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`
const CheckAnswer = styled.h1`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentContainerStyled = styled.div`
  @media (min-width: 768px){
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height: 400px;
  }
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answers = useSelector((state) => state.quiz.answers)
  const questions = useSelector((state) => state.quiz.questions)
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

  const correctOrNot = answers[currentQuestionIndex]
    ? answers[currentQuestionIndex].isCorrect
      ? 'Your answer is correct'
      : 'Your answer is incorrect'
    : ''

  // const correctAnswer = answers.find((a) => a.isCorrect === true)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <MainWrapper>
      <FormWrapper>
        <QuestionHeader>
          <ProgressHeader>Question {currentQuestionIndex + 1}/{questions.length} </ProgressHeader>
          <ProgressBar />
        </QuestionHeader>
        <ContentContainerStyled>
          <QuestionStyled>{question.questionText}</QuestionStyled>
          <Options />
          <CheckAnswer>
            {correctOrNot.toString()}
          </CheckAnswer>
          <NextQuestionButton answers={answers} currentQuestionIndex={currentQuestionIndex} />
        </ContentContainerStyled>
      </FormWrapper>
    </MainWrapper >
  )
}
