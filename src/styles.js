import styled from "styled-components";

export const StyledButton1 = styled.p`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${props => props.right 
      ? "green" 
      : props.wrong
      ? "red"
      : "grey"
    };
`