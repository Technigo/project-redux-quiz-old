import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import useWindowSize from "react-use/lib/useWindowSize"
import Confetti from 'react-confetti';

import { quiz } from 'reducers/quiz';
import { Button } from './Button';

const SummaryPage = () => {
	const allQuestions = useSelector((state) => state.quiz.questions.length);
	const allAnswers = useSelector((state) => state.quiz.answers);
	const correctAnswers = allAnswers.filter((correctAnswer) => correctAnswer.isCorrect);
	const time = useSelector((state) => state.quiz.time);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { width, height } = useWindowSize()

	const onRestartButtonClick = () => {
		dispatch(quiz.actions.restart());
		navigate('/');
	};

	return (
		<div className='summary-page'>
			<Confetti width={width} height={height} />
			<h1>Finished !</h1>
			<p>
				You completed the quiz in {time} seconds and got {correctAnswers.length} correct out of {allQuestions} questions!
			</p>
			{correctAnswers.length < 3 ? "No Manolos for you! 👠" : "Cosmopolitans all around! 🍸"}
			<Button
			marginTop="3rem"
			width="250px"
			widthDesktop="450px"
			fontSizeDesktop="1rem"
			onClick={onRestartButtonClick}>
				Restart
			</Button>
		</div>
	);
};

export default SummaryPage;
