import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Summary } from './Summary';
import { quiz } from '../reducers/quiz';

const Main = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),
		url(./assets/Train.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`; // This will style everything in this component

const Questioncontainer = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 80%;
	text-align: center;
`;

//This styles the H1 question
const Questiontext = styled.h1`
	font-family: 'Calligraffitti', cursive;
	font-size: 40px;
	text-align: center;
	color: white;
	margin: 0 20px 30px;
	text-shadow: 0 0 4px #d4af37, 0 0 6px #800000;
	word-wrap: wrap;
`;
// Styles the button container, add display: inline for desktop
const Buttonssection = styled.section`
	justify-items: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-top: 40px;
`;
const Choice = styled.div`
	justify-content: center;
`; // styles the choice buttons
const Choicebutton = styled.button`
	width: auto;
	margin: 15px;
	padding: 15px;
	border-radius: 20px;
	background-color: #d4af37;
	text-align: center;
	letter-spacing: 2px;
`; // The actual answer buttons

const Nextbuttonwrapper = styled.div`
	margin: 15px auto 15px auto;
`;
const Nextbutton = styled.button`
	width: auto;
	margin: 15px;
	padding: 15px;
	border-radius: 20px;
	background-color: #800000;
	font-weight: 500;
	font-size: 25px;
	font-family: 'Fredericka the Great', cursive;
	color: white;
`; // Styles the next button
const Chosenanswer = styled.span`
	color: white;
	font-size: 25px;
	font-family: 'Calligraffitti', cursive;
	font-weight: bold;
`; // Styles the text on choice button
const Feedback = styled.div`
	color: white;
	text-shadow: 0 0 4px #d4af37, 0 0 6px #800000;
	font-size: 30px;
	font-family: 'Calligraffitti', cursive;
	font-weight: bold;
	letter-spacing: 3px;
	margin: 20px 0 0 0;
	padding: 0;
`;

const Progressbar = styled.div`
	color: white;
	font-weight:bold;
	font-size:20px;
	font-family: 'Calligraffitti', cursive;
	letter-spacing: 2px;
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
				<Questiontext>{question.questionText}</Questiontext>
				<Buttonssection>
					{question.options.map((item, index) => (
						<Choice>
							<Choicebutton
								key={item}
								onClick={() => onAnswerSubmit(question.id, index)}
								// style={{
								// 	backgroundColor: !answers
								// 		? '#EADCA6'
								// 		: index === question.correctAnswerIndex
								// 		? '#17D7A0'
								// 		: '#B91646',
								// }}
							>
								<Chosenanswer>{item}</Chosenanswer>{' '}
							</Choicebutton>
						</Choice>
					))}
				</Buttonssection>
				<Feedback>
					{answers[currentQuestionIndex] ? (
						answers[currentQuestionIndex].isCorrect ? (
							<p>Woohoo! It's Correct</p>
						) : (
							<p>Oh no.... It's not correct</p>
						)
					) : (
						<p>Waiting for your answer...</p>
					)}
				</Feedback>

				
				<Nextbuttonwrapper>
					<Nextbutton
						disabled={!answers[currentQuestionIndex]}
						onClick={() => dispatch(quiz.actions.goToNextQuestion())}
					>
						{' '}
						Next Question
					</Nextbutton>
				</Nextbuttonwrapper>

				

				<Progressbar>Question {question.id} out of 8</Progressbar>
				{/* Question: (8-{question.id}) */}

				{/*<div>Question: (({question.id}/8)* 100)</div>
        <div>(`${percentage}`)</div>*/}
			</Questioncontainer>
		</Main>
	);
};
