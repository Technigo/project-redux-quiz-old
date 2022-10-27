import styled from 'styled-components';
import { NavButtonsStyles } from './NavButtonStyles';
import { InnerWrapper } from './GlobaStyles';

export const SummaryContainer = styled(InnerWrapper)`
margin: 15%; 
h1{
    margin: 5% auto;
    font-size: 30px;
}
`;

export const SummaryScore = styled.h3`
background-color: rgba(202, 224, 255);
width: 100%;
padding: 15px 0;
margin: 2% 0;
`;

export const RestartButton = styled(NavButtonsStyles)`
margin: 10% auto;
width: 120px;
padding: 15px;
font-family: 'Roboto Mono', monospace;
`;
