/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components';

const SpanStyle = styled.span`
  display: ${(props) => (props.visible ? 'inline' : 'none')};
`;

const RadioButton = styled.label`
text-align: left;
margin-left: 5px;
`
const AnswerWrapper = styled.div`
display: flex;
gap: 10px;
padding: 5px;
padding-right: 10px;
width: 100%;
border-radius: 20px;
`
const Input = styled.input`
accent-color: #ffd914;
`

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
  const selectedWrongOption = questionAnswered && !correctOption && index === answerIndex;
  return (
    <AnswerWrapper>
      <Input
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
        disabled={questionAnswered} />
      <RadioButton htmlFor={option} key={option}>
        {/* This code enables the user to not only click on the radio button to select an answer,
          but now it also works with clicking on the actual answer text. */}
        {` ${option}`}
        {/* After choosing an answer option, emojis are shown next to the option text,
          depending on correct or not correct answer. */}
        <SpanStyle visible={questionAnswered}>
          {(correctOption && '✅') || (selectedWrongOption && '❌')}
        </SpanStyle>
      </RadioButton>
    </AnswerWrapper>
  );
};

export default Form;