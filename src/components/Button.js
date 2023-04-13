/* eslint-disable linebreak-style */
import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
background-color: #FAD040;
padding:10px; 
border-radius:10px; 
border:none; 
// position: absolute;
// top: 0;
// right: 0;
// margin: 10px;
color: #0078BE;
font-weight: bold;
font-family: 'Roboto';

${(props) => props.start && css`
position: unset;
width: 172.08px;
height: 49px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`}
`

export const Button = ({ buttonText, handleClick }) => {
  return (
    <StyledButton type="button" onClick={handleClick}>{buttonText}</StyledButton>
  )
}