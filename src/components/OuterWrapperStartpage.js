import React from 'react';
import styled from 'styled-components';

export const OuterWrapperStartpage = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
    background-color: pink;
    width: 100vw;
    border: solid 3px blue;
`

  return (
    <OuterWrapper>
      {children}
    </OuterWrapper>
  );
}