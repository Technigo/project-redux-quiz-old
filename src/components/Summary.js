import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);

  const answer = useSelector((store) => store.quiz.answers);
  // const question = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  // );
  // answer.map((item) => item.answer
  // console.log(answer);
  // console.log(answer.length);

  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  console.log(rightAnswers.length);
  return (
    <h2>
      Your score : {rightAnswers.length}/{question.length}
    </h2>
  );
};

export default Summary;
