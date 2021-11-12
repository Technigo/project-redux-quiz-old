import React from "react";
import styled from "styled-components";
import { Summary } from "../components/Summary";
import { ProgressBar } from "../components/ProgressBar";

// Function that returns the Progressbar, and a Summary Container with the Summary and the restart button.
export const SummaryScreen = ({ onRestartClicked }) => {
  return (
    <>
      <ProgressBar />
      <SummaryContainer>
        <QuizHeader>Quiz Summary</QuizHeader>
        <Summary />
        <RestartButtonContainer>
          <RestartButton onClick={onRestartClicked}>Restart</RestartButton>
        </RestartButtonContainer>
      </SummaryContainer>
    </>
  );
};

// ---------------------------Styled components--------------------------------

const QuizHeader = styled.h2`
  text-align: center;
  margin: 0 0 10px 0;
  padding-top: 10px;
`;

const SummaryContainer = styled.section`
  height: 100%;
  width: 100%;
  color: #638270;
  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 20px 100px 20px 100px;
  }
  @media (min-width: 1025px) {
    font-size: 40px;
    padding: 20px 150px 20px 150px;
  }
`;

const RestartButton = styled.button`
  padding: 8px 20px;
  font-weight: 900;
  color: #638270;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  border-left: 2px solid #638270;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  margin-bottom: 20px;
  @media (min-width: 668px) and (max-width: 1024px) {
    margin-bottom: 40px;
    font-size: 25px;
  }
  @media (min-width: 1025px) {
    margin-bottom: 40px;
    font-size: 30px;

    &:hover {
      transition: all 200ms ease-in-out;
      border-top: 2px solid #638270;
      border-right: 2px solid #638270;
    }
  }
`;

const RestartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;
