import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Summary from "./Summary";
import Counter from "./Counter";
import AnswerButtons from "./AnswerButtons";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";
import { Timer } from "./Timer";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

const QuestionWrapper = styled.div`
  // background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <div>
      {quizOver ? (
        <Summary />
      ) : (
        <QuestionContainer>
          <QuestionWrapper>
            <Questions />
            <Timer />
            <Counter />
            <AnswerButtons />
            <NextQuestion />
          </QuestionWrapper>
        </QuestionContainer>
      )}
    </div>
  );
};
