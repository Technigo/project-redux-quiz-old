import React, { useState } from "react";
import styled from "styled-components";
import { CurrentQuestion } from "components/CurrentQuestion";
import { ProgressBar } from "./ProgressBar";

export const Main = () => {
  const [startButtonClick, setStartButtonClick] = useState(false);

  if (!startButtonClick) {
    return (
      <MainContainer>
        <TextButtonContainer>
          <HeaderText>Harry Potter</HeaderText>
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
    return (
      <section>
        <ProgressBar />
        <CurrentQuestion />
      </section>
    );
  }
};

const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  color: black;
  font-size: 100px;
  text-align: center;
`;

const StartButton = styled.button`
  padding: 15px;
  width: 40%;
  font-weight: 900;
  background-color: transparent;
  border: 2px solid black;
  font-size: 20px;
  cursor: pointer;
`;

const TextButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
