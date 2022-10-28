/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';
import { Devices } from './MainStyles';

export const AnswerButton = ({ index, option }) => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(false);

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }));
    setActiveBtn(true);
    console.log('questionId', questionId)
    console.log('answerIndex', answerIndex)
  }

  const correctAnswer = usersAnswer && index === question.correctAnswerIndex
  // console.log('question.correctAnswerIndex', question.correctAnswerIndex)
  // console.log('usersAnswer && index', usersAnswer && index)
  // console.log('correctAnswer', correctAnswer)

  return (
    <StyledButton
      className={activeBtn ? (correctAnswer ? 'correct' : 'wrong') : 'default'}
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">{option}
    </StyledButton>
  )
};

const StyledButton = styled.button`
  background-color: #FFCD42;
  border: #FFCD42;
  width: 200px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 25px;
  padding: 20px;
  margin: 10px;

  &.correct {
    background-color: green;   
  }

  &.wrong {
    background-color: red;
  }

  &:disabled {
    /* background-color: lightgray; */
    opacity: .50;
  }

  @media ${Devices.tablet} {
    &:hover {
      filter: saturate(50);

      &:disabled {
        filter: saturate(1);
      }
    }
  }
`