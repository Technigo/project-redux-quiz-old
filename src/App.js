/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { StartPage } from 'components/StartPage'
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Summary } from 'components/Summary'
import { GlobalStyles } from 'Globalstyles';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<CurrentQuestion />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}