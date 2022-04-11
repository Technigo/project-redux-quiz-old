import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { QuestionButton } from "./Button"
import { Button } from './Button';
import { quiz } from 'reducers/quiz';
import Timer from './Timer';

// */ eslint-disable */

export const CurrentQuestion = () => {
	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
	const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);
	const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
	const amountOfAnswers = useSelector((state) => state.quiz.answers.length);
	const isQuizOver = useSelector((state) => amountOfQuestions === question.id);
	const dispatch = useDispatch();

	const clickNext = () => {
		dispatch(quiz.actions.goToNextQuestion());
	};

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};

	if (!question) {
		return (
			<h1>And just like that... I could not find the current question!</h1>
		);
	}

	let button;

	if (!isQuizOver) {
		button = (
			<Button
			onClick={() => clickNext()}
			disabled={!answer}
			width="250px"
			widthDesktop="450px"
			fontSizeDesktop="1rem">
				Next
			</Button>
		);
	} else {
		button = (
			<Link to='/summary'>
				<Button
				onClick={() => clickNext()}
				disabled={!answer}
				width="250px"
				widthDesktop="450px"
				fontSizeDesktop="1rem">
					Finish
        		</Button>
			</Link>
		);
	}

	const showEmoji = (index) => {
		if (answer) {
			if (index === question.correctAnswerIndex) {
				return '✔️';
			} else {
				return '✖️';
			}
		}
		return null;
	};

	return (
		<div className='question-wrapper'>
			<Timer />
			<h1 className='main-title'>
				Question {question.id}: {question.questionText}
			</h1>

			<div className='questions'>
				{question.options.map((item, index) => (
					<QuestionButton
					disabled={answer}
					key={item}
					width="250px"
					widthDesktop="450px"
					fontSizeDesktop="1.2rem"
					onClick={() => onAnswerSubmit(question.id, index)}>
						{item}
						<span>{showEmoji(index)}</span>
					</QuestionButton>
				))}
			</div>

			{/*TEXT SHOWING IF THE ANSWER WAS RIGHT OR WRONG*/}
			<div className='answer-text'>
				<p>{answer?.isCorrect && 'Abso-f**k-ing-lutely'}</p>
				<p>{answer?.isCorrect === false && 'Nope!'}</p>
			</div>

			{/*RENDERING EITHER THE GO TO NEXT QUESTION BUTTON OR FINISH BUTTON*/}
			{button}

			{/*PROGRESS BAR*/}
			<div className='progress'>
				<label htmlFor='Progressbar'>
					{question.id} / {amountOfQuestions}
				</label>
				<progress
				id='Progressbar'
				value={amountOfAnswers}
				min='0'
				max='5'></progress>
			</div>
		</div>
	);
};


///// Commented out code, different tested approaches for the timer,
///// left here for possible later use (will clean up at some point):

	// const [second, setSecond] =useState(0)
	// const [timer] = Timer(10)

	// useEffect(() => {
	// 	if (timer <= 0) {
	// 		dispatch(quiz.actions.goToNextQuestion())
	// 	} 
	// }, [timer, dispatch])

	// const countDown = setInterval(() => {
	// 	if (second === 0) {
	// 		setSecond((second) => second + 1);
	// 	}
	// }, 1000)

	// const stopCountDown = () => {
	// 	clearInterval(countDown)
	// }

	// const clickFinish = () => {
	// 	stopCountDown()
	// 	dispatch(quiz.actions.addTime({ amountOfSeconds: second }))
	// 	dispatch(quiz.actions.goToNextQuestion());
	// }

