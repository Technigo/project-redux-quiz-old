import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1>All about the 70s!</h1>
    </HeaderWrapper>
  );
};

// Styling of header
export const HeaderWrapper = styled.header`
  top: 30%;
  left: 30%;
  height: 20vh;
  background-color: #F26A3A;
  border: 15px dotted #A5D8C5;
  padding: 5px 40px 5px 20px;
  text-align: center;
  font-size: 30px;
`