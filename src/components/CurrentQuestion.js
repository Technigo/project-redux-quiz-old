import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
export const CurrentQuestion = () => {
  //getting data from the store
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  //
  const store = useSelector((state) => state);
  console.log(store);
  console.log(question);
  //

  //forwarding data to the store
  const dispatch = useDispatch();
  const onAnswersubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    dispatch(quiz.actions.goToNextQuestion());
  };
  //////
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => {
        return (
          <button onClick={() => onAnswersubmit(question.id, index)} key={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
