import React from 'react'
import { Link } from 'react-router-dom'
import Cookie from 'Images/cookie.png'
import { Background, QuestionContainer, Headers, Buttons, Illustration } from './Styling/GlobalStyles'

export const StartPage = () => {
  return (
    <Background>
      <QuestionContainer>
        <Headers> How much do you know about Christmas traditions from around the world?</Headers>
        <Illustration src={Cookie} alt="Ginger Cookie" />
        <Link to="/quiz">
          <Buttons href="" className="button"> START QUIZ </Buttons>
        </Link>
      </QuestionContainer>
    </Background>
  )
}