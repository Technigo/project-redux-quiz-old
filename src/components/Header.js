import React from 'react'
import styled from 'styled-components';

const PageHeading = styled.h1`
    font-family: 'Rammetto One';
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    color: hotpink;
`

const Header = () => {
  return (
    <header>
      <PageHeading>Can you outsmart an AI?</PageHeading>
    </header>
  )
}

export default Header;