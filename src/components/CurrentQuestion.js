import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Summary from "./Summary";
export const CurrentQuestion = () => {
  //getting data from the store

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answers = useSelector((state) => state.quiz.answers);
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );

  const finalQuestion = useSelector((state) => state.quiz.quizOver);
  //
  const currState = useSelector((state) => state.quiz);
  console.log("answers", currState.answers);
  console.log(question);
  //

  //forwarding data to the store
  const dispatch = useDispatch();
  const onAnswersubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };
  const nextQueclick = () => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  //////
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (finalQuestion === true) {
    return <Summary />;
  } else {
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((item, index) => {
          return (
            <button
              disabled={answers.length === question.id}
              onClick={() => onAnswersubmit(question.id, index)}
              key={item}
            >
              {item}
            </button>
          );
        })}
        {answer && (
          <div>{`This is ${answer.isCorrect ? "correct!" : "wrong"}`}</div>
        )}
        <p>Questions Left: {question.id}/5</p>
        <button
          className="next-que-button"
          onClick={nextQueclick}
          disabled={!answer}
        >
          NEXT QUESTION
        </button>
      </div>
    );
  }
};
