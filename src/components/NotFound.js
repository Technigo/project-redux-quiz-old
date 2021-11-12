import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackgroundImage = styled.div`
	background-image: url("https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80");
	background-size: cover;
	height: 100vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1,
	p {
		font-family: "Yuji Syuku", serif;
		background-color: #999;
		opacity: 0.9;
	}
`;

const StartButton = styled.button`
	font-family: "Source Code Pro", monospace;
	background-color: lightgrey;
	&:hover {
		background-color: grey;
	}
`;

export const NotFound = () => {
	return (
		<BackgroundImage>
			<h1>Page not found</h1>
			<Link to="/">
				<StartButton>Go back</StartButton>
			</Link>
		</BackgroundImage>
	);
};
