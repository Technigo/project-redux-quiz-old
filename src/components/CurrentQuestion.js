import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

import Summary from "./Summary";
import Counter from "./Counter";
import AnswerButtons from "./AnswerButtons";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const QuestionText = styled.h1`
  font-size: 15px;
  text-align: center;
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
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  const nextQuestion = (id) => {
    dispatch(
      quiz.actions.goToNextQuestion({
        questionId: id,
      })
    );
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  return (
    <>
      {quizOver ? (
        <Summary />
      ) : (
        <QuestionContainer>
          <QuestionText>{question.questionText}</QuestionText>
          <img src={question.img} alt="coverImage" />
          <AnswerButtons />
          <Counter />
          <NextButton onClick={() => nextQuestion()}>
            Go to next Question
          </NextButton>
        </QuestionContainer>
      )}
    </>
  );
};
