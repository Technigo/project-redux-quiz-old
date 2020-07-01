import styled from 'styled-components'

// HOMEPAGE

export const Header = styled.h1`
  text-align: center;
  font-size: 100px;
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
  }
`

export const SubHeader = styled.h2`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: black;
  margin-top: -30px;

  @media (max-width: 500px) {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
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

// CURRENT QUESTION

export const Question = styled.h1`
  width: 100%;
  color: rgb(246, 188, 0);
  padding: 20px 0;
  text-align: center;

  span {
    text-transform: uppercase;
    color: rgb(246, 188, 0);
  }

  @media (max-width: 800px) {
    font-size: 35px;

    span{
      display: block;
      font-size: 28px;
    }
  }

  @media (max-width: 500px) {
    font-size: 17px;

    span{
      font-size: 17px;
    }
  }
`

// SUMMARY TEXT

export const SummaryText = styled.p`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: black;
  text-align: center;
  padding: 0 20px;
  z-index: 2;

  @media (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: ${(props) => props.color};
  -webkit-transition: color .3s ease;
  -o-transition: color .3s ease;
  transition: color .3s ease;

  @media (max-width: 500px) {
    font-size: 12px;
    font-style: italic;
  }
`