import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  console.log(useSelector((store) => store));
  const completed = `${useSelector(
    (store) =>
      (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;
  // console.log(completed)
  // console.log(typeof completed)

  return (
    <ProgressContainer>
      <ProgressStatus width={completed} />
    </ProgressContainer>
  );
};

export default ProgressBar;

const ProgressContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 30px;
  border-radius: 5px;
  // background-color: white;
  border: 2px solid white;
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background-image: linear-gradient(.25turn, #bd7e7f, #7e7fbd, #7ebdbc);
  transition: width 1s ease-in-out;
  height: 100%;

`;
