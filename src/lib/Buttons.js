import styled from 'styled-components'

export const BigButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  height: 70px;
  border-radius: 10px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;
  font-size: 38px;
  z-index: 2;

  :hover{
    transform: scale(125%);
  }
`

export const SmallButton = styled.button`
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

  :disabled{
    background: rgba(246, 188, 0, 0.5);
    cursor: auto;

    :hover{
      transform: none;
    }
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

  :disabled{
    background: rgba(236, 115, 3, 0.5);
    cursor: auto;

    :hover{
      transform: none;
    }
  }

  :hover{
    transform: scale(102%);
  }
`