import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: id, answerIndex: index }),
      // index === question.correctAnswerIndex ? <p>Correct!</p> : <p>Incorrect</p>
    );
    console.log("correct answer:", question.correctAnswerIndex);
    console.log("chosen answer:", index);
  };

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => onAnswerSubmit(question.id, index)}
        >
          {option.answer}
        </button>
      ))}
      <p>{question.correctAnswerIndex}</p>
      {usersAnswer?.isCorrect && <p>Correct!</p>}
      {usersAnswer?.isCorrect === false && <p>Incorrect!</p>}

      <button onClick={() => onNextQuestionSubmit(question.id)}>Next</button>
    </div>
  );
};
