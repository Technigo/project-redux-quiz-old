import React from 'react'
import styled from 'styled-components'

export const HeaderStyling = styled.h1`
    text-align: center; 
    font-size: 28px;
    font-weight: 900;
`

export const Header = () => {
    return (
        <HeaderStyling>
              <h1>Inspiring Women Quiz</h1>
        </HeaderStyling>
    )
}