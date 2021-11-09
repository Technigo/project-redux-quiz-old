import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

let Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 1);
  z-index: 2;
  display: none;
`;

export const CurrentQuestion = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const showOverlay = () => {
    console.log('We are clicking');
    Overlay = styled.div`
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 1);
      z-index: 2;
      display: block;
    `;
    setDisplayOverlay(true);
    clearTimeout();
  };

  const ticker = () => {
    setTimeout(showOverlay, 3000);
  };

  useEffect(() => {
    ticker();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(ticker);
    };
  });

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <div className="image-wrapper">
        <Overlay />
        {question.type === 'picture' ? (
          <img style={{ width: '600px' }} src={question.path} alt="image" />
        ) : (
          <video autoPlay muted>
            <source src={question.path} type="video/mp4" />
          </video>
        )}
      </div>
      <h1>Question: {question.questionText}</h1>
    </div>
  );
};
