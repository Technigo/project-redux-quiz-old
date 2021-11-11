// importing React components
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import { quiz } from 'reducers/quiz';

// Components
import UserInfo from 'components/UserInfo';
import UserNameInput from 'components/UserNameInput';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from './components/ProgressBar';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="mainContainer">
        <UserInfo />
        <CurrentQuestion />
        <ProgressBar />
      </main>
    </Provider>
  );
};
