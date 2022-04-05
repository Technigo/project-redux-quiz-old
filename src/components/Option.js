import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'

// ----- STYLED COMPONENTS -----
const OptionButton = styled.button`
  width: 150px;
`
// ----- STYLED COMPONENTS -----


export const Option = ({
  option,
  answerIndex,
  // isCorrectAnswer,
  setIsCorrectAnswer }) => {

  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questionId = question.id
  const correctAnswer = question.correctAnswerIndex

  const [borderColor, setBorderColor] = useState({ borderColor: "transparent" })

  // necessary for the other questions to keep transparent border for their options buttons
  useEffect(() => {
    setBorderColor({ borderColor: "transparent" })
  }, [questionId])

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
        key={answerIndex} 
        type="button" 
        style={borderColor} 
        onClick={onAnswerSubmit}>{option}
      </OptionButton>
  )
}
