import React from 'react'
import { NavLink } from 'react-router-dom'
import { PicContainer, Picture, StartQuizContainer, HeaderContainer } from '../lib/Containers'
import { Header, PicText, SubHeader } from '../lib/Text'
import { StartButton } from '../lib/Buttons'

export const HomePage = () => {
  return (
    <>
      <StartQuizContainer>
        <HeaderContainer>
          <Header>What do you meme?</Header>
          <SubHeader>How much do you really know about memes?</SubHeader>
          <NavLink to="/quiz"><StartButton>start</StartButton></NavLink>
        </HeaderContainer>
        <PicContainer>
          <Picture src="./images/grumpy.png" alt="" />
          <PicText>&quot;Oh great, now I&apos;m part of the design...&quot;</PicText>
        </PicContainer>
      </StartQuizContainer>
    </>
  )
}
