import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StyledButton, StyledLink } from 'components/StyledButton'
import Header from 'components/Header'

const HomepageBackground = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1520004434532-668416a08753?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80');
`
const HomepageTitle = styled.div`
  position: absolute;
  top: 45%;
  color: hsl(210, 13%, 30%);
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.5);
`
const HomePage = () => {
  return (
    <HomepageBackground>
      <section className='main-container'>
        <HomepageTitle>
          <h1>Worlds most amazing quiz</h1>
          <StyledButton>
            <StyledLink to='/quiz'>Start quiz</StyledLink>
          </StyledButton>
          <h5>Developed and designed by</h5>
          <h6>Lovisa, Sarah, Ru, Jakob, Johanna</h6>
        </HomepageTitle>
      </section>
    </HomepageBackground>
  )
}

export default HomePage
