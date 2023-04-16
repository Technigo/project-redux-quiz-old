import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

const NextQuestionButton = styled.button`
  width: 300px;
  height: 40px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #564593;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 60px;

:hover {
  background-color: #564593;
  box-shadow: 0px 15px 20px rgba(229, 46, 177, 0.4);
  color: #fff;
  transform: translateY(-7px);
}`

const NextButton = () => {
  const dispatch = useDispatch()
  const onButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div>
      <NextQuestionButton onClick={onButtonClick}>Restart Quiz!</NextQuestionButton>
    </div>
  )
}

export default NextButton