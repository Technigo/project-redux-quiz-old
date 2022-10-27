import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BgWrapper, GlobalStyle } from 'GlobalStyles';

import { StartPage } from './pages/StartPage';
import { QuestionPage } from './pages/QuestionPage';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BgWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<QuestionPage />} />
          </Routes>
        </BrowserRouter>
      </BgWrapper>
    </Provider>
  );
}