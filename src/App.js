import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { Welcome } from 'pages/Welcome';
import { Summary } from 'pages/Summary';
import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<CurrentQuestion />} />
          <Route path="/result" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
