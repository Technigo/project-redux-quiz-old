import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Answers } from './Answers';

// We want this overlay to take 100% of the div that will hold image or video. After setTimout it will be displayed blacking out the image/video
let Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background: #212121;
  z-index: 2;
  display: none;
`;

export const CurrentQuestion = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // function that changes the display property of Overlay from none to block
  const showOverlay = () => {
    Overlay = styled.div`
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0;
      background: #212121;
      z-index: 2;
      display: block;
      color: white;
      padding: 40px;
      text-align: center;
    `;
    setDisplayOverlay(true);
    clearTimeout();
  };

  // Timer to blackout picture/video
  const ticker = () => {
    setTimeout(showOverlay, 5000);
  };

  // we used useEffect to call the ticker function when component is mounted
  useEffect(() => {
    ticker();
  }, []);

  // this use effect is called when component is unmounted and removes the timer
  useEffect(() => {
    return () => {
      clearTimeout(ticker);
    };
  });

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="image-wrapper">
      <Overlay>
        <h2>{question.questionText}</h2>
        <Answers />
      </Overlay>
      {question.type === 'picture' ? (
        <img src={question.path} alt="Quizimage" />
      ) : (
        <video autoPlay muted>
          <source src={question.path} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
