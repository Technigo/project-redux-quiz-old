import React from 'react';
import { Wrapper, TextContainer, LinkContainer } from 'styledcomponents/OpeningScreenStyle';

export const OpeningScreen = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Låt frågesporten börja!</h1>
        <p>Vi hoppas du har gjort din läxa 😄</p>
      </TextContainer>
      <LinkContainer to="/quiz">
        <button type="button">Börja</button>
      </LinkContainer>
    </Wrapper>
  );
};