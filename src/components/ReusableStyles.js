import styled from 'styled-components/macro'

export const StyledButton = styled.button`
height: 5rem;
background-color: rgba(124, 115, 230, 0.75);
font-size: 1rem;
border-radius: 20px;
border: none;
cursor: pointer; 
color: var(--white-color);

p {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
@media (max-width: 667px) {
    p {
      font-size: 16px;
    }
      height: 4rem;
  }

@media (min-width: 1024px) {
  :hover {
    background-color: rgb(124, 115, 230);
  }
}
`

export const Image = styled.img`
  width: 10rem;
  border-radius: 100px;
  justify-self: center;
  cursor: pointer;
  
`