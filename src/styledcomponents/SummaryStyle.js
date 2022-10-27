import styled from 'styled-components';
import { NavButtonsStyles } from './NavButtonStyles';
import { InnerWrapper } from './GlobaStyles';

export const SummaryContainer = styled(InnerWrapper)`
h1{
    margin: 5% auto;
}
`;

export const SummaryScore = styled.h3``;

export const RestartButton = styled(NavButtonsStyles)`
padding: 10px;
width: 100px;
margin: 5% auto;
`;
