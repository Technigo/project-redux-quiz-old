import React, { useState, useEffect } from "react"

// import { useSelector, useDispatch } from "react-redux"

export const Button = ({
  questionId,
  correctAnswerIndex,
  onClick,
  disabled,
  item,
  answerIndex,
}) => {
  //   const onAnswerSubmit = (id, index) => {
  //     dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  //   }
  const [color, setColor] = useState("grey")

  useEffect(() => {
    setColor("grey")
  }, [questionId])

  const onAnswerClick = () => {
    onClick()
    if (answerIndex === correctAnswerIndex) {
      setColor("green")
    } else {
      setColor("red")
    }
  }

  return (
    <div>
      <button
        disabled={disabled}
        onClick={onAnswerClick}
        style={{ backgroundColor: `${color}` }}
        type="button"
      >
        {item}
      </button>
    </div>
  )
}
