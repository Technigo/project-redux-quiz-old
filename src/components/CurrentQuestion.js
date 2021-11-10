/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';
import Audio from '../components/Audio';
import Summary from './Summary';

import './currentQuestion.css';

export const CurrentQuestion = () => {
	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

	const answer = useSelector((state) => state.quiz.answers.find((a) => (
		a.questionId === question.id
	)));

	// const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

	// const isCorrect = useSelector((state) => {

	// 	const answer = state.quiz.answers[state.quiz.currentQuestionIndex];

	// 	console.log(answer);
	// 	if (answer === undefined)
	// 		return false;

	// 	return answer.isCorrect;
	// 	// return state.quiz.answers[state.quiz.currentQuestionIndex].isCorrect;
	// })

	//We ask store to get updated value (true or false) of isQuizOver
  	const isQuizOver = useSelector((state) => state.quiz.quizOver);

	const dispatch = useDispatch();


	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	 // if isQuizOver is true, then Summary component is returned
	 if (isQuizOver) {
		return <Summary />;
	  }


	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};


	return (
		<div>
			<h1>Question: {question.questionText}</h1>
			{question.options.map((item, index) => (
				<button 
					className={!answer ? "defaultbtn" : index === question.correctAnswerIndex ? "correct" : "wrong"} 
					key={item}
					type="button"
					disabled={answer}
					onClick={() => onAnswerSubmit(question.id, index)}>
					{item}
				</button>
			))}

			<button 
			  className="next-question-button"
			  type="button"
			  disabled={!answer}
				onClick={() => dispatch(quiz.actions.goToNextQuestion())}
			>
				Next Question
			</button>
			{question.id === 1 && <Audio></Audio>}
		</div>
    
	);
};

