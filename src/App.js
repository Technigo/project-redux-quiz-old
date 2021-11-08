import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";

import { ThirdQuestion } from "components/ThirdQuestion";

const reducer = combineReducers({
	quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<ThirdQuestion />
		</Provider>
	);
};
