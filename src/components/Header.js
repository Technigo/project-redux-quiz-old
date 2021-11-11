import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { App } from 'App';

const StyledHeader = styled.header`
  background-color: #52725a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to='/'>
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link to='/quiz'>
          <p>Quiz</p>
        </Link>
      </div>
      <div>
        <Link to='/about'>
          <p>About</p>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
