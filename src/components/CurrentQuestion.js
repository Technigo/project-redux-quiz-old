import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';

import swal from 'sweetalert'; 


const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;


`;

const Button = styled.button`
padding: 0.7rem;
border-radius: 5px;
background-color: #FF5F00;
color: white;
font-size: 1rem;
cursor: pointer;
border: none;

`;

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	//const quizOver = useSelector((state) => state.quiz.quizOver);
	// console.log(question);
	// console.log(quizOver);

	const dispatch = useDispatch();
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
		if (question.correctAnswerIndex === index) {
			swal('Good job!', 'You clicked the button!', 'success');
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			swal('WRONG!!!');
			dispatch(quiz.actions.goToNextQuestion());
		}
	};

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	return (
		<div className='container'>
			<h3>Question: {question.questionText}</h3>
			<img src={question.img} alt='movie' />
			<ButtonContainer>
				{question.options.map((item, index) => {
					return (
						<Button
						    className=''
							key={item}
							onClick={() => onAnswerSubmit(question.id, index)}
						>
							{item}
						</Button>
					);
				})}
			</ButtonContainer>
			<p className='question-count'>Question {question.id} of 5</p>
		</div>
	);
};
