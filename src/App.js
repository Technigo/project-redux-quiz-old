import React from 'react'
import { Provider } from 'react-redux'

import Start from './pages/Start'
import QuestionPage from './pages/QuestionPage'
import Summary from './pages/Summary'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/summary" component={<Summary />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
