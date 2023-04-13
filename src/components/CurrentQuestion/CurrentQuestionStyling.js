import styled from 'styled-components';

export const CurrentQuestionContainer = styled.div`
background: linear-gradient(to right, #6E48AA, #9D50BB); 
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ImgBox = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: center;
align-items: center;
vertical-align: middle;
padding: 0 5%;
`
export const Image = styled.img`
width: auto;
height: auto;
max-width: 100%;
max-height: 100%;
object-fit: cover;
border-radius: 25px;
border: 7px #987ac7 solid;


`
export const ProgressBar = styled.progress`
width: 100%;
height: 20px;
border: none;
border-radius: 10px;
background-color: #ddd;
`

export const Title = styled.h1`
color: white;
font-size: 28px;
font-family: 'Open Sans', sans-serif;
padding: 10px;
text-align: center;
`

export const ButtonBox = styled.div`
display: flex;
flex-direction: row;


`
export const Button = styled.button`

`

