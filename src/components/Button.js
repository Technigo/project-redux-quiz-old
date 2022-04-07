import styled from 'styled-components';

const Button = styled.button`
	appearance: none;
	background-color: #ee3e93;
	padding: 0.9rem 3rem;
	text-transform: uppercase;
	color: white;
	font-family: 'Spartan', sans-serif;
	font-weight: 700;
	width: 250px;
	border: none;
	margin-top: ${props => props.marginTop}
`;

export default Button;
