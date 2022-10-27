import styled from 'styled-components';
import { InnerWrapper } from './GlobaStyles';

export const OpeningInnerWrapper = styled(InnerWrapper)`
align-items: center;
border-radius: 20px;
width: 70vw;
height: 40vh;
margin-top: 30%;


h1{
    font-size: 20px;
}

p{
    font-size: 16px;
    margin-top: 2%;
    margin-bottom: 20%;
}

@media (min-width: 600px) and (max-width: 1023px) {
    width: 60vw;

    h1{
        font-size: 25px;
    }
    
    p{
        font-size: 18px;
        margin-top: 2%;
        margin-bottom: 20%;
    }
}

@media (min-width: 1024px) {
    width: 40vw;
    margin-top: 5%;

    h1{
        font-size: 40px;
    }
    
    p{
        font-size: 21px;
        margin-top: 2%;
        margin-bottom: 20%;
    }
  }
`