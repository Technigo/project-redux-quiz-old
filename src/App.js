import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { Header } from 'components/Header'
import { CurrentQuestion } from 'components/CurrentQuestion'
import styled from 'styled-components'
import assets from './assets/background.jpg'

const StyledApp = styled.section`
  section {
    background-image: url(${assets});
    height: 100vh;
    background-size: cover;
  }
`

const reducer = combineReducers({
  quiz: quiz.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <StyledApp>
        <section>
          <Header />
          <Provider store={store}>
            <CurrentQuestion />
          </Provider>
        </section>
      </StyledApp>
    </>
  )
}
