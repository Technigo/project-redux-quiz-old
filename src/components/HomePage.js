import React from 'react'
import { PicContainer, Picture, HomePageContainer } from '../lib/Containers'
import { Header, Paragraph } from '../lib/Text'
import { Button } from '../lib/Buttons'

export const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <Header>What do you meme?</Header>
        <Button>start</Button>
        <PicContainer>
          <Picture src="./images/grumpy.png" alt="" />
          <Paragraph>Oh great, Now I&apos;m on the homepage</Paragraph>
        </PicContainer>
      </HomePageContainer>
    </>
  )
}
