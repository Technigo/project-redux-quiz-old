import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Status } from 'components/Status'

// here our reducer is "quiz" (Reducer: publishes to Store)
const reducer = combineReducers({
  quiz: quiz.reducer
})

// settting up Store
const store = configureStore({ reducer })

export const App = () => {
  const [buttonStatus, setButtonStatus] = useState(false)
  const onNextQuestion = (status) => {
    setButtonStatus(status)
  }

  return (
    <Provider store={store}>
      <h1>Welcome to the Nerd Quiz!</h1>
      <CurrentQuestion buttonStatus={buttonStatus} handleNextQuestion={onNextQuestion} />
      <Status handleNextQuestion={onNextQuestion} />
    </Provider>
  )
}