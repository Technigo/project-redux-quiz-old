import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
// import { useSelector } from 'react-redux'

import HomePage from 'pages/HomePage'
import Questions from 'pages/Questions'
import Summary from 'pages/Summary'
import About from 'pages/About'
import Header from './components/Header'

const reducer = combineReducers({
  quiz: quiz.reducer,
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/quiz'>
            <Questions />
          </Route>
          <Route path='/summary'>
            <Summary />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* </div> */}
    </Provider>
  )
}
