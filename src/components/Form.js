/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { FormStyle } from 'styledcomponents/FormStyle';

const Form = ({
  setAnswer,
  setOptionIndex,
  answer,
  questionAnswered,
  option,
  index
}) => {
  return (
    <FormStyle>
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
    </FormStyle>
  );
};

export default Form;
