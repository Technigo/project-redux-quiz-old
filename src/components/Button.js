import styled, {keyframes} from "styled-components";

const zoomInZoomOut = keyframes`
0% {
  transform: scale(1);
}
30% {
  transform: scale(1.35);
}
45% {
  transform: scale(1.35) rotate(5deg);
}
60% {
  transform: scale(1.35) rotate(-5deg);
}
70% {
  transform: scale(1.35) rotate(2deg);
}
80% {
  transform: scale(1.35) rotate(-5deg);
}
95% {
  transform: scale(1.35) rotate(-2deg);
}
100% {
  transform: scale(1);
}
`

const Button = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  border: solid ${(props) => props ? props.border : '#000'} 3px;
  animation: ${zoomInZoomOut} ${(props) => props.animationtime} ease;

  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
`;

export default Button;