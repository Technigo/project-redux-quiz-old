/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const Wrapper = styled.div`
background: #AFD8EF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

export const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #72B9E2;
text-align: center;
border-radius: 20px;
margin: 0 20px;
padding: 25px 30px 40px 30px;
width: 60vw;
`
export const Header = styled.h1`
font-family: 'Pacifico', sans-serif;
color: #FFD914;
font-size: 48px;
`
export const P = styled.p`
color: #fff;
font-family: 'Yanone Kaffeesatz', sans-serif;
font-size: 32px;
line-height: 1.3em;
`
export const Button = styled.button`
background: #FFD914;
border: none;
border-radius: 30px;
color: #fff;
padding: 10px 25px;
font-family: 'Yanone Kaffeesatz', sans-serif;
font-size: 26px;
cursor: pointer;

&:hover {
box-shadow: 6px 6px #B6970F; 
}
`