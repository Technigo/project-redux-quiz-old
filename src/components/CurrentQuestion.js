import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import swal from 'sweetalert';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	width: 90%;
	max-width: 40rem;
	margin: 2rem auto;
`;

const Title = styled.h3`
	width: 90%;
	font-size: 1.3rem;
`;

const Image = styled.img`
	width: 90%;
	height: auto;
	// object-fit: cover;
`;

const Counter = styled.p`
	font-weight: 500;
	font-size: 1.3rem;
`;

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
		<Container>
			<Title>Question: {question.questionText}</Title>
			<Image src={question.img} alt='movie' />
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
			<Counter>Question {question.id} of 5</Counter>
		</Container>
	);
};
