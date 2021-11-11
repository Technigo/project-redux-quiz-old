import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Summary from "./Summary";
import Counter from "./Counter";
import AnswerButtons from "./AnswerButtons";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";
import { StartPage } from "./StartPage";

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

export const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);
  let play = false;
  const playOn = () => {
    play = true;
  };

  return (
    <>
      {(play && <StartPage />) || quizOver ? (
        <Summary />
      ) : (
        <QuestionContainer>
          <Questions />
          <Counter />
          <AnswerButtons />
          <NextQuestion />
        </QuestionContainer>
      )}

      {/* // {quizOver ? (
      //   <Summary />
      // ) : (
      //   <QuestionContainer>
      //     <Questions />
      //     <Counter />
      //     <AnswerButtons />
      //     <NextQuestion />
      //   </QuestionContainer>
      // )} */}
    </>
  );
};
