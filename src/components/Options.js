import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz'

const Options = ({ option, answerIndex }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionID = question.id
  const { rightAnswerIndex } = question

  const [borderColor, setBorderColor] = useState({ borderColor: 'transparent' })

  useEffect(() => {
    setBorderColor({ borderColor: 'transparent' })
  }, [questionID])

  const onSubmitAnswer = () => {
    dispatch(quiz.actions.submitAnswer({ questionID, answerIndex }))
    if (answerIndex === rightAnswerIndex) {
      setBorderColor({ borderColor: 'green' })
    } else {
      setBorderColor({ borderColor: 'red' })
    }
  }
  return (
    <div>
      <button
        type="button"
        style={borderColor}
        onClick={onSubmitAnswer}>
        {option}
      </button>
    </div>
  )
}

export default Options