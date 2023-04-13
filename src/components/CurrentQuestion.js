import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextButton } from './NextButton';
import { ProgressBar } from './ProgressBar';
import { AnswerButton } from './AnswerButton';
import { SummaryPage } from '../pages/Summary';
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const [goToNextButton, setGoToNextButton] = useState(false);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setGoToNextButton(false);
  };

  return (
    <>
      {quizOver && <SummaryPage />}
      {!quizOver && (
        <div className="eslint-hater">
          <h1>Question: {question.questionText}</h1>
          <div className="answer-buttons">
            {question.options.map((option, index) => (
              <AnswerButton
                key={option}
                index={index}
                option={option}
                setGoToNextButton={setGoToNextButton} />
            ))}
          </div>
          {goToNextButton && <NextButton clickAction={moveToNext} />}
          <ProgressBar />
        </div>
      )}
    </>
  );
};