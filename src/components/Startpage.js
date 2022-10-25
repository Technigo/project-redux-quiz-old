import React from 'react'
import styled from 'styled-components'
import xmasBackground from 'Images/XmasBackground.png'
import Cookie from 'Images/cookie.png'

export const StartPage = () => {
  return (
    <Background>
      <GingerCookie src={Cookie} alt="Profile Picture Carina Moreno" />
    </Background>
  )
}

const Background = styled.div`
  background-image: url(${xmasBackground});
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const GingerCookie = styled.img`
position: absolute;
right: 2%;
bottom: 2%;
height: 300px;
width: 300px;
object-fit: cover;
`