/* eslint-disable linebreak-style */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StartImg from '../images/logo.svg'
import { Button } from './Button';

const Start = () => {
  const StartWrapper = styled.section`
display: flex; 
flex-direction: column;
background-color: #0078bea7;
box-shadow: 12px 27px 39px 3px rgba(0, 0, 0, 0.25);
gap: 10px;

@media (min-width: 1025px) {
    background-color: #0078bea7;
    width: 45%;
    margin: 4% auto;
  }
`
  const StartH1 = styled.h1`
font-family: 'Just another hand';
font-size: 96px;
color: #0078BE;
transform: rotate(-1.44deg);
`

  const Img = styled.img`
width: 195px;
`

  const StartP = styled.p`
  color: #0078BE;
  font-size: 32px;
`

  return (
    <StartWrapper>
      <StartH1>The Gothenburg quiz!</StartH1>
      <Img src={StartImg} />
      <StartP>Test your skills on the front side of Sweden</StartP>
      <Link to="/board">
        <Button
          start
          buttonText="Start quiz" />
      </Link>
    </StartWrapper>
  )
}

export default Start