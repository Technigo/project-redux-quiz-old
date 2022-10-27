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
  letter-spacing: 1px;

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
box-shadow: 10px 8px 26px 3px rgba(0,0,0,0.42);
-webkit-box-shadow: 10px 8px 26px 3px rgba(0,0,0,0.42);
-moz-box-shadow: 10px 8px 26px 3px rgba(0,0,0,0.42);
margin: 5%;
padding: 5%;

  h1{
    margin: 5%;
    font-size: 20px;
  }

  h2{
    margin: 5% auto;
    font-size: 16px;
  }

  a{
    text-decoration: none;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    margin: 5%;
    padding: 5%;

    h1{
      font-size: 
    }
  
    h2{
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
margin: 5%;
padding: 5%;
  }
`;

export const LinkContainer = styled(Link)`
  button {
    display: block;
    padding: 5px 20px;
    margin: 10% auto;
    background-color: #CAE0FF;
    border: none;
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    border-radius: 20px;

    @media (min-width: 600px) and (max-width: 1023px) {
    
    }
  
    @media (min-width: 1024px) {
      display: block;
    width: 120px;
    padding: 10px 20px;
    margin: 10% auto;
    background-color: #CAE0FF;
    border: none;
    font-size: 21px;
    font-family: 'Roboto Mono', monospace;
    border-radius: 20px;
    }
  }

`;