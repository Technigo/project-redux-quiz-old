import React from "react";
//import { useSelector } from "react-redux";

//const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex].isCorrect);

const AnswerButton = (props) => {
  return (
    <button className="button" type="button" key={props.key} onClick={props.onClick}>
      <span className="button-text">{props.text}</span>
    </button>
  );
};

export default AnswerButton;

{/*<button className={!isCorrect ? "button" : "correctbutton"} type="button" key={props.key} onClick={props.onClick}>*/}
{/*<span className="button-text">{props.text}</span>
</button>*/}
