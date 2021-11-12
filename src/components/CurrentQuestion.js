import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Answers } from './Answers';

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #212121;
  z-index: 5;
  display: block;
  color: white;
  padding: 20px;
  padding-top:50px;
  text-align: center;

  @media (min-width: 599px) {
    padding: 40px;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
  }
`;

export const CurrentQuestion = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  // function that changes the display property of Overlay from none to block
  const showOverlay = () => {
    setDisplayOverlay(true);
  };

  // we used useEffect to call the ticker function when component is mounted
  useEffect(() => {
    // Timer to blackout picture/video
    const ticker = () => {
      setTimeout(() => showOverlay(), 10000);
    };

    setDisplayOverlay(false);
    ticker();
  }, [questionIndex]);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      {displayOverlay && (
        <Overlay>
          {!quizOver && <h2 className="question">{question.questionText}</h2>}
          <Answers />
        </Overlay>
      )}
      <div className="image-wrapper">
        {question.type === 'picture' ? (
          <img src={question.path} alt="QuizImage" />
        ) : (
          <video autoPlay muted>
            <source src={question.path} type="video/mp4" />
          </video>
        )}
      </div>
    </>
  );
};
