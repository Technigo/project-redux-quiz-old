import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  //forwarding data

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item) => {
        return <button key={item}>{item}</button>;
      })}
    </div>
  );
};
