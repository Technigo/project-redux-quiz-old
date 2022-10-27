import styled from 'styled-components';
import { Link } from 'react-router-dom';
import quizBackground from 'assets/quizbackground.jpg';

export const OuterWrapper = styled.section`
  background-image: url(${quizBackground});
  min-height: 100vh;
  background-size:cover;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -2px;

  @media (min-width: 600px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
background-color: white;
border-radius: 20px;
text-align: center;
padding: 10% 5%;
margin: 20% 10%;

  h1{
    margin: 5% 0;
  }

  h2{
    margin: 0 auto;
  }

  a{
    text-decoration: none;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    
  }

  @media (min-width: 1024px) {
    
  }
`;

export const LinkContainer = styled(Link)`
  button {
    display: block;
    padding: 10px 15px;
    margin: 10% auto;
    background-color: #CAE0FF;
    border: none;
    font-size: 21px;
    font-family: 'Roboto Mono', monospace;
  }

`;