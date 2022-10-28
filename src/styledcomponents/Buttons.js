import styled from 'styled-components';

export const ButtonWrap = styled.a`
display: flex;
justify-content: center;
text-decoration: none;
color: white;
font-weight: 600;
`

export const StyledButton = styled.button`
border: none; 
border-radius: 10px;
margin-top: 20px;
width: auto;
height: 40px;
padding: 0 1.5rem;
font-size: 1rem;
background: hotpink;
color: white;
font-weight: 600;
&:hover {
  background-color: MediumVioletRed;
  }
`
