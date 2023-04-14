import styled from 'styled-components';

export const Container = styled.section`
background: #9D50BB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6E48AA, #9D50BB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
min-height:100%;
color: #dfe3f5;
gap:0.7rem;
padding:1rem;

    @media (min-width: 768px) {
        font-size:110%;
    }
    @media (min-width: 1024px) {
        font-size:120%;
    }
`
export const ContainerRow = styled.section`
display:flex;
align-items:center;
justify-content:center;
gap:0.2rem;
`

export const AnswerText = styled.p`
font-size: 0.8em;
color:${(props) => (props.wrong ? '#dfe3f5' : '#5ADF1D')};
overflow-wrap:break-word;
`

export const AnswerImg = styled.img`
height: 1.2rem;
`

export const Question = styled.h1`
font-size:1em;
 color:#dfe3f5;
 overflow-wrap:break-word;
 text-align:center;
`
