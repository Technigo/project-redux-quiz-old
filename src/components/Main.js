import React, { useState } from "react";
import styled from "styled-components";
import { CurrentQuestion } from "components/CurrentQuestion";

export const Main = () => {
  const [startButtonClick, setStartButtonClick] = useState(false);

  if (!startButtonClick) {
    return (
      <MainContainer>
        <TextButtonContainer>
          <HeaderText>Harry Potter</HeaderText>
          <Subtitle>Are you a muggle or a wizard?</Subtitle>

          <StartButton
            onClick={() => {
              setStartButtonClick(true);
            }}
          >
            Take the quiz
          </StartButton>
        </TextButtonContainer>
      </MainContainer>
    );
  }
  if (startButtonClick) {
    return <CurrentQuestion />;
  }
};

const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextButtonContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 40px 0;

  @media (min-width: 668px) and (max-width: 1024px) {
    grid-template-rows: 1fr auto auto;
    margin: 0;
  }
  @media only screen and (min-width: 1025px) {
    grid-template-rows: 1fr auto auto;
    margin: 0;
  }
`;

const HeaderText = styled.h1`
  color: black;
  font-size: 80px;
  text-align: center;
  margin: 0;
  font-family: Harry;
  text-shadow: -1px -1px 0 #b87333, 1px -1px 0 #b87333, -1px 1px 0 #b87333,
    1px 1px 0 #b87333;
  letter-spacing: 1px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 100px;
    margin-top: 60px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 160px;
    margin-top: 60px;
  }
`;

const StartButton = styled.button`
  padding: 8px 20px;
  font-weight: 900;
  color: #b87333;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #b87333;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 1025px) {
    margin-bottom: 40px;
  }
`;

const Subtitle = styled.h3`
  margin: 10px 0;
  text-align: center;
  font-family: Harry;
  font-size: 28px;
  letter-spacing: 1px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 60px;
  }
`;
