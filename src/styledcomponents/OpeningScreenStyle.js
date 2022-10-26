import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #c6b3b3;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 600px) and (max-width: 1023px){
 
  }

  @media (min-width: 1024px){
    
  }
`

export const TextContainer = styled.div`
margin: 40% auto 0 auto;

p{
    font-size: 18px;
}
`

export const LinkContainer = styled(Link)`
button{
    padding: 10px 15px;
    background-color: #ffffff;
    border: none;
    font-family: 'Poppins', sans-serif;
}


`