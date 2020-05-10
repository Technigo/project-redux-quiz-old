import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { HomePage } from 'pages/HomePage'
import { Quiz } from 'pages/Quiz'
import { Summary } from 'pages/Summary'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import GlobalFonts from './fonts/fonts'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

const AppContainer = styled(Div100vh)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1108px;
  height: 500px;
  background: white;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 90vw;
    height: 80vrh;
  }

  @media (max-width: 500px) {
    height: 80vrh;
    padding: 0 20px;
    justify-content: space-evenly;
  }
`

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalFonts />
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
