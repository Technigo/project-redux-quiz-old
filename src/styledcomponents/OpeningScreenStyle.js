import styled from 'styled-components';
import { InnerWrapper } from './GlobalStyles';

export const OpeningInnerWrapper = styled(InnerWrapper)`
  align-items: center;
  border-radius: 20px;
  /* height: 40vh; */

  h2 {
    font-size: 45px;
  }

  p {
    font-size: 16px;
    margin-top: 2%;
    margin-bottom: 20%;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    padding: 50px;
  }

  @media (min-width: 1024px) {
    padding: 50px;
  }
`;
