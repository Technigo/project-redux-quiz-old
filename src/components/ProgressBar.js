import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ProgressBar = () => {
  const questionNumber = useSelector(
    (state) => state.quiz.currentQuestionIndex + 1
  );
  const questionTotal = useSelector((state) => state.quiz.questions.length);

  return (
    <div>
      <p>
        Question {questionNumber} of {questionTotal}
      </p>
    </div>
  );
};
