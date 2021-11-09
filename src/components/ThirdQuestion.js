import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";

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
		<form className="form-container">
			<h1>Question: {question.questionText}</h1>
			{question.options.map((item, index) => (
				<label key={item} htmlFor={item}>
					{/* prettier-ignore */}
					<input
						id={item}
						type="radio"
						value={item}
						name="third-question"
						onChange={() => onAnswerSubmit(question.id, index)}
					/>
					{item}
				</label>
			))}
		</form>
	);
};

// 	const thirdQuestion = useSelector((state) => state.quiz.questions[2]);
