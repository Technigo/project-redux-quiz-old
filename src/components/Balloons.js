import React from 'react';
import { Container, Balloon, BalloonDiv1, BalloonDiv2, BalloonDiv3 } from './BallonsStyling';

const Balloons = () => {
  return (
    <Container>
      <Balloon>
        <BalloonDiv1 />
        <BalloonDiv2 />
        <BalloonDiv3 />
      </Balloon>
    </Container>
  );
}

export default Balloons;