import React from 'react'
import { Provider } from 'react-redux' //@ida acess the store
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { CurrentQuestion } from 'components/CurrentQuestion'
import { Header } from 'components/Header'

//@ida this makes the store, imported above from toolkit
const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <CurrentQuestion />
    </Provider>
  )
}
