import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  justify-content: center;
  padding: 1em;
  font-size: 20px;
`;

export const ProgressBar = () => {
  const questionNumber = useSelector(
    (state) => state.quiz.currentQuestionIndex + 1
  );
  const questionTotal = useSelector((state) => state.quiz.questions.length);

  return (
    <ProgressBarContainer>
      <p>
        Question {questionNumber} of {questionTotal}
      </p>
    </ProgressBarContainer>
  );
};
