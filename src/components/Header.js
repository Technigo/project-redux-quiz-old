import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import { App } from 'App'
import { StyledLink } from './StyledButton'

const StyledHeader = styled.header`
  background-color: #90620e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to='/'>
        <p>Home</p>
      </StyledLink>

      <StyledLink to='/quiz'>
        <p>Quiz</p>
      </StyledLink>

      <StyledLink to='/about'>
        <p>About</p>
      </StyledLink>
    </StyledHeader>
  )
}

export default Header
