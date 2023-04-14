/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components'

const Buttons = styled.button`
  background: #FFD914;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 10px 25px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 26px;
  cursor: pointer;
  margin: 25px 0px 0px 0px;
  transition: 0.5s;

  &:disabled {
    background: grey;
    display: none;
  }

  &:hover {
    box-shadow: 6px 6px #B6970F;
    transition: 0.5s;
    }
`;

const NavButtonsWrapper = styled.div`
  height: 75px;
`

const NavButtons = ({
  questionAnswered,
  handleOkayButtonClick,
  handleNextButton,
  questionId,
  optionIndex,
  answer
}) => {
  /* For the OK button, you can only click on it if an answer option is selected.
      For the Nästa button, you can only click on it if the OK button is clicked. */
  return (
    <NavButtonsWrapper>
      <Buttons
        onClick={() => handleOkayButtonClick(questionId, optionIndex)}
        type="submit"
        disabled={questionAnswered || !answer}>
        OK
      </Buttons>

      <Buttons type="button" onClick={() => handleNextButton()} disabled={!questionAnswered}>
        {' '}
        Next
      </Buttons>
    </NavButtonsWrapper>
  );
};

export default NavButtons