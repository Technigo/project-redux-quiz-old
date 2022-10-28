import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { NeonHeader } from 'GlobalStyles';
import { SummaryPage } from '../pages/SummaryPage'

export const CurrentQuestion = () => {
  /* Selectors get info from store */
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  /* Dispatch sends info to store */
  const dispatch = useDispatch();

  if
  (quizOver === true) {
    return <SummaryPage />;
  }
  /* moves to next question regarldess of right or wrong and sends info  */
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      // window.alert('WRONG!!');
      dispatch(quiz.actions.goToNextQuestion());
    }
  }

  /* returns info and maps all of the questions and options from store */
  return (
    <div>
      <NeonHeader>From which movie does this quote come from?</NeonHeader>
      <QuoteWrapper>
        <h3>{question.questionText}</h3>
      </QuoteWrapper>
      <ButtonWrapper>
        {question.options.map((option, index) => {
          return <button className="answerButton" onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
        })}
      </ButtonWrapper>
    </div>
  )
}

// styled components

/* button wrapper, answer button and media query for answer buttons */

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
 

  .answerButton {
    width: 35%;
    margin: 2%;
    color: whitesmoke; 
    background-color: transparent;
    border: 2px solid whitesmoke;
    box-shadow: 3px 3px 15px #0fa;
    border-radius: 30px;
    padding: 10px;
    font-size: 1.5rem;    
  }

  .answerButton:hover {
    cursor: pointer;
  }
  @media (max-width: 667px) {
    width: 100%;
    margin: 15% auto;

    .answerButton {
      font-size: 1.2rem;
    }
}
`;

//----------------------

/* quote wrapper and media query for quote margin */

const QuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  border: 3px solid whitesmoke;
  padding: 20px 0 15px 0;
  width: 75%;
  border-radius: 30px;
  margin: 3% auto;
  margin-bottom: 5%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);

  @media (max-width: 667px) {
    margin-top: 10%;
  }
 `;
