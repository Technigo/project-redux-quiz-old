import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { CurrentQuestion } from './CurrentQuestion'
import { useHistory } from 'react-router'

const SiteContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aquamarine;
  color: black;
`

const StartPage = () => {
  /* const [start, setStart] = useState(false) */
  const history = useHistory()

  return (
    <>
      {/* {start && <CurrentQuestion />} */}
      <SiteContainerDiv>
        Hello friends
        <button type="button" onClick={() => history.push('/game')}>Start</button>
      </SiteContainerDiv>
    </>
  )
}

export default StartPage
