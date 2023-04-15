import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 420px;
  padding: 10px;
  margin: 0 auto;
  position: relative;
`;

const balloonAnimation1 = keyframes`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, -20px) }
  100% { transform: translate(0, 0) }
`;

const balloonAnimation2 = keyframes`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, -10px) }
  100% { transform: translate(0, 0) }
`;

const balloonAnimation3 = keyframes`
  0% { transform: translate(0, 0) }
  50% { transform: translate(0, -15px) }
  100% { transform: translate(0, 0) }
`;

export const Balloon = styled.div`
  width: 738px;
  margin: 0 auto;
  padding-top: 30px;
  position: relative;
`;

const BalloonDiv = styled.div`
  width: 104px;
  height: 140px;
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
  position: absolute;
  padding: 10px;
  box-shadow: inset 17px 7px 10px #b38728;
  transform-origin: bottom center;

  &:before {
    color: #b38728;
    position: absolute;
    bottom: -11px;
    left: 50%;
    content: "▲";
    font-size: 1em;
    transform: translateX(-50%);
  }
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
  box-shadow: inset 10px 10px 10px rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation1} 6s ease-in-out infinite;
`;

export const BalloonDiv2 = styled(BalloonDiv)`
  left: 120px;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  box-shadow: inset 10px 10px 10px rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation2} 6s ease-in-out infinite;
`;

export const BalloonDiv3 = styled(BalloonDiv)`
  left: 240px;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  box-shadow: inset 10px 10px 10px rgba(179, 134, 40, 0.9);
  animation: ${balloonAnimation3} 6s ease-in-out infinite;
`;