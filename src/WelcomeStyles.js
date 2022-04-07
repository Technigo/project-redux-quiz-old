import styled from "styled-components";

export const WelcomeWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Chango&family=Fredoka+One&family=Modak&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,500;0,700;0,900;1,400;1,500&display=swap');
font-family: 'Chango';
position: absolute;
display: flex;
justify-content: center;
min-height: 100vh;
min-width: 100vw;
object-fit: cover;
text-align: center;
background-image: url("/images/bgwelcome.png");
`

export const WelcomeContent = styled.div`
position: relative;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
`

export const WelcomeTitle = styled.h1`
position: relative;
align-items: center;
text-align: center;
display: flex;
weight: 200, regular;
font-size: 40px;
background: linear-gradient(94.9deg, #FFE4C4 19.79%, #FECA7D 49.29%, #FF8A00 87.96%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

export const WelcomeBtn = styled.button`
border-radius: 20px;
width: 140px;
height: 40px;
background-color: rgba(255, 255, 255, 0.2);
font-weight: bold;
color: white;
border: 0 none;
cursor: pointer;
padding: 10px 5px;
margin: 2px 5px;

&:hover {
    background-color: transparent;
    border: 2px solid #fd9a89;
  }
`
