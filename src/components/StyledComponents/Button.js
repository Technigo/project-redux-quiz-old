import styled from 'styled-components'

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    border-radius: 5px;
    background: ${(props) => (props ? props.background : '#fff')};
    width: 15rem;
    height: 5rem;
    font-size: 20px;
    padding: 3px;
    transition: 0.2s ease;
    margin: 3px;

    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    }
`