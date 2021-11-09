import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const questionCompleted = useSelector((state) => state.quiz.currentQuestionIndex);
  const questionsTotal = useSelector((state) => state.quiz.questions.length);
  const quizStatus = useSelector((state) => state.quiz.quizOver);
  console.log("qqq", questionCompleted, questionsTotal);
  let completed = Math.round((questionCompleted / questionsTotal) * 100);

  if (quizStatus === true) {
    completed = 100;
  }

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "goldenrod",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};
