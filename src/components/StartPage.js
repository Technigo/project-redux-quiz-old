/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, StartButton } from 'Globalstyles'

export const StartPage = () => {
  return (
    <Container>
      <img src="images/logo.svg" alt="logo" />
      <h1>- How much do you know? -</h1>
      <Link to="/question"><StartButton type="button">START</StartButton></Link>
    </Container>

  )
}

