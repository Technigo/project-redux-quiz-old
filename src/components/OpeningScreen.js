import React from 'react';
import { LinkContainer } from 'styledcomponents/GlobalStyles';
import { OpeningInnerWrapper } from 'styledcomponents/OpeningScreenStyle';

export const OpeningScreen = () => {
  return (
    <OpeningInnerWrapper>
      <h2>🥸</h2>
      <h1>Låt frågesporten börja!</h1>
      <p>Vi hoppas du har gjort din läxa</p>
      <LinkContainer to="/quiz">
        <button type="button">Nu kör vi!</button>
      </LinkContainer>
    </OpeningInnerWrapper>
  );
};
