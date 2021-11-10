import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const IMAGE_URL_KROPPKAKA = "https://img.koket.se/standard-mega/kroppkakor-med-lingon-och-brynt-smor.jpg";

const Form = styled.form`
	background: #a37c48c0;
	border-radius: 10px;
	padding: 15px;
`;

const QuestionTitle = styled.h1`
	color: #42180e;
	font-size: 38px;
	margin: 0 0 25px 0;
`;

const ImageContainer = styled.div`
	border-radius: 10px;
	display: flex;
	justify-content: center;
	margin-bottom: 25px;
`;

const Image = styled.img`
	border-radius: 10px;
	opacity: 0.85;
	height: 360px;
`;

const RadioButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	row-gap: 8px;
	column-gap: 8px;
`;

const InputLabelContainer = styled.div`
	width: 35%;
	font-size: 30px;
	background: #4e1d10de;
	border-radius: 50px;
	color: #cc9837;
	display: flex;
	justify-content: center;
	padding-bottom: 5px;
`;

const Label = styled.label`
	cursor: pointer;
	transition: background 0.2s ease;
	-webkit-tap-highlight-color: transparent;
`;

const RadioButton = styled.input`
	width: 25px;
	height: 25px;
	border-radius: 15px;
	background: none;
	border: 0;
	box-shadow: inset 0 0 0 2.5px #cc9837;
	appearance: none;
	transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
	pointer-events: none;
	margin: 5px 10px 0 0;
	align-self: center;
	&:focus {
		outline: none;
	}
	&:checked {
		box-shadow: inset 0 0 0 8px #ffcd6f;
	}
`;

export const ThirdQuestion = () => {
	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

	const dispatch = useDispatch();

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};

	return (
		<Form>
			<QuestionTitle>Question: {question.questionText}</QuestionTitle>
			<ImageContainer>
				<Image src={IMAGE_URL_KROPPKAKA} alt="kroppkaka"></Image>
			</ImageContainer>
			<RadioButtonsContainer>
				{question.options.map((item, index) => (
					<InputLabelContainer key={item}>
						{/* prettier-ignore */}
						<RadioButton
							type="radio"
							id={item}
							name="third-question"
							value={item}
							onChange={() => onAnswerSubmit(question.id, index)}
						/>
						<Label htmlFor={item}>{item}</Label>
					</InputLabelContainer>
				))}
			</RadioButtonsContainer>
		</Form>
	);
};

// 	const thirdQuestion = useSelector((state) => state.quiz.questions[2]);

// return (
// 	<form className="form-container">
// 		<h1>Question: {question.questionText}</h1>
// 		{question.options.map((item, index) => (
// 			<label key={item} htmlFor={item}>
// 				{/* prettier-ignore */}
// 				<input
// 					id={item}
// 					type="radio"
// 					value={item}
// 					name="third-question"
// 					onChange={() => onAnswerSubmit(question.id, index)}
// 				/>
// 				{item}
// 			</label>
// 		))}
// 	</form>
// );
