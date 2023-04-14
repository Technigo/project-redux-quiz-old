/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // This is where the MAGIC happens === Show answers
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userAnswerIndex, setUserAnswerIndex] = useState('');

  // This resets the answer for every question

  useEffect(() => {
    setHasAnswered(false);
    setUserAnswerIndex('');
  }, [question]);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    if (!answer) {
      setHasAnswered(true);
      setUserAnswerIndex(answerIndex);
      dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    }
  };

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  const guessCheck = (index) => {
    if (!hasAnswered) {
      return 'default-disabled';
    }
    if (index === question.correctAnswerIndex) {
      return 'correct';
    } else if (index === userAnswerIndex) {
      return 'wrong';
    } else {
      return 'default-disabled';
    }
  };

  return (
    <Main>
      <Board>
        <ProgressBar />
        <StyledImg src={question.img} />
        <Headline>{question.questionText}</Headline>
        <ButtonContainer>
          {question.options.map((option, index) => {
            return (
              <AnswerBtn
                correct={
                  hasAnswered &&
                  (index === question.correctAnswerIndex ||
                    index === userAnswerIndex)
                }
                wrong={
                  hasAnswered &&
                  index !== question.correctAnswerIndex &&
                  index === userAnswerIndex
                }
                options
                onClick={() => {
                  guessCheck();
                  onAnswerSubmit(question.id, index);
                  setTimeout(() => onNextQuestion(), 2000);
                }}
                key={option}
                type="button"
              >
                {option}
              </AnswerBtn>
            );
          })}
        </ButtonContainer>
      </Board>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0078bea7;
  border-radius: 10px;
  width: 94%;
  height: 80%;
  border: 3px solid #0078be;

  @media (min-width: 1025px) {
    width: 45%;
    height: 80%;
  }
`;
const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 2px solid red;
  margin: 20px;
`;

const StyledImg = styled.img`
  width: 313px;
  height: 286px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  gap: 1rem;
  justify-content: space-around;

  @media (max-width: 400px) {
    width: 250px;
  }
`;

const AnswerBtn = styled.button`
  width: 136px;
  height: 114px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: #0078be;
  font-weight: bold;
  font-family: 'Roboto';

  &:hover {
    transform: scale(1.025);
  }

  @media (max-width: 400px) {
    width: 40%;
    height: 100px;
  }

  // Props for changing the buttons color depending on user answer
  // "!important" because otherwise :nth-of-type overrides it

  ${({ correct }) =>
    correct &&
    `
border: solid 4px rgb(0, 255, 0) !important;
`}

  ${({ wrong }) =>
    wrong &&
    `
border: solid 4px red !important;
`}

&:nth-of-type(3n + 1) {
    background-color: #fad040;
  }
`;
const Headline = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
  font-family: 'Just another hand';
  font-weight: 400;
`;
