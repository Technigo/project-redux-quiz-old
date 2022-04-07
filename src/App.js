import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { StartPage } from 'components/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CurrentQuestion } from 'components/CurrentQuestion'
import Summary  from 'components/Summary'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage></StartPage>}>
          </Route>
          <Route path="/quiz" element={<CurrentQuestion></CurrentQuestion>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
