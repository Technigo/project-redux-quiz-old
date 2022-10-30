import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NextButton } from 'components/NextButton';
import { AnswerButton } from './AnswerButton';
import { quiz } from '../reducers/quiz';
import { Summary } from '../pages/Summary';
import { MainQuestion, InnerWrapper, Devices } from './MainStyles';
import { ProgressBar } from './ProgressBar';

// Question-component for all qustions
export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const [goToNextButton, setGoToNextButton] = useState(false);

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // Function that activates when user clicks on an answer,
  // also resets the goToNextButton-state hook
  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setGoToNextButton(false);
  }

  return (
    <>
      {quizOver && <Summary />}
      {!quizOver && (
        <CloneWrapper>
          <MainQuestion>Question: {question.questionText}</MainQuestion>
          <ButtonWrapper>
            {question.options.map((option, index) => (
              <AnswerButton
                key={option}
                option={option}
                index={index}
                setGoToNextButton={setGoToNextButton} />
            ))}
          </ButtonWrapper>
          {goToNextButton ? (<NextButton clickAction={moveToNext} content="Next" />) : (<DisabledButton type="button">Next</DisabledButton>)}
          <ProgressBar />
        </CloneWrapper>
      )}
    </>
  )
}

// The local styled components
const CloneWrapper = styled(InnerWrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5%;

  @media ${Devices.tablet} {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5%;

  @media ${Devices.tablet} {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

const DisabledButton = styled.button`
  border-radius: 5px;
  color: rgb(0, 0, 0, 0.5);
  font-size: 18px;
  padding: 10px;
  font-family: 'Courier Prime', monospace;
  margin-top: 0;

  @media ${Devices.tablet} {
    font-size: 20px;
    padding: 15px;
  }
`