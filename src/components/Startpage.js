import React from 'react'
import Cookie from 'Images/cookie.png'
import { Background, QuestionContainer, Headers, Buttons, Illustration } from './Styling/GlobalStyles'

export const StartPage = () => {
  return (
    <Background>
      <QuestionContainer>
        <Headers> How much do you know about Christmas traditions from around the world?</Headers>
        <Illustration src={Cookie} alt="Ginger Cookie" />
        <Buttons href="" class="button"> START QUIZ </Buttons>
      </QuestionContainer>
    </Background>
  )
}