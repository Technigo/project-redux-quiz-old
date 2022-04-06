import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'

const OptionButton = styled.button`
  width: 10rem;
  background-color: #393d3f;
  color: white;
  border-width: 6px;
`

export const Option = ({
  option,
  answerIndex,
  isOptionDisabled,
  setIsOptionDisabled,
  setIsNextDisabled,
  isCorrectAnswer,
  setIsCorrectAnswer }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionId = question.id
  const correctAnswer = question.correctAnswerIndex

  const [borderColor, setBorderColor] = useState({ borderColor: "transparent" })

  useEffect(() => {
    setBorderColor({ borderColor: "transparent" })
  }, [questionId])

  useEffect(() => {
    if (isCorrectAnswer !== null) {
      setIsOptionDisabled(true)
      setIsNextDisabled(false)
    }
  }, [isCorrectAnswer, setIsOptionDisabled, setIsNextDisabled])

  const onAnswerSubmit = () => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (answerIndex === correctAnswer) {
      setIsCorrectAnswer(true)
      setBorderColor({ borderColor: "green" })
    } else {
      setIsCorrectAnswer(false)
      setBorderColor({ borderColor: "red" })
    }
  }

  return (
    <OptionButton
      type="button"
      style={borderColor}
      onClick={onAnswerSubmit}
      disabled={isOptionDisabled}>
      {option}
    </OptionButton>
  )
}
