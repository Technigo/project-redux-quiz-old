import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: pink;
height: 100px;
position:absolute;
left:0;
bottom:0;
right:0;
text-align:center;
`;

export const Footer = () => {
  return (
    <div>
      <Container>
         Footer här
      </Container>
    </div>
  )
}