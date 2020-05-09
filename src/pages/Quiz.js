import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { OptionButton, Button } from '../lib/Buttons'
import { ButtonContainer, QuestionContainer, QuestionPicture, OptionsContainer } from '../lib/Containers'
import { Timer } from '../components/Timer'

export const Quiz = () => {
  const disabled = useSelector((state) => state.quiz.disabled)
  const seconds = useSelector((state) => state.quiz.seconds)
  const optionDisabled = useSelector((state) => state.quiz.optionDisabled)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
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
          {options.map((option, optionindex) => {
            return (
              <OptionButton
                disabled={optionDisabled || seconds === 0}
                onClick={() => {
                  dispatch(quiz.actions.submitAnswer({ questionId: index, answerIndex: optionindex }))
                }}>
                <li key={optionindex}>{option}</li>
              </OptionButton>
            )
          })}
        </OptionsContainer>
      </QuestionContainer>
      <ButtonContainer>
        <Button disabled={(index === 0)} onClick={() => dispatch(quiz.actions.goToPreviousQuestion())}>Back</Button>
        <Button disabled={disabled} onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next</Button>
        <NavLink to="/"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></NavLink>
      </ButtonContainer>
      <Timer duration={10} />
    </>
  )
}
