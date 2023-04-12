import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionPage } from "components/QuestionPage";
import { WelcomePage } from "components/WelcomePage";

import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
