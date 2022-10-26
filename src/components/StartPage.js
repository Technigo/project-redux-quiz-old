/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'Globalstyles'

export const StartPage = () => {
  return (
    <Container>
      <h1>Friends trivia - how much do you know?</h1>
      <Link to="/question"><button type="button">START</button></Link>
    </Container>
  )
}
