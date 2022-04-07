import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SummaryDiv, QADiv } from "components_styled/StyledElements";
import { quiz } from "reducers/quiz";
import ProgressBar from "./ProgressBar";

const Summary = ({ setQuizDone }) => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  let counter = 0;

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
    setQuizDone(false);
  };

  return (
    <SummaryDiv>
      <h1>Quiz is done!</h1>
      {answers.map((answer, index) => {
        const correctAnswer =
          answer.question.options[answer.question.correctAnswerIndex];
        if (correctAnswer === answer.answer) {
          counter++;
        }

        return (
          <QADiv key={answer.questionId}>
            <span className="text-align-center">Question {index + 1}:</span>
            <h2>
              <br />
              {answer.question.questionText}
            </h2>
            <p>
              You answered {answer.answer} which was{" "}
              {answer.isCorrect ? "correct!" : "sadly incorrect."}
            </p>
            {!answer.isCorrect && <p>The correct answer was {correctAnswer}</p>}
          </QADiv>
        );
      })}
      <QADiv>
        <p>You got {counter} / 5 correct!</p>
        {counter > 4 ? (
          <p>WOOOOOOHOOOOO!</p>
        ) : counter > 2 ? (
          <p>Not bad!</p>
        ) : (
          <p>Better luck next time!</p>
        )}
      </QADiv>
      <ProgressBar setQuizDone={setQuizDone} restartQuiz={restartQuiz} />
    </SummaryDiv>
  );
};

export default Summary;
