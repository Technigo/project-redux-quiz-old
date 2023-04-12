/* eslint-disable linebreak-style */
import React from 'react'

export const Button = ({ buttonText, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>{buttonText}</button>
  )
}