import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from './CurrentQuestion/CurrentQuestion'
import { SummaryPage } from './SummaryPage/SummaryPage'
import { StartPage } from './StartPage/StartPage'
// import { Timer } from './Timer'

export const Main = () => {
  const [score, setScore] = useState(0)
  const showResults = useSelector((ReduxStore) => ReduxStore.quiz.quizOver)
  return (
    <div>
      {showResults === null && (<StartPage />)}
      {showResults !== null && !showResults && (
        // <><Timer /><CurrentQuestion score={score} setScore={setScore} /></>
        <CurrentQuestion score={score} setScore={setScore} />
      )}
      {showResults !== null && showResults && (<SummaryPage score={score} />)}
    </div>
  )
}