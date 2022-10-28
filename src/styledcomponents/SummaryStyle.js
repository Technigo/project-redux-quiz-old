import styled from 'styled-components';
import { NavButtonsStyles } from './NavButtonStyle';
import { InnerWrapper } from './GlobalStyles';

export const SummaryContainer = styled(InnerWrapper)`
display: flex;
align-items: center;
margin: 40px; 
h1{
    margin: 15px auto 0;
    font-size: 18px;
}

img{
    margin-top: 30px;
    width: 100%;
}

/* --- MEDIA  QUERIES --- */

@media (min-width: 600px){
    padding: 20px 30px;

    img{
    object-fit: cover;
}
    h1{
    margin: 20px auto 0;
    font-size: 25px;
}
  }
`;

export const SummaryScore = styled.h3`
background-color: rgba(202, 224, 255);
width: 100%;
padding: 10px 0;
margin: 20px 0;
font-size: 12px;

/* --- MEDIA  QUERIES --- */

@media (min-width: 600px) and (max-width: 1023px) {
    padding: 10px 0;
  }

  @media (min-width: 1024px) {
    padding: 10px 0;
  }
`;

export const RestartButton = styled(NavButtonsStyles)`
margin: 20px auto 20px;
width: 120px;
font-size: 13px;
padding: 5px;
font-family: 'Roboto Mono', monospace;

/* --- MEDIA  QUERIES --- */

@media (min-width: 600px) and (max-width: 1023px) {
    margin: 10px auto;
}

@media (min-width: 1024px) {
    margin: 10px auto;
}
`;

export const AnswersContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

/* --- MEDIA  QUERIES --- */

@media (min-width: 600px) {
display: grid;
grid-template-columns: auto auto;
gap: 10px;
}

`;

export const SingleAnswerContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
border: 5px solid rgba(202, 224, 255);
border-radius: 10px;
width: 80%;
margin: 5px;

p{
    font-size: 14px;
    margin: 4px;
}

/* --- MEDIA  QUERIES --- */

@media (min-width: 600px) {
width: 100%;
}
`;