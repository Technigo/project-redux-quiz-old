import styled from 'styled-components';

export const ButtonWrap = styled.div`
display: flex;
`

export const StyledButton = styled.button`
border: none; 
border-radius: 10px;
width: 100px;
height: 40px;
margin: 0 auto;
font-size: 1rem;
background: hotpink;
color: white;
font-weight: 600;

& a{
  text-decoration: none;
  color: white;
  font-weight: 600;
}
`
