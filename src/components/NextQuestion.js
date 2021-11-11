import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { quiz } from "reducers/quiz";

const NextQuestion = () => {
  const dispatch = useDispatch();

  const nextQuestion = (id) => {
    dispatch(
      quiz.actions.goToNextQuestion({
        questionId: id,
      })
    );
  };

  const NextButton = styled.button`
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  `;

  return (
    <NextButton onClick={() => nextQuestion()}>Go to next Question</NextButton>
  );
};

export default NextQuestion;
