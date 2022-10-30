import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz'
import { Button } from './Styles/GlobalStyles';

const Options = ({ option, answerIndex }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionId = question.id
  const { correctAnswerIndex } = question

  const [backgroundColor, setbackgroundColor] = useState({ backgroundColor: 'visible' })

  useEffect(() => {
    setbackgroundColor({ backgroundColor: '' })
  }, [questionId])

  const onSubmitAnswer = () => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (answerIndex === correctAnswerIndex) {
      setbackgroundColor({ background: 'green' })
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 1000)
    } else {
      setbackgroundColor({ background: 'red' })
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 1000)
    }
  }
  return (
    <Button
      type="button"
      style={backgroundColor}
      onClick={onSubmitAnswer}>
      {option}
    </Button>
  )
}

export default Options;