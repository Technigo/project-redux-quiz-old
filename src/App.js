import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { HomePage } from 'pages/HomePage'
import { Quiz } from 'pages/Quiz'
import { Summary } from 'pages/Summary'
import styled from 'styled-components'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1108px;
  height: 500px;
  background: white;
  border: solid 2px black;

  @media (max-width: 500px) {
    width: 100vw;
  }
`

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AppContainer>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/quiz" exact>
              <Quiz />
            </Route>
            <Route path="/summary" exact>
              <Summary />
            </Route>
          </AppContainer>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
