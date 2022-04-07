import styled from 'styled-components';

const QuestionButton = styled.button`
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

export default QuestionButton;
