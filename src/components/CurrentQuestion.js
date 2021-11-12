import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Answers } from './Answers';
import UserNameInput from './UserNameInput';

// We want this overlay to take 100% of the div that will hold image or video. After setTimout it will be displayed blacking out the image/video
let Overlay = styled.div`
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

export const CurrentQuestion = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const userName = useSelector((state) => state.quiz.userName);

  // function that changes the display property of Overlay from none to block
  const showOverlay = () => {
    setDisplayOverlay(true);
  };

  // Timer to blackout picture/video
  const ticker = () => {
    setTimeout(() => showOverlay(), 1000);
    
  };

  // we used useEffect to call the ticker function when component is mounted
  useEffect(() => {
    setDisplayOverlay(false);
    ticker();
  }, [questionIndex]);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="image-wrapper">
      {displayOverlay && (
        <Overlay>
          {!quizOver && <h2>{question.questionText}</h2>}
          <Answers />
        </Overlay>
      )}
      {question.type === 'picture' ? (
        <img src={question.path} alt="QuizImage" />
      ) : (
        <video autoPlay muted>
          <source src={question.path} type="video/mp4" />
        </video>
      )}
      {/* <h2>{question.questionText}</h2>
      <Answers /> */}
    </div>
  );
};
