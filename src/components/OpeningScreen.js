import React from 'react';
import { OuterWrapper, LinkContainer } from 'styledcomponents/GlobaStyles';
import { OpeningInnerWrapper } from 'styledcomponents/OpeningScreen';

export const OpeningScreen = () => {
  return (
    <OuterWrapper>
      <OpeningInnerWrapper>
        <h1>🥸</h1>
        <h1>Låt frågesporten börja!</h1>
        <p>Vi hoppas du har gjort din läxa</p>
        <LinkContainer to="/quiz">
          <button type="button">Börja</button>
        </LinkContainer>
      </OpeningInnerWrapper>
    </OuterWrapper>
  );
};