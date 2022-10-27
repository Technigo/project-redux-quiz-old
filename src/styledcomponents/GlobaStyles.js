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
  font-family: 'Poppins', sans-serif;

  .imageOverlay {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    height: 100%;
    opacity:0;
    color: white;
  }

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
background-color: #cec0a5;
text-align: center;
padding: 10% 5%;
margin: 20% 10%;

  p {
    font-size: 18px;
    margin: 5% auto;
  }

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
    font-family: 'Poppins', sans-serif;
  }

`;