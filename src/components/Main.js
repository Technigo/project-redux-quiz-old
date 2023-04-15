import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion'
import { SummaryPage } from './SummaryPage/SummaryPage'
import { StartPage } from './StartPage/StartPage'

export const Main = () => {
  const [score, setScore] = useState(0)
  const showResults = useSelector((ReduxStore) => ReduxStore.quiz.quizOver)
  return (
    <div>
      {showResults === null && (<StartPage />)}
      {showResults !== null && !showResults && (
        <CurrentQuestion score={score} setScore={setScore} />
      )}
      {showResults !== null && showResults && (<SummaryPage score={score} setScore={setScore} />)}
    </div>
  )
}