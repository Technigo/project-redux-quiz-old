import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { NextQuestionButton } from './NextQuestionButton';
import { Summary } from './Summary';
// import { MainContainer } from './StyledComponents';

export const Answers = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [currentQuestion, setCurrentQuestion] = useState([0, 0]);
  const [buttonClickedTimes, setButtonClickedTimes] = useState(0);
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (quizOver === true) {
    return <Summary />;
  } else {
    return (
      <div className="buttons">
        <div className="options">
          {question.options.map((item, index) => (
            <button
              className="btn option"
              type="submit"
              key={item}
              onClick={() => {
                setButtonClickedTimes(1);
                setCurrentQuestion([question.id, index]);
              }}>
              {item}
            </button>
          ))}
        </div>
        <NextQuestionButton
          currentQuestion={currentQuestion}
          buttonClickedTimes={buttonClickedTimes} />
      </div>
    );
  }
};
