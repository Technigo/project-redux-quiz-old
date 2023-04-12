import styled from 'styled-components';

export const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    height:100vh;
    color: #dfe3f5;
    background: #9D50BB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6E48AA, #9D50BB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Logo = styled.img`
display:flex;
width:40%;
border-radius: 50%;

@media (min-width: 1024px) {
    width: 23%;

}
`