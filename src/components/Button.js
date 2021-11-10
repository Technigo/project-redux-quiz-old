import React from "react";

export const Button = ({
  disabled,
  item,
  answer,
  index,
  question,
  onClick,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        type="button"
        className={
          !answer
            ? "default-button"
            : index === question.correctAnswerIndex
            ? "right-button"
            : "wrong-button"
        }
        onClick={onClick}
      >
        {item}
      </button>
    </div>
  );
};
