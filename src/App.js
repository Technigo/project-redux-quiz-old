import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from 'components/Footer';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CurrentQuestion />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
      <Footer />
    </Provider>
  );
}

/* This below makes the app look nicer while the questions are being asked
but looks weird when it gets to the summary - ASK TEAM ABOUT THIS */
const StyledApp = styled.section`
  background-color: grey;
  opacity: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;