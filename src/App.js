import React from 'react'
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
  return (
    <Provider store={store}>
      <h1>Welcome to the Nerd Quiz!</h1>
      <CurrentQuestion />
      <Status />
    </Provider>
  )
}