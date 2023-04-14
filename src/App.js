import React, { useState } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'components/styled_components/globalStyles';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { LandingPage } from 'components/LandingPage';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        {/* When startQuiz is false, it renders the LandingPage component.
      When startQuiz becomes true (after the user clicks the "Start Quiz" button),
  the CurrentQuestion component is rendered instead. */}
        {!startQuiz ? (
          <LandingPage onStart={handleStartQuiz} />
        ) : (
          <CurrentQuestion />
        )}
      </Provider>
    </>
  );
};
