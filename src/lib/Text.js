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

  @media (max-width: 800px) {
    font-size: 75px;
  }

  @media (max-width: 500px) {
    font-size: 34px;
    text-align: center;
  }
`

export const SubHeader = styled.h2`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: black;
  margin-top: -50px;

  @media (max-width: 500px) {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
  }
`

export const Question = styled.h1`
  color: rgb(246, 188, 0);
  margin-top: 20px;
  text-align: center;

  span {
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    font-size: 35px;

    span{
      display: block;
      font-size: 28px;
    }
  }

  @media (max-width: 500px) {
    span{
      font-size: 17px;
    }
  }
`

export const PicText = styled.p`
  position: absolute;
  bottom: 0;
  left: 250px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 14px;
  color: black;

  @media (max-width: 500px) {
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`
export const ResultText = styled.h3`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: black;

  @media (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }
`

export const Quote = styled.p`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 20px;
  z-index: 2;

  @media (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }
`