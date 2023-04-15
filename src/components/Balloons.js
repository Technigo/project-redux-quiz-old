import React from 'react';
import { Container, Balloon, BalloonDiv1, BalloonDiv2, BalloonDiv3, BalloonText } from './BallonsStyling';

const Balloons = ({ correctAnswers, answers }) => {
  return (
    <Container>
      <Balloon>
        <BalloonDiv1>
          <BalloonText>
            {correctAnswers}
          </BalloonText>
        </BalloonDiv1>
        <BalloonDiv2>
          <BalloonText>
            /
          </BalloonText>
        </BalloonDiv2>
        <BalloonDiv3>
          <BalloonText>
            {answers.length}
          </BalloonText>
        </BalloonDiv3>
      </Balloon>
    </Container>
  );
}

export default Balloons;