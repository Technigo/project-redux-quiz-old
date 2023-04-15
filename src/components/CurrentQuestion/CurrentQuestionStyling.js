import styled from 'styled-components';

export const CurrentQuestionContainer = styled.div`
background: linear-gradient(to right, #6E48AA, #9D50BB); 
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
box-sizing:border-box;
padding:1em;
font-size:1.2em;

@media (min-width: 1024px) {
display: flex;
width: 100vw;

}
`
export const ImgBox = styled.div`
max-width: 90vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 5%;
gap:1rem;
`
export const ProgressBarContainer = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:center;
`
export const CountdownBox = styled.div`
border: 7px solid rgba(181, 118, 221, 0.65);
border-radius:50%;
padding:4px;
margin:5px;

@media (min-width: 1024px) {
display: flex;
width: 2em;
height: 2em;
}
`
export const OptionsImage = styled.img`
width:90%;
`
