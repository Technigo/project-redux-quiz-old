import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StartButton } from './Buttons'

// ----- STYLED COMPONENTS -----
const StartH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
`
const StartP = styled.p`
  font-size: 1.5rem;
  text-align: center;
`

const StartImg = styled.img`
  width: 300px;
  padding-bottom: 20px;
`
// ----- STYLED COMPONENTS -----

export const StartPage = () => {

  return (
    <>
      <StartH1>Meaningless Quiz</StartH1>
      <StartP>How meaningless is your knowledge?<br />Press START if you dare take our quiz!</StartP>
      <StartImg src='./assets/brain.png' alt="" />
      <Link to="/quiz">
        <StartButton />
      </Link>
    </>
  )
}