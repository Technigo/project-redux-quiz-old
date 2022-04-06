import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { GlobalStyle } from 'styles'

import CurrentQuestion from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyle />
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
    </>
  )
}
