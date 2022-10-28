import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextButton } from 'components/NextButton';
import { quiz } from '../reducers/quiz';
import { AnswerButton } from './AnswerButton';
import { Summary } from '../pages/Summary';
import { MainQuestion } from './MainStyles';
import { ProgressBar } from './ProgressBar'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();
  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {quizOver && <Summary />}
      {!quizOver && (
        <div>
          <MainQuestion>Question: {question.questionText}</MainQuestion>
          {question.options.map((option, index) => (
            <AnswerButton
              key={option}
              option={option}
              index={index} />
          ))}
          <ProgressBar />
          <NextButton clickAction={moveToNext} content="Next" />
        </div>
      )}
    </>
  )
}