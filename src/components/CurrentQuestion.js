import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Summary } from "./Summary";
import { ProgressBar } from "./ProgressBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

const QuestionContainer = styled.div``;
const Question = styled.h1``;

const Button = styled.button``;

const currentQuestionIndex = styled.h1``;

export const CurrentQuestion = () => {
  // Getting data from the store
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const store = useSelector((state) => state);
  console.log(store);

  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <div>Oh no! I could not find the current question!</div>;
  }

  return (
    <main>
      <Header />

      {quizOver ? (
        <Summary />
      ) : (
        <QuestionContainer>
          <Question>Question: {question.questionText}</Question>
          {question.options.map((item, index) => (
            <Button
              onClick={() => onAnswerSubmit(question.id, index)}
              key={item}
            >
              {item}
            </Button>
          ))}
        </QuestionContainer>
      )}
      <ProgressBar />
      <Footer />
    </main>
  );
};
