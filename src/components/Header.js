import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  .header-container {
    display: flex;
    justify-content: center;
  }

  h1 {
    color: magenta;
    text-align: center;
    font-size: 40px;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <div className='header-container'>
        <header>
          <h1> Music Quiz!</h1>
        </header>
      </div>
    </StyledHeader>
  )
}
