import React from 'react';
import { LinkContainer } from 'styledcomponents/GlobaStyles';
import { OpeningInnerWrapper } from 'styledcomponents/OpeningScreen';

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
