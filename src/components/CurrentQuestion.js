import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
// import { NextQuestionBtn } from './Buttons'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onButtonClick = (id, index) => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <>
    
    </>
  )


  return (
    <div>
     {!store.quizOver ? (
 <h1>Question: {question.questionText}</h1>
 {question.options.map((singleOption, index) =>
 // eslint-disable-next-line implicit-arrow-linebreak
   <button
     type="button"
     onClick={() => onButtonClick(question.id, index)}
     // eslint-disable-next-line react/no-array-index-key
     key={index}>
     {singleOption}
   </button>)}
     )}
     </div>
      <div>
      <button type="button" onClick={onRestartClick}>Restart quiz</button>
      </div>
  </>
  )
}