import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CurrentQuestion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}