import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuestionText = styled.h1`
  font-size: 15px;
  text-align: center;
  align-self: center;
`;

const ImageStyled = styled.img`
  width: 100%;
`;

const Questions = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <QuestionText>{question.questionText}</QuestionText>
      <ImageStyled src={question.img} alt="cover" />
    </>
  );
};

export default Questions;
