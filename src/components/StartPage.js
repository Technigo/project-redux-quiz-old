/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'Globalstyles'

export const StartPage = () => {
  return (
    <Container>
      <h1>I Will Accurately Guess Your Age Based On The Food You Eat Throughout The Day</h1>
      <img src="https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="burger" />
      <Link to="/question"><button type="button">START</button></Link>
    </Container>
  )
}
