import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { IntroPage } from 'components/IntroPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
	quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={IntroPage} />
					<Route path="/CurrentQuestion" component={CurrentQuestion} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};
