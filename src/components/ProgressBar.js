import React from 'react'
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const allQuestions = useSelector((state) => state.quiz.questions)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  return (
    <div>
      <h1>{(currentQuestion + 1)}/ {allQuestions.length}</h1>
    </div>
  )
}

export default ProgressBar;