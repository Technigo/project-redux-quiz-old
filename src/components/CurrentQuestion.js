import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const quizOver = useSelector((state) => state.quiz.quizOver);
	console.log(question);
	console.log(quizOver);

	// const answers = useSelector((state) => state.quiz.answers)
	// const answerCorrect = answers.filter(item => item.isCorrect)

	// const now = (
	// 	question.id
	// 	 / 5) * 100;
	// 	  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

	const dispatch = useDispatch();
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
		if (question.correctAnswerIndex === index) {
			alert('Correct answer');
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			alert('WRONG!!!');
			dispatch(quiz.actions.goToNextQuestion());
		}
	};
	// console.log(questions.answers);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	return (
		<div>
			<h1>Question: {question.questionText}</h1>
			{question.options.map((item, index) => {
				return (
					<button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
						{item}
					</button>
				);
			})}
			<p>{question.id}/5</p>
			{/* <p>Points count: {answerCorrect.length}/{answers.length}</p> */}
		</div>
	);
};
