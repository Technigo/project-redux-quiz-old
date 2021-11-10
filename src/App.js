import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import StartPage from 'components/StartPage'
import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/game">
          <CurrentQuestion />
        </Route>
      </Switch>
    </Provider>
  )
}

// provider comp wrapper all, store exist there
