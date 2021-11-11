import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);

  return (
    <>
      <h2>
        You got {rightAnswers.length} out of {question.length}
      </h2>
      <div>
        {(rightAnswers.length < 2 && <p>You sucks!</p>) ||
          (rightAnswers.length <= 4 && <p>You are medioker!</p>) ||
          (rightAnswers.length === 5 && <p>You are a legend!</p>)}
      </div>
    </>
  );
};

export default Summary;
