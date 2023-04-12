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
`
export const ContainerRow = styled.section`
display:flex;
align-items:center;
justify-content:center;
gap:10px;
`

export const AnswerText = styled.p`
 font-size: 0.6em;
 color:${(props) => (props.wrong ? '#dfe3f5' : '#56ab2f')};
 overflow-wrap:break-word;
 width:50%;
`

export const RestartButton = styled.button`
width: 50%;
height: 60px;
background: linear-gradient(to right, #a8e063, #56ab2f);
margin: 18px;
border-radius: 15px;
border: rgb(110, 72, 170) solid 3px;
color:#dfe3f5;
`
