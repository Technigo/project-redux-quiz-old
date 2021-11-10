import React from "react";
import { useSelector } from "react-redux";
import NextStepButton from '../components/NextStepButton'

import { CurrentQuestion } from "components/CurrentQuestion";

import Progressbar from "../components/Progressbar";
import Header from "../components/Header";

const Questions = () => {
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )


  return (
    <>
    <Header category={question.category}/>
      <CurrentQuestion
        question={question}
        usersAnswer={usersAnswer}
      />
      <NextStepButton usersAnswer={usersAnswer}/>

      <Progressbar numberOfQuestions={numberOfQuestions} question={question} />
    </>
  );
};

export default Questions;
