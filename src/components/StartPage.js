import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StartButton } from './Buttons'

const StartH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 2rem 0rem;
`
const StartP = styled.p`
  font-size: 1.25rem;
  text-align: center;
`

const StartImg = styled.img`
  width: 300px;
  padding: 20px 0;
`

const StartButtonDiv = styled.div`
  padding-top: 20px;
`

export const StartPage = () => {

  return (
    <>
      <StartH1>Meaningless Quiz</StartH1>
      <StartP>How meaningless is your knowledge?<br />Press START if you dare take our quiz!</StartP>
      <StartImg src='./assets/brain.png' alt="" />
      <StartButtonDiv>
        <Link to="/quiz">
          <StartButton />
        </Link>
      </StartButtonDiv>
    </>
  )
}
