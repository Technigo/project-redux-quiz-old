import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StartPage from 'components/StartPage';
import Header from 'components/Header';
import { CurrentQuestion } from 'components/CurrentQuestion';
import SummaryPage from 'components/SummaryPage';
import Credits from 'components/Credits';
import Footer from 'components/Footer';

const reducer = combineReducers({
	quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<div className='content-wrapper'>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<StartPage />} />
						<Route path='/quiz' element={<CurrentQuestion />} />
						<Route path='/summary' element={<SummaryPage />} />
						<Route path='/header' element={<Header />} />
						<Route path='/credits' element={<Credits />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</Provider>
		</div>
	);
};
