import React from "react";
import styled from "styled-components";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { ProgressBar } from "../components/ProgressBar";

// Function that returns the questionsection with the progressbar and the currentQuestion
export const QuestionScreen = () => {
  return (
    <QuestionsSection>
      <ProgressBar />
      <CurrentQuestion />
    </QuestionsSection>
  );
};

// ---------------------------Styled components--------------------------------

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
