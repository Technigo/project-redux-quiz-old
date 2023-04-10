import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import FirstPage from 'components/Firstpage';
import { CurrentQuestion } from 'components/CurrentQuestion';
import Background from 'components/Background';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/quiz" element={<CurrentQuestion />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
