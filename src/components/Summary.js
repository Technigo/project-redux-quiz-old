import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

const Main = styled.div`
	align-items: center;
	background-image: url(./assets/Mischeif2.jpg);
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`; // This will style everything in this component

const Heightsetter = styled.div`
	height: 750px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 350px;
`

const Restartbutton = styled.button`
	padding: 20px;
	border-radius: 30px;
	background-color: #800000;
	color: white;
	width: auto;
	font-size: 40px;
	font-family: 'Fredericka the Great', cursive;
	margin-bottom: 50px;
`;

const Textwrapper = styled.div`
	text-align: center;
	color: #800000;
	background-color: white;
	border-radius:15px;
	padding:0;
	margin:0;
	
`; //This styles the H1

const Summarytext = styled.h1`
	border-radius: 2px solid #800000;
	font-family: 'Euphoria Script', cursive;
	font-size: 40px;
	padding: 0 15px;
`;

export const Summary = () => {
	/* dispatch-forgot it */
	const dispatch = useDispatch();

	// asking for answers from quiz
	const answers = useSelector((state) => state.quiz.answers);

	/* map over every correct answer; dispatch the new score */
	answers.forEach((item) => {
		if (item.isCorrect) {
			dispatch(quiz.actions.addScore());
		}
	});

	const score = useSelector((state) => state.quiz.correctAnswers);
	const { width } = useWindowSize();
	return (
		<Main>
			
			<Confetti
				width={width}
				height={1000}
				colors={[
					'#740001',
					'#AE0001',
					'#D3A625',
					'#EEBA30',
					'#000000',
					'#C0C0C0',
				]}
				gravity={0.08}
				numberOfPieces={350}
			/>
			<Heightsetter>
			<Textwrapper>
				<Summarytext>
					You scored: {score}/{answers.length}
				</Summarytext>
			

			<Restartbutton onClick={() => dispatch(quiz.actions.restart())}>
				{' '}
				Obliviate!
			</Restartbutton>
			</Textwrapper>
			{/* <Link to="/">
				<Restartbutton onClick={IntroPage}>Obliviate</Restartbutton>
			</Link> */}
		</Heightsetter>
		</Main>
	);
};
