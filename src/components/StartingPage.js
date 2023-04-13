/* eslint-disable linebreak-style */
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Wrapper, QuestionContainer, Header, P, Button } from './GlobalStyles'
import horses from '../assets/horses.png'

const Horses = styled.img`
`;
const HorseWrapper = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-end;
`

const StartingPage = () => {
  return (
    <Wrapper>
      <HorseWrapper>
        <Horses src={horses} alt="dalahorses" />
      </HorseWrapper>
      <QuestionContainer>
        <Header>Sverige Quiz</Header>
        <P> From Midsummer celebrations to potatoes,
          Swedes take pride in their heritage and love
          to share it with others. If you&apos; re curious about
          Swedish customs and traditions, then this quiz is for you!
          Test your knowledge of Swedish culture with these five
          questions about some of the most beloved Swedish traditions.
        </P>
        <P>Good luck and have fun!</P>
        <NavLink to="/quiz">
          <Button type="button">Lets go!</Button>
        </NavLink>
      </QuestionContainer>
    </Wrapper>
  )
}

export default StartingPage;