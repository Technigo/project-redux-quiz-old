import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Option = ({ option, answerIndex, isCorrectAnswer, setIsCorrectAnswer }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questionId = question.id
  const correctAnswer = question.correctAnswerIndex

  // const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

  const onAnswerSubmit = () => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (answerIndex === correctAnswer) {
      setIsCorrectAnswer(true)
    } else {
      setIsCorrectAnswer(false)
    }
    console.log(isCorrectAnswer)
  }

  return (
    <div>
      <button onClick={onAnswerSubmit} key={answerIndex}>{option}</button>

    </div>
  )
}

