import React from "react";
import { useSelector } from "react-redux";

import {
  ProgressIcons,
  ProgressIconsWrapper
} from "MainStyles";

export const ProgressBar = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const questions = useSelector((state) => state.quiz.questions);

  return (
    <ProgressIconsWrapper>
      {questions.map((question) => (
        <ProgressIcons
          key={question.id}
          right={answers[question.id]?.isCorrect}
          wrong={answers[question.id]?.isCorrect === false}>
        </ProgressIcons>
      ))}
    </ProgressIconsWrapper>
  );
};
