import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OuterWrapper, Button } from 'GlobalStyles';

export const StartPage = () => {
  return (
    <StartWrapper>
      <InnerWrapper>
        {/* <StartHeader>MOVIE QUIZ!!!</StartHeader> */}
        {/* <ButtonStart type="button"/> */}
        <Box>
          <Circel />
          <Circle2 />
          <Niddle />
          <div className="number">
            <div>10</div>
            <div>9</div>
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>

          </div>
        </Box>
      </InnerWrapper>
      <Link to="/quiz"><ButtonStart type="button" />
      </Link>
    </StartWrapper>
  )
};

const StartWrapper = styled(OuterWrapper)`
  padding: 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  aling-item: center; 
`

const Box = styled.div`
position: absolute;
width: 100%;
height: 100%;
/* white and gray background */ 
// background: radial-gradient(#fff,#757575);
overflow: hidden;
&:before
{
  content: '';
  position: absolute;
  top:50%;
  left: 0%;
  transform: translateY(-50%);
  width:100%;
  height: 5px;
  background: #000
}

 &:after
{
  content: '';
  position: absolute;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  width:5px;
  height: 100%;
  background: #000
}

`;

const Circel = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
width:500px;
height:500px;
border:5px solid #fff;
border-radius: 50%;
z-index: 1;
`;

const Circle2 = styled(Circel)`
width:600px;
height:600px;

`;

const Niddle = styled.div`
  position: absolute;
  top:calc(50% - 2px);
  left: 50%;
  height: 4px;
  width:1200px;
  background: #000;
  animation: animate 1s linear infinite;
  transform-origin: left;

  @keyframes animate {
    0%
    {
      transform: rotate(0deg);
    }
    100%
    {
      transform: rotate(360deg);
    }
  }
`;

/* const Number = styled.div`

  position: absolute;
  width:100%;
  height: 100%;
`;
const NumberR = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 25em;
  font-weight: bold;
  display: flex;
  justify-content:center;
  align-items: center;
  opacity:0;
  animation: animateNumber 10s linear infinite;

  &:NumberR NumberR:nth-child(1)
{
  animation-delay: 0s;
}
&:NumberR NumberR:nth-child(2)
{
  animation-delay: 1s;
}
&:NumberR NumberR:nth-child(3)
{
  animation-delay: 2s;
}
&:NumberR NumberR:nth-child(4)
{
  animation-delay: 3s;
}
&:NumberR NumberR:nth-child(5)
{
  animation-delay: 4s;
}
&:NumberR NumberR:nth-child(6)
{
  animation-delay: 5s;
}
&:NumberR NumberR:nth-child(7)
{
  animation-delay: 6s;
}
&:NumberR NumberR:nth-child(8)
{
  animation-delay: 7s;
}
&:NumberR NumberR:nth-child(9)
{
  animation-delay: 8s;
}
&:NumberR NumberR:nth-child(10)
{
  animation-delay: 9s;
}
@keyframes animateNumber {
  0%,10%
  {
    opacity: 1;
  }
  10.01%,100%
  {
    opacity: 0;
  }
}
´;
 */
// const StartHeader = styled.h1`
//   color: blueviolet;
//   font-size: 4rem;
//   /* font-family: var(--font-start);
//   font-weight: 400; */
//   /* font-style: normal; */
//   border: 3px solid red;
// `;

// Här kan StartPageImg placeras

export const ButtonStart = styled(Button)`
  margin-top: 25px;
  padding: 10px;
  background-image: url(./images/start_quiz.png);
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50vw;
  height: 10vh;
  z-index: 2;
`;

/* @keyframes animateNumber {
  0%,10%
  {
    opacity: 1;
  }
  10.01%,100%
  {
    opacity: 0;
  }
  10.01%,20%
  {
    opacity: 1;
  }
  20.01%,30%
  {
    opacity: 1;
  }
  30.01%,40%
  {
    opacity: 1;
  }
  40.01%,50%
  {
    opacity: 1;
  }
  50.01%,60%
  {
    opacity: 1;
  }
  60.01%,70%
  {
    opacity: 1;
  }
  70.01%,80%
  {
  80.01%,90%
  {
    opacity: 1;
  {
  90.01%,100%
}
´;
 */