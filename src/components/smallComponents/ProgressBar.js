import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const questionCompleted = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const questionsTotal = useSelector((state) => state.quiz.questions.length);
  let completed = Math.round((questionCompleted / questionsTotal) * 100);

  if (questionCompleted === 5) {
    completed = 100;
  }

  const alignmentStyles = {
    width: "80%",
  };

  const containerStyles = {
    height: 25,
    backgroundColor: "#a37c48c0",
    borderRadius: 50,
    marginTop: 90,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#4e1d10",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "#dfa02b",
    fontWeight: "bold",
  };

  return (
    <div style={alignmentStyles}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};
