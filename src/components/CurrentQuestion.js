import React from "react";
import { useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ButtonQuestion } from "./ButtonQuestion";
import { PictureQuestion } from "./PictureQuestion";
import { RadioButtonsQuestion } from "./RadioButtonsQuestion";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const onGoToNextQuestion = (id) => {
    dispatch(quiz.actions.goToNextQuestion({ questionId: id }));
  };

  const getQuestionType = (type) => {
    if (type === "button") {
      return (
        <ButtonQuestion
          question={question}
          setOnAnswerSubmit={onAnswerSubmit}
          onGoToNextQuestion={onGoToNextQuestion}
        />
      );
    } else if (type === "picture") {
      return (
        <PictureQuestion
          question={question}
          setOnAnswerSubmit={onAnswerSubmit}
          onGoToNextQuestion={onGoToNextQuestion}
        />
      );
    } else if (type === "radio") {
      return (
        <RadioButtonsQuestion
          question={question}
          setOnAnswerSubmit={onAnswerSubmit}
          onGoToNextQuestion={onGoToNextQuestion}
        />
      );
    }
  };

  if (!question) {
    return <Header2>Oh no! I could not find the current question!</Header2>;
  }

  return getQuestionType(question.type);
};

const Header2 = styled.h2`
  margin: 0 0 10px 0;
`;
