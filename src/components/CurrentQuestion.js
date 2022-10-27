/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { InnerWrapper } from 'styledcomponents/GlobalStyles';
import { Summary } from './Summary';

import Form from './Form';
import { NavButtons } from './NavButtons';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  if (!question) {
    return <h1>Åh nej! Jag kunde inte hitta den aktuella frågan!</h1>;
  }

  const handleOkayButtonClick = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    setQuestionAnswered(true);
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setQuestionAnswered(false);
    setAnswer('');
  };

  return (
    <div>
      {quizOver ? (
        <Summary />
      ) : (
        <InnerWrapper>
          <p>🤓</p>
          <h2>Fråga {question.id} av 5</h2>
          <h1>{question.questionText}</h1>
          {question.options.map((option, index) => {
            return (
              <Form
                setAnswer={setAnswer}
                setOptionIndex={setOptionIndex}
                answer={answer}
                questionAnswered={questionAnswered}
                option={option}
                index={index}
                answerIndex={optionIndex}
                correctIndex={question.correctAnswerIndex}
              />
            );
          })}

          <NavButtons
            questionAnswered={questionAnswered}
            handleOkayButtonClick={handleOkayButtonClick}
            questionId={question.id}
            optionIndex={optionIndex}
            handleNextButton={handleNextButton}
            answer={answer}
          />
        </InnerWrapper>
      )}
    </div>
  );
};
