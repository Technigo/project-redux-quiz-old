import React from 'react';
import styled from 'styled-components/macro';

export const ContentSection = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
    background-color: grey;
    width: 100vw;
    height: 100vh;
`
  const InnerWrapper = styled.div`
    background-color: pink;
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
`

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}