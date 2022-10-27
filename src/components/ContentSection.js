import React from 'react';
import styled from 'styled-components/macro';

export const ContentSection = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
    background-color: pink;
    width: 100vw;
    height: 100vh;
`

  return (
    <OuterWrapper>
      {children}
    </OuterWrapper>
  );
}