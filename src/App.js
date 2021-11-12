import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { StartPage } from 'components/StartPage'
import { Summary } from 'components/Summary'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { ProgressBar } from 'components/ProgressBar'
import { NotFound } from 'components/NotFound'

const reducer = combineReducers({
  quiz: quiz.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ProgressBar />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/quiz' element={<CurrentQuestion />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
