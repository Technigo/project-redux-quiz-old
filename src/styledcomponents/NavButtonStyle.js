import styled from 'styled-components';

export const CurrentQuestionStyles = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-top: 10%;
`

export const NavButtonsStyles = styled.button`
  width: 100px;
  padding: 5px;
  font-size: 15px;
  background-color: #CAE0FF;
  border: none;
  border-radius: 20px;
  font-family: 'Roboto Mono', monospace;
  margin: 5px 0;
  text-decoration: none;

  @media (min-width: 600px) and (max-width: 1023px) {
    padding: 10px;
}

@media (min-width: 1024px){
  padding: 15px;
}
`