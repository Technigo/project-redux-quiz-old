import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCauldron } from "@fortawesome/pro-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ProgressBar = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const currentQuestionIndex = useSelector(
    (store) => store.quiz.currentQuestionIndex
  );

  console.log(currentQuestionIndex);
  console.log(questions);

  return (
    <ProgressBarContainer>
      {questions.map((question, index) => {
        return (
          <ProgressBarWrapper key={question.id}>
            <Dot
              style={{
                backgroundColor:
                  currentQuestionIndex >= index ? "#638270" : "#f0f0f0",
              }}
            ></Dot>
            <Line
              style={{
                backgroundColor:
                  currentQuestionIndex >= index ? "#638270" : "#f0f0f0",

              }}
            ></Line>
          </ProgressBarWrapper>
        );
      })}

      <IconContainer
        style={{
          backgroundColor:
            currentQuestionIndex === questions.length - 1
              ? "#638270"
              : "#f0f0f0",

        }}
      >
        <FontAwesomeIcon icon={faCauldron} />
      </IconContainer>
    </ProgressBarContainer>
  );
};

const ProgressBarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Dot = styled.div`
  position: relative;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  display: inline-block;
  transition: all 500ms ease-in-out;
  @media (min-width: 668px) and (max-width: 1024px) {
    height: 20px;
    width: 20px;
  }
  @media only screen and (min-width: 1025px) {
    height: 30px;
    width: 30px;
  }
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  display: inline-block;
  transition: all 500ms ease-in-out;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 100px;
  }
  @media only screen and (min-width: 1025px) {
    width: 150px;
    height: 6px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  height: 30px;
  width: 30px;

  @media (min-width: 668px) and (max-width: 1024px) {
    height: 50px;
    width: 50px;
    font-size: 30px;
  }
  @media only screen and (min-width: 1025px) {
    height: 80px;
    width: 80px;
    font-size: 50px;
  }
`;
