import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import QuestionButton from './QuestionButton';
import Button from './Button';
// import Timer from './Timer';

// import { useNavigate } from 'react-router-dom';

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
	// const navigate = useNavigate();

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
			<Button
      onClick={() => clickNext()}
      disabled={!answer}
      >
				Next
			</Button>
		);
	} else {
		button = (
			<Link to='/summary'>
				<Button >Finish</Button>
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
			<h1 className='main-title'>
				Question {question.id}: {question.questionText}
			</h1>

			<div className='questions'>
				{question.options.map((item, index) => (
					<QuestionButton
						disabled={answer}
						key={item}
						className='answer-button'
						onClick={() => onAnswerSubmit(question.id, index)}>
						{item}
						<span>{showEmoji(index)}</span>
					</QuestionButton>
				))}
			</div>

			{/*TEXT SHOWING IF THE ANSWER WAS RIGHT OR WRONG*/}
			<div className='answer-text'>
				<p>{answer?.isCorrect && 'Correct answer'}</p>
				<p>{answer?.isCorrect === false && 'Wrong answer'}</p>
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
