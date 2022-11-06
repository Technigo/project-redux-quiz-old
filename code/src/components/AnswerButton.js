/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';
import { Devices } from './MainStyles';

// Component for the buttons with the different answers
export const AnswerButton = ({ index, option, setGoToNextButton }) => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(false);

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  // Function that is activated when the user clicks on an answer
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }));
    setActiveBtn(true);
    setGoToNextButton(true);
  }

  const correctAnswer = usersAnswer && index === question.correctAnswerIndex;

  return (
    <StyledButton
      className={activeBtn ? (correctAnswer ? 'correct' : 'wrong') : 'default'}
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">{option}
    </StyledButton>
  )
};

// The local styled components
const StyledButton = styled.button`
  background-color: #FFCD42;
  border: #FFCD42;
  width: 310px; // Used to be 310px
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 25px;
  padding: 18px; // Used to be 20px
  margin: 10px;
  font-family: 'Special Elite', cursive;

  &.correct {
    background-color: green;   
  }

  &.wrong {
    background-color: red;
  }

  &:disabled {
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
