<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { StartPage } from "components/StartPage";
import { Summary } from "components/Summary";
import { CurrentQuestion } from "components/CurrentQuestion";
import { ProgressBar } from "components/ProgressBar";
import { NotFound } from "components/NotFound";

const reducer = combineReducers({
	quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<ProgressBar />
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/quiz" element={<CurrentQuestion />} />
					<Route path="/summary" element={<Summary />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
};
=======
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
  )
}
>>>>>>> e76723f93eac0f39b09bf10b614c0787990e1718
