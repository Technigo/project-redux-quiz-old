import React from 'react';
import styled from 'styled-components/macro';

export const Button = ({ buttonText, handleClick }) => {
  return (
    <ButtonStyling type="button" onClick={handleClick}>{buttonText}</ButtonStyling>
  )
}

export const ButtonStyling = styled.button`
background-color: ${(props) => (props.options ? '#D06224' : '#8A8635')};
padding: 12px;
border-radius: 15px;
border: 2px solid #E9C891;
font-family: 'Quicksand', sans-serif;
font-size: 20px;
font-weight: 700;
&: hover {
  opacity: 0.8;
}
`
