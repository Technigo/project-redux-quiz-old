import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

const Button = styled.button`
widht: 10rem; 
border-widht: 10px;
`

const Options = ({
  option, answerIndex, optionDisabled, setOptionDisabled/* , setNextDisabled */ }) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const questionId = question.id
  const { correctAnswerIndex } = question

  const [borderColor, setBorderColor] = useState({ borderColor: 'transparent' })

  useEffect(() => {
    setBorderColor({ borderColor: 'transparent' })
  }, [questionId])

  const onSubmitAnswer = () => {
    /* dispatch(quiz.actions.submitAnswer({ questionId, answerIndex })) */
    setOptionDisabled(true)
    /* setNextDisabled(false) */
    if (answerIndex === correctAnswerIndex) {
      setBorderColor({ borderColor: 'green' })
      dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
      /*  dispatch(quiz.actions.submitAnswer({ questionId: questionId, 
      answerIndex: answerIndex })); */
    } else {
      setBorderColor({ borderColor: 'red' })
    }
  }
  return (
    <div>
      <Button
        type="button"
        style={borderColor}
        /* onClick={onSubmitAnswer} */
        disabled={optionDisabled}
        onClick={() => onSubmitAnswer(questionId, answerIndex)}>
        {option}
      </Button>
    </div>
  )
}

export default Options

/* 
const dispatch = useDispatch()
const onAnswerSubmit = (id, index) => {
  dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  setDisabled(true)
};
 */
/* return (
  <button className={!answer ? "defaultbtn" : index ===
  question.correctAnswerIndex ? "correct" : "wrong"}
    type="submit"
    disabled={disabled}
    onClick={() => onAnswerSubmit(questionId, index)}
    key={item}>{item}</button>
)
} */