import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'


import { CurrentQuestion } from 'components/CurrentQuestion'
import { WelcomePage } from 'components/WelcomePage'

const reducer = combineReducers({
	quiz: quiz.reducer,
})

const store = configureStore({ reducer })

let start = false;
export const App = () => {


	return (
		<Provider store={store}>
			<WelcomePage />
		</Provider>
	)
}
