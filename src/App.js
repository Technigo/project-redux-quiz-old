import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { WelcomePage } from 'pages/WelcomePage';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { AnswerButton } from 'components/AnswerButton';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<CurrentQuestion />} />
          <Route path="/answer" element={<AnswerButton />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
