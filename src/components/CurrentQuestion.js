import React from "react";
import { useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ButtonQuestion } from "./ButtonQuestion";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  if (!question) {
    return <Header2>Oh no! I could not find the current question!</Header2>;
  }

  return (
    <section>
      <ButtonQuestion question={question} setOnAnswerSubmit={onAnswerSubmit} />
    </section>
  );
};

const Header2 = styled.h2`
  margin: 0 0 10px 0;
`;
