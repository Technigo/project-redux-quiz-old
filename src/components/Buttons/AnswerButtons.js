/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

export const AnswerButton = () => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const [guessedAnswerIndex, setGuessedAnswerIndex] = useState('');
  const onButtonClick = () => {
    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion());
    }, 1200);
  }
  /*
  const [color, setColor] = useState('blank')
  const [AnswerColor, setAnswerColor] = useState('green') */

  console.log(guessedAnswerIndex)
  return (
    <BtnsWrapper>
      {question.options.map((singleOption, index) => (
        <Btn
          key={singleOption}
          type="button"
          value={index}
          onClick={(e) => {
            setGuessedAnswerIndex(Number(e.target.value));
            onButtonClick()
          }}>
          {singleOption}
        </Btn>
      ))}
    </BtnsWrapper>
  )
}
const Btn = styled.button`
font-size: 18px;`

const BtnsWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;`