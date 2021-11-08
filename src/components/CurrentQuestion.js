import React from "react";
import { useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  // const globalStore = useSelector((store) => store); //useSelector is a callback function and takes 1 predefined thing = store. YOu always ask for store. something to get the information from the store.
  // console.log("global store", globalStore);

  // const quizSlice = useSelector((store) => store.quiz);
  // console.log(quizSlice);

  if (!question) {
    return <Header2>Oh no! I could not find the current question!</Header2>;
  }

  return (
    <div>
      <Header2>{question.questionText}</Header2>
      {question.options.map((item, index) => (
        <button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
          {item}
        </button>
      ))}
    </div>
  );
};

const Header2 = styled.h2`
  margin: 0;
`;
