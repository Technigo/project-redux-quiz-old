import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import Rate from './Rating';

const Button = styled.button`
	padding: 0.7rem;
	border-radius: 5px;
	background-color: #711A75;
	color: white;
	font-size: 1rem;
	cursor: pointer;
	border: none;
	font-weight: bold;
	margin: 2rem 0 5rem 0;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	width: 90%;
	max-width: 40rem;
	margin: 5rem auto;
	padding: 2rem 0;
`;

export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const answerCorrect = answers.filter((item) => item.isCorrect);
	const dispatch = useDispatch();

	return (
		<Container>
			<p>
				You got: {answerCorrect.length} out of {answers.length}
			</p>
			<Button onClick={() => dispatch(quiz.actions.restart())}>
				Play again
			</Button>
			<div className='quiz-text'>
				<p>How was the quiz?</p>
			</div>
			<Rate />
		</Container>
	);
};
