import styled from 'styled-components';

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:${(props) => (props.fontSize)};
    letter-spacing: 0.2rem;
    margin:0;
    text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;
    text-align:center;
    max-width: 70vw;
    margin: 0 5%;

    @media (min-width: 1024px) {
    width:55vw;
    font-size:${(props) => ((props.question) ? '2em' : 'auto')};
}
`;