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
  background-color: #8A8635;
  border: 10px dotted #F6C6EA;
  padding: 5px 20px 5px 20px;
  text-align: center;
`
