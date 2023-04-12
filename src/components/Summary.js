import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  return (
    <>
      <p>I am the Summary</p>
      <p> {question.questionText}</p>
    </>
  )
}

export default Summary;