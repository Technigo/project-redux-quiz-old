import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
// import RestartButton from "./RestartButton";

// const RestartButton = () => {
//   const dispatch = useDispatch();

//   return (
//     <button type="button" onClick={() => dispatch(quiz.actions.restart())}>
//       Restart
//     </button>
//   );
// };

const SubmittedView = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((question) => question.isCorrect).length;
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Let's see how you did</h2>
      {answers.map((question, index) => {
        return (
          <p key={index}>
            {question.question.questionText} belongs in {question.answer.value}:{" "}
            {question.isCorrect ? "correct" : "incorrect"}
          </p>
        );
      })}
      <p>
        You got {correctAnswers} of {answers.length} questions correct!
      </p>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>
        Restart
      </button>
    </section>
  );
};

export default SubmittedView;
