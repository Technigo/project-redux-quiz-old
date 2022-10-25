import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { ReturnButton } from 'components/ReturnButton'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore)
  console.log(question)

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('Correct answer!')
    } else {
      window.alert('Sorry, wrong answer')
    }
  }

  return (
    <div>
      <p>{question.id} / 5</p>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => {
          return (
            <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
          )
        })}
      </div>
      <NextButton /><ReturnButton />
    </div>
  )
}