import React, { useEffect } from "react";
import "./Button.css";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";
import { useCountDown } from "./useCountdown";

const Button = () => {
	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

	const [countdown] = useCountDown(30);

	const answers = useSelector((state) => state.quiz.answers);

	const dispatch = useDispatch();

	const toNextQ = () => {
		dispatch(quiz.actions.goToNextQuestion());
	};

	useEffect(() => {
		if (countdown <= 0) {
			dispatch(quiz.actions.goToNextQuestion());
		}
	}, [countdown, dispatch]);

	const answered = answers.find((a) => a.questionId === question.id);

	const alertAnswer = () => {
		if (question.id > 0) {
			alert(answers[answers.length - 1].isCorrect);
		}
		toNextQ();
	};

	return (
		<div className="submit-button-container">
			<span className="countdown">Time left: {countdown} sec</span>
			<button className="submit-button" disabled={!answered} type="submit" onClick={alertAnswer}>
				{question.id === 5 ? "See Score" : "Next"}
			</button>
		</div>
	);
};

export default Button;
