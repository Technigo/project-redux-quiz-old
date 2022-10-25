import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch()
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const rightAnswer = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const wrongAnswer = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }))
    if (question.correctAnswerIndex === answerIndex) {
      rightAnswer()
    } else {
      wrongAnswer()
    }
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option) => {
        return <button key={option} onClick={() => onAnswerSubmit()} type="button">{option}</button>
      })}
    </div>
  )
}

// const StyledButton = styled.button`
// background-color: ${userAnswer ? 'red' : 'green'}
// `