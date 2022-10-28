/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';
import './index.css'

export const GlobalStyles = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "friends-font"
   }

   body {
        background-image: url('https://w0.peakpx.com/wallpaper/245/56/HD-wallpaper-amigos-central-perk-serie.jpg');
        background-size: cover;       
   }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 10%;
    padding: 2%;
    align-items: center;
    background: #f0ede7c4;
    text-align: center;

    a {
        color: black;
    }

    .progress-bar {
        text-align: center;
    }

    progress {
        accent-color: #ffDC00;
    }
        
 
    h1 {
        font-size: 1.1rem;
        color: black;
        margin: 10% 0;
        text-align: center;
    }


    .logo {
        width: 70vw;
        height: auto;
        padding: 3%;
    }

    .symbols {
        width: 50px;
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {

        h1 {
            font-size: 1.5rem;
            margin: 5%;
        }

        .logo {
            width: 30vw
        }


    }

    @media (min-width: 2000px) {

        h1 {
            font-size: 2rem;
            margin: 2%;
        }

        }


`

export const StartButton = styled.button`
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    margin: 20px;

    &::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    }

    &:hover::after {
        top: 0px;
        left: 0px;
    }

`
export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;

    button:focus {
        background-color: #42a2db;
    }

    .correctBtn {
    //background-color: lightgrey;
    }

    .wrongBtn {
    //background-color: lightgrey;
    }

    #noSymbol {
        opacity: 0
    }
  
`

export const AnswerButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;

}

`
export const SummaryContainer = styled.div`
    text-align: left;

    #score {
        font-family: "Roboto"
    }

`
export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-bottom: 0.3px solid #a0a0a0;

`