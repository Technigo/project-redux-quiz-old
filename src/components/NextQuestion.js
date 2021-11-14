import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { quiz } from "../reducers/quiz";

const NextButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 2px solid white;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const NextQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const nextQuestion = (id) => {
    dispatch(
      quiz.actions.goToNextQuestion({
        questionId: id,
      })
    );
  };

  return (
    <NextButton disabled={!answers} onClick={() => nextQuestion()}>
      Next Question
    </NextButton>
  );
};

export default NextQuestion;
