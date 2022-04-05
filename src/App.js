import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 

import StartPage from 'components/StartPage'
import SummaryPage from 'components/SummaryPage'
import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/quiz' element={<CurrentQuestion />} /> 
        <Route path='/summary' element={<SummaryPage />} />           
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}
