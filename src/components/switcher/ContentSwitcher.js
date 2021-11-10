import React from "react";
import { useSelector } from "react-redux";
import { QuestionsSwitcher } from "./QuestionsSwitcher";
import { Summary } from "../smallComponents/Summary";

export const ContentSwitcher = () => {
  const quizStatus = useSelector((state) => state.quiz.quizOver);
  console.log('quizStatus question content switcher', quizStatus)

  if (quizStatus === false) {
    return <QuestionsSwitcher />;
  } else {
    return <Summary />;
  }
};
