import React from "react";
import { useSelector } from "react-redux";
import { EntryPage } from "../smallComponents/EntryPage";
import { FirstQuestion } from "components/questions/FirstQuestion";
import { SecondQuestion } from "components/questions/SecondQuestion";
import { ThirdQuestion } from "components/questions/ThirdQuestion";
import { FourthQuestion } from "components/questions/FourthQuestion";
import { FifthQuestion } from "components/questions/FifthQuestion";
import { ProgressBar } from "components/smallComponents/ProgressBar";
import styled from "styled-components";

const PageStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionsSwitcher = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  let quizStatus = useSelector((state) => state.quiz.quizOver);

  if (!questionIndex) {
    return <EntryPage />;
  }
  if (questionIndex === 1 && quizStatus === false) {
    return (
      <PageStyling>
        <ProgressBar />
        <FirstQuestion />
      </PageStyling>
    );
  }
  if (questionIndex === 2) {
    return (
      <PageStyling>
        <ProgressBar />
        <SecondQuestion />
      </PageStyling>
    );
  }
  if (questionIndex === 3) {
    return (
      <PageStyling>
        <ProgressBar />
        <ThirdQuestion />
      </PageStyling>
    );
  }
  if (questionIndex === 4) {
    return (
      <PageStyling>
        <ProgressBar />
        <FourthQuestion />
      </PageStyling>
    );
  }
  if (questionIndex === 5) {
    quizStatus = true;
    return (
      <PageStyling>
        <ProgressBar />
        <FifthQuestion />
      </PageStyling>
    );
  }
};
