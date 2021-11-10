/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import Header from 'components/smallComponents/Header'
import { ContentSwitcher } from 'components/switcher/ContentSwitcher'


const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
     
      <ContentSwitcher />
    </Provider>
  );
};
