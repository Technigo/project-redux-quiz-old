/* eslint-disable max-len */
import React from 'react'
import Cookie from 'Images/cookie.png'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RestartButton from './RestartButton'
import { Background, QuestionContainer, Headers, Illustration } from './Styling/GlobalStyles'

const SummaryContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
text-align: center;   `

const Citat = styled.p` 
position: relative;
align-self: center;
width: 60%;
text-align: center;
color: black;
font-family: 'Montserrat';
line-height: 3.25vw;
font-size: 15px;`

const Score = styled.p`
font-family: 'Montserrat';
font-size: 20px;
font-weight: bold;
`

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length;

  const grinch = result <= 3
  const lover = result > 3

  return (
    <Background>
      <QuestionContainer>
        <Headers>Summary</Headers>
        <SummaryContainer>
          {lover && (
            <><Score className="Summary-result">Wow! You got {result} correct answers out of 5!</Score><Citat> I can see that is sparkle christmas lights in your eyes</Citat></>
          )}
          {grinch && (
            <><Score>You got {result} correct answers out of 5..</Score><Citat> oh do we have a grinch here?</Citat></>
          )}
        </SummaryContainer>
        <Illustration src={Cookie} alt="Ginger Cookie" />
        <RestartButton />
      </QuestionContainer>
    </Background>

  )
}

export default Summary;