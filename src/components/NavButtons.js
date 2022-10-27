/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { NavButtonsStyles, CurrentQuestionStyles } from 'styledcomponents/NavButtonStyles';

export const NavButtons = ({
  questionAnswered,
  handleOkayButtonClick,
  handleNextButton,
  questionId,
  optionIndex,
  answer
}) => {
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
