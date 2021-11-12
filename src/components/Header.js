import React from 'react';
import styled from 'styled-components';

import { StyledLink } from './StyledButton';

const StyledHeader = styled.header`
  background-color: #90620e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledLink to='/'>
          <p>Home</p>
        </StyledLink>

        <StyledLink to='/quiz'>
          <p>Quiz</p>
        </StyledLink>
      </StyledHeaderLeft>

      <StyledLink to='/about'>
        <p>About</p>
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
