import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './currentQuestion.css';

import { quiz } from '../reducers/quiz';
import Audio from '../components/Audio';

export const CurrentQuestion = () => {
	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

	const answer = useSelector((state) => state.quiz.answers.find((a) => (
		a.questionId === question.id
	)));

	const isCorrect = useSelector((state) => {

		const answer = state.quiz.answers[state.quiz.currentQuestionIndex];

		console.log(answer);
		if (answer === undefined)
			return false;

		return answer.isCorrect;
		// return state.quiz.answers[state.quiz.currentQuestionIndex].isCorrect;
	})

	const dispatch = useDispatch();


	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};


	return (
		<div>
			<h1>Question: {question.questionText}</h1>
			{question.options.map((item, index) => (
				<button className={!answer ? "defaultbtn" : isCorrect ? "correct" : "wrong"} key={item} onClick={() => onAnswerSubmit(question.id, index)}>
					{item}
				</button>
			))}

			<button onClick={() => {
				dispatch(quiz.actions.goToNextQuestion());
			}}
			>
				Next Question
			</button>

			{question.id === 1 && <Audio></Audio>}


		</div>
	);
};

