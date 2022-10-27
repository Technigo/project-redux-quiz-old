import styled from 'styled-components';
import { NavButtonsStyles } from './NavButtonStyle';
import { InnerWrapper } from './GlobalStyles';

export const SummaryContainer = styled(InnerWrapper)`
margin: 15%; 
h1{
    margin: 30px auto 0;
    font-size: 18px;
}

img{
    margin-top: 50px;
    width: 100%;
}

@media (min-width: 600px) and (max-width: 1023px) {

    img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}
    h1{
    margin: 0 auto;
    font-size: 20px;
}
  }

  @media (min-width: 1024px) {
    padding: 20px 30px;

    img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}
    h1{
        margin: 20px auto 0;
    font-size: 25px;
}
  }
`;

export const SummaryScore = styled.h3`
background-color: rgba(202, 224, 255);
width: 100%;
padding: 10px 0;
margin: 20px 0;
font-size: 12px;

@media (min-width: 600px) and (max-width: 1023px) {
    padding: 10px 0;
  }

  @media (min-width: 1024px) {
    padding: 10px 0;
  }
`;

export const RestartButton = styled(NavButtonsStyles)`
margin: 20px auto 20px;
width: 120px;
font-size: 13px;
padding: 5px;
font-family: 'Roboto Mono', monospace;

@media (min-width: 600px) and (max-width: 1023px) {
    width: 120px;
}

@media (min-width: 1024px) {
    width: 120px;
}
`;
