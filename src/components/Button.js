// /////////////// IMPORT //////////////////////// //

import styled, { css } from 'styled-components';

// /////////////// COMPONENT //////////////////////// //

export const StartButton = styled.button`
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid #FF8400;
    border-radius: 0.6em;
    color: #FF8400;
    cursor: pointer;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 1rem;
    padding: 1em 1em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  
    &:hover,
    &:focus {
      color: #fff;
      outline: 0;
    }
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px #FF8400 inset;
    }
  

${(props) => props.outlined && css`
background-color: transparent;
border: 2px solid white;
color: white;
`}

${(props) => props.ctalong && css`
background-color: #FF8400;
width: 10%;
height: 30px;
color: white;
`}

${(props) => props.outlinedlong && css`
background-color: transparent;
border: 2px solid white;
width: 10%;
height: 35px;
color: white;
`}

${(props) => props.outlinedlongFindOut && css`
background-color: transparent;
border: 2px solid #FF8400;
width: 10%;
height: 35px;
color: #95A6B5;
`}

${(props) => props.outlinedtablet && css`
background-color: transparent;
border: 2px solid #FF8400;
width: 10%;
height: 35px;
color: white;
`}`