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

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	width: 90%;
	max-width: 40rem;
	margin: 2rem auto;
`;

const Title = styled.h3`
	width: 90%;
	font-size: 1.3rem;
`;

const Image = styled.img`
	width: 90%;
	height: auto;
	// object-fit: cover;
`;

const Counter = styled.p`
	font-weight: 500;
	font-size: 1.3rem;
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
		<Container>
			<Title>
				Which of these techy movies are the random print screen from?{' '}
				{question.questionText}
			</Title>
			<Image src={question.img} alt='movie' />
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
			<Counter>Question {question.id} of 5</Counter>
		</Container>
	);
};
