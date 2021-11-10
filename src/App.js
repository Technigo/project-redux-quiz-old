import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { StartPage } from "components/StartPage";
import { Summary } from "components/Summary";

import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact element={<StartPage />} />
          <Route path="/quiz" element={<CurrentQuestion />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
