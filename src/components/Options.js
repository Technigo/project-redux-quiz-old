import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz'
import styled from 'styled-components/macro';

const Button = styled.button`
width: 12rem; 
border-width: 10px;
margin-bottom: 5px; 
background-color: rgba(230,160,61,0.5);
border-radius: 15px; 
`

const Options = ({ option, answerIndex }) => {
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
    if (answerIndex === correctAnswerIndex) {
      setBorderColor({ borderColor: 'green' })
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 1000)
    } else {
      setBorderColor({ borderColor: 'red' })
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 1000)
    }
  }
  return (
    <OptionContainer>
      <Button
        type="button"
        style={borderColor}
        onClick={onSubmitAnswer}>
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

