import React from 'react'
import { useSelector } from 'react-redux';

const Summary = () => {
  const allAnswers = useSelector((state) => state.quiz.answers)
  const allQuestions = useSelector((state) => state.quiz.questions);

  const listOfQuestions = allQuestions.map((question) => {
    return <h2 key={question.id}>{question.questionText}</h2>
  })

  console.log('answerList', allAnswers)
  const answerList = allAnswers.map((answer) => {
    return <p key={answer}>{answer.answerIndex} {answer.answer} {answer.isCorrect ? 'Correct' : 'Wrong'}</p>
  })
  console.log(answerList)
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