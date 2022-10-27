import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz'
import styled from 'styled-components/macro';

const Button = styled.button`
width: 10rem; 
border-width: 10px;
`

const Options = ({ option, answerIndex, optionDisabled, setOptionDisabled, setNextDisabled }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionId = question.id
  const { correctAnswerIndex } = question

  const [borderColor, setBorderColor] = useState({ borderColor: 'transparent' })

  useEffect(() => {
    setBorderColor({ borderColor: 'transparent' })
  }, [questionId])

  const onSubmitAnswer = () => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    setOptionDisabled(false)
    setNextDisabled(true)
    if (answerIndex === correctAnswerIndex) {
      setBorderColor({ borderColor: 'green' })
    } else {
      setBorderColor({ borderColor: 'red' })
    }
  }
  return (
    <OptionContainer>
      <Button
        type="button"
        style={borderColor}
        onClick={onSubmitAnswer}
        disabled={optionDisabled}>
        {option}
      </Button>
    </OptionContainer>
  )
}

export default Options;

export const OptionContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

