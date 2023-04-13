/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: #FAD040;
padding: 10px 20px; 
border-radius: 10px; 
border:none; 
color: #0078BE;
font-weight: bold;
font-family: 'Roboto';
font-size: 18px;
margin-top: 1rem;
`

export const Button = ({ buttonText, handleClick }) => {
  return (
    <StyledButton type="button" onClick={handleClick}>{buttonText}</StyledButton>
  )
}