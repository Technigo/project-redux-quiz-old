import styled from 'styled-components'
import React from 'react'
import { useSelector } from 'react-redux'

const Container = styled.div`
  width: 50%;
  margin: 20px auto;
  background-color: rgb(240, 240, 245);
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 100%;
    align-self: flex-end;
    margin: 10px auto;
  }
`

const Inner = styled.div`
  height: 10px;
  border-radius: 10px;
  background-color: rgb(246, 188, 0);
  width: ${(props) => props.width}%;
  -webkit-transition: width .3s linear;
  -o-transition: width .3s linear;
  transition: width .3s linear;
`

export const Progressbar = () => {
  const deciseconds = useSelector((state) => state.quiz.deciseconds)

  return (
    <Container>
      <Inner width={deciseconds} />
    </Container>
  )
}