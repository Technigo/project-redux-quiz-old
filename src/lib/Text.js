import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 120px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000,
    -1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000,
    0px 1px 0 #000,
    0px -1px 0 #000,
    -1px 0px 0 #000,
    1px 0px 0 #000,
    2px 2px 0 #000,
    -2px 2px 0 #000,
    2px -2px 0 #000,
    -2px -2px 0 #000,
    0px 2px 0 #000,
    0px -2px 0 #000,
    -2px 0px 0 #000,
    2px 0px 0 #000,
    1px 2px 0 #000,
    -1px 2px 0 #000,
    1px -2px 0 #000,
    -1px -2px 0 #000,
    2px 1px 0 #000,
    -2px 1px 0 #000,
    2px -1px 0 #000,
    -2px -1px 0 #000;
  -webkit-font-smoothing: antialiased;
`

export const SubHeader = styled.h2`
  font-size: 28px;
  color: black;
  text-transform: uppercase;
  margin-top: -50px;
`

export const PicText = styled.p`
  position: absolute;
  bottom: 0;
  left: 250px;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
`
