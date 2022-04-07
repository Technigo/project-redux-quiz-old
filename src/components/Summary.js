import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import Rate from "./Rating";

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
  const dispatch = useDispatch()


	return (
	
			<div className='summary'>
				<p>
					You got: {answerCorrect.length} out of {answers.length}
				</p>
				<Button onClick={() => dispatch(quiz.actions.restart())}>
						Play again
				</Button>
				<div className="quiz-text">
					<p>How was the quiz</p>
				</div>
				<Rate />

			</div>
	
	);
};

