import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuestionText = styled.h1`
  font-size: 16px;
  text-align: center;
  align-self: center;
  margin-bottom: 0;
`;

const ImageContainer = styled.div`
  width: 300px;

  /* &:media (min-width) */
`;

const ImageStyled = styled.img`
  width: 100%;
  max-height: 150px;
  border-radius: 10px;
`;

const TextQuestion = styled.h2`
  color: black;
  font-size: 16px;
  text-align: center;
  align-self: center;
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
      <TextQuestion> {question.questionText1}</TextQuestion>
      <ImageContainer>
        <ImageStyled src={question.img} alt="cover" />
      </ImageContainer>
    </>
  );
};

export default Questions;
