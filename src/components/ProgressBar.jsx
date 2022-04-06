import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  NavButtonContainer,
  NextButton,
  NavButtonIcon,
} from "components_styled/StyledElements";
import next from "../assets/next.png";
import restart from "../assets/replay.png";

const ProgressBar = ({ handleNextButton, hasAnswered, restartQuiz }) => {
  const percentCompleted = `${useSelector(
    (store) =>
      (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;

  const quizOver = useSelector((store) => store.quiz.quizOver);

  return (
    <ProgressContainer>
      <NavButtonContainer>
        {hasAnswered && (
          <NextButton>
            <NavButtonIcon onClick={handleNextButton} src={next} />
          </NextButton>
        )}
        {quizOver && (
          <NextButton>
            <NavButtonIcon onClick={restartQuiz} src={restart} />
          </NextButton>
        )}
      </NavButtonContainer>
      <ProgressStatus width={percentCompleted} />
    </ProgressContainer>
  );
};

export default ProgressBar;

const ProgressContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(206, 212, 218, 0.6);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    rgba(202, 240, 248, 0.2) 0%,
    rgba(144, 224, 239, 0.2) 100%
  );
  transition: width 1s ease-in-out;
  height: 100%;
  position: absolute;
  top: 0;
`;
