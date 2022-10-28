import React from 'react';
import styled from 'styled-components';

export const OuterWrapperStartpage = (props) => {
  const { children } = props;

  const OuterWrapper = styled.div`
    background-color: #A27DA7;
    width: 100vw;
    height: auto;
`

  return (
    <OuterWrapper>
      {children}
    </OuterWrapper>
  );
}