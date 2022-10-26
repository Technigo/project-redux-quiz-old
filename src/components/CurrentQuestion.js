import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { useState } from 'react'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();
  const [borderColor, setBorderColor] = useState('black');

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex, correctAnswerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex, correctAnswerIndex }
    ));
    if (answerIndex === correctAnswerIndex) {
      setBorderColor('green');
    } else {
      setBorderColor('red');
    }
  }

  const ButtonAnswer = {
    border: `solid ${borderColor} 2px`
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => onAnswerSubmit(question.id, index)}
            key={option}
            type="button"
            style={ButtonAnswer}>{option}
          </button>
        )
      })}
    </div>
  )
}