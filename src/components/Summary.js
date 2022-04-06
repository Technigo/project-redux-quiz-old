import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  //const questions = useSelector((state) => state.quiz.questions);
  console.log(answers);
  let result = 0;
  answers.forEach((answer) => {
    console.log(answer);
    if (answer.isCorrect) {
      result = result + 1;
    }
  });
  /* const useranswer = answers.map((answer) => answer.answerIndex);
  const correctAnswer = questions.map(
    (question) => question.correctAnswerIndex
  );
  console.log("username", useranswer);
  console.log("correct", correctAnswer); */
  return (
    <div>
      <h1>Summary</h1>
      <p>Your correct answers are {result} /5 </p>
    </div>
  );
};
export default Summary;
