import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CurrentQuestion } from './CurrentQuestion';

const IntroBackground = styled.div`
	background-image: url(./assets/Intro-page.jpg);
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-bottom: 20px;
`;

const Startbutton = styled.button`
	padding: 20px;
	border-radius: 30px;
	background-color: #800000;
	color: white;
	width: 100%;
	font-size: 40px;
	font-family: 'Fredericka the Great', cursive;
`;
const Buttoncontainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 40%;
	height: 100px;
	margin-bottom: 50px;
`;

export const IntroPage = () => {
	return (
		<IntroBackground>
			<Buttoncontainer>
				<Link to="/CurrentQuestion">
					<Startbutton>Alohomora</Startbutton>
				</Link>
			</Buttoncontainer>
		</IntroBackground>
	);
};
