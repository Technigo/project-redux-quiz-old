import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Button, OptionButton } from '../lib/Buttons'
import { CurrentQuestionContainer, ButtonContainer, OptionsContainer, QuestionContainer, QuestionPicture } from '../lib/Containers'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()
  const { options } = question
  console.log(options)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1>{question.questionText}</h1>
      <QuestionContainer>
        <QuestionPicture src={question.image} alt="" />
        <OptionsContainer>
          {options.map((option, index) => {
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
    </>
  )
}
