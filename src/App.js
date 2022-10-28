/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { StartPage } from 'components/StartPage/StartPage'
import { CurrentQuestion } from 'components/CurrentQuestion/CurrentQuestion';
import { GlobalStyles } from 'Globalstyles';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [score, setScore] = useState(0);
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<CurrentQuestion score={score} setScore={setScore} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}