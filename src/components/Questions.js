import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 200px;
  justify-content: center;
`;

const QuestionText = styled.h1`
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const ImageContainer = styled.div`
  width: 300px;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  max-height: 150px;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-height: 300px;
  }
`;

const TextQuestion = styled.h2`
  color: black;
  font-size: 16px;
  text-align: center;
  align-self: center;
  @media (min-width: 768px) {
    font-size: 22px;
  }
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
      <QuestionWrapper>
        <QuestionText>{question.questionText}</QuestionText>
        <TextQuestion> {question.questionText1}</TextQuestion>
      </QuestionWrapper>
      <ImageContainer>
        <ImageStyled src={question.img} alt="cover" />
      </ImageContainer>
    </>
  );
};

export default Questions;
