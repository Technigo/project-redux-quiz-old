import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import styled from 'styled-components'
import NextQuestionButton from './NextQuestionButton'
import ProgressBar from './ProgressBar'

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
const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledButtons = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 5px;
  width: 75%;
  margin: 4px 0;
  background-color: transparent;
  border: black 2px solid;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: #FFC543;
  }
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
  // console.log(answers)

  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  // console.log(currentQuestionIndex)

  //2nd nesting is a limit
  const correctOrNot = answers[currentQuestionIndex]
    ? answers[currentQuestionIndex].isCorrect
      ? 'Your answer is correct'
      : 'Your answer is incorrect'
    : ''

  // const correctAnswer = answers.find((a) => a.isCorrect === true)
  // console.log(correctAnswer)
  // const answer = useSelector((state) => state.quiz.answers.find((a) => (a.questionId === question.id // question could come from the previous selector in the last example
  // )))
  // console.log(answer)


  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  // it could be event
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  // ((event) => onNewThoughtChange(event)
  return (
    <MainWrapper>
      <FormWrapper>
        <QuestionHeader>
          <ProgressHeader>Question {currentQuestionIndex + 1}/{questions.length} </ProgressHeader>
          <ProgressBar />
        </QuestionHeader>
        <ContentContainerStyled>
          <QuestionStyled>{question.questionText}</QuestionStyled>
          <ButtonContainer>
            {question.options.map((option, index) => (
              <StyledButtons type="button"
                key={option}
                onClick={() => onAnswerSubmit(question.id, index)}
                disabled={answers[currentQuestionIndex]}>
                {option}
              </StyledButtons>
            ))}
          </ButtonContainer>
          <CheckAnswer>
            {correctOrNot.toString()}
          </CheckAnswer>
          <NextQuestionButton answers={answers} currentQuestionIndex={currentQuestionIndex} onNextQuestion={onNextQuestion} />
        </ContentContainerStyled>
      </FormWrapper>
    </MainWrapper>
  )
}
