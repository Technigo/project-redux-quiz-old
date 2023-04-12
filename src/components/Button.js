/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: #FAD040;
padding:10px; 
border-radius:10px; 
border:none; 
position: absolute;
top: 0;
right: 0;
margin: 10px
`

export const Button = ({ buttonText, handleClick }) => {
  return (
    <StyledButton type="button" onClick={handleClick}>{buttonText}</StyledButton>
  )
}