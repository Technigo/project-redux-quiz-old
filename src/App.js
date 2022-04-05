import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StartPage } from 'components/StartPage'
import { Main } from './components/Main'


// import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
