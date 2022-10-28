/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';
import './index.css'
// import Cursor32 from 'assets/Cursor32.png'

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
        color: black;
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
        text-decoration: none;
    } 
 
    h1 {
        font-size: 1.2rem;
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

export const Buttons = styled.button`
    font-size: 20px;
    color: black;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    /* cursor: url(Cursor32.png); */
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

    a {
        color: black;
        text-decoration: none;
    }

`