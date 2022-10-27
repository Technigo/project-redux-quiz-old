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
      <h2>From which movie does this quote come from?</h2>
      <TypingWrapper>
        {/* <Typing>{question.questionText}</Typing> */}
        <h3>{question.questionText}</h3>
      </TypingWrapper>
      {question.options.map((option, index) => {
        return <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
    </div>
  )
}

// styled components

const TypingWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
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