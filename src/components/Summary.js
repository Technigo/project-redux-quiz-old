import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { quiz } from "../reducers/quiz";

const StyledSummary = styled.div`
	background-image: url("https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80");
	background-color: rgb(205, 206, 201);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 100vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Yuji Syuku", serif;
	font-size: 30px;
`;
const AgainButton = styled.button`
	font-family: "Source Code Pro", monospace;
	background-color: lightgrey;
	margin-top: 70px;
	&:hover {
		background-color: grey;
	}
`;

export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const dispatch = useDispatch();

	console.log(answers);

	const correctAnswers = () => {
		return answers.length > 0
			? answers
					.map((answer) => {
						console.log(answer.isCorrect);
						if (answer.isCorrect) {
							return 1;
						} else return 0;
					})
					.reduce((a, b) => a + b)
			: 0;
	};

	return (
		<StyledSummary>
			You got {correctAnswers()} of {answers.length} right!
			<Link to="/quiz">
				<AgainButton
					type="button"
					onClick={() => dispatch(quiz.actions.restart())}
				>
					Wanna play again?
				</AgainButton>
			</Link>
		</StyledSummary>
	);
};
