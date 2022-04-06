import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const completed = `${useSelector(
    (store) =>
      (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;

  return (
    <ProgressContainer>
      <ProgressStatus width={completed} />
    </ProgressContainer>
  );
};

export default ProgressBar;

const ProgressContainer = styled.div`
  width: 200px;
  height: 20px;
  border-radius: 5px;
  background-color: white;
  border: 3px solid black;
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background-color: black;
  transition: width 1s ease-in-out;
  height: 100%;
`;
