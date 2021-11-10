import React from "react";
import { useSelector } from "react-redux";
import { GenericQuestion } from "./GenericQuestion";
import { EntryPage } from "./EntryPage";

export const QuestionsSwitcher = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  let quizStatus = useSelector((state) => state.quiz.quizOver);

  if (!questionIndex) {
    return <EntryPage />;
  }
  if (questionIndex === 0) {
    return <GenericQuestion />;
  }
  if (questionIndex === 1) {
    return <GenericQuestion />;
  }
  if (questionIndex === 2) {
    return <GenericQuestion />;
  }
  if (questionIndex === 3) {
    return <GenericQuestion />;
  }
  if (questionIndex === 4) {
    return <GenericQuestion />;
  }
  if (questionIndex === 5) {
    quizStatus = true;
    return <GenericQuestion />;
  }
};
