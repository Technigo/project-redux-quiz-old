import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { quiz } from "../reducers/quiz";

const QuestionBackgroundImage = styled.div`
	background-image: url("https://images.unsplash.com/photo-1542300205-6fe56ce087e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
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
	font-size: 10px;
	overflow: scroll;
	padding: 30px;
`;

const QuestionText = styled.div`
	background-color: rgba(205, 206, 201, 0.7);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	padding: 10px;
	max-width: 700px;
	margin-top: 70px;
`;

const QuestionImage = styled.img`
	height: 200px;
	margin-bottom: 10px;
	border-radius: 2px;
`;

const AnswerTextContainer = styled.div`
	background-color: rgba(205, 206, 201, 0.7);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	padding: 10px;
	max-width: 600px;
	margin: 10px;

	p {
		font-size: 16px;
	}
`;
const QuizButton = styled.button`
	font-family: "Source Code Pro", monospace;

	&:hover {
		background-color: grey;
	}
`;

export const CurrentQuestion = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const questions = useSelector((state) => state.quiz.questions);
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const answers = useSelector((state) => state.quiz.answers);
	const currentQuestionIndex = useSelector(
		(state) => state.quiz.currentQuestionIndex
	);
	const quizOver = useSelector((state) => state.quiz.quizOver);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	const onSubmitAnswer = (index) => {
		dispatch(
			quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
		);
	};

	const onButtonClick = () => {
		// if not all questions are answered dispatch goToNextQuestion
		// if all questions are answered navigate to summary
		if (answers.length !== questions.length) {
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			navigate("/summary");
		}
	};

	const isCorrect = (index) => {
		// check if answerIndex matches button index if ok => check if answer is correct
		// if correct style with correct otherwise incorrect classes
		if (answers[currentQuestionIndex]?.answerIndex === index) {
			return answers[currentQuestionIndex]?.isCorrect
				? "button correct"
				: "button incorrect";
		} else {
			return "button";
		}
	};

	return (
		<QuestionBackgroundImage>
			<QuestionText>
				<h1> {question.questionText}</h1>
				{question.imgUrl !== "" && (
					<QuestionImage src={question.imgUrl} alt="#" />
				)}
				{question.options.map((option, index) => (
					<QuizButton
						key={option}
						type="button"
						disabled={answers.length === question.id}
						className={isCorrect(index)}
						onClick={() => onSubmitAnswer(index)}
					>
						{option}
					</QuizButton>
				))}
				{/* conditionally show button only when an option is selected then
              conditionally set the button text  based on if the quiz is still going or in the end
              maybe not the most elegant way.
              the click is handled in the onButtonClick function */}
				{answers.length === question.id && !quizOver && (
					<QuizButton type="button" onClick={() => onButtonClick()}>
						{answers.length !== questions.length
							? "Next Question"
							: "Show results"}
					</QuizButton>
				)}
			</QuestionText>
			{answers.length === question.id && (
				<AnswerTextContainer>
					{answers[currentQuestionIndex]?.isCorrect && (
						<p>{question.answerText}</p>
					)}
					{!answers[currentQuestionIndex]?.isCorrect && (
						<p>Sorry, not quite right!</p>
					)}
				</AnswerTextContainer>
			)}
		</QuestionBackgroundImage>
	);
};
