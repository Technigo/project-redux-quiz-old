import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

const SiteContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aquamarine;
  color: black;
`

const StartPage = () => {
  const history = useHistory()

  return (
    <>
      <SiteContainerDiv>
        Hello friends
        <button type="button" onClick={() => history.push('/game')}>Start</button>
      </SiteContainerDiv>
    </>
  )
}

export default StartPage
