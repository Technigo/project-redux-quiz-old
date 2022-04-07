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
  setIsNextDisabled }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionId = question.id
  const correctAnswerIndex = question.correctAnswerIndex

  const [borderColor, setBorderColor] = useState({ borderColor: "transparent" })

  useEffect(() => {
    setBorderColor({ borderColor: "transparent" })
  }, [questionId])

  const onAnswerSubmit = () => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    setIsOptionDisabled(true)
    setIsNextDisabled(false)
    if (answerIndex === correctAnswerIndex) {
      setBorderColor({ borderColor: "green" })
    } else {
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
