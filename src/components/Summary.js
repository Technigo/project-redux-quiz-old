/* eslint-disable max-len */
import React from 'react'
import Cookie from 'Images/cookie.png'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RestartButton from './RestartButton'
import { Background, QuestionContainer, Headers, Illustration } from './Styling/GlobalStyles'

const SummaryContainer = styled.div`
width: 55%;
display: flex;
flex-direction: column; 
justify-content: center;
text-align: center;   

  @media (max-width: 767.98px){
    width: 70%;
  }
`

const Score = styled.p`
font-family: 'Montserrat';
font-size: 1.75vw;
font-weight: bold;
color: #E3182B;
margin: 0;

@media (max-width: 767.98px){
    font-size: 4.75vw;
    line-height: 5.5vw;
    margin-top: 10px;
}
`

const Citat = styled.p` 
position: relative;
align-self: center;
text-align: center;
color: black;
font-family: 'Montserrat';
font-weight: bold;
line-height: 2 vw;
font-size: 1.75vw;
color: #E3182B;
margin: 10px 0;

  @media (max-width: 767.98px){
    font-size: 4.75vw;
    line-height: 5.5vw;
  }
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
            <><Score className="Summary-result">Ho ho ho! You got {result} correct answers out of 5!</Score><Citat> I can really see the sparkle of Christmas lights in your eyes!</Citat></>
          )}
          {grinch && (
            <><Score>You got {result} correct answers out of 5.</Score><Citat>Oh dear! Do we have a grinch among us?</Citat></>
          )}
        </SummaryContainer>
        <Illustration src={Cookie} alt="Ginger Cookie" />
        <RestartButton />
      </QuestionContainer>
    </Background>

  )
}

export default Summary;