/* eslint-disable */
import React, { useState, useEffect } from 'react';

const Button = ({ index, questionId, correctIndex, onClick, type, option, disabled }) => {
  const [borderColor, setBorderColor] = useState('grey')

  useEffect(() => {
    setBorderColor('grey')
  }, [questionId])

  const onAnswerClick = () => {
    console.log(index, correctIndex)
    onClick();
    if (index === correctIndex) {
      setBorderColor('green')
    } else {
      setBorderColor('red')
    }
  }
  console.log(borderColor)
  return (
    <button
      disabled={disabled}
      style={{ border: `1px solid ${borderColor}` }}
      onClick={onAnswerClick}
      type={type}>
      {option}
    </button>
  )
}
export default Button