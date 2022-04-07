import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import swal from 'sweetalert';

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	//const quizOver = useSelector((state) => state.quiz.quizOver);
	// console.log(question);
	// console.log(quizOver);

	const dispatch = useDispatch();
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
		if (question.correctAnswerIndex === index) {
			swal('Good job!', 'You clicked the button!', 'success');
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			swal('WRONG!!!');
			dispatch(quiz.actions.goToNextQuestion());
		}
	};

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	return (
		<div className='container'>
			<h3>Question: {question.questionText}</h3>
			<img src={question.img} alt='movie' />
			<div className='btn-container'>
				{question.options.map((item, index) => {
					return (
						<button
							key={item}
							onClick={() => onAnswerSubmit(question.id, index)}
						>
							{item}
						</button>
					);
				})}
			</div>
			<p className='question-count'>Question {question.id} of 5</p>
		</div>
	);
};
