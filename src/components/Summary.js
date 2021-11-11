import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);

  return (
    <div className="summary-container">
      <h1>TEST</h1>
      {answers.map((answer) => (
        <div key={answer.question.questionText}>
          <p>
            {answer.question.questionText} <span>&nbsp;{answer.answer}</span>
            {answer.isCorrect ? "✅" : "❌"}
          </p>
          {!answer.isCorrect
            ? answer.question.options[answer.question.correctAnswerIndex]
            : ""}
        </div>
      ))}
      <button
        className="re-start-button"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        RESTART
      </button>
    </div>
  );
};
