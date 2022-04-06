import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { Main, Container, WhiteBorder } from "components_styled/StyledElements";
import { CurrentQuestion } from "components/CurrentQuestion";
import Summary from "./Summary";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const Home = () => {
  const [quizDone, setQuizDone] = useState(false);

  return (
    <Provider store={store}>
      <Main>
        <WhiteBorder>
          <Container>
            {quizDone ? (
              <Summary setQuizDone={setQuizDone} />
            ) : (
              <CurrentQuestion setQuizDone={setQuizDone} />
            )}
          </Container>
        </WhiteBorder>
      </Main>
    </Provider>
  );
};
