import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Summary } from 'components/Summary'

export const CurrentQuestion = ({ id }) => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const isQuizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if(isQuizOver) {
    return <Summary  /> 
  }

  const onSubmitAnswer = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: id, answerIndex: index })
    );
    dispatch(
      quiz.actions.goToNextQuestion({ id })
    );
  };

  return (
    <div>
      <h1> {question.questionText} </h1>
      {question.options.map((item, index) => (
        <button key={item} onClick={() => onSubmitAnswer(question.id, index)}>
          {item}
        </button>
      ))}
    </div>
  );
};
