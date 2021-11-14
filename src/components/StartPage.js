import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import the_turtles from "../reducers/assets/the_turtles.jpg";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 100px auto;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    font-size: 20px;
  }

  @media (min-width: 992px) {
    width: 550px;
    height: 550px;
    font-size: 30px;
  }
`;
const StyleImage = styled.img`
  width: 100%;
`;

const Header = styled.h1`
  font-family: "Righteous", cursive;
`;
const LinkStyled = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  text-align: center;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  width: 100px;

  &:hover {
    background-color: white;
    color: rgb(67, 160, 146);
    border-color: rgb(67, 160, 146);
  }
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const StartPage = () => {
  return (
    <StartContainer>
      <Header>Turtles Music Quiz</Header>
      <StyleImage src={the_turtles} />
      <LinkStyled to="/quiz">PLAY</LinkStyled>
    </StartContainer>
  );
};
