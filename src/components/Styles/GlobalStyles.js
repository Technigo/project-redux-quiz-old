import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*, 
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: yellow;
}
`;

export const ImgBackground = styled.div`
    background: url(https://img.buzzfeed.com/buzzfeed-static/static/2020-03/5/22/enhanced/9dce4847575f/enhanced-231-1583448752-31.jpg?output-format=jpg&output-quality=auto);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
@media (max-width: 600px) {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100vh;
    z-index: -10;
}
`;

export const Container = styled.div`
    margin: 4rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        margin: 0px;
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90%;
        width: 100%;
    }
`;

export const Answers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    flex-direction: row;    
    gap: 2rem;
    width: 50%;
    margin: 3.5rem;
@media (max-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    `;

export const Button = styled.button`
width:12.5rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
margin: 2rem;
border-radius: 50px;
background-color: rgba(25, 22, 213, 0.772);
color: white;
border: 2px solid white;
cursor: pointer;
font-size: 1.5vw;
&:hover {
    background: black;
}

@media (max-width: 767.98px){
font-size: 4vw;
}
`
export default GlobalStyles;