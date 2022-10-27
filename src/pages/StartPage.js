import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OuterWrapper, Button } from 'GlobalStyles';

export const StartPage = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        {/* <StartHeader>MOVIE QUIZ!!!</StartHeader> */}
        {/* <ButtonStart type="button"/> */}
        <Box>
          <Circel />
          <Circle2 />
          <Niddle />
          <Number>
            <NumberR>10</NumberR>
            <NumberR>9</NumberR>
            <NumberR>8</NumberR>
            <NumberR>7</NumberR>
            <NumberR>6</NumberR>
            <NumberR>5</NumberR>
            <NumberR>4</NumberR>
            <NumberR>3</NumberR>
            <NumberR>2</NumberR>
            <NumberR>1</NumberR>

          </Number>
          <Link to="/quiz"><ButtonStart type="button" />
          </Link>
        </Box>
      </InnerWrapper>
      {/*       <Link to="/quiz"><ButtonStart type="button" />
      </Link> */}
    </OuterWrapper>
  )
};

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  aling-item: center; 
`

const Box = styled.div`
width:50%;
height:50%;
background: radial-gradient(#fff,#757575);
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

const Number = styled.div`

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
  opacity:1;
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
  background-image: url(./images/start_quiz.png);
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40vw;
  height: 10vh;
`;