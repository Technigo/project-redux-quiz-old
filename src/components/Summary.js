import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.7rem;
	border-radius: 5px;
	background-color: #4700d8;
	color: white;
	font-size: 1rem;
	cursor: pointer;
	border: none;
`;

export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const answerCorrect = answers.filter((item) => item.isCorrect);
	const dispatch = useDispatch();

	return (
		<>
			<p>
				Points count: {answerCorrect.length}/{answers.length}
			</p>
			<Button onClick={() => dispatch(quiz.actions.restart())}>
				Play again
			</Button>
		</>
	);
};
