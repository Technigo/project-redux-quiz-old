import styled, { keyframes } from 'styled-components';

export const HintButton = styled.button`
display: block;
width: fit-content;
margin-left: auto;
margin-right:auto;
background-color: black;
color: white;
font-family: "Open Sans";
font-size: 16px;
font-style: italic;
cursor: pointer;
`
const blink = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

const glitch = keyframes`
  0%, 4%, 8%, 16%, 100% {
    transform: none;
    clip-path: inset(0.2);
    filter: none;
  }

  2% {
    transform: skewX(0.5deg) skewY(0.7deg);
    clip-path: inset(0.5% 0 1.5% 0);
    filter: drop-shadow(0px 0px 4px white);
  }

  6% {
    transform: translateX(-0.5px) translateY(0.5px);
    clip-path: inset(1% 1% 0 0);
    filter: drop-shadow(0px 0px 4px #00ff00);
  }

  10% {
    transform: skewX(0.2deg) skewY(0.3deg) translateX(0.5px) translateY(-0.5px);
    clip-path: inset(0.5% 1.5% 1.5% 0);
    filter: drop-shadow(0px 0px 4px white);
  }

  12% {
    transform: skewX(0.5deg) skewY(0.7deg);
    clip-path: inset(0.5% 0 1.5% 0);
    filter: drop-shadow(0px 0px 4px #ff00ff);
  }

  14% {
    transform: skewX(0.2deg) skewY(0.3deg) translateX(-0.5px) translateY(0.5px);
    clip-path: inset(1.5% 0 0 1.5%);
    filter: drop-shadow(0px 0px 4px #00ff00);
  }

  18% {
    transform: none;
    clip-path: inset(0.5% 0 1.5% 0);
    filter: drop-shadow(0px 0px 4px white);
  }
`;

export const StartButton = styled.button`
border: 10px solid orange;
font-family: "Orbitron";
font-size: 16px; 
cursor: pointer;
animation: ${blink} 2s infinite;
animation: ${glitch} 0.6s linear infinite;
`

export const RestartButton = styled.button`
font-family: "Orbitron";
font-size: 18px;
border-radius: 30px;
border:2px solid yellow; 
height: 2rem;
width: 20%;
cursor: pointer;
`