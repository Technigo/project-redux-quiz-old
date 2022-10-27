import React from 'react'
import ProgressBar from 'components/ProgressBar'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <ProgressBar />
    </FooterWrapper>
  )
}

export default Footer;

export const FooterWrapper = styled.header`
  top: 30%;
  left: 30%;
  height: 20vh;
  background-color: #F26A3A;
  border: 15px dotted #A5D8C5;
  padding: 5px 40px 5px 20px;
  text-align: center;
  font-size: 30px;
`