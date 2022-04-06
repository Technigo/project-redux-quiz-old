import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { Header } from 'components/Header'
import { Summary } from 'components/Summary'
import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <CurrentQuestion />
      </Provider>
    </>
  )
}
