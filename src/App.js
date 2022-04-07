import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import StartView from "components/StartView";
import CurrentQuestion from "components/CurrentQuestion";
import { GlobalStyle } from "styles";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        {!quizStart && <StartView quizStart={quizStart} setQuizStart={setQuizStart} />}
        {quizStart && <CurrentQuestion />}
      </Provider>
    </>
  );
};
