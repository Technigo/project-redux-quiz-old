import React from 'react'
import styled from 'styled-components'

export const OuterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InnerWrapper = styled.div`
    padding: 0 15px 0 15px;
    width: 95%;
    max-width: 1300px;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

export const Wrapper = ({ children }) => (
  <OuterWrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </OuterWrapper>
)