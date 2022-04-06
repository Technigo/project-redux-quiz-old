import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const SummaryPage = () => {
	const allQuestions = useSelector((state) => state.quiz.questions.length);
	const allAnswers = useSelector((state) => state.quiz.answers);
	const correctAnswers = allAnswers.filter(
		(correctAnswer) => correctAnswer.isCorrect
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const confettiRef = useRef(null);

	useEffect(() => {
		setHeight(confettiRef.current.clientHeight);
		setWidth(confettiRef.current.clientWidth);
	});

	const onRestartButtonClick = () => {
		dispatch(quiz.actions.restart());
		navigate('/');
	};

	return (
		<div className='confetti-wrapper' ref={confettiRef}>
			<Confetti width={width} height={height} />
			<div className='summary-page'>
				<h1>Finished !</h1>
				<p>
					You got {correctAnswers.length} correct out of {allQuestions}{' '}
					questions
				</p>
				{correctAnswers <= 3 && <p>No Manolos for you!</p>}
				{correctAnswers >= 3 && <p>Cosmopolitans all around!</p>}
				<button onClick={onRestartButtonClick}>Restart</button>
			</div>
		</div>
	);
};

export default SummaryPage;
