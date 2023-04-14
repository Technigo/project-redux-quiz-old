import React from 'react'
import styled, { keyframes } from 'styled-components'

const InfiniteRotate = () => {
  return (
    <Rotate>🥴</Rotate>
  )
}

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`
const Rotate = styled.div`
animation: ${rotate} 4s linear infinite;
`

export default InfiniteRotate