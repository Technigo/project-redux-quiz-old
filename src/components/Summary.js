/* eslint-disable*/

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";
import { useState } from "react";

const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const [visible, setVisible] = useState(false);

  const correctAnswer = answers.filter((answers) => {
    return answers.isCorrect === true;
  });

  if (quizOver) {
    return (
      <div className="summary">
        <p>You got {correctAnswer.length} out of 5!</p>
        <h4>Your answers:</h4>
        {answers.map((answer) => (
          <p key={answer.questionId}>
            Question {answer.questionId}:
            <span className={answer.isCorrect ? "green" : "red"}>
              {" "}
              {answer.answer}
            </span>
          </p>
        ))}

        <button onClick={() => setVisible(!visible)}>
          Wanna see the right answers?
        </button>
        {visible && (
          <div>
            <p>Question 1: Red</p>
            <p>Question 2: Orange Country</p>
            <p>Question 3: Ryan 3</p>
            <p>Question 4: Triangle</p>
            <p>Question 5: Care bear</p>
          </div>
        )}
        <h5>OR..</h5>
        <button
          className="restart-btn"
          onClick={() => dispatch(quiz.actions.restart())}
        >
          Play again!
        </button>
      </div>
    );
  } else return null;
};

export default Summary;
