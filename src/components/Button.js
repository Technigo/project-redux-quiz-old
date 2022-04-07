import styled from "styled-components";

const Button = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  border: solid ${(props) => props ? props.border : '#000'} 3px;
 
  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
`;

export default Button;