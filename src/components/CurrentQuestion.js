import React from 'react';
import { useSelector } from 'react-redux';
import { AnswerButton } from './AnswerButton';
import { Summary } from '../pages/Summary';
import { MainQuestion } from './MainStyles';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const quizOver = useSelector((state) => state.quiz.quizOver);

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
        </div>
      )}
    </>
  )
}