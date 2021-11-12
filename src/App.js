import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { CurrentQuestion } from "components/CurrentQuestion";
import { StartPage } from "components/StartPage";
import { Timer } from "components/Timer";
import { timerSlice } from "./reducers/timer";

const reducer = combineReducers({
  quiz: quiz.reducer,
  timer: timerSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
  );
};
