import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  .header-container {
    display: flex;
    justify-content: center;
  }

  header {
    background-color: rgb(255, 255, 255, 0.6);
    width: 50%;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }

  h1 {
    color: magenta;
    text-align: center;
    font-size: 40px;
    -webkit-text-stroke: 0.5px black;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <div className='header-container'>
        <header>
          <h1>Music Quiz!</h1>
        </header>
      </div>
    </StyledHeader>
  )
}
