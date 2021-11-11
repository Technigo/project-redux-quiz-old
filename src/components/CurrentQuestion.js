/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

import { Summary } from "./Summary";
import { Button } from "./Button";
import { BackgroundVideo } from "./BackgroundVideo";
import { Counter } from "./Counter";
// import Matrix from "BackgroundVideo/Matrix.mp4"

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  // Selectors
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  // const onAnswerSubmit = (id, index) => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  // };

  if (!quizOver) {
    return (
      <>
        <main className="main-container">
          <BackgroundVideo />
          <div className="wrapper">
            <h1>Question: {question.questionText}</h1>
            {question.options.map((item, index) => (
              <div className="button-container" key={index}>
                <img className="pill-image" src="/pill.png" />
                <Button index={index} item={item}></Button>
              </div>
            ))}

            {/* <img src="/matrix-image.jpeg" alt="matrix" /> */}
            {/* <video autoPlay muted loop>
    <source src="/Matrix.mp4" type="video/mp4" />
  </video> */}
            <button
              className="re-start-button"
              onClick={handleClick}
              disabled={!answer}
            >
              NEXT QUESTION
            </button>
            {/* Added counter component */}
            <Counter />
            {/* <p
              style={{
                color: "white",
              }}
            >
              {question.id}/5
            </p> */}
          </div>
        </main>
      </>
    );
  }
  return (
    <div>
      <BackgroundVideo />
      <Summary />
    </div>
  );
};
