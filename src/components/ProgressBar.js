/* eslint-disable no-nested-ternary */

/* Den lätta varianten är 1 rad med kod i currentQuestion:
 Question {question.id} of 5 visar då beronde på var dem är
 Question 2 of 5.
 alternativ två: <h2>{0 + question.id}/5</h2>
 Visar ex 2/5
Problemet: just nu kan man inte gå vidare förens du gissat rätt, gissar du fel så blir
den röd men du är kvar på frågan, gissar du fel igen blir nästa kvadrat också röd osv.
Så varje gissningen ger quiz index +1.
Lösningen: Att vi “disable” knapparna (valen) efter varje gissningen,
och det ända du kan trycka på är exempel: “Next question (button) */

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ProgressBar = () => {
  const answers = useSelector((store) => store.quiz.answers);
  const questions = useSelector((store) => store.quiz.questions);

  return (
    <ProgressBarWrapper>
      {questions.map((question) => (
        <ProgressSquares
          key={question.id}
          right={answers[question.id]?.isCorrect}
          wrong={answers[question.id]?.isCorrect === false} />
      ))}
    </ProgressBarWrapper>
  );
};

/* styled components to be moved to globalStyles when we make it :) */

/* if (?) isCorrect.right då blir den kvadraten "grön".
  else (:) iscorrect.wrong if (?) user klickade fel "red" else (:) "grey" */
const ProgressSquares = styled.p`
  background-color: ${(isCorrect) => (isCorrect.right ? 'green' : isCorrect.wrong ? 'red' : 'grey')};
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 50%;
  @media (max-width: 667px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  color: #fff;
  box-shadow:
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 16px #fff,
      0 0 37px #0fa,
      0 0 77px #0fa,
      0 0 87px #0fa,
      0 0 97px #0fa,
      0 0 146px #0fa;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10%;
`;

// export const ProgressBarWrapper = styled.section`
//    width: 20%;
//   height: 1rem;
//   display: block;
//   appearance: none;
//   border: none;
//   margin-top: 5px;
// `;
//
// export const ProgressSquares = styled.progress`
//   progress::-webkit-progress-bar {
//     background: #fff;
//     border-radius: 50px;
//     padding: 2px;
//   }

//   progress::-moz-progress-bar {
//     background: #fff;
//     border-radius: 50px;
//     padding: 2px;
//   }

//   progress::-webkit-progress-value {
//     background: #D3A13B;
//     border-radius: 50px;
//     animation: move 5s linear 0 infinite;
//   }

//   progress::-moz-progress-value {
//     background: #D3A13B;
//     border-radius: 50px;
//     animation: move 5s linear 0 infinite;
//   }

//   @keyframes move {
//     0% {background-position: 0px 0px, 0 0, 0 0}
//     100% {background-position: -100px 0px, 0 0, 0 0}
//   }
// `;
