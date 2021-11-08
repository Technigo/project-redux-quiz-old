import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import "./FourthQuestion.css";

export const FourthQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const Dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    Dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
      })
    );
  };

  return (
    <form className="question-container">
      <h2>{question.questionText}</h2>
      <img
        src="https://st2.depositphotos.com/31984086/46224/v/600/depositphotos_462241918-stock-illustration-semla-is-a-traditional-sweet.jpg"
        alt="semla"
      />
      <select
        className="question-select"
        onChange={(event) =>
          onAnswerSubmit(question.id, parseInt(event.target.value))
        }
      >
        {question.options.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};
