import styled, { keyframes } from 'styled-components';

// Balloon styling based on the code pen https://codepen.io/wearebold/pen/DWQVQV

export const Container = styled.div`
  height: 14.063rem;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
`;

const balloonAnimation1 = keyframes`
  0% { transform: translate(0, 0) rotate(0) }
  50% { transform: translate(0, -1.25rem) rotate(30deg) }
  100% { transform: translate(0, 0) }
`;

const balloonAnimation2 = keyframes`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, -0.625rem) }
  100% { transform: translate(0, 0) }
`;

const balloonAnimation3 = keyframes`
  0% { transform: translate(0, 0) rotate(0)}
  50% { transform: translate(0, -0.938rem) rotate(-30deg) }
  100% { transform: translate(0, 0) }
`;

export const Balloon = styled.div`
  display: flex;
  padding-top: 1.875rem;
  position: relative;
`;

const BalloonDiv = styled.div`
  width: 5rem;
  height: 7.5rem;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  border-radius: 80%;
  margin: 0 auto;
  padding: 0.625rem;
  box-shadow: inset 1.0625rem 0.4375rem 0.625rem #b38728;
  transform-origin: bottom center;

  &:before {
    color: #b38728;
    position: absolute;
    bottom: -0.688rem;
    left: 50%;
    content: "▲";
    font-size: 1rem;
    transform: translateX(-50%);
  }

   @media screen and (min-width: 1440px) {
        width: 6.5rem;
        height: 8.75rem;
  }
`;

export const BalloonText = styled.p`
  display: flex;
  font-size: 3.8rem;
  color: #112E2E;
  font-family: var(--paragraph-font-family);
  align-items: center;
  justify-content: center;

`;

export const BalloonDiv1 = styled(BalloonDiv)`
  left: 0;
  background: linear-gradient(to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  box-shadow: inset 0.625rem 0.625rem 0.625rem rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation1} 6s ease-in-out infinite;
`;

export const BalloonDiv2 = styled(BalloonDiv)`
  left: 7.5rem;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  box-shadow: inset 0.625rem 0.625rem 0.625rem rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation2} 6s ease-in-out infinite;
`;

export const BalloonDiv3 = styled(BalloonDiv)`
  left: 7.5rem;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  box-shadow: inset 0.625rem 0.625rem 0.625rem rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation3} 6s ease-in-out infinite;
`;
