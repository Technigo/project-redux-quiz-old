import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { Main } from "components_styled/StyledElements";
import { CurrentQuestion } from "components/CurrentQuestion";
import Summary from "./Summary";
import ProgressBar from "./ProgressBar";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const Home = () => {
  const [quizDone, setQuizDone] = useState(false);

  return (
    <Provider store={store}>
      <Main>
        <ProgressBar />
        {quizDone ? <Summary /> : <CurrentQuestion setQuizDone={setQuizDone} />}
      </Main>
      {/* <Main>
        <CurrentQuestion setQuizOver={setQuizOver} />
      </Main> */}
    </Provider>
  );
};
