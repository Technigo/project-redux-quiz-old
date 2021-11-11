// vill skapa något som visar i en return "x of x questions anwserd"
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";

export const PrgsB = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  const now = (question.id / 5) * 100;
  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  return progressInstance;
};

//detta har jag kopierat in från en annan github, vet inte hur jag ska göra om det till att passa oss
