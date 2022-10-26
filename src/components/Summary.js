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
    <div>
      <p>you answered {summaryAnswers[0].isCorrect}</p>
      <p>{summaryAnswers[1].answer}</p>
      {/* <p>{answerIndex.length} </p> */}
    </div>
  )
}

export default Summary;

