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
    width:30%;
    border-radius: 50%;
    margin-bottom:1rem;


@media (min-width: 1024px) {
    width: 15%;
}
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 70vw;
    gap:1.5em;
    border:3px solid rgba(223, 227, 245, 0.4);
    border-radius: 10px;
    padding:1rem;
    margin-top: 1rem;
    color:black;
    background-color: rgba(223, 227, 245, 0.4);

    @media (min-width: 1024px) {
        max-width:fit-content;

}
`
