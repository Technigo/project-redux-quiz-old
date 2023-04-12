import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #F8F8F8;   
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export const Footer = () => {
  return (
    <div>
      <Container>
        hej footer
      </Container>
    </div>
  )
}