import React from "react";
import { useSelector } from "react-redux";
import { EntryPage } from "../smallComponents/EntryPage";
import { FirstQuestion } from "components/questions/FirstQuestion";
import { SecondQuestion } from "components/questions/SecondQuestion"
import { ThirdQuestion } from "components/questions/ThirdQuestion";
import { FourthQuestion } from "components/questions/FourthQuestion";
import { FifthQuestion } from "components/questions/FifthQuestion";
import { ProgressBar } from "components/smallComponents/ProgressBar";


export const QuestionsSwitcher = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  let quizStatus = useSelector((state) => state.quiz.quizOver);
  console.log('quizStatus question switcher', quizStatus)

  if (!questionIndex) {
    return <EntryPage />;
  }
  if (questionIndex === 1) {
    return (
    <>
      <ProgressBar />
      <FirstQuestion />
    </>
    )
  }
  if (questionIndex === 2) {
    return (
    <>
      <ProgressBar />
      <SecondQuestion/>
    </>
    )
  }
  if (questionIndex === 3) {
    return (
    <>
    <ProgressBar />
    <ThirdQuestion />
    </>
    )
  }
  if (questionIndex === 4) {
    return (
      <>
      <ProgressBar />
      <FourthQuestion />
      </>
      )
  }
  if (questionIndex === 5) {
    quizStatus = true;
    return (
      <>
      <ProgressBar />
      <FifthQuestion/>
      </>
      );
  }
};
