/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { InnerWrapper, OuterWrapper } from 'styledcomponents/GlobaStyles';
/* import { CurrentQuestionStyles } from 'styledcomponents/CurrentQuestionStyles'; */
import { Summary } from './Summary';

import Form from './Form';
import { NavButtons } from './NavButtons';
/* import { Options } from './Options'; */

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const options = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].options
  );

  const answers = useSelector((state) => state.quiz.answers);

  const isCorrect = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]?.isCorrect
  );

  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  console.log('question:', question);
  console.log('options:', options);
  console.log('answers:', answers);
  console.log('isCorrect', isCorrect);

  if (!question) {
    return <h1>Åh nej! Jag kunde inte hitta den aktuella frågan!</h1>;
  }

  const handleOkayButtonClick = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('Rätt svar!');
    } else {
      window.alert('Fel svar!');
    }
    setQuestionAnswered(true);
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setQuestionAnswered(false);
    setAnswer('');
  };

  return (
    <OuterWrapper>
      {quizOver ? (
        <Summary />
      ) : (
        <InnerWrapper>
          <h1>🤓</h1>
          <h2>Fråga {question.id} av 5</h2>
          <h1>{question.questionText}</h1>
          {/* <Options /> */}
          {question.options.map((option, index) => {
            return (
              <Form
                setAnswer={setAnswer}
                setOptionIndex={setOptionIndex}
                answer={answer}
                questionAnswered={questionAnswered}
                option={option}
                index={index}
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

    </OuterWrapper>
  );
};
