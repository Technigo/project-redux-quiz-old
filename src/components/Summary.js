import React from 'react'
import { useSelector } from 'react-redux';

const Summary = () => {
  const allAnswers = useSelector((state) => state.quiz.answers)
  const allQuestions = useSelector((state) => state.quiz.questions);

  const listOfQuestions = allQuestions.map((question) => {
    return <h2 key={question.id}>{question.questionText}</h2>
  })

  const answerList = allAnswers.map((answer) => {
    return <p>{answer.answerIndex} {answer.answer} {answer.isCorrect ? 'Correct' : 'Wrong'}</p>
  })

  return (
    <div>
      {listOfQuestions[0]}
      {answerList[0]}
      {listOfQuestions[1]}
      {answerList[1]}
      {listOfQuestions[2]}
      {answerList[2]}
      {listOfQuestions[3]}
      {answerList[3]}
    </div>
  )
}

export default Summary;