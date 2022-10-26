/* import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Options = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  /* const options = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].options
  ); */

/* const [answer, setAnswer] = useState(null);
  /* eslint-disable no-unused-vars */
/*   const [optionIndex, setOptionIndex] = useState(0); */
/* eslint-disable no-unused-vars */

/*
  return (
    <div>
      {question.options.map((option, index) => {
        return (
          <form>
            <input
              id="answer"
              type="radio"
              key=""
              onChange={(event) => {
                setAnswer(event.target.value);
                setOptionIndex(index);
              }}
              value={option}
              checked={answer === option}
              required />
            <label htmlFor="answer" key={option}>
              {` ${option}`}
            </label>
          </form>
        );
      })}
    </div>
  );
} */