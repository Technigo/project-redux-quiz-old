/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Summary from "components/Summary";
import { Button } from "components/Button";
import { BackgroundVideo } from "components/BackgroundVideo";
// import Matrix from "BackgroundVideo/Matrix.mp4"
import { quiz } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  if (!quizOver) {
    return (
      <>
        <main className="main-container">
          <BackgroundVideo />
          <div className="wrapper">
            <h1>Question: {question.questionText}</h1>
            {question.options.map((item, index) => (
              <div className="button-container" key={index}>
                {" "}
                <img className="pill-image" src="/pill.png" />
                <Button
                // questionId={question.id}
                // correctAnswerIndex={question.correctAnswerIndex}
                // index={index}
                // answerIndex={question.answerIndex}
                // disabled={!!answer}
                // onClick={() => onAnswerSubmit(question.id, index)}
                // type="button"
                // item={item}
                // question={question}
                // answer={answer}
                ></Button>
              </div>
            ))}

            {/* <img src="/matrix-image.jpeg" alt="matrix" /> */}
            {/* <video autoPlay muted loop>
    <source src="/Matrix.mp4" type="video/mp4" />
  </video> */}
            <button
              className="button-container"
              onClick={handleClick}
              disabled={!answer}
            >
              NEXT QUESTION
            </button>
            <p
              style={{
                color: "white",
              }}
            >
              {question.id}/5
            </p>
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
