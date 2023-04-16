import styled from 'styled-components'
import BackgroundImage from '../assets/hero-summary-image.jpg';

export const QuestionTitle = styled.h1`
  font-family: var(--headings-font-family);
 font-size:2rem;
 font-weight: 600;
 text-align: center;
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  top: 0;
  margin: 2rem auto 0;
`

export const QuestionWrapper = styled.div`
  /* background-color: pink; */
  /* background-color: rgb(255, 255, 255, 0.3); */
  background-image: url(${BackgroundImage});
  background-size: cover;
  padding: 10px;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

export const QuestionText = styled.p`
background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  font-family: var(--second-headings-font-family);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 3rem 0 0 0;
display: flex;
justify-content: center;
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
