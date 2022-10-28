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

@media (min-width: 1024px) {
  :hover {
    background-color: rgb(124, 115, 230);
  }
}
`

export const Image = styled.img`
  width: 50%;
  border-radius: 100px;
  justify-self: center;
  cursor: pointer;
  transform: rotate(120deg);
  animation: rotate-planet 10s linear infinite;
    &:hover {
      transform: scale(1.1);
    }
    @keyframes rotate-planet
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
  
`