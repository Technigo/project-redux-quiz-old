/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

export const NavButtons = ({
  questionAnswered,
  handleOkayButtonClick,
  handleNextButton,
  questionId,
  optionIndex,
  answer
}) => {
  return (
    <>
      <button
        onClick={() => handleOkayButtonClick(questionId, optionIndex)}
        type="submit"
        disabled={questionAnswered || !answer}
      >
        OK
      </button>

      <button
        type="button"
        onClick={() => handleNextButton()}
        disabled={!questionAnswered}
      >
        {' '}
        Nästa
      </button>
    </>
  );
};
