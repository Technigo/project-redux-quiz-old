import React from 'react'

const AnswerButton = (props) => {
  return (
    <button
      className="button"
      type="button"
      key={props.key}
      onClick={props.onClick}>
      <span className="button-text">
        {props.text}
      </span>
    </button>
  )
}

export default AnswerButton
