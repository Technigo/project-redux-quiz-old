import styled from 'styled-components'

export const BigButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  height: 70px;
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;
  font-size: 38px;
  z-index: 2;

  :hover{
    transform: scale(125%);
  }

  @media (max-width: 500px) {
    font-size: 17px;
    width: 100px;
    height: 40px;
    margin-top: 10px;
  }
`

export const SmallButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 100px;
  height: 35px;
  border-radius: 10px;
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

  @media (max-width: 500px) {
    width: 90px;
    font-size: 14px;
    height: 25px;
    border-radius: 7px;
    border: solid 2px white;
  }
`

export const OptionButton = styled.button`
  all: unset;
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;
  text-transform: uppercase;
  text-align: center;
  background: rgb(236, 115, 3);
  color: white;
  cursor: pointer;
  font-size: 30px;
  transition: background ease 0.5s;

  :disabled{
    background: ${(props) => (props.background ? props.background : 'rgba(236, 115, 3, 0.5)')};
    cursor: auto;

    :hover{
      transform: none;
    }

    &&.correct{
      background: green;
    }
  }

  :hover{
    transform: scale(102%);
  }

  @media (max-width: 800px) {
    font-size: 24px;
    padding: 2rem 0;
  }

  @media (max-width: 500px) {
    font-size: 17px;
    border-radius: 7px;
    padding: 15px;
  }
`

export const SummaryButton = styled.button`
  all: unset;
  text-transform: uppercase;
  text-align: center;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  background: rgb(246, 188, 0);
  color: white;
  cursor: pointer;
  margin-top: 20px;

  :hover{
    transform: scale(105%);
  }

  @media (max-width: 800px) {
    height: 45px;
    margin: 35px 0;
  }
`