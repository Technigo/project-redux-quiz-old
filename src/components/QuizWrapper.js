import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { QuizCards } from 'components/QuizCards'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const QuizWrapper = () => {
  return (
    // wrapping everything around provider and passing the prop store
    <Provider store={store}>
      {/* // routing (if you want it) */}
      <QuizCards />
      {/* // routing (if you want it) */}
    </Provider>
  )
}