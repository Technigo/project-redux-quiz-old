import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const answers = useSelector((store) => store.quiz.answers);

  // console.log(answers);
  return (
    <>
      <h1>Quiz is done!</h1>
      {answers.map((answer) => {
        const correctAnswer =
          answer.question.options[answer.question.correctAnswerIndex];

        return (
          <React.Fragment key={answer.questionId}>
            <h1>{answer.question.questionText}</h1>
            <h2>You answered: {answer.answer}</h2>
            <h2>You were {answer.isCorrect ? "right!" : "wrong HAHA."}</h2>
            {!answer.isCorrect && (
              <h2>The correct answer was {correctAnswer}</h2>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Summary;
