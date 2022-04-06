import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

import Buttons from "./Buttons";

const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const dispatch = useDispatch();

  const onAnswerSubmit = (index) =>
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }));

  const checkAnswer = (index) =>
    question.correctAnswerIndex === index ? console.log("Correct") : console.log("Wrong");

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <img width={200} src={question.image} alt={question.questionText} />
      {question.options.map((option, index) => {
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onAnswerSubmit(index);
              checkAnswer(index);
            }}
          >
            {option.label}
          </button>
        );
      })}
      <Buttons />
      <p>{currentQuestionIndex + 1}/{questions.length}</p>
    </div>
  );
};
export default CurrentQuestion;
