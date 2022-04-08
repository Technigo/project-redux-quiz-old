import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentQuestion } from './CurrentQuestion';
import { Summary } from './Summary';


//fetching the state of quizover and decide wether to render summary or currentquestion 
export const OverView = () => {
	const quizEnd = useSelector((state) => state.quiz.quizOver);

	return (

	<>
		{!quizEnd ? <CurrentQuestion /> : <Summary />}
	</>
	)
};

