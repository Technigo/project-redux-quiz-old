import styled, { createGlobalStyle } from 'styled-components';
import xmasBackground from 'Images/XmasBackground.png'

const GlobalStyles = createGlobalStyle`
*, 
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export const Background = styled.div`
  display: flex;
  background-image: url(${xmasBackground});
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
`
export const QuestionContainer = styled.section`
  align-items: center;
  justify-content: center;
  background-color: #f6f5f4;
  display: flex; 
  flex-direction: column;
  height: 75%;
  width: 75%;
  border-radius: 25px;
  margin: auto;
  top: 10%;
`
export const Headers = styled.div`
  position: relative;
  align-self: center;
  width: 60%;
  text-align: center;
  color: #E3182B;
  padding: 2.5%; 
  font-family: 'Montserrat';
  font-size: 3vw;
  font-weight: bold;
  line-height: 3.25vw;
`

export const Questions = styled.div`
  position: relative;
  align-self: center;
  width: 500px;
  text-align: center;
  color: #E3182B;
  padding: 5%; 
  font-family: 'Montserrat';
  font-size: 1.5vw;
  font-weight: bold;
  line-height: 1.75vw;
  top: 15px; 
`

export const Buttons = styled.a`
  text-decoration: none;
  position: relative;
  align-self: center;
  background-color: #E3182B;
  color: white;
  font-family: 'Montserrat';
  font-size: 2vw;
  letter-spacing: 0.1vw;
  font-weight: bold;
  padding: 15px 30px;
  width: 20%;
  text-align: center;
  border-radius: 50px;
  top: 20px; 

  :hover {
    background-color: #9d1f14
  }
`
export const Illustration = styled.img`
position: fixed;
right: 2%;
bottom: 2%;
height: auto;
width: 30%;
object-fit: cover;
z-index: 99;
`
export default GlobalStyles;