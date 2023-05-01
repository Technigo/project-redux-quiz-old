import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProgressStyle = styled.div`
display: flex;
background: #4F200D;
font-size: 15px;
border-radius: 5px;
z-index: 3;
color: #FFD93D;
text-align: center;
margin: auto;
position: fixed; /* add absolute positioning */
bottom: 46px;
right: 30px;
width: 37px;
height: 31px;
background-image: repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px);
animation: tv-static 5s linear infinite;
justify-content: center;
align-items: center;
;
@media (min-width: 410px) and (max-width: 667px) {
    width: 53px;
    height: 45px;
    bottom: 47.5px;
    right: 38px;
    font-size: 25px;
}
@media (min-width: 668px) and (max-width: 1023px) {
  width: 106.5px;
  height: 88.3px;
  bottom: 56px;
  right: 65.5px;
  font-size: 100%;
  border-radius: 8px;
  font-size: 45px;
}
@media (min-width: 1024px) {
  width: 163px;
  height: 134px;
  bottom: 68.5px;
  right: 92px;
  font-size: 70px;
  border-radius: 20px;
}
@keyframes tv-static {
  from {
    background-size: 100% 100%;
  }
  to {
    background-size: 200% 200%;
  }
}
;`
export const Progress = () => {
  const question = useSelector(
    (bar) => bar.quiz.questions[bar.quiz.currentQuestionIndex]
  );
  const now = (question.id);
  const progressInstance = <ProgressBar now={now} label={`${now}/6`} />;
  return (
    <ProgressStyle>
      {progressInstance}
    </ProgressStyle>
  );
};