import React from 'react';
import styled from 'styled-components';

export const OuterWrapperStartpage = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
  background: repeating-radial-gradient(
    circle,
    #ffd180,
    #ffd180 10px,
    #f6ba52 10px, 
    #f6ba52 25px
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