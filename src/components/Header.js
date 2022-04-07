import React from 'react'
import styled from 'styled-components'

export const HeaderStyling = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  background-color: #b58526;
  padding: 10px;
  color: #326886;
  margin: 0;
`

export const Header = () => {
  return (
    <HeaderStyling>
      <h1>Inspiring Women Quiz</h1>
    </HeaderStyling>
  )
}
