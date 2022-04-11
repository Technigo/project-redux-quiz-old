import styled from 'styled-components';

export const Button = styled.button`
	appearance: none;
	background-color: #ee3e93;
	padding: 0.9rem 3rem;
	text-transform: uppercase;
	color: white;
	font-family: 'Spartan', sans-serif;
	font-weight: 700;
	width: ${props => props.width};
	border: none;
	margin-top: ${props => props.marginTop};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #fcfcfc;
		color: pink;
	}

	&:disabled {
		background-color: #ee3e93;
		color: white;
		opacity: 0.5;
	}

	@media screen and (min-width: 992px) {
		width: ${props => props.widthDesktop};
		font-size: ${props => props.fontSizeDesktop};
	}
`;


export const QuestionButton = styled.button`
	appearance: none;
	width: ${props => props.width};
	background-color: #fcfcfc;
	border: none;
	font-family: 'Quicksand', sans-serif;
	font-weight: 400;
	padding: 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px;
	color: black;
	cursor: pointer;

	&:hover {
		background-color: #ee3e93;
		color: white;
	}

	&:disabled {
		background-color: #fcfcfc;
		color: black;
		opacity: 0.5;
	}

	@media screen and (min-width: 992px) {
		width: ${props => props.widthDesktop};
		font-size: ${props => props.fontSizeDesktop};
	}
`;

