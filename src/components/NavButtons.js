/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { NavButtonsStyles, CurrentQuestionStyles } from 'styledcomponents/NavButtonStyle';

export const NavButtons = ({
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
    <CurrentQuestionStyles>
      <NavButtonsStyles
        onClick={() => handleOkayButtonClick(questionId, optionIndex)}
        type="submit"
        disabled={questionAnswered || !answer}
      >
        OK
      </NavButtonsStyles>

      <NavButtonsStyles
        type="button"
        onClick={() => handleNextButton()}
        disabled={!questionAnswered}
      >
        {' '}
        Nästa
      </NavButtonsStyles>
    </CurrentQuestionStyles>
  );
};
