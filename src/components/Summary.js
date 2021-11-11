import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

const Main = styled.div`
	width: 90%;
	margin: 0 auto;
	align-items: center;
	background-color: #9ad3bc;
`; // This will style everything in this component

const Questiontext = styled.h1`
	font-family: 'Euphoria Script', cursive;
	font-size: 50px;
	text-align: centre;
`; //This styles the H1

export const Summary = () => {
	/* dispatch-forgot it */
	const dispatch = useDispatch();

	// asking for answers from quiz
	const answers = useSelector((state) => state.quiz.answers);

	/* map over every correct answer; dispatch the new score */
	answers.map(function (item) {
		if (item.isCorrect) {
			dispatch(quiz.actions.addScore());
		}
	});

	const score = useSelector((state) => state.quiz.correctAnswers);

	return (
		<Main>
			<div>
				<Questiontext>
					<h1>Summary</h1>
					<p>
						You scored: {score}/{answers.length}
					</p>
				</Questiontext>
			</div>
		</Main>
	);
};
