import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(241, 235, 235);
  color: rgb(61, 61, 61);
  border-radius: 5px;
  border: none;
  font-family: "Roboto";
  font-size: 20px;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-content: center;
  text-align: center;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
    inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  animation: glow 1.5s linear infinite;

  &:hover {
    background-color: rgb(224, 218, 218);
    box-shadow: 5px 5px rgb(69, 69, 69);
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    font-size: 25px;
    width: 100%;
    height: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 35px;
    width: 100%;
    height: 200px;
  }
`;

const AnswerButton = (props) => {
  return (
    <Button
      className="button"
      type="button"
      key={props.keyID}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </Button>
  );
};

export default AnswerButton;
