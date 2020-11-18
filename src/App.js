import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { Summary } from "components/Summary";
import { CurrentQuestion } from "components/CurrentQuestion";
import { Start } from "components/Start";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [start, setStart] = useState(false)
  return (
    <Provider store={store}>
      {(!start) ? <Start start={setStart} /> : <CurrentQuestion />}
      
    </Provider>
  );
};
