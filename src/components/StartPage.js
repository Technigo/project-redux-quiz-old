import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StartButton } from './Buttons'

// ----- STYLED COMPONENTS -----
const H1 = styled.h1`
  /* code here */

  @media (max-width: 768px) {
    /* code here */
  }

  &:hover {
    /* code here */
  }
`
// ----- STYLED COMPONENTS -----

export const StartPage = () => {

  return (
    <main>
      <H1>QUIZ</H1>
      <Link to="/quiz">
        <StartButton />
      </Link>
    </main>
  )
}