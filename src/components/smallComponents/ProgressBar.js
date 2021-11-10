import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const questionCompleted = useSelector((state) => state.quiz.currentQuestionIndex);
  const questionsTotal = useSelector((state) => state.quiz.questions.length);
  console.log("qqq", questionCompleted, questionsTotal);
  let completed = Math.round((questionCompleted / questionsTotal) * 100);

  if (questionCompleted === 5) {
    completed = 100;
  }

  const containerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "red",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="align-progress-bar">
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};
