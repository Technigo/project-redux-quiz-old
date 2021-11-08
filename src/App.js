import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import HomePage from 'components/HomePage'
import Questions from 'pages/Questions'
import { CurrentQuestion } from 'components/CurrentQuestion'
import Summary from 'components/Summary'

const reducer = combineReducers({
  quiz: quiz.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/quiz'>
            <Questions />
          </Route>
          <Route>
            <Summary path='/summary' />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
