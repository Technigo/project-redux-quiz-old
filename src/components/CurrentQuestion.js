import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Summary from 'components/Summary'

import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  // const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex)
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    )

    const dispatch = useDispatch()
    const quizOver = useSelector((state) => state.quiz.quizOver);
  

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    {dispatch(quiz.actions.goToNextQuestion())}
  
  
   
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => (
        <button 
        key={item} 
        onClick={() => onAnswerSubmit(question.id, index)}>
        {item}
        </button>
      ))}
   {/* {currentQuestion === 4 ? <Summary /> : goToNextQuestion ()
   } */}
    </div>
  )
}
