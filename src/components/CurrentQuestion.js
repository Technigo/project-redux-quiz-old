import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { SummaryPage } from '../pages/SummaryPage'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  if
  (quizOver === true) {
    return <SummaryPage />;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('WRONG!!');
      dispatch(quiz.actions.goToNextQuestion());
    }
  }
  // I framtiden byt ut goToNextQ till bli röd och sen lägga till en nästa-knapp

  return (
    <div>
      <NeonHeader>From which movie does this quote come from?</NeonHeader>
      <QuoteWrapper>
        {/* <Typing>{question.questionText}</Typing> */}
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
 

  .answerButton {
    width: 35%;
    margin: 5%;
    color: white; 
    background-color: transparent;
    border: 2px solid white;
    box-shadow: 3px 3px 15px #0fa;
    border-radius: 30px;
    padding: 10px;
    font-size: 1.5rem;    
  }

`;

const QuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  border: 3px solid white;
  padding: 20px;
  width: 75%;
  border-radius: 30px;
  margin: 8% auto;
  z-index: 1;
 `;

const NeonHeader = styled.h2`

  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;

  
 `;

//----------------------------

// const Typing = styled.div`
//   width: 25ch;
//   animation: typing 5s steps(22) infinite, blink-caret .5s step-end infinite alternate;
//   white-space: nowrap;
//   overflow: hidden;
//   border-right: 3px solid;
//   font-family: var(--font-typing);
//   font-size: 21px;
//   color: black;
//   padding-top:10px;

//   @keyframes typing {
//     from {
//       width: 0;
//     }
//     /* 50% {
//       width:100%
//     } */
//   }

//   @keyframes blink {
//     50% {
//       border-color: transparent
//     }
//   }
//   /* @media (min-width: 668px){
//       font-size: 30px;
//     } */
// `;