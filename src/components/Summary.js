import React from 'react'
import Cookie from 'Images/cookie.png'
import { useSelector } from 'react-redux';
import RestartButton from './RestartButton'
import { Background, QuestionContainer, Headers, Illustration } from './Styling/GlobalStyles'

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length;

  return (
    <Background>
      <QuestionContainer>
        <Headers>Summary</Headers>
        <p className="Summary-result">Wow! You got {result} correct answers out of 5!</p>
        <Illustration src={Cookie} alt="Ginger Cookie" />
        <RestartButton />
      </QuestionContainer>
    </Background>
  )
}

export default Summary;