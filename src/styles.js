import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color: hotpink;
  margin: 0;
  font-family: 'Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export const QuestionCard = styled.div`
display: flex;
background-color: beige;
flex-direction: column;
border: solid;
width: 90vw;
height: 85vh;
`;

export const QuestionCardWrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;

`
export const QuestionNumber = styled.div`
background-color: purple;
font-size: 12px;
font-weight: 700;
color: beige;
padding-left: 10px;
` 

export const Question = styled.h1`
margin: 10px;
font-weight: 400;
font-size: 16px;
line-height: 28px;

`
export const Image = styled.img`
border: solid 1px; 
border-radius: 10px;
align-self: center;
margin-bottom: 10px;
`

export const OptionBtn = styled.button`
font-family: 'Spartan', sans-serif;
font-size: 14px;
font-weight: 600;
width: 70vw;
align-self: center; 
background: transparent;
border: 2px solid black;
border-radius: 10px;
padding: 8px;
margin-top: 8px;
`

export const NextBtnWrapper = styled.div`
display: flex;
position: absolute;
justify-content: flex-end;
right: 5%;
bottom: 8%;
 
`

export const NextButton = styled.button`
font-family: 'Spartan', sans-serif;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 600;
background: transparent;
border: none;
border-radius: 10px;
padding: 5px;

`

export const BtnText = styled.span`

`