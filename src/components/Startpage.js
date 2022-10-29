import React from 'react'
import { Link } from 'react-router-dom'
import tree from 'Images/tree.png'
import { Background, QuestionContainer, Headers, Buttons, Illustration } from './Styling/GlobalStyles'

export const StartPage = () => {
  return (
    <Background>
      <QuestionContainer>
        <Headers> How much do you know about Christmas traditions from around the world?</Headers>
        <Link to="/quiz">
          <Buttons href="" className="button"> START QUIZ </Buttons>
        </Link>
      </QuestionContainer>
      <Illustration src={tree} alt="Ginger Cookie" />
    </Background>
  )
}