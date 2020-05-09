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
  border-radius: 5px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;

  :hover{
    transform: scale(105%);
  }
`

export const OptionButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  background: rgb(236, 115, 3);
  color: white;
  cursor: pointer;
  font-size: 30px;

  :hover{
    transform: scale(102%);
  }
`