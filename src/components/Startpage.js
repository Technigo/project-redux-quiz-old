import React from 'react'
import styled from 'styled-components'
import xmasBackground from 'Images/XmasBackground.png'
import Cookie from 'Images/cookie.png'
import { QuestionContainer, Headers, Buttons } from './Styling/GlobalStyles'

export const StartPage = () => {
  return (
    <Background>
      <QuestionContainer>
        <Headers> How much do you know about Christmas traditions from around the world?</Headers>
        <GingerCookie src={Cookie} alt="Ginger Cookie" />
        <Buttons href="" class="button"> START QUIZ </Buttons>
      </QuestionContainer>
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
position: fixed;
right: 2%;
bottom: 2%;
height: auto;
width: 30%;
object-fit: cover;
z-index: 99;
`