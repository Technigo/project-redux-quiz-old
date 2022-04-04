import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { Main } from "components_styled/StyledElements";
import Summary from "./Summary";

import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const Home = () => {
  const [quizDone, setQuizDone] = useState(false);

  console.log(quizDone);
  return (
    <Provider store={store}>
      <Main>
        {quizDone ? <Summary /> : <CurrentQuestion setQuizDone={setQuizDone} />}
      </Main>
      {/* <Main>
        <CurrentQuestion setQuizOver={setQuizOver} />
      </Main> */}
    </Provider>
  );
};
