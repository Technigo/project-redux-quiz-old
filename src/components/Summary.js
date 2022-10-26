import React from 'react'
import { useSelector } from 'react-redux'

// import { CurrentQuestion } from 'components/CurrentQuestion';
// import { quiz } from 'reducers/quiz'

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers)
  // const summaryQuestions = useSelector((state) => state.quiz.question)
  console.log('summaryAnswers', summaryAnswers)
  // console.log('summaryQuestions', summaryQuestions)

  return (

    {summaryAnswers.map((answer) => 
  )
}

export default Summary;