import React from 'react'
import styled from 'styled-components';

const PageHeading = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: hotpink;
`

const Header = () => {
  return (
    <header>
      <PageHeading>Hello yes this is quiz header</PageHeading>
    </header>
  )
}

export default Header;