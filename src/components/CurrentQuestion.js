import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Summary } from './Summary';
import { quiz } from '../reducers/quiz';

const Main = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	background-image: url(./assets/black-night.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`; // This will style everything in this component
const Questiontext = styled.h1`
	font-family: 'Calligraffitti', cursive;
	font-size: 50px;
	text-align: centre;
	color: white;
	margin: 0 20px 30px;
	text-shadow: 2px #ffe227;
	text-shadow: 0 0 4px #d4af37, 0 0 6px #800000;
`; //This styles the H1 question
const Buttonssection = styled.section`
	justify-items: centre;
`; // Styles the button container, add display: inline for desktop
const Choice = styled.div`
	justify-content: centre;
`; // styles the choice buttons
const Choicebutton = styled.button`
	width: 75%;
	margin: 15px;
	padding: 15px;
	border-radius: 20px;
`; // The actual answer buttons
const Nextbutton = styled.button`
	width: 30%;
	margin: 15px;
	padding: 15px;
	border-radius: 20px;
`; // Styles the next button
const Chosenanswer = styled.span`
	color: white;
	font-size: 25px;
	font-family: 'Redressed', cursive;
`; // Styles the text on choice button
const Feedback = styled.div`
	color: white;
`;
const Questioncontainer = styled.div`
	margin: 0 auto;
`;

export const CurrentQuestion = () => {
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const answers = useSelector((state) => state.quiz.answers);
	const currentQuestionIndex = useSelector(
		(state) => state.quiz.currentQuestionIndex
	);
	const dispatch = useDispatch();

	//const nextQuestion = useSelector((state) => state.quiz.goToNextQuestion)

	const isQuizOver = useSelector((state) => state.quiz.quizOver);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	//if isQuizOver is true, we return Summary component
	if (isQuizOver) {
		return <Summary />;
	}
	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
	};

	return (
		<Main>
			<Questioncontainer>
				{/*{answers[currentQuestionIndex] ? answers[currentQuestionIndex].isCorrect : 'no answer'}*/}
				<Questiontext>Question: {question.questionText}</Questiontext>
				<Buttonssection>
					{question.options.map((item, index) => (
						<Choice>
							<Choicebutton
								key={item}
								onClick={() => onAnswerSubmit(question.id, index)}
								style={{
									backgroundColor: !answers
										? '#EADCA6'
										: index === question.correctAnswerIndex
										? '#17D7A0'
										: '#B91646',
								}}
							>
								<Chosenanswer>{item}</Chosenanswer>{' '}
							</Choicebutton>
						</Choice>
					))}
					<Nextbutton
						disabled={!answers[currentQuestionIndex]}
						onClick={() => dispatch(quiz.actions.goToNextQuestion())}
					>
						{' '}
						Next Question
					</Nextbutton>
				</Buttonssection>

				<Feedback>
					{answers[currentQuestionIndex] ? (
						answers[currentQuestionIndex].isCorrect ? (
							<p>Woohoo! It's Correct</p>
						) : (
							<p>Oh no.... It's not correct</p>
						)
					) : (
						<p>Waiting for the answer</p>
					)}
				</Feedback>

				<div>Question {question.id} out of 8</div>

				<div>Question: (8-{question.id})</div>

				{/*<div>Question: (({question.id}/8)* 100)</div> 
        <div>(`${percentage}`)</div>*/}
			</Questioncontainer>
		</Main>
	);
};
