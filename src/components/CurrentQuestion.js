import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextButton } from 'components/NextButton';
import { quiz } from '../reducers/quiz';
import { AnswerButton } from './AnswerButton';
import { Summary } from '../pages/Summary';
import { MainQuestion } from './MainStyles';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // TINAS ADDITION:
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();
  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  // END

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {/* TINAS ADDITION: */}
      {quizOver && <Summary />}
      {!quizOver && (
        <div> {/* END */}
          <MainQuestion>Question: {question.questionText}</MainQuestion>
          {question.options.map((option, index) => (
            <AnswerButton
              key={option}
              option={option}
              index={index} />
          ))}
          {/* TINAS ADDITION: */}
          <NextButton clickAction={moveToNext} content="Next" />
        </div>
      )} {/* END */}
    </>
  )
}