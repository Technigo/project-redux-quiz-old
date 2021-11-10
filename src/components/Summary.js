import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);

  const rightAnswers = answer.filter((item) => item.isCorrect === true);

  const score = () => {
    if (rightAnswers.length >= 0 && rightAnswers.length < 2) {
      return <p> You are a millenial</p>;
    }
    if (rightAnswers.length >= 2 && rightAnswers.length < 4) {
      return <p> You are a millenial</p>;
    } else return <p> You are legend</p>;
  };
  return (
    <>
      <h2>
        You got {rightAnswers.length} out of {question.length}
      </h2>
      <div>{score}</div>
    </>
  );
};

export default Summary;
