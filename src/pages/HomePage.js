import React from 'react'
import { NavLink } from 'react-router-dom'
import { PicContainer, Picture, Container, HeaderContainer } from '../lib/Containers'
import { Header, PicText, SubHeader } from '../lib/Text'
import { BigButton } from '../lib/Buttons'

export const HomePage = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header>What do you meme?</Header>
          <SubHeader>How much do you really know about memes?</SubHeader>
          <NavLink to="/quiz"><BigButton>start</BigButton></NavLink>
        </HeaderContainer>
        <PicContainer>
          <Picture src="./images/grumpy.png" alt="" />
          <PicText>&quot;Oh great, now I&apos;m part of the design...&quot;</PicText>
        </PicContainer>
      </Container>
    </>
  )
}
