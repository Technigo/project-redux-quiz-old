/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import Results from 'components/Results';
import NavButtons from './NavButtons';
import Form from './Form';
import { Wrapper, QuestionContainer, Header, P } from './GlobalStyles'

const ButtonWrapper = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
align-items: center;
width: 75%;
gap: 10px;
color: #fff;
font-family: 'Yanone Kaffeesatz', sans-serif;
font-size: 28px;
line-height: 1.3em;
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
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
    <section>
      {quizOver ? (
        <Results />
      ) : (
        <Wrapper>
          <QuestionContainer>
            <Header> Question {question.id} of 5 </Header>
            <P> {question.questionText} </P>
            <ButtonWrapper>
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
                    correctIndex={question.correctAnswerIndex} />
                );
              })}
            </ButtonWrapper>
            <NavButtons
              questionAnswered={questionAnswered}
              handleOkayButtonClick={handleOkayButtonClick}
              questionId={question.id}
              optionIndex={optionIndex}
              handleNextButton={handleNextButton}
              answer={answer} />
          </QuestionContainer>
        </Wrapper>
      )}
    </section>
  );
};
