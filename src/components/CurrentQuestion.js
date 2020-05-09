import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Timer } from './Timer'
import { Button, OptionButton } from '../lib/Buttons'
import { QuestionContainer, QuestionPicture, OptionsContainer, ButtonContainer } from '../lib/Containers'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const questions = useSelector((state) => state.quiz.questions.length)
  const index = (useSelector((state) => state.quiz.questions)).indexOf(question)
  const dispatch = useDispatch()
  const { options } = question

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1>Question {(index + 1)} of {questions}: {question.questionText}</h1>
      <QuestionContainer>
        <QuestionPicture src={question.image} alt="" />
        <OptionsContainer>
          {options.map((option) => {
            return (
              <OptionButton onClick={() => dispatch(quiz.actions.submitAnswer())}>
                <li key={index}>{option}</li>
              </OptionButton>
            )
          })}
        </OptionsContainer>
      </QuestionContainer>
      <ButtonContainer>
        <Button onClick={() => dispatch(quiz.actions.goToPreviousQuestion())}>Back</Button>
        <Button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next</Button>
        <Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button>
      </ButtonContainer>
      <Timer duration={10} />
    </>
  )
}
