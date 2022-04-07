import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
