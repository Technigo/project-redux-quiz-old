import React from "react";
import { useSelector } from "react-redux";

import { Results } from "./Results";
import { QuizQuestions } from "./QuizQuestions";

export const QuizCards = () => {
  const quizIsOver = useSelector((state) => state.quiz.quizOver);

  return (
    <>
      {quizIsOver ? <Results /> : <QuizQuestions />}
    </>
  );
};

