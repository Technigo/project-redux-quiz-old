import styled from 'styled-components';

export const Image = styled.img`
    display:flex;
    max-width:85vw;
    height:300px;
    border:solid black;
    border-radius: 15px;
    border: 7px solid rgba(181, 118, 221, 0.65);
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* Firefox 4+, Opera, Chrome */

@media (min-width: 1024px) {
    max-width:65vw;
}
`