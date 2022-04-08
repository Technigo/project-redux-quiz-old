import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { quiz } from "reducers/quiz";
import { QuizCards } from "components/QuizCards";
import { WelcomePage } from "components/WelcomePage";

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
          <Route path="/quiz" element={<QuizCards />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
