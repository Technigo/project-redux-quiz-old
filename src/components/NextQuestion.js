import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { quiz } from "reducers/quiz";

const NextQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) =>
    state.quiz.answers.find(
      (a) => a.questionId === question.id // question could come from the previous selector in the last example
    )
  );

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
    background-color: black;
    color: white;
    border: 2px solid white;
    &:hover {
      background-color: white;
      color: black;
    }
  `;

  return (
    <NextButton disabled={!answers} onClick={() => nextQuestion()}>
      Next Question
    </NextButton>
  );
};

export default NextQuestion;
// {!answer && disabled}
