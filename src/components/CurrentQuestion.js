import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";
import Summary from "./Summary";
import Counter from "./Counter";
import AnswerButtons from "./AnswerButtons";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  padding: 20px;
  border-radius: 20px;
  background-color: pink;
  &:hover {
    background-color: red;
  }
`;

export const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <>
      {quizOver ? (
        <Summary />
      ) : (
        <QuestionContainer>
          <Questions />
          <AnswerButtons />
          <Counter />
          <NextQuestion />
        </QuestionContainer>
      )}
    </>
  );
};
