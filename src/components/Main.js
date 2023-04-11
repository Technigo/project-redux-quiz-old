import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from './CurrentQuestion'
import { SummaryPage } from './SummaryPage'
import { StartPage } from './StartPage'

export const Main = () => {
  const showResults = useSelector((ReduxStore) => ReduxStore.quiz.quizOver)
  return (
    <div>
      {showResults === null && (<StartPage />)}
      {showResults !== null && !showResults && (<CurrentQuestion />)}
      {showResults !== null && showResults && (<SummaryPage />)}
    </div>
  )
}