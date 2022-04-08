import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import QuestionButton from './QuestionButton';
import Button from './Button';
import { quiz } from 'reducers/quiz';
// import Timer from './Timer';


export const CurrentQuestion = () => {
  const [seconds, setSeconds] = useState(10)

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
      fontSizeDesktop="1rem"
      >
				Next
			</Button>
		);
	} else {
		button = (
			<Link to='/summary'>
				<Button
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
       {/* {seconds === 0 ? "Finished" : `${seconds} seconds remaining`} */}
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
