import React from 'react';
import styled from 'styled-components';

export const OuterWrapperStartpage = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
  background: repeating-radial-gradient(
    circle,
    #f6ba52,
    #f6ba52 10px,
    #ffd180 10px,
    #ffd180 20px
  );
    width: 100vw;
    height: auto;
`

  return (
    <OuterWrapper>
      {children}
    </OuterWrapper>
  );
}