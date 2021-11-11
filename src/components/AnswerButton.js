import React from "react";
import { useSelector } from "react-redux";
import { CurrentQuestion } from "./CurrentQuestion";

const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex].isCorrect);

const AnswerButton = (props) => {
  return (
    <button className={!isCorrect ? "button" : "correctbutton"} type="button" key={props.key} onClick={props.onClick}>
      <span className="button-text">{props.text}</span>
    </button>
  );
};

export default AnswerButton;
