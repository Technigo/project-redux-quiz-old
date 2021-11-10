import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import UserInfo from 'components/UserInfo';
import UserNameInput from 'components/UserNameInput';

import { CurrentQuestion } from 'components/CurrentQuestion';

import { Answers } from 'components/Answers';

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <UserNameInput />
      <UserInfo />
      <CurrentQuestion />
      <Answers />
    </Provider>
  );
};
