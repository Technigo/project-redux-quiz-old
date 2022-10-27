/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'Globalstyles'
// import styled from 'styled-components'
// import BackgroundPic from '../Pictures/BackgroundPic.jpg'

export const StartPage = () => {
  return (
    <Container>
      <h1>Friends trivia - how much do you know?</h1>
      <Link to="/question"><button type="button">START</button></Link>
    </Container>

  )
}

// const StyledStartPage = styled.div`
// background-image: url(${BackgroundPic});
// height: 100vh;
// width: 100vw;
// object-fit: contain;

// `
