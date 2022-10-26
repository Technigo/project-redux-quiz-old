/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const Form = ({
  setAnswer,
  setOptionIndex,
  answer,
  questionAnswered,
  option,
  index
}) => {
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
        required
        disabled={questionAnswered}
      />
      <label htmlFor="answer" key={option}>
        {` ${option}`}
      </label>
    </form>
  );
};

export default Form;
