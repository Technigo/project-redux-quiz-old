import React, { useState } from 'react'

import { QuizWrapper } from "components/QuizWrapper"

export const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  if (quizStarted) {
    return (
      <QuizWrapper />
    )
  }

  return (
    <>
      <div>WelcomePage</div>
      <button onClick={handleStartQuiz}>Start Quiz!</button>
    </>
  )
}
