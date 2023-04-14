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

@media (min-width: 1024px) {
display: flex;
width: 100vw;
height: auto;

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
padding:10px;
margin:10px;

@media (min-width: 1024px) {
display: flex;
border: 7px so1id rgba(181, 118, 221, 0.65);
border-radius: 50%;
width: 80px;
height: 80px;
}
`
