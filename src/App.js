import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { HomePage } from 'components/HomePage'
import { AppContainer } from './lib/Containers'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <HomePage />
        {/* <CurrentQuestion /> */}
      </AppContainer>
    </Provider>
  )
}
