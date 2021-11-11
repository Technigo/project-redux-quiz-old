import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { quiz } from "../reducers/quiz";

const QuestionBackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80");
  background-color: rgb(205, 206, 201);
  background-size: cover;
  height: 600px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue";
  font-size: 10px;
`;

const QuestionText = styled.div`
  background-color: rgb(205, 206, 201);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnswerButton = styled.button`
  width: 250px;
  height: 100px;
`;

const QuestionImage = styled.div``;

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answers = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  console.log(answers);

  // Detect if question is answered or not
  const [isAnswered, setAnswered] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onSubmitAnswer = (index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    );
    console.log(`clicked ${index}`);
    setAnswered(true);
  };

  const onNextClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setAnswered(false);
  };

  // efter ett val så får man reda på om det var rätt/fel samt att knapparna blir disabled + det kommer en "next question" knapp

  return (
    <QuestionBackgroundImage>
      <div>
        <QuestionText>
          <h1> {question.questionText}</h1>
          <QuestionImage>{question.imgURL} </QuestionImage>
          {/* Trying on line 77 to thet the image to show at the appropriate question */}
          {question.options.map((option, index) => (
            <button
              key={option}
              disabled={answers.length === question.id}
              className={
                ("AnswerButton",
                answers[currentQuestionIndex]?.isCorrect &&
                answers[currentQuestionIndex]?.answerIndex === index
                  ? "button correct"
                  : answers.length !== question.id
                  ? "button"
                  : "button incorrect")
              }
              onClick={() => onSubmitAnswer(index)}
            >
              {option}
            </button>
          ))}
          {answers.length === question.id && !quizOver && (
            <button onClick={() => onNextClick()}>
              {answers.length + 1 === question.length
                ? "Show results"
                : "Next Question"}
            </button>
          )}
        </QuestionText>
        {/* {quizOver && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Show results
        </button>
      )} */}
        {isAnswered && (
          <div>
            {answers[currentQuestionIndex]?.isCorrect && (
              <p>{question.answerText}</p>
            )}
            {!answers[currentQuestionIndex]?.isCorrect && (
              <p>Sorry, not quite right!</p>
            )}
          </div>
        )}
      </div>
    </QuestionBackgroundImage>
  );
};
