import React from 'react'
import styled, { keyframes } from 'styled-components'
import IconImg from 'assets/hourglass.svg'

const InfiniteRotate = () => {
  return (
    <Rotate>
      <img src={IconImg} alt="icon" size={20} />
    </Rotate>
  )
}

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`
const Rotate = styled.div`
animation: ${rotate} 4s linear infinite;
display: flex;
width: 20px;
height: 20px;

`

export default InfiniteRotate