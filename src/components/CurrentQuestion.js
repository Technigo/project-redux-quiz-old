import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Summary from "./Summary";
export const CurrentQuestion = () => {
  //getting data from the store
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );
  //
  const currState = useSelector((state) => state.quiz);
  console.log("answers", currState.answers);
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

  if (currState.answers.length === 5) {
    return <Summary />;
  } else {
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((item, index) => {
          return (
            <button
              onClick={() => onAnswersubmit(question.id, index)}
              key={item}
            >
              {item}
            </button>
          );
        })}
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
