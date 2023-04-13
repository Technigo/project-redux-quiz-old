/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

export const AnswerButton = () => {
  const [showSelectedColor, setShowSelectedColor] = useState(false);
  const [AnswerColor, setAnswerColor] = useState('green')
  const [selectedIndex, setSelectedIndex] = useState();
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  /* const rightAnswer = useSelector((store) => store.quiz.questions.correctAnswerIndex); */
  const [guessedAnswerIndex, setGuessedAnswerIndex] = useState('');
  const onButtonClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedIndex(index);
    setShowSelectedColor(true);
    if (index === question.correctAnswerIndex) {
      setAnswerColor('green');
    } else {
      setAnswerColor('red');
    }
    setTimeout(() => {
      setSelectedIndex(100);
      setAnswerColor('pink');
      setShowSelectedColor(false);
      dispatch(quiz.actions.goToNextQuestion());
    }, 1000);
  }

  console.log(guessedAnswerIndex)
  return (
    <BtnsWrapper>
      {question.options.map((singleOption, index) => (
        <Btn
          key={singleOption}
          type="button"
          value={index}
          AnswerColor={AnswerColor}
          selectedIndex={selectedIndex}
          aria-label={showSelectedColor && index === guessedAnswerIndex ? AnswerColor : ''}
          onClick={(e) => {
            setGuessedAnswerIndex(Number(e.target.value));
            onButtonClick(index);
          }}>
          {singleOption}
        </Btn>
      ))}
    </BtnsWrapper>
  )
}
const Btn = styled.button`
  font-size: 18px;
  border-style: double;
  border-color: ${(props) => ((props.showSelectedColor && props.selectedIndex === props.index) ? props.AnswerColor : 'none')};
`;

const BtnsWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;`