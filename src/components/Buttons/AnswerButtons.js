/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';

export const AnswerButton = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [showSelectedColor, setShowSelectedColor] = useState(false);
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setShowSelectedColor(true);
    setTimeout(() => {
      dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }));
      setShowSelectedColor(false);
      setSelectedOption(undefined);
      dispatch(quiz.actions.goToNextQuestion());
    }, 1000);
  };

  return (
    <BtnsWrapper>
      {question.options.map((singleOption, index) => (
        <Btn
          key={singleOption}
          type="button"
          value={index}
          showSelectedColor={showSelectedColor && selectedOption === index}
          index={index}
          isCorrectAnswer={index === question.correctAnswerIndex}
          aria-label={`Answer option ${index + 1}: ${singleOption}`}
          onClick={() => handleOptionClick(index)}>
          {singleOption}
        </Btn>
      ))}
    </BtnsWrapper>
  );
};

const Btn = styled.button`
  border-style: double;
  border-color: black;
  padding: 10px;
  color: ${(props) => (props.showSelectedColor ? (props.isCorrectAnswer ? '#4CAF50' : '#da1717') : '#fff')};
  border-radius: 10px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border: solid 2px black;
  width: 133px;
  background-color: #3d85c6;

  &:hover {
    transform: scale(1.2);
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;
