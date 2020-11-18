/* eslint-disable max-len */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { QuestionContainer, QuestionText, ButtonStyled } from 'components/Styles'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  // const checkAnswer = useSelector((state) => {
  //   const answer = state.quiz.answers.find((questionId) => question.id === questionId)
  //   if (answer) {
  //     return answer
  //   } else {
  //     return null
  //   }
  // })

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const buttonOnClick = (option) => {
    return dispatch(quiz.actions.submitAnswer(
      { questionId: question.id, answerIndex: question.options.indexOf(option) }
    ))
  }
  return (
    <QuestionContainer>
      <QuestionText>{question.questionText}</QuestionText>
      <div>
        {question.options.map((option) => <ButtonStyled onClick={() => buttonOnClick(option)} type="button">{option}</ButtonStyled>)}
      </div>
    </QuestionContainer>
  )
}

/* <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} type="button">
        Next Question
      </button> */