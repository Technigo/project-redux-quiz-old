import React from 'react'
import styled from 'styled-components';

const PageHeading = styled.h1`
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    color: hotpink;
    line-height: 3rem;
`

const Highlight = styled.span`
color: white;
font-family: 'Times New Roman', Times, serif;
text-transform: lowercase;
font-weight: 400;
font-style: italic;
font-size: 4.2rem;
`
const Header = () => {
  return (
    <header>
      <PageHeading>Can you <Highlight> outsmart </Highlight> an AI?</PageHeading>
    </header>
  )
}

export default Header;