// /////////////// IMPORT //////////////////////// //

import styled from 'styled-components';

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
    margin: 10px;
    padding: 1.2em 0.8em;
    padding: 0.3rem;
    width: 105px;
    height: ${(props) => (props.height ? '50px' : '35px')};
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    border: solid ${(props) => (props ? props.border : '#FF8400')} 3px;
  
    @media (min-width: 668px) {
      width: 150px;
      height: ${(props) => (props.height ? '80px' : '50px')};
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      width: 180px;
      height: ${(props) => (props.height ? '100px' : '50px')};
      font-size: 1.5rem;
}


    &:hover {
      color: #fff;
      outline: 0;
    }
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px #FF8400 inset;
    }

  `