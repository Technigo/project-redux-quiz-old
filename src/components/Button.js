import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Button = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };
  //   disabled,
  //   item,
  //   answer,
  //   index,
  //   question,
  //   onClick,
  // }) => {
  return (
    <>
      {question.options.map((item, index) => (
        <button
          disabled={!!answer}
          type="button"
          className={
            !answer
              ? "default-button"
              : index === question.correctAnswerIndex
              ? "right-button"
              : "wrong-button"
          }
          onClick={() => onAnswerSubmit(question.id, index)}
        ></button>
      ))}
    </>
  );
};
