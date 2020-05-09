import styled from 'styled-components'

export const StartButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;
  font-size: 28px;
  z-index: 2;

  :hover{
    transform: scale(125%);
  }
`

export const Button = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;

  :hover{
    transform: scale(125%);
  }
`

export const OptionButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  background: rgb(236, 115, 3);
  color: white;
  cursor: pointer;
  height: 100px;
  min-width: 100%;
  font-size: 30px;

  li{
    width: 100%;
  }
`