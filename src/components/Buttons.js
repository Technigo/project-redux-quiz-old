import React from 'react';
import styled from 'styled-components/macro';

export const Button = ({ buttonText, handleClick }) => {
  return (
    <ButtonStyling type="button" onClick={handleClick}>{buttonText}</ButtonStyling>
  )
};

export const ButtonStyling = styled.button`
background-color: #A5D8C5;
padding: 11px;
border-radius: 15px;
border: 2px solid #EEE8D2;
font-family: 'Quicksand', sans-serif;
font-size: 20px;
font-weight: 700;
&:hover {
  opacity: 0.8;
}
`