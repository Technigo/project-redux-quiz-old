import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
/* import { popcorn } from 'assets/svg/double-arrow-right-icon.svg' */
/* import { quiz } from 'reducers/quiz'; */

export const ProgressBar = () => {
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex + 1)
  const finalQuestion = useSelector((store) => store.quiz.questions.length)
  return (
    <ProgressWrapper>
      <section className="progress-status">
        <label htmlFor="progress">
          <span>Question: {currentQuestion} out of {finalQuestion}</span>
        </label>
        <progress
          id="progress"
          value={currentQuestion}
          max={finalQuestion} />
      </section>
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.section`

progress {
  width: 150px;
  height: 4vh;
  display: block;
  appearance: none;
  border: none;
  margin-top: 5px;
}

span{
color: lightgrey;
font-size: 18px;
margin-left: 10px;
}

progress::-webkit-progress-bar {
  background: white;
  border-radius: 50px;
  padding: 2px;
}

progress::-moz-progress-bar {
  background: #fff;
  border-radius: 50px;
  padding: 2px;
}

progress::-webkit-progress-value {
  background: #d07214;
  border-radius: 50px;
  animation: move 1s linear 0 infinite;
}

progress::-moz-progress-value {
  background: #D3A13B;
  border-radius: 50px;
  animation: move 5s linear 0 infinite;
}

@keyframes move {
  0% {background-position: 0px 0px, 0 0, 0 0}
  100% {background-position: -100px 0px, 0 0, 0 0}
}



`

