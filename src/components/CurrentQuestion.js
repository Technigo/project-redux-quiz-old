import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import swal from 'sweetalert';

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	width: 90%;
	max-width: 40rem;
	margin: 5rem auto;
`;

const Title = styled.h3`
	width: 90%;
	font-size: 1.8rem;
	text-align: center;
`;

const Text = styled.p`
	width: 90%;
	font-size: 1.3rem;
	text-align: center;
	font-style: italic;
`;

const Image = styled.img`
	width: 90%;
	height: auto;
`;

const ButtonContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 1rem;
	gap: 1rem;
	width: 90%;
`;

const Button = styled.button`
	border-radius: 5px;
	background-color: #ff5f00;
	color: white;
	font-family: 'Raleway', sans-serif;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	border: none;
	height: 4rem;
`;

const Counter = styled.p`
	font-weight: 500;
	font-size: 1.3rem;
`;

// fetching the questions from the store
export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);

	// Updating the store by the dispatch function
	const dispatch = useDispatch();
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
		if (question.correctAnswerIndex === index) {
			swal({
				title: 'Good job!',
				text: 'You picked the right one!',
				icon: 'success',
				button: 'continue',
			});
			dispatch(quiz.actions.goToNextQuestion());
		} else {
			swal({
				title: 'Wrong answer!',
				icon: 'error',
				button: 'continue',
			});
			dispatch(quiz.actions.goToNextQuestion());
		}
	};

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	return (
		<Container>
			<Title>
				Which of these techy movies is the random print screen from?
			</Title>
			<Image src={question.img} alt='movie' />
			<Text>{question.questionText}</Text>
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
