import React from 'react';
import { Container, Balloon, BalloonDiv1, BalloonDiv2, BalloonDiv3, BalloonText } from './BallonsStyling';

// The correctAnswers prop shows a number representing the count of correct answers.
// The answers prop shows an array of objects containing information about each answer
// (e.g., whether it was correct or not).

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