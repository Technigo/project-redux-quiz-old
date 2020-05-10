import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: ${(props) => props.color};
  -webkit-transition: color .3s ease;
  -o-transition: color .3s ease;
  transition: color .3s ease;
  margin-top: 5px;

  @media (max-width: 500px) {
    font-size: 12px;
    font-style: italic;
  }
`

export const TimeIsUp = ({ color }) => {
  return (
    <>
      <Text color={color}>You're too slow! Click next for another question, loser.</Text>
    </>
  )
}