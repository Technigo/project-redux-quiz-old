/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif
    }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 10%;
    align-items: center;
    text-align: center;

    img {
        width: 500px;
        height: auto;
        padding: 5%;
    }

`
export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;

    button:focus {
        background-color: darkgrey;
    }

    .correctBtn {
    background-color: lightgrey;
    }

    .wrongBtn {
    background-color: lightgrey;
    }
  
`