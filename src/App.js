import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Status } from 'components/Status'
import { Title } from 'components/Styles'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Title>C:\&gt; Nerd Quiz!</Title>
      <CurrentQuestion />
      <Status />
    </Provider>
  )
}