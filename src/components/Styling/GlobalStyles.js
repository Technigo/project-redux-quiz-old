import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, 
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export const QuestionContainer = styled.section`
position: relative;
  background-color: #f6f5f4;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  height: 75%;
  width: 75%;
  border-radius: 25px;
  margin: auto;
  top: 10%;
`
export const Headers = styled.div`
  position: relative;
  align-self: center;
  width: 55%;
  text-align: center;
  padding: 5%; 
  font-family: 'Montserrat';
  font-size: 5vw;
  font-weight: bold;
  line-height: 5vw;
  white-space: wrap;
  
`
export const Buttons = styled.a`
    position: relative;
    align-self: center;
    background-color: #E3182B;
    color: white;
    font-family: 'Montserrat';
    font-size: 2vw;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 30px;
    width: 20%;
    text-align: center;
    border-radius: 12px;
`
export default GlobalStyles;