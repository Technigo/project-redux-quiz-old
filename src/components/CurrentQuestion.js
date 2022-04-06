import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const answer = useSelector(
		(state) => state.quiz.answers[state.quiz.currentQuestionIndex]
	);
	const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
	const amountOfAnswers = useSelector((state) => state.quiz.answers.length);
	const isQuizOver = useSelector((state) => amountOfQuestions === question.id);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onRestartButtonClick = () => {
		dispatch(quiz.actions.restart());
		navigate('/');
	};

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};

	const clickNext = () => {
		dispatch(quiz.actions.goToNextQuestion());
	};

	if (!question) {
		return (
			<h1>And just like that... I could not find the current question!</h1>
		);
	}

	let button;

	if (!isQuizOver) {
		button = (
			<button onClick={() => clickNext()} disabled={!answer}>
				Next
			</button>
		);
	} else {
		button = (
			<Link to='/summary'>
				<button>Finish</button>
			</Link>
		);
	}

	/*THERE ARE SOME PROBLEMS WITH THE BELOW, IT SHOWS TICK OR X FOR ALL BUTTONS */
	return (
		<div>
			<h1>
				Question {question.id}: {question.questionText}
			</h1>
			{question.options.map((item, index) => (
				<button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
					{item}{' '}
					<span>
						{' '}
						{answer?.isCorrect
							? '✔️'
							: answer?.isCorrect === false
							? '✖️'
							: ''}{' '}
					</span>
				</button>
			))}

			{/*TEXT SHOWING IF THE ANSWER WAS RIGHT OR WRONG*/}
			<p>{answer?.isCorrect && 'Correct answer'}</p>
			<p>{answer?.isCorrect === false && 'Wrong answer'}</p>

			{/*BUTTON TO GO TO NEXT QUESTION*/}
			{button}

			{/*RESTART BUTTON*/}
			<button onClick={onRestartButtonClick}>Restart</button>

			{/*PROGRESS BAR*/}
			<label htmlFor='Progressbar'>
				{question.id} / {amountOfQuestions}
			</label>
			<progress
				id='Progressbar'
				value={amountOfAnswers}
				min='0'
				max='5'></progress>
		</div>
	);
};
