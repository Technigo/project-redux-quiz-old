/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
// import React, { useState } from 'react'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { AnswerButton, NextQuestion } from './Button'
import { SummaryTest } from './SummaryTest';

export const CurrentQuestion = () => {
  // const [disabled, setDisabled] = useState(false);

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();
  const answerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }
  const quizOver = useSelector((state) => state.quiz.quizOver);
  // const userAnswer = useSelector((state) =>
  //   state.quiz.answers.find((a) => a.questionId === question.id));
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if (quizOver) {
    return (
      <SummaryTest />
    )
  }

  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div className="options">
        {question.options.map((item, index) => (
          <button type="button" index={index} item={item} onClick={() => answerSubmit(question.id, index)}>{item}</button>
          // <Button
          //   key={item}
          //   item={item}
          //   index={index}
          //   questionId={question.id}
          //   question={question}
          //   answer={userAnswer}
          //   setDisabled={setDisabled}
          //   disabled={disabled} />
        ))}
        <AnswerButton />
        <NextQuestion />
      </div>
    </div>
  )
}
