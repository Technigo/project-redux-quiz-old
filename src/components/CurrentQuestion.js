import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

//Background-image: https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80

export const CurrentQuestion = () => {
	const dispatch = useDispatch();
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const answers = useSelector((state) => state.quiz.answers);
	const currentQuestionIndex = useSelector(
		(state) => state.quiz.currentQuestionIndex
	);
	const quizOver = useSelector((state) => state.quiz.quizOver);
	console.log(answers);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	const onSubmitAnswer = (index) => {
		dispatch(
			quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
		);
		console.log("click");
	};

	// efter ett val så får man reda på om det var rätt/fel samt att knapparna blir disabled + det kommer en "next question" knapp

	return (
		<div>
			<h1>Question: {question.questionText}</h1>
			{question.options.map((option, index) => (
				<button
					key={option}
					disabled={answers.length === question.id}
					className={
						answers[currentQuestionIndex]?.isCorrect &&
						answers[currentQuestionIndex]?.answerIndex === index
							? "button correct"
							: answers.length !== question.id
							? "button"
							: "button incorrect"
					}
					onClick={() => onSubmitAnswer(index)}
				>
					{option}
				</button>
			))}
			{answers.length === question.id && !quizOver && (
				<button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
					{answers.length + 1 === question.length
						? "Show results"
						: "Next Question"}
				</button>
			)}
			{/* {quizOver && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Show results
        </button>
      )} */}

			<div>
				{answers[currentQuestionIndex]?.isCorrect && (
					<p>{question.answerText}</p>
				)}
				{!answers[currentQuestionIndex]?.isCorrect && <p>Wrong</p>}
			</div>
		</div>
	);
};
