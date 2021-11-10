import React from "react";
import styled from "styled-components";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { ProgressBar } from "../components/ProgressBar";

export const QuestionScreen = () => {
  return (
    <QuestionsSection>
      <ProgressBar />
      <CurrentQuestion />
    </QuestionsSection>
  );
};

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
