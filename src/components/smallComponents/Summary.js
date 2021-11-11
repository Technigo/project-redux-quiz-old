import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";
import 'components/questions/Questions.css'

export const Summary = () => {
  const questions = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) => state.quiz.answers);

  const dispatch = useDispatch();

  const anotherTry = () => {
    dispatch(quiz.actions.restart());
  };

  console.log("this is answer", answers);

  const correctAnswersAmount = useMemo(() => {
    return answers.filter((answer) => answer.isCorrect).length;
  }, [answers]);

  return (
    <div className="question-container">
      <h1 className="question">Summary</h1>
      <p className="question">
        {`You got ${correctAnswersAmount} out of ${answers.length} correct!`}
      </p>

      {answers.map((item) => (
        <div key={item.questionId}>
          <h2 className="question">
            {`Question ${item.questionId} is ${
              item.isCorrect ? "correct" : "wrong"
            }`}
          </h2>
          <p className="question">{`You guessed: ${item.answer}`}</p>
          <p className="question">
            {`The correct one is:
                ${item.question.options[item.question.correctAnswerIndex]}`}
          </p>
        </div>
      ))}
      <button className="submit-button" type="submit" onClick={anotherTry}>
        Try Again
      </button>
    </div>
  );
};
