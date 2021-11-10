import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from 'components/StartPage';
import { Button } from 'components/Buttons';
import { SubmitButton } from 'components/Buttons';

import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
	quiz: quiz.reducer,
});

const store = configureStore({ reducer });



//Had to use these links to make startpage wortk
//https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes

//https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StartPage></StartPage>}>
					</Route>
					<Route path="/quiz" element={<CurrentQuestion></CurrentQuestion>}>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};
