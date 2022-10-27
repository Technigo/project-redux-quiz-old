/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { FormStyle, SpanStyle } from 'styledcomponents/FormStyle';

const Form = ({
  setAnswer,
  setOptionIndex,
  answer,
  questionAnswered,
  option,
  index,
  correctIndex,
  answerIndex
}) => {
  const correctOption = index === correctIndex;
  const selectedWrongOption =
    questionAnswered && !correctOption && index === answerIndex;
  return (
    <FormStyle>
      <input
        id={option}
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
      <label htmlFor={option} key={option}>
        {` ${option}`}
        <SpanStyle visible={questionAnswered}>
          {(correctOption && '✅') || (selectedWrongOption && '❌')}
        </SpanStyle>
      </label>
    </FormStyle>
  );
};

export default Form;
