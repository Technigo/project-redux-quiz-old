import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import Header from 'components/Header';
import Footer from 'components/Footer'

import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <CurrentQuestion />
      <Footer />
    </Provider>
  );
}
