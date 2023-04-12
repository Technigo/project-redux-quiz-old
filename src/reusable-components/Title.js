import styled from 'styled-components';

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:${(props) => (props.$font ? 'Permanent Marker' : "'Open Sans', sans-serif;")}; 
    font-size:4.2rem;
    margin:0;
    position:relative;
    top:;
    text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;
`;